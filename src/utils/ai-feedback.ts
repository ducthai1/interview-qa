import type { AIConfig } from '../types/question'
import type { Question } from '../types/question'
import { resetUsageIfNeeded, incrementUsage, saveAIConfig } from './ai-config'

export interface AIFeedbackResult {
  score: number        // 1-10
  feedback: string
  suggestions: string[]
}

function buildPrompt(question: Question, userAnswer: string): string {
  const modelAnswer = question.solutionCode
    ? `Model solution code:\n${question.solutionCode}`
    : `Model answer: ${String(question.answer)}`

  const codeSection = question.code ? `\nCode provided in question:\n${question.code}` : ''

  return `You are a senior frontend interviewer. Review this answer to the question below.

Question: ${question.question}${codeSection}
${modelAnswer}

User's answer: ${userAnswer}

Rate the answer 1-10 and give specific improvement suggestions.
Respond ONLY with valid JSON in this exact format:
{
  "score": <number 1-10>,
  "feedback": "<1-2 sentence overall assessment>",
  "suggestions": ["<suggestion 1>", "<suggestion 2>", "<suggestion 3>"]
}`
}

function parseAIResponse(text: string): AIFeedbackResult {
  // Strip markdown code fences if present
  const cleaned = text.replace(/```(?:json)?\n?/g, '').trim()
  // Find JSON object
  const match = cleaned.match(/\{[\s\S]*\}/)
  if (!match) throw new Error('No JSON found in AI response')

  const parsed = JSON.parse(match[0]) as {
    score?: unknown
    feedback?: unknown
    suggestions?: unknown
  }

  const score = typeof parsed.score === 'number' ? Math.min(10, Math.max(1, parsed.score)) : 5
  const feedback = typeof parsed.feedback === 'string' ? parsed.feedback : 'No feedback provided.'
  const suggestions = Array.isArray(parsed.suggestions)
    ? (parsed.suggestions as unknown[]).filter((s): s is string => typeof s === 'string')
    : []

  return { score, feedback, suggestions }
}

async function callGemini(prompt: string, apiKey: string): Promise<AIFeedbackResult> {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { temperature: 0.3, maxOutputTokens: 1024 },
    }),
  })
  if (!res.ok) {
    const err = await res.json().catch(() => ({})) as { error?: { message?: string } }
    throw new Error(err?.error?.message ?? `Gemini error ${res.status}`)
  }
  const data = await res.json() as {
    candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }>
  }
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text ?? ''
  return parseAIResponse(text)
}

async function callOpenAI(prompt: string, apiKey: string): Promise<AIFeedbackResult> {
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.3,
      max_tokens: 1024,
    }),
  })
  if (!res.ok) {
    const err = await res.json().catch(() => ({})) as { error?: { message?: string } }
    throw new Error(err?.error?.message ?? `OpenAI error ${res.status}`)
  }
  const data = await res.json() as {
    choices?: Array<{ message?: { content?: string } }>
  }
  const text = data.choices?.[0]?.message?.content ?? ''
  return parseAIResponse(text)
}

async function callAnthropic(prompt: string, apiKey: string): Promise<AIFeedbackResult> {
  // Anthropic direct browser calls hit CORS — route through backend proxy
  const res = await fetch('/api/ai-proxy', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      provider: 'anthropic',
      apiKey,
      prompt,
    }),
  })
  if (!res.ok) {
    const err = await res.json().catch(() => ({})) as { error?: string }
    throw new Error(err?.error ?? `Proxy error ${res.status}`)
  }
  const data = await res.json() as { text?: string }
  return parseAIResponse(data.text ?? '')
}

export async function getAIFeedback(
  question: Question,
  userAnswer: string,
  config: AIConfig,
): Promise<{ result: AIFeedbackResult; updatedConfig: AIConfig }> {
  // Refresh daily usage
  let cfg = resetUsageIfNeeded(config)

  if (cfg.provider === 'none' || !cfg.apiKey) {
    throw new Error('no-key')
  }
  if (cfg.dailyUsage >= cfg.dailyLimit) {
    throw new Error('rate-limited')
  }

  const prompt = buildPrompt(question, userAnswer)

  let result: AIFeedbackResult
  if (cfg.provider === 'gemini') {
    result = await callGemini(prompt, cfg.apiKey)
  } else if (cfg.provider === 'openai') {
    result = await callOpenAI(prompt, cfg.apiKey)
  } else if (cfg.provider === 'anthropic') {
    result = await callAnthropic(prompt, cfg.apiKey)
  } else {
    throw new Error('Unknown provider')
  }

  // Increment usage and persist
  cfg = incrementUsage(cfg)
  saveAIConfig(cfg)

  return { result, updatedConfig: cfg }
}

/** Minimal test prompt to verify API connectivity */
export async function testAIConnection(config: AIConfig): Promise<void> {
  const testPrompt = 'Reply with only valid JSON: {"score":7,"feedback":"test","suggestions":[]}'

  if (config.provider === 'gemini') {
    await callGemini(testPrompt, config.apiKey)
  } else if (config.provider === 'openai') {
    await callOpenAI(testPrompt, config.apiKey)
  } else if (config.provider === 'anthropic') {
    await callAnthropic(testPrompt, config.apiKey)
  } else {
    throw new Error('No provider selected')
  }
}
