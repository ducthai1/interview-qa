interface CodeBlockProps {
  code: string
  language?: string
}

/* Simple code display block with syntax highlighting via monospace */
export function CodeBlock({ code }: CodeBlockProps) {
  return (
    <pre className="overflow-x-auto rounded-lg bg-[#1e293b] p-4 text-sm leading-relaxed text-[#e2e8f0] dark:bg-[#0f172a]">
      <code>{code}</code>
    </pre>
  )
}
