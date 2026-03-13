import type { QuestionTranslationMap } from '../types'

export const brseJp: QuestionTranslationMap = {
  'brse-cm-001': {
    question: "日本のクライアントとの初回ミーティングで、BrSEが最も心がけるべきことはどれですか？",
    options: [
    "すぐに技術的な話を始める",
    "丁寧な自己紹介と会社紹介 → クライアントの課題やニーズを傾聴する → 理解した内容を確認する — 「聞く姿勢」が信頼の第一歩",
    "自社の実績を長時間プレゼンする",
    "見積もりをすぐに提示する"
    ],
    answer: 1,
    explanation: "初回ミーティングのポイント：①名刺交換（マナーを守る）、②会社紹介は簡潔に（5分以内）、③クライアントの話を聞くことに80%の時間を使う、④メモを取りながら聞く（真剣さが伝わる）、⑤理解したことを復唱確認する、⑥次のアクションを明確にして終わる。日本の「まず関係構築」文化を尊重します。",
  },
  'brse-cm-002': {
    question: "クライアントからの要望は、すべて「はい、できます」と答えるのがよいサービスです。",
    answer: "偽",
    explanation: "何でも「はい」と言うのは危険です。「できない」「難しい」ことを正直に伝えることが長期的な信頼に繋がります。正しいアプローチ：①まず要望を正確に理解する、②実現可能性を社内で確認する、③できない場合は代替案を提示する、④できる場合は条件（コスト、時間）を明確にする。「できます」と言って後から「できませんでした」が最悪のパターンです。",
  },
  'brse-cm-003': {
    question: "「期待値管理（Expectation Management）」とは何ですか？",
    options: [
    "クライアントに高い期待を持たせること",
    "クライアントの期待と実際の成果物の間にギャップが生じないよう、現実的な期待値を設定し、進捗を透明に共有すること",
    "期待される売上を管理すること",
    "メンバーの目標管理のこと"
    ],
    answer: 1,
    explanation: "期待値管理のポイント：①最初に「できること/できないこと」を明確にする、②コミットしたことは必ず守る、③進捗を定期的に共有し、ギャップがあれば早期に報告、④「Under-promise, Over-deliver」（控えめに約束して、それ以上を届ける）が理想、⑤サプライズは「良いサプライズ」のみ（悪いサプライズは信頼を破壊する）。",
  },
  'brse-cm-004': {
    question: "クライアントから「前回と同じ問題がまた発生した」と強いクレームを受けた場合、BrSEの対応として最も適切なものはどれですか？",
    options: [
    "「調査します」とだけ返答する",
    "①即座に謝罪 ②24時間以内に原因特定と暫定対策を実施 ③根本原因分析（5 Whys）④恒久対策と再発防止策を書面で提出 ⑤対策の実施状況をフォローアップ報告 — 再発は信頼への深刻なダメージ",
    "「チームのせいです」と説明する",
    "対応を後日にする"
    ],
    answer: 1,
    explanation: "再発問題は信頼を大きく損なう最悪のケースです。なぜ再発したか（前回の対策が不十分だった）の根本原因を徹底分析し、仕組みで防ぐ対策（プロセス改善、自動テスト追加等）を提示することが重要です。個人の注意力に頼る対策は再再発を起こします。",
  },
  'brse-cm-005': {
    question: "クライアントの満足度を継続的に向上させるための「CX（顧客体験）」の観点で、BrSEが通常のプロジェクト管理以外にできることは何ですか？",
    options: [
    "何もしない — プロジェクト完了が唯一の目標",
    "①レスポンス速度の改善（質問への回答時間の短縮）②先読み提案（問題が起きる前に改善提案）③定期的な「ふりかえり」でフィードバック収集 ④小さな成功体験の積み重ね ⑤担当者との個人的な信頼関係構築",
    "値引きを提案する",
    "頻繁に営業訪問する"
    ],
    answer: 1,
    explanation: "CXの向上は「期待を超える体験」の積み重ねです。①レスポンス速度（質問への24時間以内回答は信頼感を高める）、②先読み（「来月のリリースに向けてこの準備を進めておきます」）、③ふりかえり（「何か改善できることはありますか？」と定期的に聞く）、④担当者との関係（仕事だけでなく、適度な雑談や気配り）。",
  },
  'brse-cm-006': {
    question: "クライアントへの月次報告会のアジェンダと報告資料の構成を設計してください。",
    answer: "月次報告会（60分）:\\n\\nアジェンダ:\\n1. 前月の振り返り（15分）:\\n   - 完了したマイルストーン/機能一覧\\n   - 品質サマリー（バグ数、テスト通過率）\\n   - 課題と解決状況\\n\\n2. 当月の計画（10分）:\\n   - 今月のマイルストーン/目標\\n   - リソース計画\\n   - 依存事項（クライアント側の対応事項）\\n\\n3. リスク・課題（10分）:\\n   - TOP3リスクとその対策状況\\n   - 新規課題の報告\\n   - エスカレーション事項\\n\\n4. 改善活動（10分）:\\n   - 前月の改善施策の効果報告\\n   - 今月の改善提案\\n\\n5. Q&A・ディスカッション（15分）:\\n   - クライアントからのフィードバック\\n   - 次月に向けた指示・要望\\n\\n報告資料:\\n- 全体で10-15スライド（簡潔に）\\n- 数字とグラフを多用（テキストの羅列を避ける）\\n- 緑/黄/赤の信号形式で状態を可視化\\n- 日本語で作成、専門用語には補足を付ける",
    explanation: "クライアントの時間は貴重です。60分で効率的に情報共有するために、「ビジュアル」「数字」「改善」の3つを重視します。特に改善活動の報告は、「問題を解決できるチーム」という印象を与え、契約更新に直結します。",
  },
  'brse-cm-007': {
    question: "クライアントが別のオフショアベンダーとの比較を持ち出して値下げを要求してきた場合、BrSEの最善の対応はどれですか？",
    options: [
    "即座に値下げに応じる",
    "自社の強み（品質実績、BrSE体制、ドメイン知識、チームの安定性）を具体的データで提示し、TCO（Total Cost of Ownership）の観点からベンダー変更のリスクとコストを説明した上で、付加価値提案で差別化する",
    "競合の悪口を言う",
    "値下げしないなら契約終了と突き放す"
    ],
    answer: 1,
    explanation: "価格競争だけでは持続不可能です。差別化ポイント：①品質実績（バグ率、顧客満足度のデータ）、②ベンダー変更コスト（知識移管、立ち上げ期間、品質リスク）、③チームの安定性（離職率、平均勤続年数）、④付加価値（改善提案、先読み対応、ドメイン知識）。「安い」ではなく「総合的に価値がある」を示すことが重要です。",
  },
  'brse-cm-008': {
    question: "クライアントとの長期関係を維持するためのKPIとして最も重要な指標はどれですか？",
    options: [
    "プロジェクト数のみ",
    "Net Promoter Score（NPS）— クライアントが自社を他者に推薦する度合い、契約更新率（リピート率）、アカウント成長率（取引規模の拡大）の3つを総合的に管理",
    "開発者の数",
    "営業訪問の回数"
    ],
    answer: 1,
    explanation: "長期関係のKPI：①NPS（推薦度 — クライアントの満足と忠誠の指標）、②契約更新率（継続取引の割合、90%以上を目標）、③アカウント成長率（同じクライアントからの取引拡大 — 新規営業より効率的）。この3つが好循環を形成：高品質→高NPS→契約更新→取引拡大→さらなる投資→高品質...",
  },
  'brse-cm-009': {
    question: "リードBrSEとして、主要クライアント3社のアカウント管理戦略を設計してください。各クライアントの関係深化、リスク管理、成長戦略を含めてください。",
    answer: "アカウント管理戦略:\\n\\n1. クライアント分類:\\n- Tier1（最重要）: 年間売上40%以上、5年以上の取引\\n  → 担当: シニアBrSE + リードBrSE直接関与\\n  → 戦略: パートナーシップ深化、新規事業提案、経営層との関係構築\\n\\n- Tier2（重要）: 年間売上25%、3年の取引\\n  → 担当: BrSE\\n  → 戦略: サービス拡大、新技術提案、チーム増員\\n\\n- Tier3（成長中）: 年間売上15%、1年の取引\\n  → 担当: BrSE\\n  → 戦略: 信頼構築、実績作り、取引安定化\\n\\n2. 各クライアントのアクションプラン:\\n\\n[Tier1] DEEP化戦略:\\n- 四半期ごとの戦略ミーティング（経営層レベル）\\n- 年次感謝イベント（チーム訪問、成果発表）\\n- 技術ロードマップの共有と先行投資提案\\n- リスク: 依存度が高い → 他クライアントの成長でリスク分散\\n\\n[Tier2] EXPAND戦略:\\n- 新規プロジェクトの積極的な提案\\n- 別部門への横展開（紹介獲得）\\n- 技術勉強会の共同開催\\n- 目標: 2年以内にTier1へ育成\\n\\n[Tier3] STABILIZE戦略:\\n- 品質実績の蓄積と可視化\\n- 担当者との信頼関係構築（定期訪問）\\n- 小さな成功を積み重ねる\\n- 目標: 1年以内にTier2へ\\n\\n3. ポートフォリオリスク管理:\\n- クライアント集中リスク: Tier1が売上の40%超 → 他クライアント育成\\n- 契約更新3ヶ月前アラート → 更新交渉の準備\\n- 半年ごとのポートフォリオレビュー",
    explanation: "アカウント管理は「プロジェクト管理」の上位概念です。個別プロジェクトの成功だけでなく、クライアントとの長期的な関係構築、取引拡大、リスク分散を戦略的に行います。Tier分類により、限られたリソース（リードBrSEの時間）を最も効果的に配分できます。",
  },
  'brse-est-001': {
    question: "「人月（にんげつ）」とは何ですか？",
    options: [
    "1人が1ヶ月で誕生する人数",
    "1人が1ヶ月（約20営業日）フルタイムで作業する工数の単位 — 例えば「3人月」は1人×3ヶ月、または3人×1ヶ月の作業量",
    "プロジェクトの予算金額",
    "テストの実行回数"
    ],
    answer: 1,
    explanation: "人月は日本のIT業界で最も一般的な工数単位です。1人月 ≈ 20人日 ≈ 160人時間（1日8時間計算）。BrSEは見積もり時に人月で計算し、クライアントに提出します。注意：3人月の作業を3人で1ヶ月は理論上可能ですが、実際は並行作業のロスやコミュニケーションロスで1.2〜1.5倍になることが多い。",
  },
  'brse-est-002': {
    question: "見積もりでは、開発工数だけ見積もれば十分です。管理工数やバッファーは不要です。",
    answer: "偽",
    explanation: "見積もりに含めるべき項目：①開発工数（設計+コーディング+単体テスト）、②管理工数（BrSE工数、進捗管理、報告書作成）、③テスト工数（結合テスト、総合テスト）、④バッファー（リスク対応、全体の10-20%）、⑤環境構築工数、⑥ドキュメント作成工数。開発工数だけの見積もりは赤字プロジェクトの原因です。",
  },
  'brse-est-003': {
    question: "見積もりの「バッファー」とは何ですか？",
    options: [
    "不要なコスト",
    "予期しないリスクや課題に対応するために追加する余裕工数 — 通常、全体工数の10-20%を確保する",
    "利益率のこと",
    "残業代のこと"
    ],
    answer: 1,
    explanation: "バッファーは保険です。リスクの種類：①仕様変更リスク（クライアント要求変更）、②技術リスク（予想外の技術課題）、③リソースリスク（メンバーの離脱・病欠）、④コミュニケーションリスク（認識齟齬による手戻り）。オフショアはバッファーを多めに確保する傾向があります。",
  },
  'brse-est-004': {
    question: "「ファンクションポイント法」とは何ですか？",
    options: [
    "ソースコードの行数で工数を計算する方法",
    "入力・出力・照会・内部ファイル・外部インターフェースの数と複雑度から、システムの規模を客観的に測定する方法 — 開発言語やフレームワークに依存しない",
    "チームメンバーの能力を点数化する方法",
    "会議の回数で工数を見積もる方法"
    ],
    answer: 1,
    explanation: "FP（ファンクションポイント）法の5つの要素：①外部入力（EI）、②外部出力（EO）、③外部照会（EQ）、④内部論理ファイル（ILF）、⑤外部インターフェースファイル（EIF）。各要素を複雑度（低/中/高）で重み付けしFP値を算出。FP値×生産性係数（人日/FP）=工数。日本のSIerでは広く使われています。",
  },
  'brse-est-005': {
    question: "クライアントから「この見積もりは高すぎる」と言われた場合、BrSEはどう対応すべきですか？",
    options: [
    "即座に金額を下げる",
    "見積もりの根拠（工数の内訳、設計/開発/テストの比率、前提条件）を説明し、スコープ調整や段階的実装などの代替案を提示して交渉する",
    "「これが正しい金額です」と突き返す",
    "競合他社の金額に合わせる"
    ],
    answer: 1,
    explanation: "見積もり交渉のポイント：①内訳の透明性（何にどれだけかかるか可視化）、②前提条件の明確化（仕様確定度、技術難易度）、③代替案の提示（スコープ削減、段階リリース、品質レベル調整）、④類似案件の実績値との比較、⑤「安くする＝何かを削る」ことの説明。根拠なく値引きすると品質低下のリスクが高まります。",
  },
  'brse-est-006': {
    question: "以下の機能の見積もり（人日）を行ってください：「ユーザー管理画面（一覧表示、検索、登録、編集、削除、CSV出力）」",
    answer: "見積もり内訳（人日）:\\n\\n1. 設計工程:\\n- 画面設計: 2.0人日\\n- DB設計（テーブル・インデックス）: 1.0人日\\n- API設計: 1.0人日\\n\\n2. 開発工程:\\n- 一覧表示（ページネーション・ソート）: 2.0人日\\n- 検索機能（複合条件検索）: 1.5人日\\n- 登録機能（バリデーション・確認画面）: 2.0人日\\n- 編集機能（既存データ取得・更新）: 1.5人日\\n- 削除機能（論理削除・確認ダイアログ）: 0.5人日\\n- CSV出力（フォーマット・文字コード対応）: 1.5人日\\n\\n3. テスト工程:\\n- テストケース作成: 1.5人日\\n- 単体テスト: 2.0人日\\n- 結合テスト: 1.5人日\\n\\n4. その他:\\n- コードレビュー: 1.0人日\\n- BrSE管理工数: 1.0人日\\n\\n合計: 20.0人日（≒ 1.0人月）\\nバッファー（15%）: 3.0人日\\n最終見積もり: 23.0人日（≒ 1.15人月）",
    explanation: "見積もりでは「コーディングだけ」で考えがちですが、設計、テスト、レビュー、管理工数を含めると実際の工数は2-3倍になります。機能ごとの細分化により、クライアントへの説明が容易になり、スコープ調整（「CSV出力は Phase 2 に移す」等）も可能になります。",
  },
  'brse-est-007': {
    question: "3点見積もり法（三点見積もり）の計算方法として正しいものはどれですか？",
    options: [
    "（最良値 + 最悪値）/ 2",
    "期待値 = （楽観値 + 4×最可能値 + 悲観値）/ 6 — PERT法に基づき、最可能値に重み4を置いて加重平均を算出する",
    "最良値 × 最悪値 / 最可能値",
    "3人の見積もりの平均値"
    ],
    answer: 1,
    explanation: "3点見積もり（PERT）：O=楽観値（最速ケース）、M=最可能値（通常ケース）、P=悲観値（最悪ケース）。期待値=(O+4M+P)/6、標準偏差=(P-O)/6。例：O=5日、M=8日、P=17日の場合、期待値=(5+32+17)/6=9日。単一値の見積もりよりもリスクを反映した現実的な数値が得られます。",
  },
  'brse-est-008': {
    question: "新規クライアントから初めてRFP（提案依頼書）を受領しました。概算見積もりを作成するプロセスを設計してください。精度が低い段階でのリスク対策も含めてください。",
    answer: "概算見積もりプロセス:\\n\\n1. RFP分析（2-3日）:\\n- RFPの精読と要件の洗い出し\\n- 不明点リスト作成→クライアントへ質問\\n- 類似案件の過去実績データ参照\\n- 前提条件の整理（技術スタック、環境、制約事項）\\n\\n2. 概算見積もり作成:\\n- 機能一覧の作成（大機能→中機能レベル）\\n- 各機能の規模感をS/M/L/XLで分類\\n- 類似機能の過去工数実績から概算（FP法またはアナロジー法）\\n- テスト・管理・環境構築の工数を追加（開発の40-60%）\\n- 不確実性バッファ: 概算段階では±30-50%の幅を提示\\n\\n3. リスク対策（精度が低い段階）:\\n- 見積もりは「幅」で提示（例：80-120人月）→仕様確定後に確定見積もりへ\\n- 前提条件を明記（「仕様変更が発生した場合は再見積もり」）\\n- 段階見積もり: Phase 1（要件定義）確定後にPhase 2以降を再見積もり\\n- リスク項目リスト付き（技術難易度、外部連携、データ移行等）\\n- 見積もりの有効期限を設定（例：30日間有効）\\n\\n4. 提案書構成:\\n- プロジェクト概要と理解\\n- 開発アプローチ（手法、チーム体制、コミュニケーション計画）\\n- 見積もり（内訳付き）+ 前提条件\\n- スケジュール案\\n- リスクと対策\\n- 会社実績・類似案件",
    explanation: "初回見積もりは情報が不十分な中で行うため、精度の限界を正直に伝えることが重要です。「幅」で提示することで、後から「最初の見積もりと違う」というトラブルを防ぎます。段階見積もり方式により、仕様が明確になるにつれて精度を上げていくアプローチが推奨されます。",
  },
  'brse-est-009': {
    question: "リードBrSEとして、見積もり精度を組織的に向上させるための取り組みとして最も効果的なものはどれですか？",
    options: [
    "全案件で同じ見積もりテンプレートを使う",
    "過去案件の「見積もりvs実績」データを蓄積・分析し、見積もり係数（生産性指標）をプロジェクト種別ごとに算出・更新する — データドリブンな見積もり改善サイクル",
    "見積もり担当を1人に固定する",
    "常にクライアントの予算に合わせて見積もる"
    ],
    answer: 1,
    explanation: "見積もり精度向上のPDCAサイクル：P(計画)見積もり作成→D(実行)プロジェクト実施→C(確認)実績データと見積もりの差異分析→A(改善)見積もり係数の更新。例：「ECサイトのCRUD画面は平均2.5人日/画面」というデータがあれば、次の見積もりは根拠が強くなります。この蓄積が組織の見積もり力になります。",
  },
  'brse-est-010': {
    question: "What is the \"Cone of Uncertainty\" in software estimation?",
    options: [
    "A graphic showing how uncertainty increases as a project nears completion",
    "A graphic showing how estimation accuracy improves over time as more project details are known",
    "A list of things that can go wrong in a project",
    "A method for calculating server costs",
    ""
    ],
    answer: 1,
    explanation: "At the start of a project, the range of possible outcomes is huge. As research and development progress, the \"cone\" narrows, and estimates become more precise. BrSEs should never give \"fixed\" estimates based on vague requirements.",
  },
  'brse-est-011': {
    question: "How do you handle \"Padding\" in estimations from your development team?",
    options: [
    "Cut all estimates in half to remove the padding",
    "Understand the reasons (risks",
    "uncertainty",
    "lack of skill) and negotiate a transparent buffer rather than hidden padding",
    "Add even more padding yourself just in case",
    "Complain to the client about the team",
    ""
    ],
    answer: 1,
    explanation: "Padding is often a response to fear or uncertainty. A good BrSE works with the team to identify specific risks and includes them in a visible \"Risk Buffer\" that is shared with the client.",
  },
  'brse-est-012': {
    question: "What is \"Three-Point Estimation\" (PERT)?",
    options: [
    "Getting estimates from three different people",
    "Calculating an estimate based on Optimistic (O)",
    "Most Likely (M)",
    "and Pessimistic (P) scenarios",
    "Estimating the time",
    "cost",
    "and quality",
    "A method using three different programming languages",
    ""
    ],
    answer: 1,
    explanation: "The PERT formula (O + 4M + P) / 6 provides a weighted average that accounts for both the \"best case\" and \"worst case\" scenarios, offering a more realistic estimate than a single number.",
  },
  'brse-est-013': {
    question: "What is \"Parkinson\\'s Law\" and how does it affect project deadlines?",
    options: [
    "A law about database index performance",
    "The principle that \"work expands so as to fill the time available for its completion\"",
    "A rule about the number of bugs per kiloline of code",
    "The law of diminishing returns in software testing",
    ""
    ],
    answer: 1,
    explanation: "If you give a team 1 month for a 2-week task, they will likely take the full month. BrSEs must set realistic but challenging deadlines to maintain momentum while avoiding burnout.",
  },
  'brse-est-014': {
    question: "Analogous estimation (using historical data from similar projects) is generally more accurate than Bottom-Up estimation.",
    answer: "偽",
    explanation: "Bottom-Up estimation (breaking tasks down to the smallest level) is more time-consuming but typically much more accurate than Analogous estimation, which is high-level and relies on similarity.",
  },
  'brse-est-015': {
    question: "What is \"Function Point Analysis\" (FPA)?",
    options: [
    "A way to count the number of functions in a file",
    "A standardized method for measuring the functional size of software from a user\\'s perspective",
    "independent of technology",
    "A method for estimating server RAM usage",
    "A type of performance testing",
    ""
    ],
    answer: 1,
    explanation: "FPA focuses on \"what\" the software does (Inputs, Outputs, Inquiries, Files, Interfaces). It is highly respected by Japanese clients as a more objective measure than \"Story Points\" or \"Lines of Code\".",
  },
  'brse-est-016': {
    question: "What is the \"Wideband Delphi\" technique?",
    options: [
    "A high-speed internet connection",
    "A consensus-based estimation technique where a panel of experts provides anonymous estimates and then discusses them in several rounds until they converge",
    "A method for designing database tables",
    "A software used for project scheduling",
    ""
    ],
    answer: 1,
    explanation: "Wideband Delphi avoids \"Groupthink\" or being intimidated by a loud senior developer. Each person thinks independently before sharing, leading to more robust estimates.",
  },
  'brse-est-017': {
    question: "Why is the unit \"Person-Month\" (Man-Month) often criticized in project management?",
    options: [
    "Because it\\'s too expensive",
    "Because it assumes that people and months are interchangeable (e.g.",
    "that 10 people can do a 10-month task in 1 month)",
    "which is often false due to communication overhead",
    "Because it\\'s an old-fashioned term",
    "Because it doesn\\'t include weekends",
    ""
    ],
    answer: 1,
    explanation: "Brooks\\' Law states: \"Adding manpower to a late software project makes it later.\" Communication overhead grows exponentially as more people are added, meaning \"Person-Months\" can be misleading.",
  },
  'brse-est-018': {
    question: "What is \"Critical Chain Project Management\" (CCPM) and its approach to buffers?",
    options: [
    "Putting a buffer at the end of every task",
    "Moving individual task buffers to the end of a sequence of tasks (Project Buffer) or where a non-critical chain joins the critical chain (Feeding Buffer)",
    "Removing all buffers to work faster",
    "A specific type of Gantt chart",
    ""
    ],
    answer: 1,
    explanation: "By pooling buffers, CCPM protects the whole project against uncertainty more effectively than individual task \"padding",
  },
  'brse-ik-001': {
    question: "「フロントエンド」と「バックエンド」の違いは何ですか？",
    options: [
    "フロントエンドは会社の入口、バックエンドは裏口",
    "フロントエンドはユーザーが見て操作する画面側（HTML/CSS/JavaScript）、バックエンドはサーバー側の処理（API、DB、ビジネスロジック）",
    "フロントエンドは設計、バックエンドは実装",
    "フロントエンドは新機能、バックエンドは旧機能"
    ],
    answer: 1,
    explanation: "フロントエンド（FE）: ユーザーインターフェース、ブラウザで動作、技術: HTML/CSS/JS、React/Vue/Angular。バックエンド（BE）: サーバーサイド処理、API提供、データベース操作、技術: Java/PHP/Python/Node.js。BrSEは仕様伝達時にFE/BEの役割分担を明確にする必要があります。",
  },
  'brse-ik-002': {
    question: "Git（ギット）とは何ですか？BrSEの仕事にどう関係しますか？",
    options: [
    "プロジェクト管理ツール",
    "ソースコードのバージョン管理システム — コードの変更履歴を管理し、チーム開発での並行作業を可能にする。BrSEはブランチ戦略やリリース管理を理解する必要がある",
    "テキストエディター",
    "翻訳ツール"
    ],
    answer: 1,
    explanation: "Gitの基本概念：①リポジトリ（コードの保管場所）、②ブランチ（並行開発の分岐）、③コミット（変更の記録）、④マージ（ブランチの統合）、⑤プルリクエスト（レビュー依頼）。BrSEとして：リリースブランチ管理、ブランチ戦略（Git Flow等）の理解、環境ごとのコード管理が必要です。",
  },
  'brse-ik-003': {
    question: "CI/CD（継続的インテグレーション/継続的デリバリー）は、開発者だけが理解すればよく、BrSEには関係ありません。",
    answer: "偽",
    explanation: "CI/CDはBrSEにも重要です。CI（継続的インテグレーション）: コード変更時に自動でビルド・テスト実行 → バグの早期発見。CD（継続的デリバリー）: テスト通過後に自動でステージング/本番反映。BrSEとして：①CIの結果を品質指標として活用、②リリースサイクルの管理、③クライアントへのデプロイ計画の説明。",
  },
  'brse-ik-004': {
    question: "REST APIの設計で使われるHTTPメソッドとその用途の対応として正しいものはどれですか？",
    options: [
    "GET=更新、POST=取得、PUT=削除、DELETE=作成",
    "GET=データ取得、POST=データ作成、PUT=データ更新、DELETE=データ削除",
    "すべてPOSTを使えばよい",
    "メソッドは重要ではなくURLだけ決めればよい"
    ],
    answer: 1,
    explanation: "RESTful API設計の基本：GET（取得、冪等性あり）、POST（作成）、PUT（全体更新）、PATCH（部分更新）、DELETE（削除）。BrSEは仕様書のAPI設計を理解し、開発チームに伝達する必要があります。また、APIのリクエスト/レスポンスのJSON構造を読み解く能力も重要です。",
  },
  'brse-ik-005': {
    question: "「マイクロサービスアーキテクチャ」とは何ですか？BrSEが知っておくべき理由は？",
    options: [
    "小さなチームで開発すること",
    "大きなシステムを独立した小さなサービスに分割して開発・デプロイするアーキテクチャ — BrSEは各サービスの責任範囲とサービス間通信（API）を仕様書で管理する必要がある",
    "無料のオープンソースだけで開発すること",
    "テストを省略して素早く出すこと"
    ],
    answer: 1,
    explanation: "マイクロサービスの特徴：①各サービスが独立してデプロイ可能、②サービス間はAPI（REST/gRPC）で通信、③技術スタックをサービスごとに選択可能、④チームがサービスを「所有」する。BrSEへの影響：仕様書がサービスごとに分かれる、API契約の管理が重要、テストも結合テストの重要性が増す。",
  },
  'brse-ik-006': {
    question: "クラウドサービスの「IaaS」「PaaS」「SaaS」の違いは何ですか？",
    options: [
    "すべて同じクラウドサービス",
    "IaaS（インフラ提供: 仮想サーバー等）、PaaS（プラットフォーム提供: アプリ実行環境）、SaaS（アプリ提供: そのまま使えるソフトウェア）— 責任範囲が異なる",
    "サービスの大きさの違い",
    "価格の違いのみ"
    ],
    answer: 1,
    explanation: "クラウドの3層：①IaaS（AWS EC2等）: サーバー・ネットワークを提供、OS以上は自分で管理 ②PaaS（Heroku、GAE等）: アプリ実行環境を提供、インフラ管理不要 ③SaaS（Salesforce、Google Workspace等）: アプリをそのまま利用。BrSEはクライアントのインフラ環境を理解し、開発チームに環境仕様を伝達する必要があります。",
  },
  'brse-ik-007': {
    question: "日本のクライアントが「セキュリティ対策について報告してください」と要求した場合、BrSEが報告すべき項目はどれですか？",
    options: [
    "「セキュリティは大丈夫です」と回答する",
    "①OWASP Top 10への対策状況 ②認証・認可の仕組み ③データ暗号化（通信: TLS、保存: AES） ④脆弱性スキャン結果 ⑤アクセスログ管理 ⑥セキュリティパッチの適用状況 — 具体的な技術対策を体系的に報告",
    "ウイルスソフトを入れていることだけ報告",
    "パスワードの長さだけ報告"
    ],
    answer: 1,
    explanation: "セキュリティは日本のクライアット（特に金融・医療）が最も重視する非機能要件です。BrSEは：OWASP Top 10（SQLインジェクション、XSS等）の基本理解、認証方式（OAuth2.0、JWT）の概要、暗号化の種類（共通鍵AES/公開鍵RSA/ハッシュSHA）、ISMS/ISMSガイドラインの概要を理解し、クライアントに安心感を与える報告ができる必要があります。",
  },
  'brse-ik-008': {
    question: "BrSEとして、新しい技術スタック（例：React → Next.js、MySQL → PostgreSQL）への移行をクライアントに提案する場合のプレゼン構成を設計してください。",
    answer: "技術移行提案プレゼン:\\n\\n1. 現状の課題（Why）:\\n- 現技術スタックの具体的な限界・問題点\\n- データで示す: パフォーマンス問題、保守コスト増加、セキュリティ脆弱性\\n- 「このまま」のリスク（技術サポート終了、人材採用困難等）\\n\\n2. 提案する技術（What）:\\n- 新技術の概要（簡潔に、技術用語を噛み砕いて説明）\\n- 採用実績（どの企業・プロジェクトで使われているか）\\n- 既存技術との比較表（パフォーマンス、保守性、学習コスト）\\n\\n3. 移行計画（How）:\\n- 段階的移行アプローチ（ビッグバンではなく、段階的に）\\n- Phase 1: PoC（概念実証）— 小規模機能で検証（2-4週間）\\n- Phase 2: パイロット移行 — 1つのモジュールを移行（1-2ヶ月）\\n- Phase 3: 本格移行 — 残りを段階的に移行\\n- 並行運用期間の確保\\n\\n4. コスト・効果（Investment & Return）:\\n- 移行コスト（工数、ライセンス、学習コスト）\\n- 期待効果（パフォーマンス向上、保守コスト削減、開発効率改善）\\n- ROI試算（投資回収期間）\\n\\n5. リスクと対策:\\n- 技術リスク → PoCで検証\\n- チーム学習リスク → 段階的研修\\n- 移行失敗リスク → ロールバック計画",
    explanation: "クライアントが聞きたいのは「技術の詳細」ではなく「なぜ変えるのか、いくらかかるか、リスクはあるか」です。技術者向けの説明をビジネス言語に翻訳して提案することがBrSEの価値です。段階的アプローチは日本のクライアントの「リスクを嫌う」文化に合致します。",
  },
  'brse-ik-009': {
    question: "リードBrSEとして、チーム全体のIT技術知識を底上げするための取り組みとして最も効果的なものはどれですか？",
    options: [
    "全員にIT資格の取得を義務付ける",
    "①月次の技術勉強会（最新技術トレンド共有）②技術レーダー（採用技術の評価と分類）の策定と更新 ③技術PoC文化（新技術を小さく試す仕組み）④実案件での学びを体系化した社内Wiki — 「学ぶ組織」の仕組み化",
    "外部の講師を毎月呼ぶ",
    "技術書を全員に配布する"
    ],
    answer: 1,
    explanation: "技術知識の底上げは「仕組み化」が鍵です。①勉強会: メンバーが持ち回りで発表（アウトプットが最良の学習）、②技術レーダー: Adopt（積極採用）/Trial（試行）/Assess（評価中）/Hold（非推奨）で技術を分類、③PoC: 「試してみる」文化で実践的に学ぶ、④Wiki: 暗黙知を形式知に変換。個人の自己研鑽に頼るのではなく、組織として学ぶ仕組みを作ります。",
  },
  'brse-jbc-001': {
    question: "ビジネスメールで「お疲れ様です」の正しい使い方はどれですか？",
    options: [
    "社外のお客様への挨拶として使う",
    "社内の同僚や上司への挨拶として使う（社外にはの「お世話になっております」を使う）",
    "初対面の人への自己紹介として使う",
    "メールの件名として使う",
    ""
    ],
    answer: 1,
    explanation: "「お疲れ様です」は社内向けの挨拶です。社外のお客様には「お世話になっております」「いつもお世話になっております」を使います。「ご苦労様です」は目上から目下に使う表現なので、上司には使わないよう注意が必要です。",
  },
  'brse-jbc-002': {
    question: "日本のビジネスメールでは、件名を省略しても問題ありません。",
    answer: "偽",
    explanation: "件名は必ず記載します。日本のビジネスメールでは、件名で内容が分かるようにすることがマナーです。例：「【ご確認】〇〇プロジェクト進捗報告（3月分）」のように、【】で分類し、具体的な内容を記載します。件名がないメールはスパムと間違われる可能性もあります。",
  },
  'brse-jbc-003': {
    question: "電話対応で自分の会社を名乗る時の正しい表現はどれですか？",
    options: [
    "「株式会社〇〇のTanakでございます」",
    "「私はTanakです、〇〇会社から来ました」",
    "「〇〇会社のTanakさんです」",
    "「Tanakと申します」（会社名なし）",
    ""
    ],
    answer: 0,
    explanation: "電話では「株式会社〇〇の〇〇でございます」と会社名+名前を名乗ります。「さん」は自分には使いません。「ございます」は「です」の丁寧な表現です。外部からの電話は「お電話ありがとうございます。株式会社〇〇の〇〇でございます」が基本です。",
  },
  'brse-jbc-004': {
    question: "「承知いたしました」と「了解しました」の違いは何ですか？",
    options: [
    "同じ意味で、どちらを使っても問題ない",
    "「承知いたしました」は上司やお客様に使う丁寧な表現、「了解しました」は同僚や部下に使うカジュアルな表現",
    "「了解しました」の方が丁寧な表現である",
    "「承知いたしました」は書き言葉のみ使える",
    ""
    ],
    answer: 1,
    explanation: "「承知いたしました」は謙譲語を含む最も丁寧な表現で、お客様や上司に適切です。「了解しました」は丁寧さが低く、上司やお客様には失礼になる場合があります。段階：承知いたしました（最丁寧）> かしこまりました > 承知しました > 了解いたしました > 了解しました（カジュアル）",
  },
  'brse-jbc-005': {
    question: "日本の会議で「そうですね、検討させていただきます」と言われた場合、その真意は何でしょうか？",
    options: [
    "前向きに検討するという意味",
    "間接的な断りの可能性が高い — 日本のビジネス文化では直接的な「No」を避ける傾向がある",
    "即座に承認するという意味",
    "他の人に相談するという意味のみ",
    ""
    ],
    answer: 1,
    explanation: "日本のビジネスコミュニケーションでは「空気を読む」ことが重要です。「検討します」「難しいですね」「前向きに検討します」は、しばしば間接的な断りを意味します。BrSEとして、クライアントの真意を理解し、ベトナム側チームに正確に伝えることが重要です。「いつまでに回答いただけますか？」と具体的に確認するのが効果的です。",
  },
  'brse-jbc-006': {
    question: "日本のクライアントへの謝罪メールで最も適切な構成はどれですか？",
    options: [
    "原因説明 → 謝罪 → 対策",
    "謝罪 → 原因説明 → 対策 → 再発防止策 → 再度謝罪",
    "対策 → 原因 → 謝罪",
    "謝罪のみ（詳細は不要）",
    ""
    ],
    answer: 1,
    explanation: "日本のビジネスでは謝罪が先で、構成は：①まず謝罪（「この度は〇〇に関しまして、多大なるご迷惑をおかけし、誠に申し訳ございません」）②原因の説明（言い訳ではなく事実）③暫定対策（すぐに行った対応）④恒久対策（再発防止策）⑤再度謝罪と今後の決意。この構造は信頼回復に最も効果的です。",
  },
  'brse-jbc-007': {
    question: "「お見積もり」「ご提案」「お打ち合わせ」の敬語の種類はどれですか？",
    options: [
    "謙譲語 — 自分の行動を控えめに表現",
    "丁寧語 — 語尾を丁寧にする",
    "尊敬語 — 相手の行動を敬って表現「お/ご」+ 名詞は美化語としても使われる",
    "特に敬語ではない通常の表現",
    ""
    ],
    answer: 2,
    explanation: "「お」「ご」を名詞に付ける用法は美化語（丁寧語の一種）として分類されます。「お見積もりをお送りいたします」では、「お見積もり」は美化語、「お送りいたします」は謙譲語です。正しい敬語の使い分け：尊敬語（相手の行動）、謙譲語（自分の行動）、丁寧語（「です・ます」）を理解することがBrSEには必須です。",
  },
  'brse-jbc-008': {
    question: "日本のクライアントに納品遅延を報告するビジネスメールの件名と冒頭部分を書いてください。",
    answer: "件名：【ご報告】〇〇プロジェクト 納品スケジュール変更のお願い\\n\\n株式会社〇〇\\n〇〇部 〇〇様\\n\\nいつもお世話になっております。\\n株式会社△△の〇〇でございます。\\n\\n〇〇プロジェクトにつきまして、ご報告がございます。\\n誠に申し訳ございませんが、当初の納品予定日（3月15日）から\\n3営業日の遅延が発生する見込みとなりました。\\n\\n■ 遅延の原因\\n〇〇機能の結合テストにおいて、〇〇に関する不具合が発見され、\\n修正と再テストに想定以上の時間を要しております。\\n\\n■ 変更後の納品予定日\\n2026年3月18日（水）\\n\\n■ 対策\\n・開発チームの増員（2名追加）による対応加速\\n・テスト並行実施によるスケジュール短縮\\n\\nご不便をおかけし、重ねてお詫び申し上げます。\\n今後このようなことがないよう、プロセス改善に努めてまいります。\\n\\n何卒ご理解賜りますよう、お願い申し上げます。",
    explanation: "このメールの構造：①件名で内容を明確に（件名で悪いニュースと分かるようにする）②正式な宛先と挨拶 ③問題の報告 ④原因の説明（具体的・簡潔に）⑤新しい期限 ⑥対策（具体的なアクション）⑦謝罪と再発防止の決意。BrSEとして、悪いニュースを伝える際は「透明性」と「具体的な対策」を示すことが信頼維持の鍵です。",
  },
  'brse-jbc-009': {
    question: "日本のクライアントとの仕様確認会議で、BrSEとして最も重要なコミュニケーションスキルは何ですか？",
    options: [
    "完璧な日本語の文法で話すこと",
    "議事録を取りながら、曖昧な表現を具体化する質問力 — 「〇〇とは具体的にどのような意味でしょうか」「例を挙げていただけますか」と確認する能力",
    "日本語で冗談を言えること",
    "会議中に多く発言すること",
    ""
    ],
    answer: 1,
    explanation: "BrSEの最重要スキルは「曖昧さを排除する質問力」です。日本のクライアントは仕様を暗黙的に伝えることが多く、「いい感じで」「適切に」「一般的な方法で」などの曖昧な表現を使います。BrSEは：①具体的な数値・例を引き出す、②図やモックアップで視覚的に確認する、③確認内容を議事録で文書化し承認を得る、ことが必要です。",
  },
  'brse-jbc-010': {
    question: "日本のクライアントとベトナムの開発チーム間のコミュニケーションプランを設計してください。時差、言語、文化の違いを考慮し、BrSEとしてのプランを作成してください。",
    answer: "コミュニケーションプラン:\\n\\n1. 定例会議体系:\\n- 朝会（日本時間9:00 = ベトナム時間7:00）: 15分、日本語、BrSEがファシリテート\\n- 週次報告会（金曜日 16:00 JST）: 30分、日本語、進捗・課題・次週予定\\n- 月次報告会（月末金曜 15:00 JST）: 1時間、日本語、KPI・リスク・改善提案\\n\\n2. 日常コミュニケーション:\\n- Slack/Teams: 日本語チャンネル（クライアント向け）+ ベトナム語チャンネル（社内向け）\\n- BrSEが両方のチャンネルを監視し、翻訳・橋渡し\\n- 質問は24時間以内に回答（時差を考慮）\\n- 緊急時: 電話 → メール → チャットの優先順位\\n\\n3. ドキュメント管理:\\n- 仕様書: 日本語原本 → BrSEがベトナム語に翻訳/要約\\n- 設計書: ベトナム語で作成 → BrSEが日本語レビュー用に翻訳\\n- 議事録: BrSEが日本語で作成、クライアント承認\\n- 品質報告: 日本語テンプレートで統一\\n\\n4. 文化ギャップ対応:\\n- ベトナム側: 「問題がない」と言っても確認する（面子の文化で報告を躊躇する場合がある）\\n- 日本側: 曖昧な表現を具体化してからベトナム側に伝える\\n- エスカレーション: 問題は早期にBrSEに報告するルールを徹底\\n\\n5. ツール:\\n- プロジェクト管理: Jira/Redmine（バイリンガル設定）\\n- ドキュメント: Confluence\\n- コミュニケーション: Slack + Zoom\\n- 翻訳支援: AI翻訳（DeepL）のレビュー付き活用",
    explanation: "BrSEのコミュニケーションプランは、言語（日本語⇔ベトナム語の橋渡し）、時差（オーバーラップ時間の有効活用）、文化（日本の間接的コミュニケーション⇔ベトナムの面子文化）の3つの課題を同時に解決する必要があります。定例会議の時間設定、ドキュメントの言語管理、文化ギャップの具体的対応策が重要です。",
  },
  'brse-jbc-011': {
    question: "日本のクライアントが「ちょっと厳しいですね」と言った場合、BrSEはどう対応すべきですか？",
    options: [
    "そのまま「少し難しい」とベトナム側に伝える",
    "実質的に「無理です/受け入れられません」という意味なので、具体的に何が問題かを掘り下げて確認し、代替案を提案する",
    "「頑張ります」と返答してそのまま進める",
    "別の話題に変えて後日確認する",
    ""
    ],
    answer: 1,
    explanation: "「ちょっと厳しいですね」は日本語の婉曲表現で、多くの場合「不可能/受け入れられない」を意味します。BrSEとして：①「具体的にどの部分が厳しいですか？」と掘り下げる、②代替案を用意する、③ベトナム側にはニュアンスを翻訳せず、実質的な意味（NO）を正確に伝える。文字通りの翻訳は誤解を生みます。",
  },
  'brse-jbc-012': {
    question: "リードBrSEとして、新しく入ったジュニアBrSEの日本語ビジネスコミュニケーション研修プログラムを設計してください。3ヶ月の研修プランを含めてください。",
    answer: "ジュニアBrSE研修プログラム（3ヶ月）:\\n\\n月1: 基礎力養成\\n- 週1-2: ビジネス日本語基礎（敬語体系：尊敬語・謙譲語・丁寧語の使い分け）\\n- 週2: ビジネスメールライティング（定型文、件名の書き方、CC/BCCのルール）\\n- 週3: 電話対応基礎（受電・架電のロールプレイ練習）\\n- 週4: 議事録作成実習（先輩BrSEの会議に同席し議事録を書く、添削フィードバック）\\n- 評価: ビジネスメール10通作成→先輩レビュー\\n\\n月2: 実践力養成\\n- 週5-6: 仕様確認会議のシミュレーション（先輩BrSEが日本人役、曖昧な表現を使って練習）\\n- 週7: 障害報告・謝罪メールの書き方（実際の過去事例をベースに練習）\\n- 週8: 顧客報告書（週報・月報）の作成練習\\n- OJT: 先輩BrSEの会議に同席、質問準備→実際に1-2問質問する役割\\n- 評価: 仕様確認ロールプレイ試験（曖昧な要求から具体的な仕様を引き出せるか）\\n\\n月3: 応用力養成\\n- 週9-10: 見積もり報告・スケジュール交渉の練習\\n- 週11: クレーム対応シミュレーション（困難な状況での対応力）\\n- 週12: 小規模プロジェクトで実際にクライアント対応（先輩がバックアップ）\\n- 最終評価: 模擬プロジェクト発表（日本語でプロジェクト報告プレゼン15分）\\n\\n継続的学習:\\n- JLPT N2以上の取得支援\\n- 月次BrSE勉強会（ケーススタディ共有）\\n- クライアント満足度フィードバックの定期共有\\n- メンター制度（シニアBrSEとのペアリング）",
    explanation: "BrSEの日本語コミュニケーション力は座学だけでは身につきません。基礎（敬語・メール）→実践（会議シミュレーション）→応用（実際のクライアント対応）と段階的に育成します。特にロールプレイ（曖昧な日本語表現への対応）とOJT（実際の会議同席）が最も効果的です。3ヶ月後は独立してクライアント対応できるレベルを目指します。",
  },
  'brse-jbc-013': {
    question: "日本のクライアントとの関係構築において、BrSEが最も避けるべきコミュニケーションの失敗はどれですか？",
    options: [
    "敬語を完璧に使えないこと",
    "問題を隠したり遅く報告したりすること — 日本のビジネスでは「報連相」（報告・連絡・相談）が信頼の基盤であり、悪いニュースの早期報告が最も重要",
    "日本語のアクセントが完璧でないこと",
    "会議で発言が少ないこと",
    ""
    ],
    answer: 1,
    explanation: "日本のビジネス文化で最も嫌われるのは「問題の隠蔽」と「報告の遅延」です。敬語の間違いは許容されますが、「知っていたのに報告しなかった」は信頼を完全に失います。報連相の原則：①悪いニュースこそ早く報告する、②報告は事実→影響→対策のセットで、③「まだ確認中ですが」と前置きしても早く共有する方がよい。",
  },
  'brse-jbc-014': {
    question: "上司から指示を受けた際、内容が曖昧でよく分からなかった時の対応として最も適切なのはどれですか？",
    options: [
    "自分で考えて、良さそうな方法で進める",
    "「おっしゃっている意味が分かりません」と直接伝える",
    "「私の理解では〇〇ということでしょうか？」と自分の言葉で言い換えて確認する",
    "指示が終わるまで何も言わずに聞き続ける"
    ],
    answer: 2,
    explanation: "曖昧な指示を放置すると、後で大きな手戻りが発生します。「恐れ入りますが、確認させていただいてもよろしいでしょうか」と前置きし、パラフレーズ（言い換え）して確認するのがビジネスの鉄則です。",
  },
  'brse-jbc-015': {
    question: "クライアントとのZoom会議で、相手の声が小さくて聞こえにくい場合、どのように伝えるのがマナーですか？",
    options: [
    "「声が小さいので、もっと大きな声で話してください」と言う",
    "「恐れ入ります、少々お電話（音声）が遠いようなのですが、もう一度伺ってもよろしいでしょうか？」と丁重に伝える",
    "聞こえるふりをして頷き続ける",
    "チャットで「聞こえません」とだけ送る"
    ],
    answer: 1,
    explanation: "「音声が遠い」という表現は、相手のせいにするのではなくシステムのせいにするニュアンスが含まれる丁寧な言い回しです。ビジネスでは相手の「話の腰を折る」のではなく、マナーを守って再確認することが求められます。",
  },
  'brse-jbc-016': {
    question: "「ほうれんそう（報連相）」の「相談」をするタイミングとして、最も不適切なのはどれですか？",
    options: [
    "自分で解決策をいくつか考えてから相談する",
    "問題が発生しそうだと予測できた段階で相談する",
    "自分一人の力では解決できないと分かり、手詰まりになってからかなり時間が経過した時に相談する",
    "上司の忙しくない時間を見計らって相談する"
    ],
    answer: 2,
    explanation: "相談の遅れはプロジェクト全体の遅延に直結します。「少し調べて分からなければすぐに聞く」というルールを自分の中で持つことが重要です。特にBrSEは橋渡し役なので、情報の停滞は致命的です。",
  },
  'brse-jbc-017': {
    question: "クライアントが要求仕様を口頭で追加してきました。その場での対応として適切なのはどれですか？",
    options: [
    "「分かりました、やっておきます」と即答する",
    "「承知いたしました。念のため、今の内容をこちらで整理し、メールでエビデンス（議事録）としてお送りします」と伝え、言った言わないの防止に努める",
    "「それは契約外なのでできません」と即座に断る",
    "開発チームにすぐに連絡し、実装を開始させる"
    ],
    answer: 1,
    explanation: "口頭での合意は後のトラブルの元です。BrSEは必ず「文字（エビデンス）」に残す習慣をつける必要があります。これにより、スコープクリープを防ぎ、責任の所在を明確にします。",
  },
  'brse-jbc-018': {
    question: "「日本のクライアントが品質に非常に厳しく、細かいバグ1つでベトナム側の管理能力を疑っている」という状況を打開するためのコミュニケーションプランを提案してください。",
    answer: "状況打破のプラン：\\n1. データの可視化: 過去のバグ率、テスト密度、カバレッジをグラフ化し、論理的に品質管理プロセスを説明する。\\n2. Wチェックの徹底: 日本側リーダー（BrSE等）による最終検品プロセスの導入。 \\n3. 報告の透明性: 「見つかったバグ」だけでなく「どのようにテストして見つからなかったか」のプロセスまで公開する。\\n4. 相互理解セッション: 日本側の品質基準をベトナム側の全エンジニアに共有するWeb会議を主催。",
    explanation: "感情的な不信感は、「論理性（データ）」と「徹底したプロセス（可視化）」でしか解消できません。BrSEは日本側の「不安」をベトナム側の「具体的なアクション」に変換する役割を担います。",
  },
  'brse-jbc-019': {
    question: "ビジネスメールを送る際、CCに入っている人に対しても、本文の宛先には全員の名前を書く必要があります。",
    answer: "偽",
    explanation: "本文の宛先には、基本的には「TO（宛先）」の人だけを書きます。CCの人は名前を書きませんが、誰がCCに入っているか認識しています。取引先へのメールで関係者全員をTOにする場合は、役職順に並べるのが一般的です。",
  },
  'brse-jbc-020': {
    question: "敬語の「御社（おんしゃ）」と「貴社（きしゃ）」の使い分けとして正しいのはどれですか？",
    options: [
    "御社は書き言葉、貴社は話し言葉",
    "御社は話し言葉、貴社は書き言葉",
    "どちらも同じように使える",
    "御社は同僚に、貴社はお客様に使う"
    ],
    answer: 1,
    explanation: "面接や会議など話す時は「御社」、メールや企画書など書く時は「貴社」を使うのが日本のビジネスマナーです。BrSEとしてメールを書く機会が多いので、「貴社」の使い方は必須の知識です。",
  },
  'brse-jbc-022': {
    question: "日本人との会議で沈黙が続いた場合、BrSEはどう振る舞うべきですか？",
    options: [
    "沈黙に耐えられず、自分から話し続ける",
    "相手が考えている時間だと理解し、数秒から十数秒は待ち、その後「何か懸念点はございますか？」と優しく促す",
    "会議を強制終了する",
    "自分も何も言わずに何分も待ち続ける"
    ],
    answer: 1,
    explanation: "日本の会議での沈黙は「考慮中」や「言葉を選んでいる」時間であることが多いです。一方的に話しすぎるのは逆効果です。適切な「間」を読み、必要に応じてファシリテートすることが求められます。",
  },
  'brse-jbc-023': {
    question: "ベトナム側チームが「Yes」と言っているが、実は理解できていないように感じる。BrSEとして、この「隠れたNO（わかったフリ）」を解消する仕組みを作ってください。",
    answer: "解消の仕組み：\\n1. 理解度クイズ: 指示の後に「今の内容を5分で要約して説明してください」とアウトプットを求める。\\n2. 5分間Q&A: 会議の最後に「質問がないか」ではなく「どこが一番難しそうか」を聞くルールにする。\\n3. WBSへの分解: 指示内容をすぐにタスクに分解させ、その解像度で理解度を測る。\\n4. 心理的安全性の確保: 「分からないと言うことは恥ではなく、リスク回避である」という行動規範を徹底させる。",
    explanation: "文化的な「Yes」はオフショア開発の最大の敵です。単なる確認ではなく、仕組み（システム）によって相手の理解度を客観的に測るプロセスを導入することがリードBrSEの役割です。",
  },
  'brse-jbc-024': {
    question: "When a Japanese client says \"Kento-shimasu\" (検討します), what does it usually mean?",
    options: [
    "They have decided to buy immediately",
    "They will consider/review it (often a polite way of saying \"not right now\" or \"it\\'s difficult\")",
    "They want a discount",
    "The meeting is over",
    ""
    ],
    answer: 1,
    explanation: "Understanding the nuance of \"Kento-shimasu\" is vital for BrSEs. It doesn\\'t always mean \"we will definitely do it.\" It often requires follow-up to understand the true level of interest or the specific concerns.",
  },
  'brse-jbc-025': {
    question: "What is the \"Ringi\" (稟議) system in Japanese companies?",
    options: [
    "A type of traditional dance",
    "A bottom-up decision-making process where a proposal is circulated for formal approval/seals (Hanko)",
    "A code review tool",
    "A marketing strategy",
    ""
    ],
    answer: 1,
    explanation: "The Ringi-sho (proposal document) passes through various levels of management for approval. BrSEs need patience as this process can take time, but once approved, implementation usually moves fast.",
  },
  'brse-jbc-026': {
    question: "When receiving a business card (Meishi) from a Japanese client, what is the WRONG thing to do?",
    options: [
    "Accept it with both hands",
    "Put it in your pocket immediately after glance",
    "Place it on the table in front of you during the meeting",
    "Read the name and title aloud to confirm",
    ""
    ],
    answer: 1,
    explanation: "Putting a business card away immediately is considered disrespectful. You should treat it with care, examine it, and keep it on the table during the meeting to remember the person\\'s name and role.",
  },
  'brse-jbc-027': {
    question: "What is the concept of \"Omotenashi\" in the context of BrSE service quality?",
    options: [
    "Being very aggressive in sales",
    "Anticipating the client\\'s needs and providing hospitality/service without being asked",
    "Using a lot of technical jargon",
    "Finishing tasks exactly on the deadline and no earlier",
    ""
    ],
    answer: 1,
    explanation: "In a professional context, Omotenashi means being proactive — for example, proposing a performance fix before the client even notices the lag. It\\'s about building deep trust through high quality.",
  },
  'brse-jbc-028': {
    question: "In a meeting room, the person with the highest rank should sit closest to the door (Shimoza).",
    answer: "偽",
    explanation: "The person with the highest rank (Kamiza) sits furthest from the door, usually in the most comfortable seat. The \"Shimoza\" (lower seat) closest to the door is for the most junior/serving members.",
  },
  'brse-jbc-029': {
    question: "Which Keigo category is used to lower yourself or your own group to show respect to the listener?",
    options: [
    "Sonkeigo (Respectful)",
    "Kenjougo (Humble)",
    "Teineigo (Polite)",
    "Meishi (Noun)",
    ""
    ],
    answer: 1,
    explanation: "Kenjougo (e.g., \"Moushimasu\" instead of \"Iimasu\") is used when the BrSE talks about their own team\\'s actions to the client. Using Sonkeigo for yourself is a major mistake.",
  },
  'brse-jbc-030': {
    question: "When answering a phone call and keeping the client waiting, what is the appropriate phrase to say when you return to the line?",
    options: [
    "Moshi moshi",
    "Omatase-itashimashita (Thank you for waiting)",
    "Nan desu ka?",
    "Chotto matte kudasai",
    ""
    ],
    answer: 1,
    explanation: "Even if the wait was short, \"Omatase-itashimashita\" is standard etiquette. \"Moshi moshi\" is generally avoided in professional business calls when answering.",
  },
  'brse-jbc-031': {
    question: "In a business email to someone you haven\\'t contacted in a long time, what is a standard opening phrase?",
    options: [
    "Ohayou gozaimasu",
    "Gobusata-shite-orimasu (I apologize for the long silence)",
    "Ogenki desu ka?",
    "Hisashiburi!",
    ""
    ],
    answer: 1,
    explanation: "\"Gobusata-shite-orimasu\" is a formal way to acknowledge a lapse in communication. It shows the BrSE respects the relationship history.",
  },
  'brse-jbc-032': {
    question: "When visiting a Japanese client\\'s office for the first time, what is the standard practice regarding \"Omiyage\" (souvenirs)?",
    options: [
    "Don\\'t bring anything",
    "it\\'s seen as a bribe",
    "Bringing a small",
    "nicely wrapped gift (usually food from your region) is a common way to build goodwill",
    "Bring a very expensive personal gift for the CEO",
    "Bring a gift and open it yourself in front of them",
    ""
    ],
    answer: 1,
    explanation: "Omiyage is about relationship building, not bribery. It should be something the whole office can share (like individually wrapped cookies) and should be presented with a humble phrase like \"Tsumaranai mono desu ga...\".",
  },
  'brse-jbc-033': {
    question: "In a standard 4-seater taxi with a Japanese client, where is the \"Kamiza\" (most honorable seat)?",
    options: [
    "The front passenger seat next to the driver",
    "The rear seat behind the driver",
    "The rear seat behind the front passenger",
    "The middle of the rear seat",
    ""
    ],
    answer: 1,
    explanation: "In a car, the seat directly behind the driver is the highest honor. The BrSE should usually sit in the front passenger seat to handle directions or payments.",
  },
  'brse-jc-001': {
    question: "「報連相（ホウレンソウ）」の意味として正しいものはどれですか？",
    options: [
    "日本の野菜の名前",
    "報告・連絡・相談 — 日本のビジネスにおける基本的なコミュニケーション原則",
    "日本の会計処理の手順",
    "日本の品質管理手法",
    ""
    ],
    answer: 1,
    explanation: "報連相は日本のビジネスで最も重要な原則の一つです。報告（じょうしに結果を伝える）、連絡（関係者に情報を共有する）、相談（問題や判断に迷った時にアドバイスを求める）。特にオフショア開発では、報連相の欠如がクライアントの不安を招きます。悪い知らせほど早く報告することが鉄則です。",
  },
  'brse-jc-002': {
    question: "日本の名刺交換では、相手の名刺を受け取った後すぐにポケットに入れても問題ありません。",
    answer: "偽",
    explanation: "名刺は「その人の分身」と考えられています。正しいマナー：①両手で受け取る、②「頂戴いたします」と言う、③受け取った名刺をテーブルの上に自分から見て左側に置く（会議中）、④面談終了後に名刺入れにしまう。名刺の上に物を置いたり、メモを書いたりするのもNGです。",
  },
  'brse-jc-003': {
    question: "日本のビジネスで「根回し（ねまわし）」とは何ですか？",
    options: [
    "会議の議事録を作成すること",
    "正式な会議の前に関係者に非公式に相談し、合意や理解を得ておくこと",
    "プロジェクトの見積もりを作成すること",
    "チームメンバーの評価を行うこと",
    ""
    ],
    answer: 1,
    explanation: "根回しは日本のビジネス文化の重要な概念です。正式な会議で「いきなり」新しい提案をすると、関係者が反対する可能性があります。事前に個別に説明し、意見を聞き、必要な調整をしておくことで、会議での合意がスムーズになります。BrSEとして、日本側への提案前に根回しすることが効果的です。",
  },
  'brse-jc-004': {
    question: "日本の「空気を読む」文化がオフショア開発で引き起こす典型的な問題は何ですか？",
    options: [
    "開発スピードが遅くなる",
    "クライアントが暗黙的に期待していることを明示的に伝えないため、仕様の認識齟齬が発生する — BrSEは暗黙知を形式知に変換する役割を担う",
    "チームの雰囲気が悪くなる",
    "翻訳コストが増加する",
    ""
    ],
    answer: 1,
    explanation: "日本のクライアントは、「言わなくても分かるだろう」という前提でコミュニケーションすることがあります。例：「いい感じにしてください」「普通はこうでしょう」。しかし、ベトナム側は「言われたことだけ」を実装する傾向があります。BrSEの重要な役割は、この文化的ギャップを埋めること — 暗黙の期待を具体的な仕様として文書化することです。",
  },
  'brse-jc-005': {
    question: "日本の「稟議（りんぎ）」制度とは何ですか？BrSEの仕事にどう影響しますか？",
    options: [
    "日本の品質検査制度",
    "提案や決定を文書化し、関係する管理職に順番に回覧して承認を得る意思決定プロセス — 決定に時間がかかる原因となるため、BrSEはスケジュールに余裕を見る必要がある",
    "日本の税務処理手続き",
    "プロジェクトのコードレビュー方法",
    ""
    ],
    answer: 1,
    explanation: "稟議は日本の組織での合意形成プロセスです。提案書を作成し、担当者→課長→部長→役員と順番に承認印（ハンコ）を得ます。このため：①意思決定に数日〜数週間かかる、②BrSEは見積もり承認やスケジュール変更の申請に余裕をもったスケジュールを組む必要がある、③事前の根回しで稟議をスムーズにすることが可能です。",
  },
  'brse-jc-006': {
    question: "日本のビジネスにおける「本音（ほんね）」と「建前（たてまえ）」の違いをBrSEとしてどう対応すべきですか？",
    options: [
    "常に建前を信じて行動する",
    "本音と建前の区別は不要",
    "会議（建前の場）だけでなく、非公式な場（ランチ、飲み会）で本音を探り、両方の情報を基に判断する。文書で確認を取ることで認識の齟齬を防ぐ",
    "直接「本音を教えてください」と聞く",
    ""
    ],
    answer: 2,
    explanation: "本音（本当の気持ち）と建前（表向きの意見）は日本のコミュニケーションの特徴です。会議では建前が多く、本音は個別の会話や非公式な場で出やすいです。BrSEとして：①表向きの合意だけで安心しない、②1対1で確認する機会を作る、③決定事項は必ず文書化して確認を取る、④「こういう理解で合っていますか？」とダブルチェックする。",
  },
  'brse-jc-007': {
    question: "ベトナムの開発チームに「日本のクライアントとの仕事の仕方」を教える研修を設計してください。文化的な注意点、コミュニケーションの違い、よくある失敗事例を含めてください。",
    answer: "研修プログラム「日本クライアントとの仕事術」:\\n\\n1. 日本文化の基本概念（1時間）:\\n- 報連相の重要性と実践方法\\n- 本音と建前の概念（事例で説明）\\n- 空気を読む文化 → 明示的確認の重要性\\n- 時間厳守の文化（5分前行動）\\n- 品質への期待レベル（「動けばOK」ではなく「完璧を目指す」）\\n\\n2. コミュニケーションの違い（1時間）:\\n- 直接的（ベトナム）vs 間接的（日本）\\n- 「はい」は「同意」ではなく「聞いています」の場合がある\\n- 「検討します」「難しいですね」の真意\\n- 沈黙は考えている時間であり、急かさない\\n- メールの丁寧さのレベル\\n\\n3. よくある失敗事例（ケーススタディ、1時間）:\\n- ケース1: 仕様に書いていない機能を「当たり前」として期待されたが実装しなかった\\n- ケース2: バグを発見したが報告が遅れ、クライアントの信頼を失った\\n- ケース3: 「できます」と言ったが実際は難しく、納期に間に合わなかった\\n- ケース4: テストが不十分で、クライアントがすぐにバグを発見し品質への不信感\\n- 各ケースで: 何が悪かったか、どうすべきだったか、を議論\\n\\n4. 実践演習（1時間）:\\n- ロールプレイ: 日本のクライアント役（BrSE）に進捗を報告する\\n- メール作成: 遅延報告メールを書く\\n- 仕様確認: 曖昧な仕様から具体的な質問リストを作成する\\n\\n5. DO/DON\\'T チェックリスト:\\n- DO: 問題は早く報告、仕様は文書で確認、品質を最優先\\n- DON\\'T: 問題を隠す、「たぶん大丈夫」で進める、テストを省略",
    explanation: "ベトナムの開発者が日本のクライアントとの仕事で最も苦労するのは、文化的な期待値の違いです。技術力だけでなく、コミュニケーションの仕方、品質への期待、報告の頻度と内容が異なります。ケーススタディを使った研修は、抽象的な文化論よりも実践的で効果があります。",
  },
  'brse-jc-008': {
    question: "日本のクライアントとの信頼関係（信用）を構築する上で、BrSEが最も重視すべきことはどれですか？",
    options: [
    "完璧な日本語能力",
    "安い見積もりを提示すること",
    "約束を守ること（納期、品質、コミュニケーション頻度）の一貫性 — 小さな約束でも確実に実行し、できないことは事前に相談する",
    "日本の飲み会に毎回参加すること",
    ""
    ],
    answer: 2,
    explanation: "日本人が最も重視するのは「信頼性」です。信頼は大きな成果ではなく、日々の小さな約束の積み重ねで構築されます：①言ったことを守る、②期限を守る（余裕を持った約束をする）、③品質基準を下げない、④問題は隠さず早期報告する。逆に、一度信頼を失うと回復に非常に長い時間がかかります。",
  },
  'brse-jc-009': {
    question: "日本のSIer（システムインテグレーター）の多重下請け構造（ゼネコン構造）について説明し、この構造の中でベトナムのオフショアチームが位置づけられる場合の課題とBrSEリードとしての対策を設計してください。",
    answer: "日本のIT業界の多重下請け構造:\\n\\n構造説明:\\n- 1次受け（元請け）: 大手SIer（NTTデータ、富士通等）がクライアントから受注\\n- 2次受け: 中堅SIerが元請けから一部を受注\\n- 3次受け以下: さらに小規模な会社に再委託\\n- ベトナムオフショア: 通常2次〜3次下請けの位置\\n\\n課題:\\n1. コミュニケーション距離: エンドクライアント → 元請け → 2次受け → ベトナム（伝言ゲーム状態）\\n2. 要求の劣化: 各層で情報が欠落・変質する\\n3. 品質要求の曖昧さ: 元の品質基準が正確に伝わらない\\n4. 責任の所在: 問題発生時の責任が不明確\\n5. 利益率の圧迫: 多重マージンで安い単価での受注\\n\\n対策:\\n1. 情報品質管理:\\n- 仕様書の完全性チェックリスト（受領時に曖昧な箇所を洗い出し質問）\\n- 仕様変更の正式なフロー整備（口頭指示は受けない）\\n- レビュー会議に可能な限り元請けにも参加してもらう\\n\\n2. 品質保証:\\n- 品質基準を契約時に明文化（テストカバレッジ、バグ率、ドキュメント品質）\\n- テスト結果を日本語で詳細に報告（品質への姿勢を示す）\\n- 日本側品質基準の研修をベトナムチームに実施\\n\\n3. 関係構築:\\n- 直接コミュニケーションチャネルの確保（可能な限り中間層を減らす）\\n- 定期的な日本訪問で関係者との信頼構築\\n- 付加価値提案（言われたことだけでなく改善提案も）で存在感\\n\\n4. ビジネス戦略:\\n- 実績を基に直接取引（プライム案件）を獲得する戦略\\n- 技術力と品質で差別化し、価格競争を避ける\\n- 特定ドメイン（Fintech、EC等）での専門性構築",
    explanation: "日本のIT業界の多重下請け構造は、ベトナムオフショアにとって情報品質と利益率の両面で課題です。リードBrSEとして、情報の劣化を防ぐ仕組み、品質の「見える化」、そして中長期的にはプライム案件獲得への戦略が重要です。",
  },
  'brse-jc-010': {
    question: "日本企業の年度末（3月末）が近づくと、BrSEリードとしてどのような事前対応が必要ですか？",
    options: [
    "特に何もする必要はない",
    "予算消化による急な案件追加、人事異動による担当者変更、来年度の契約更新交渉に備えて：①キャパシティの余裕を確保、②来年度提案書の準備、③引き継ぎドキュメントの整備を行う",
    "休暇を取る",
    "チームの忘年会を企画する",
    ""
    ],
    answer: 1,
    explanation: "日本の年度末（3月末）は重要な時期です：①予算消化で急な追加案件が来る可能性（リソース確保）、②4月の人事異動で担当者（PM、SE、PL）が変わる（引き継ぎ対応）、③来年度の契約更新・見積り提出（1-2月から準備）。リードBrSEとして、毎年の年度末サイクルを予測し、先手を打つことで信頼性を示せます。",
  },
  'brse-op-001': {
    question: "オフショア開発の最大のメリットはどれですか？",
    options: [
    "開発品質が必ず向上する",
    "コスト削減と開発リソースの確保 — 人件費の差を活用しつつ、国内で不足するエンジニアリソースを海外で確保できる",
    "コミュニケーションが不要になる",
    "納期が必ず短縮される",
    ""
    ],
    answer: 1,
    explanation: "オフショア開発のメリット：①コスト削減（人件費の地域差）、②リソース確保（国内のエンジニア不足解消）、③時差を活用した24時間開発体制の可能性。一方、デメリット：コミュニケーションコスト、品質管理の難しさ、文化差。BrSEはこれらのバランスを取る役割です。",
  },
  'brse-op-002': {
    question: "オフショア開発では、仕様書さえ正確に書けば、コミュニケーションは最小限で問題ありません。",
    answer: "偽",
    explanation: "仕様書が完璧でもコミュニケーションは不可欠です。理由：①仕様書だけでは伝わらない暗黙知がある、②開発中に仕様の疑問点が必ず発生する、③変更要求への迅速な対応が必要、④品質基準の共有にはフィードバックループが必要。「ドキュメント+定期的なコミュニケーション」がオフショア成功の鍵です。",
  },
  'brse-op-003': {
    question: "BrSE（ブリッジSE）の主な役割として正しいものはどれですか？",
    options: [
    "コードを書くだけの開発者",
    "日本のクライアントとベトナムの開発チーム間の橋渡し役 — 仕様の翻訳・伝達、品質管理、進捗管理、コミュニケーションのハブ",
    "営業活動のみを行う",
    "日本語の通訳のみを行う",
    ""
    ],
    answer: 1,
    explanation: "BrSEの役割は多岐にわたります：①仕様の翻訳・伝達（言語だけでなく文化的ニュアンスも変換）、②品質管理（日本側品質基準をベトナム側に浸透）、③進捗管理（両サイドの状況を把握・報告）、④問題解決の調整（技術的・文化的問題の橋渡し）。単なる通訳ではなく、プロジェクト成功のキーパーソンです。",
  },
  'brse-op-004': {
    question: "オフショア開発で「ラボ型契約」と「請負型契約」の違いは何ですか？",
    options: [
    "同じ契約形態の別名",
    "ラボ型は専属チームを月額固定で確保（インプットベース）、請負型は成果物に対して固定金額を支払う（アウトプットベース）— リスクの所在が異なる",
    "ラボ型は短期プロジェクト用、請負型は長期プロジェクト用",
    "ラボ型は日本国内、請負型は海外の契約",
    ""
    ],
    answer: 1,
    explanation: "ラボ型（準委任契約に近い）：専属チームを月額で確保、柔軟な開発が可能、リソースリスクはクライアント側。請負型：成果物と納期を約束、品質リスクはベンダー側。BrSEはプロジェクトの性質に合わせて適切な契約形態を提案し、リスクに応じた管理方法を実践する必要があります。",
  },
  'brse-op-005': {
    question: "オフショア開発でQA（品質保証）プロセスを強化するために、BrSEが実施すべきことはどれですか？",
    options: [
    "テストはすべてクライアント側に任せる",
    "テスト計画の作成→テストケースの日本語レビュー→テスト実行報告の可視化→不具合のトリアージと追跡を体系的に管理する",
    "バグが見つかるまでテストしない",
    "テストは開発者個人の判断に任せる",
    ""
    ],
    answer: 1,
    explanation: "オフショア開発での品質問題は信頼失墜に直結します。BrSEのQA管理：①テスト計画をクライアント品質基準に合わせて作成、②テストケースをBrSEがレビュー（日本語仕様との整合性確認）、③テスト結果を日本語で可視化（バグ件数、重要度、進捗率）、④クリティカルなバグは即座にクライアントに報告。",
  },
  'brse-op-006': {
    question: "オフショア開発プロジェクトの典型的なワークフロー（仕様受領→開発→テスト→納品）を設計し、各フェーズでBrSEが行うべき具体的なアクションを記述してください。",
    answer: "オフショア開発ワークフロー:\\n\\n1. 仕様受領フェーズ:\\n- クライアントから仕様書を受領\\n- BrSEアクション: 仕様書の読解→不明点リスト作成→クライアントに質問→回答を基に仕様を補完→ベトナム語/英語に翻訳→開発チームに説明会実施\\n\\n2. 見積もり・計画フェーズ:\\n- 開発チームと工数を見積もり\\n- BrSEアクション: 技術リスクの確認→バッファーを含めたスケジュール作成→クライアントに見積もり提出→合意後にWBS作成\\n\\n3. 開発フェーズ:\\n- チームが設計・コーディングを実施\\n- BrSEアクション: 毎日の進捗確認→週次報告書の作成・送付→仕様に関する質疑の橋渡し→設計レビューの実施→コードレビュー参加\\n\\n4. テストフェーズ:\\n- QAチームがテスト実施\\n- BrSEアクション: テスト計画のレビュー→テスト結果の確認→バグの優先度付け→修正状況の追跡→品質報告書の作成\\n\\n5. 納品フェーズ:\\n- 成果物を整理してクライアントに提出\\n- BrSEアクション: 納品物チェックリストで確認→納品書の作成→操作手順書の準備→クライアントレビューのサポート→指摘事項の対応管理",
    explanation: "各フェーズでBrSEの関与が不可欠です。「投げて終わり」ではなく、仕様理解から納品後サポートまで一貫して品質とコミュニケーションを管理します。特に仕様受領時の「不明点リスト」と「説明会」が肝心—ここで認識を揃えないと後工程でのやり直しが増大します。",
  },
  'brse-op-007': {
    question: "オフショア開発でよく発生する「仕様認識の齟齬」を最小化するためのベストプラクティスはどれですか？",
    options: [
    "仕様書を厚くすれば齟齬はなくなる",
    "仕様確認会議（Q&A会）の実施 + 重要画面のモックアップ作成 + 仕様書の疑問点を文書化した質問票（Q&Aシート）管理 + コーディング前のプロトタイプレビュー",
    "開発者が独自に解釈して実装する",
    "齟齬は避けられないので受け入れる",
    ""
    ],
    answer: 1,
    explanation: "仕様認識齟齬の最小化策：①Q&A会議（仕様ウォークスルー）で双方の理解を合わせる、②重要画面のモックアップで視覚的に確認、③Q&Aシートで全ての疑問を文書化し承認を得る、④短い開発サイクルで早期フィードバック、⑤重要機能はプロトタイプを先行で見せる。「確認しすぎる」くらいがちょうどよい。",
  },
  'brse-op-008': {
    question: "オフショア開発チームのパフォーマンスを測定するためのKPIとして適切なものはどれですか？",
    options: [
    "コード行数のみ",
    "品質（バグ密度、UAT通過率）、生産性（ベロシティ、完了ストーリー数）、プロセス（納期遵守率、Q&A回答速度）、顧客満足度（NPS、リピート率）",
    "残業時間のみ",
    "メンバーの日本語レベルのみ",
    ""
    ],
    answer: 1,
    explanation: "多面的なKPIが必要です：①品質: バグ密度（bugs/KLOC）、リリース後バグ数、テストカバレッジ、②生産性: ベロシティトレンド、予実比率、③プロセス: 納期遵守率、仕様Q&A回答速度、④顧客: 顧客満足度調査、契約更新率。単一指標ではなくバランスをもって計測し、改善活動に繋げます。",
  },
  'brse-op-009': {
    question: "リードBrSEとして、新規クライアント向けのオフショア開発オンボーディングプロセスを設計してください。初回プロジェクトの成功確率を最大化するための仕組みを含めてください。",
    answer: "オフショア開発オンボーディングプロセス:\\n\\n契約前（2-4週間）:\\n- クライアントの開発文化・品質基準のヒアリング\\n- 過去のオフショア経験と課題の確認\\n- 小規模トライアルプロジェクトの提案（1-2ヶ月）\\n- チーム構成とBrSEのアサイン\\n\\n立ち上げ期（1-2週間）:\\n- キックオフ会議: プロジェクト概要、チーム紹介、コミュニケーションルール合意\\n- 開発環境セットアップ（VPN、リポジトリ、CI/CD、チャットツール）\\n- コーディング規約・品質基準の共有と合意\\n- コミュニケーション計画の策定（定例会議、報告形式、エスカレーション）\\n- 用語集の初版作成\\n\\n初期プロジェクト（4-8週間 — トライアル期間）:\\n- 小規模・明確な仕様のタスクから開始\\n- 毎日の進捗共有（朝会15分）\\n- 週次振り返り会議（課題と改善）\\n- BrSEが全ての成果物をクライアント提出前にレビュー\\n- 2週間ごとにクライアントフィードバック収集\\n\\n安定期への移行:\\n- トライアル成功 → 本格稼働契約\\n- プロセス改善レポート（トライアルで学んだ教訓）\\n- チームの増員計画\\n- KPI設定と定期レビュー体制の構築\\n\\n失敗防止策:\\n- 初回は意図的にバッファーを多めに確保（見積もり×1.3）\\n- 毎日の確認で問題を早期発見\\n- シニアBrSEが初回案件をバックアップ\\n- チーム内で日本文化研修の実施",
    explanation: "初回プロジェクトの失敗は信頼回復が極めて困難です。トライアルで小さく始め、成功体験を積んでから拡大する戦略が最も効果的です。バッファーを多めに確保し、BrSEの関与を通常以上に高めることで、初回の品質リスクを最小化します。",
  },
  'brse-pm-001': {
    question: "WBS（Work Breakdown Structure）とは何ですか？",
    options: [
    "Web-Based Systemの略称",
    "プロジェクトの作業を階層的に分解した構造図 — 成果物を細かいタスクに分割し、工数見積もりとスケジュール管理の基盤とする",
    "ワイヤーフレームの設計書",
    "テスト結果の集計表"
    ],
    answer: 1,
    explanation: "WBSはプロジェクト管理の基本ツールです。大きな成果物→中間成果物→作業パッケージ→個別タスクに階層分解します。BrSEはWBSを基にベトナム側の作業を管理し、日本側クライアントに進捗を報告します。WBSがないと、作業の漏れや進捗の正確な把握が困難になります。",
  },
  'brse-pm-002': {
    question: "ガントチャートの用途として正しいものはどれですか？",
    options: [
    "コードレビューの結果を表示する",
    "タスクのスケジュール、依存関係、進捗をバーチャートで視覚化する — いつまでに何が完了すべきかを一目で把握できる",
    "売上データのグラフ表示",
    "データベースのER図"
    ],
    answer: 1,
    explanation: "ガントチャートは横軸に時間、縦軸にタスクを配置し、バーの長さで期間を表します。日本のプロジェクトでは必須の管理ツールで、クライアントへの進捗報告、クリティカルパスの把握、リソース配分の計画に使われます。BrSEは日本語でガントチャートを作成・更新する能力が求められます。",
  },
  'brse-pm-003': {
    question: "オフショアプロジェクトでは、クライアントへの週次報告書は日本語で作成する必要があります。",
    answer: "真",
    explanation: "日本のクライアント向け報告書は日本語が標準です。週次報告書の典型的な内容：①今週の実績（完了タスク）、②進捗率（予定vs実績）、③課題・リスク、④来週の予定、⑤Q&A事項。BrSEが作成し、必要に応じてPMがレビューします。質の高い日本語報告書はクライアントの安心感と信頼に直結します。",
  },
  'brse-pm-004': {
    question: "クリティカルパスとは何ですか？オフショア開発での重要性は？",
    options: [
    "最も重要なソースコードのパス",
    "プロジェクト内で最も長い経路（遅延するとプロジェクト全体が遅延するタスクの連鎖）— この上のタスクの遅延は直接納期遅延に繋がるため、BrSEは特に注意して管理する",
    "最短で完了できるタスクの一覧",
    "セキュリティ上の重要な通信経路"
    ],
    answer: 1,
    explanation: "クリティカルパス上のタスクは余裕（フロート）がゼロ = 1日の遅れが納期1日遅延。BrSEとして：①クリティカルパスのタスクを優先的に進捗確認、②リスクのあるタスクには事前にバッファーを設定、③クリティカルでないタスクの遅延は許容範囲を判断。",
  },
  'brse-pm-005': {
    question: "EVM（Earned Value Management）でCPI < 1.0の場合、プロジェクトの状態はどうですか？",
    options: [
    "予算通りに進んでいる",
    "予算オーバー — 計画した作業量に対して実際のコストが超過しており、是正措置が必要",
    "予算を下回って効率的",
    "プロジェクトが中止された"
    ],
    answer: 1,
    explanation: "CPI（Cost Performance Index）= EV/AC。CPI < 1.0 = コスト効率が悪い（予算オーバー）。SPI（Schedule Performance Index）= EV/PV。SPI < 1.0 = スケジュール遅延。BrSEとして：①両指標を月次で計算・報告、②1.0を下回る場合は原因分析と是正策を提案、③トレンド（改善/悪化）を確認。",
  },
  'brse-pm-006': {
    question: "5名のベトナム開発チーム、2ヶ月のプロジェクトのリソース計画を作成してください。役割分担、スキルマトリクス、稼働率を含めてください。",
    answer: "リソース計画:\\n\\n1. チーム構成（5名）:\\n- BrSE (1名): 仕様翻訳・クライアント対応・品質管理 [稼働率: 80%当プロジェクト",
    explanation: "リソース計画は「人数」だけでなく「スキル」と「稼働率」の計画が重要です。スキルマトリクスにより、メンバーの強み/弱みを可視化し、適切なタスクアサインとリスク対策ができます。BrSEはリソース計画をクライアントに提示し、チーム体制への信頼を構築します。",
  },
  'brse-pm-007': {
    question: "オフショアプロジェクトがスケジュール遅延した場合、BrSEがまず行うべきアクションはどれですか？",
    options: [
    "クライアントに報告せず残業で対応する",
    "遅延の原因を分析 → 影響範囲を特定 → リカバリープラン（増員/並行作業/スコープ調整）を策定 → クライアントに原因・影響・対策を報告 → 合意を得てから実行",
    "即座にチームメンバーを交代させる",
    "遅延を報告しないで期限延長を要求する"
    ],
    answer: 1,
    explanation: "バッドニュースの管理はBrSEの最重要スキルです。順序：①事実確認（何がどれだけ遅れているか）、②原因分析（仕様変更？技術課題？リソース不足？）、③影響分析（他のタスクへの影響、最終納期への影響）、④リカバリープラン策定（複数案を用意）、⑤クライアントへの早期報告（対策とセットで報告）。隠すのが最悪です。",
  },
  'brse-pm-008': {
    question: "日本のクライアントとの進捗会議で「進捗率80%」と報告する場合、何に気をつけるべきですか？",
    options: [
    "80%と言えば十分",
    "客観的な基準に基づく進捗率を報告する（完了機能数/全機能数、通過テスト数/全テスト数等）— 主観的な「80%くらいできた」は信用されない。残り20%にリスクが集中している可能性も報告する",
    "90%に水増しする",
    "進捗率の報告は不要"
    ],
    answer: 1,
    explanation: "「90%症候群」（残り10%がいつまでも終わらない）を避けるため：①進捗率は客観的指標で（完了/総数）、②完了の定義を明確に（コーディング完了？テスト完了？レビュー完了？）、③残作業のリスクを添える（「残り20%に複雑な機能が含まれています」）、④予測完了日を根拠と共に示す。日本のクライアントは数字の正確性を重視します。",
  },
  'brse-pm-009': {
    question: "リードBrSEとして、複数のオフショアプロジェクト（3-5案件同時）を管理するためのPMO的な管理体制を設計してください。",
    answer: "マルチプロジェクト管理体制:\\n\\n1. ポートフォリオ管理:\\n- 全案件の一覧ダッシュボード（案件名、クライアント、フェーズ、進捗、リスクレベル、BrSE担当）\\n- 週次のポートフォリオレビュー会議（全BrSE参加、30分）\\n- 赤/黄/青の信号管理（赤=緊急対応必要、黄=要注意、青=正常）\\n\\n2. リソース管理:\\n- 全メンバーの稼働率可視化（共有スプレッドシート/ツール）\\n- プロジェクト間のリソース移動ルール（稼働率調整は1週間前に申請）\\n- 専門スキル人材のプール管理（特定フレームワーク/ドメインの専門家リスト）\\n\\n3. 品質の標準化:\\n- 全プロジェクト共通の品質基準（コーディング規約、テスト基準、ドキュメント品質）\\n- テンプレートの統一（報告書、仕様書、テスト計画）\\n- 月次品質メトリクスの全案件比較\\n\\n4. ナレッジ管理:\\n- 案件ごとの教訓（Lessons Learned）を蓄積\\n- 月次勉強会（各BrSEが持ち回りで事例発表）\\n- FAQ・ベストプラクティス集の継続更新\\n\\n5. リスク管理:\\n- 全案件のリスク一覧を統合管理\\n- 共通リスク（為替変動、人員退職等）の全体対策\\n- エスカレーションルール：案件BrSE→リードBrSE→マネージャーの3段階",
    explanation: "3-5案件を同時管理するリードBrSEには、個別管理ではなくシステム的な管理体制が必要です。ダッシュボード、標準化、ナレッジ共有により、属人的な管理からチームとしての管理に移行します。信号管理は「今どこに注意を向けるべきか」を即座に判断できます。",
  },
  'brse-pm-010': {
    question: "「マイルストーン」とはプロジェクト管理において何を指しますか？",
    options: [
    "チームメンバーの名前",
    "プロジェクトの重要な節目（中間目標地点） — 進捗を評価し、次のフェーズへ進むための判断基準となる",
    "プログラミング言語の種類",
    "サーバーのスペック"
    ],
    answer: 1,
    explanation: "マイルストーンは納品日、設計完了日、テスト開始日など、遅延が許されない重要なポイントです。BrSEはマイルストーンから逆算してスケジュールを管理します。",
  },
  'brse-pm-011': {
    question: "プロジェクトのリスク管理において、「リスクの回避」と「リスクの軽減」の違いは何ですか？",
    options: [
    "どちらも同じ意味である",
    "「回避」はリスクそのものを無くすこと（例：難しい機能をカットする）、「軽減」は発生確率や影響を小さくすること（例：レビューを強化する）",
    "「回避」は無視すること、「軽減」は報告すること",
    "「軽減」の方が常に優れている"
    ],
    answer: 1,
    explanation: "リスク対策の4分類（回避、軽減、転嫁、受容）は試験によく出ます。BrSEは技術リスクを「軽減」し、過度な要求は「回避」を提案するなど、柔軟な対応が求められます。",
  },
  'brse-pm-012': {
    question: "プロジェクトの「変更管理」において、BrSEが行うべきでない行動はどれですか？",
    options: [
    "変更による影響範囲を技術的に調査する",
    "クライアントからの口頭での追加要求を、即座に「可能です」と引き受けてチームに実装させる",
    "変更に必要な追加工数を見積もる",
    "変更内容を構成管理ツールに記録する"
    ],
    answer: 1,
    explanation: "口頭での安請け合いは、後の「言った言わない」のトラブルや、チームの過負荷を招きます。必ず正式なプロセス（影響分析、見積もり、承認）を通すべきです。",
  },
  'brse-pm-013': {
    question: "「クリティカルパス」上にないタスクが遅延した場合の判断として、最も適切なのはどれですか？",
    options: [
    "プロジェクト全体の遅延に直結するので、すぐに全リソースを投入する",
    "バッファ（余裕時間）の範囲内であれば即時の危機ではないが、新たなクリティカルパスにならないか監視を強化する",
    "完全に無視して良い",
    "タスクを中止する"
    ],
    answer: 1,
    explanation: "クリティカルパス以外の遅延も、程度によってはそこが新しい「最長経路」になり、結果として全体を遅らせる可能性があります。これを「感度分析」の一環として注視する必要があります。",
  },
  'brse-pm-014': {
    question: "炎上プロジェクト（遅延が深刻で品質も悪い）に新しくリードBrSEとして投入されました。最初の1週間のアクションプランを作成してください。",
    answer: "アクションプラン：\\n1. 状況の可視化：未完了タスク(WBS)と残バグ数を整理し、本当の「Done」までの距離を測定する。\\n2. 優先順位の再設定：クライアントと交渉し、最優先機能(MVP)にリソースを集中させる。\\n3. コミュニケーションの強化：日次で進捗とブロック事項を共有する「War Room」を設置する。\\n4. 心理的ケア：疲弊したチームを鼓舞し、残業だけに頼らない効率的なリカバリー案（自動化、並行作業等）を導入する。",
    explanation: "炎上案件のリカバリーには、まず「正確な現状把握」と「取捨選択（スコープ調整）」が必要です。感情的にならず、データに基づいてクライアントと再合意を形成することが求められます。",
  },
  'brse-pm-015': {
    question: "「ステークホルダー分析」は、プロジェクトの開始時だけでなく、進行中も定期的に見直すべきである。",
    answer: "真",
    explanation: "プロジェクト中にクライアント側の担当者が変わったり、新しい部署が関与してきたりすることがあります。影響力の変化を常に把握しておくことが成功の鍵です。",
  },
  'brse-pm-016': {
    question: "プロジェクト憲章（Project Charter）を作成する主な目的は何ですか？",
    options: [
    "プロジェクトの予算を使い切るため",
    "プロジェクトの存在を正式に承認し、目的、主要なステークホルダー、責任者の権限を定義するため",
    "ソースコードの書き方を規定するため",
    "会議のスケジュールを決めるため"
    ],
    answer: 1,
    explanation: "憲章はプロジェクトの「憲法」のようなものです。これが曖昧だと、後で「そもそも何を達成するためのプロジェクトか」で揉めることになります。",
  },
  'brse-pm-017': {
    question: "分散アジャイル開発（日本とベトナム）において、スプリントの中断を防ぐためにリードBrSEが注力すべきことは何ですか？",
    options: [
    "全てのコードを自分でチェックする",
    "スプリントバックログの内容が「Definition of Ready（準備完了）」を満たすよう、事前のプロダクトバックログリファインメントを徹底する",
    "ベトナム側の休日を無くす",
    "開発ツールを最新のものに変える"
    ],
    answer: 1,
    explanation: "スプリント中に仕様が分からなくて止まることがオフショアでは多発します。事前に「Ready（開発可能）」な状態にまで仕様を落とし込んでおくことがリードBrSEの腕の見せ所です。",
  },
  'brse-pm-018': {
    question: "品質管理（QA）において、「バグ曲線（信頼性成長曲線）」が横ばい（フラット）になってきた時の解釈として正しいのはどれですか？",
    options: [
    "バグが全て無くなったので、すぐにリリースできる",
    "バグが出尽くした可能性があるが、単にテストが停滞している（テストケースが終わっただけ）可能性もあるため、テスト密度と合わせて判断する必要がある",
    "テストが失敗している",
    "開発者がバグを隠している"
    ],
    answer: 1,
    explanation: "曲線だけで判断するのは危険です。テストケース消化率との相関を見て、「バグが出にくくなった」のか「テストしていないから出ていない」のかを厳密に区別する必要があります。",
  },
  'brse-pm-019': {
    question: "既存の巨大なレガシープロジェクトの保守運用をベトナム側に移管（テイクオーバー）するための、6ヶ月のロードマップを作成してください。",
    answer: "移管ロードマップ：\\n1. 1-2ヶ月目（分析）：ドキュメントの解読、環境構築、シャドーイング（日本側の作業を観察）。\\n2. 3-4ヶ月目（共働）：簡単なバグ修正から開始。日本側のレビューを受けながら、ナレッジを吸収。 \\n3. 5ヶ月目（リバースシャドーイング）：ベトナム側が主体となり作業し、日本側がチェックする。\\n4. 6ヶ月目（安定化）：本番移管完了。定期的なヘルスチェックと保守プロセスの改善。",
    explanation: "レガシーシステムの移管はリスクが非常に高いです。段階的に責任の所在を移していく「フェーズド・テイクオーバー」が最も安全なアプローチです。",
  },
  'brse-pm-020': {
    question: "What is the \"Critical Path\" in project management and why should a BrSE care?",
    options: [
    "The path the project takes to the server room",
    "The longest sequence of dependent tasks that determines the shortest possible project duration",
    "A list of all team members\\' birthdays",
    "The most expensive software license in the project",
    ""
    ],
    answer: 1,
    explanation: "Any delay in a task on the critical path directly delays the project finish date. BrSEs must monitor these tasks closely since a delay in a \"technical design\" task (usually on the critical path) will push the entire delivery.",
  },
  'brse-pm-021': {
    question: "How do you handle \"Scope Creep\" when a Japanese client makes \"small\" informal requests during a meeting?",
    options: [
    "Accept them all to keep the client happy",
    "Politely listen",
    "document the request",
    "and explain that any change needs a formal impact assessment (cost",
    "time",
    "quality)",
    "Refuse immediately and walk out",
    "Ignore the request and hope they forget",
    ""
    ],
    answer: 1,
    explanation: "In Japanese business, \"small\" requests can accumulate into huge delays. Always acknowledge the request but insist on a formal change control process to maintain the project\\'s health and transparency.",
  },
  'brse-pm-022': {
    question: "What is the \"Iron Triangle\" of project management?",
    options: [
    "Scope",
    "Time",
    "Cost",
    "Quality",
    "Speed",
    "Price",
    "Code",
    "Test",
    "Deploy",
    "Manager",
    "Developer",
    "Client",
    ""
    ],
    answer: 0,
    explanation: "Project success is limited by the trade-offs between Scope (features), Time (deadlines), and Cost (resources). If you increase scope, you must also increase time or cost, or quality will suffer.",
  },
  'brse-pm-023': {
    question: "What is an \"Agile Release Train\" (ART) in scaled agile, often managed by a Release Train Engineer?",
    options: [
    "A physical train for commuters",
    "A long-lived team of Agile teams (~50-125 people) that increments value together",
    "An automated deployment pipeline",
    "A sprint planning tool",
    ""
    ],
    answer: 1,
    explanation: "ART is a key concept in SAFe (Scaled Agile Framework). It helps multiple teams stay synchronized on a shared mission and vision, delivering value every 8-12 weeks.",
  },
  'brse-pm-024': {
    question: "A WBS (Work Breakdown Structure) should focus on \"deliverables\" rather than \"activities\".",
    answer: "真",
    explanation: "A product-oriented WBS makes it easier to track progress and ensure that all necessary outputs are defined, whereas activity-oriented lists can miss small but vital tasks.",
  },
  'brse-pm-025': {
    question: "In EVM (Earned Value Management), what does an SPI of 0.8 indicate?",
    options: [
    "The project is ahead of schedule",
    "The project is on schedule",
    "The project is behind schedule (only 80% of the planned work has been completed)",
    "The project is over budget",
    ""
    ],
    answer: 2,
    explanation: "SPI (Schedule Performance Index) = EV / PV. A value less than 1.0 means the project is progressing slower than planned. BrSEs need to explain these metrics to clients during monthly reviews.",
  },
  'brse-pm-026': {
    question: "What is the difference between \"Resource Leveling\" and \"Resource Smoothing\"?",
    options: [
    "Leveling can delay the project finish date to stay within resource limits; Smoothing only adjusts within the existing float and doesn\\'t delay the finish date",
    "They are the same",
    "Leveling is for hardware",
    "Smoothing is for software",
    "Smoothing is always better",
    ""
    ],
    answer: 0,
    explanation: "Resource leveling is used when resources are strictly limited. Resource smoothing is used when the deadline is fixed but we want to avoid spikes and dips in team workload.",
  },
  'brse-pm-027': {
    question: "What is a \"Stakeholder Engagement Assessment Matrix\"?",
    options: [
    "A list of stakeholder phone numbers",
    "A tool to compare the current versus desired engagement levels of stakeholders (Unaware",
    "Resistant",
    "Neutral",
    "Supportive",
    "Leading)",
    "A performance review for the client",
    "A survey about project satisfaction",
    ""
    ],
    answer: 1,
    explanation: "This matrix helps the BrSE identify where communication efforts need to be focused. For example, moving a \"Resistant\" key stakeholder to \"Supportive\" is critical for project success.",
  },
  'brse-pm-028': {
    question: "What is a key activity during the \"Project Closure\" phase?",
    options: [
    "Deleteting all project files",
    "Conducting a \"Lessons Learned\" session to capture what went well and what didn\\'t for future projects",
    "Starting the next project immediately without a break",
    "Ignoring the final payment",
    ""
    ],
    answer: 1,
    explanation: "Lessons Learned (Post-Mortem) is vital for organizational growth. Capturing the specific challenges of an offshore collaboration helps avoid repeating the same mistakes in the next project.",
  },
  'brse-qt-001': {
    question: "ソフトウェアテストの「テストケース」に必ず含めるべき項目はどれですか？",
    options: [
    "テスト担当者の名前のみ",
    "テストID、テスト項目、前提条件、テスト手順、テストデータ、期待結果、実結果、合否判定",
    "ソースコードのコピー",
    "見積もり金額"
    ],
    answer: 1,
    explanation: "テストケースの必須要素：①テストID（管理番号）、②テスト項目（何をテストするか）、③前提条件（テスト実行前に必要な状態）、④テスト手順（ステップバイステップ）、⑤テストデータ（具体的な入力値）、⑥期待結果（正しい動作の定義）、⑦実結果（実際の動作）、⑧合否判定（OK/NG）。BrSEはテストケースをレビューし、日本語仕様との整合性を確認します。",
  },
  'brse-qt-002': {
    question: "「単体テスト」「結合テスト」「総合テスト」の違いは何ですか？",
    options: [
    "すべて同じテスト",
    "単体テスト：個々のモジュール/関数の動作確認、結合テスト：モジュール間の連携確認、総合テスト：システム全体の動作確認（本番に近い環境で）",
    "単体=日本、結合=ベトナム、総合=クライアントが行うテスト",
    "実施する人数の違い"
    ],
    answer: 1,
    explanation: "V字モデルとの対応：詳細設計↔単体テスト（UT）、基本設計↔結合テスト（IT）、要件定義↔総合テスト（ST）。オフショアでは通常、単体・結合テストをベトナム側、総合テスト・UATをクライアント側が実施します。BrSEはテスト計画の策定と結果の品質レビューを担当します。",
  },
  'brse-qt-003': {
    question: "バグ報告書には「期待される動作」と「実際の動作」の両方を記載する必要があります。",
    answer: "真",
    explanation: "バグ報告書の必須項目：①バグID、②タイトル（簡潔な要約）、③再現手順（ステップバイステップ）、④期待される動作、⑤実際の動作、⑥重要度（Critical/Major/Minor）、⑦環境情報（OS、ブラウザ、バージョン）、⑧スクリーンショット/動画。「動作がおかしい」だけでは不十分 — 開発者が再現し修正できるレベルの情報が必要です。",
  },
  'brse-qt-004': {
    question: "オフショア開発で品質問題が頻発する原因として最も多いものはどれですか？",
    options: [
    "ベトナムのエンジニアの技術力不足",
    "仕様の認識齟齬 — 日本語仕様書の曖昧な表現をベトナム側が異なる解釈で実装し、テストでも「実装通りに動く」ため検出されない",
    "使用する技術スタックの問題",
    "時差による影響"
    ],
    answer: 1,
    explanation: "品質問題の根本原因の70%以上は「仕様の認識齟齬」に起因します。BrSEの品質向上策：①仕様伝達時に具体例で確認、②開発着手前のプロトタイプレビュー、③テストケース作成時に仕様書との照合を実施、④クライアント視点でのテスト（「開発者が納得のテスト」ではなく「クライアントが満足するテスト」）。",
  },
  'brse-qt-005': {
    question: "日本のクライアントが要求する「テストエビデンス」とは何ですか？",
    options: [
    "テストが実施されたことを口頭で伝えること",
    "テスト実行の証拠 — スクリーンショット、テスト結果ログ、データベースの状態確認画面など、テストが正しく実行されたことを証明する資料",
    "テスト計画書のこと",
    "開発者の作業日報のこと"
    ],
    answer: 1,
    explanation: "テストエビデンスは日本のクライアントが重視する品質管理の要素です。エビデンスの種類：①画面キャプチャ（入力前/実行後）、②DBデータの確認結果、③ログファイルの該当部分、④API応答の内容。エビデンスの品質ポイント：日時が分かる、テストケースIDとの紐付けが明確、異常系テストもエビデンスを残す。BrSEはエビデンスの品質をレビューします。",
  },
  'brse-qt-006': {
    question: "「バグ密度（Bug Density）」とは何ですか？品質指標としてどう活用しますか？",
    options: [
    "バグの重要度のこと",
    "コード量（KLOC: 千行）あたりのバグ数 — 例えば5 bugs/KLOC。業界平均やプロジェクト過去実績と比較して品質レベルを客観的に評価する指標",
    "バグが集中している時間帯",
    "1日に報告されるバグの数"
    ],
    answer: 1,
    explanation: "バグ密度 = 総バグ数 / コード量(KLOC)。一般的な目安：開発中6-12 bugs/KLOC、リリース時0.5-3 bugs/KLOC。活用方法：①過去プロジェクトとの比較で品質トレンド把握、②テスト十分性の判断（バグ密度が極端に低い場合はテスト不足の可能性）、③モジュール間比較で品質のばらつき検出。",
  },
  'brse-qt-007': {
    question: "オフショアチームの品質を日本のクライアントに「見える化」するための品質レポートを設計してください。月次品質報告書の構成と含めるべきメトリクスを記述してください。",
    answer: "月次品質レポート構成:\\n\\n1. エグゼクティブサマリー:\\n- 品質ステータス: 🟢良好 / 🟡注意 / 🔴要対応\\n- 主要KPI: バグ密度、テストカバレッジ、納品物受入率\\n\\n2. テスト進捗:\\n- テスト実行率（実行済/計画テスト数）\\n- テスト合格率（合格/実行テスト数）\\n- グラフ: 日別テスト実行数と合格率の推移\\n\\n3. バグ分析:\\n- 総バグ数、新規/修正済/未修正の内訳\\n- 重要度別（Critical/Major/Minor）の分布\\n- バグ発生トレンド（増加/減少のグラフ）\\n- バグ密度: X bugs/KLOC\\n- バグ修正所要時間（平均、最大）\\n\\n4. 品質メトリクス:\\n- コードレビュー指摘件数と対応率\\n- 単体テストカバレッジ率\\n- 静的解析（SonarQube等）の結果\\n\\n5. クライアント指摘管理:\\n- クライアントフィードバック件数と対応状況\\n- 前月からの改善/悪化ポイント\\n\\n6. 改善活動:\\n- 今月の改善施策と効果\\n- 来月の改善計画\\n- 根本原因分析（Top 3バグの原因分析）",
    explanation: "日本のクライアントは「品質が大丈夫です」という定性的な報告では安心しません。数値とグラフで品質状態を可視化し、問題があれば原因分析と改善策をセットで報告することが信頼構築に繋がります。品質レポートは「怒られるためのもの」ではなく「信頼を貯金するツール」です。",
  },
  'brse-qt-008': {
    question: "日本のクライアントが「受入テスト（UAT）で多数のバグが見つかった」と不満を伝えてきた場合、BrSEの適切な対応はどれですか？",
    options: [
    "「それは仕様変更です」と反論する",
    "謝罪した上で、バグが流出した根本原因を分析し、テストプロセスの改善策（テストケースの見直し、レビュー強化、テストカバレッジの向上）を具体的に提示し、再発防止を約束する",
    "バグを全て修正すれば問題ない",
    "QAチームを責める"
    ],
    answer: 1,
    explanation: "UAT段階でのバグ多発は信頼を大きく損ないます。対応：①まず誠実に謝罪、②バグを分析（仕様理解の問題？テスト不足？環境差異？）、③根本原因の改善策を書面で提示、④改善策の実施スケジュールを約束、⑤次のイテレーションで改善結果を報告。「改善する姿勢」を示すことが信頼回復の第一歩です。",
  },
  'brse-qt-009': {
    question: "リードBrSEとして、組織全体の品質文化を構築するために最も効果的なアプローチはどれですか？",
    options: [
    "厳しい罰則制度を導入する",
    "品質は「テスト工程で確保するもの」ではなく「全工程で作り込むもの」という文化を醸成 — 設計レビュー、コーディング規約の徹底、コードレビュー、CI/CDパイプラインの品質ゲート、品質メトリクスの可視化と継続改善",
    "品質管理は外部の専門機関に委託する",
    "品質問題が発生してから対応する"
    ],
    answer: 1,
    explanation: "品質文化の構築：①「品質はコストではなく投資」のマインドセット浸透、②上流工程（設計レビュー）での品質作り込み、③自動化（CI/CD、静的解析、自動テスト）で品質ゲート設置、④ふりかえりでの品質問題の振り返りと改善、⑤品質成果の「見える化」と称賛。罰則ではなく、品質を上げることが自然に行われる環境を作ることが持続的改善の鍵です。",
  },
  'brse-qt-010': {
    question: "「リグレッションテスト（回帰テスト）」とは何ですか？",
    options: [
    "新しい機能を追加するテスト",
    "プログラムを修正した際、その影響で他の正常だった部分にバグ（退化）が発生していないかを確認するテスト",
    "処理速度を測るテスト",
    "デザインの美しさを確認するテスト"
    ],
    answer: 1,
    explanation: "修正や追加によって「以前は動いていたものが動かなくなる」のを防ぐのがリグレッションテストです。BrSEは影響範囲を特定し、最小限かつ効果的なリグレッションテスト範囲を提案します。",
  },
  'brse-qt-011': {
    question: "「境界値分析（Boundary Value Analysis）」でテストすべき値はどれですか？（例：1以上100以下の入力）",
    options: [
    "50のような平均的な値",
    "0",
    "1",
    "100",
    "101 のような境界とその直前直後の値",
    "適当なランダムな数字",
    "999のような明らかに大きな数字"
    ],
    answer: 1,
    explanation: "バグは境界付近で最も発生しやすいです（不等号のミスなど）。BrSEはテストケースレビュー時に、境界値が正しく網羅されているかを確認します。",
  },
  'brse-qt-012': {
    question: "日本のクライアントが「テストカバレッジ（網羅率）」にこだわる主な理由は何ですか？",
    options: [
    "テストの総数を増やしたいため",
    "テストが「漏れなく」行われたことを客観的な数値で証明し、品質の安心感を得たいため",
    "開発者のサボりを防止するため",
    "レポートの見た目を良くするため"
    ],
    answer: 1,
    explanation: "「どれだけテストしたか」よりも「どれだけテストしていないか」を日本のクライアントは気にします。C0（命令網羅）、C1（分岐網羅）などの指標で網羅性を説明できることが重要です。",
  },
  'brse-qt-013': {
    question: "「バグの偏在（バグは特定のモジュールに集中する）」という原則に基づき、BrSEがとるべき行動はどれですか？",
    options: [
    "バグが多いモジュールの開発者を交代させる",
    "バグが多発している箇所を特定し、その周辺や関連モジュールのテストを重点的に強化、またはリファクタリングを提案する",
    "バグが少ないモジュールのテストを増やす",
    "全モジュールのテスト時間を均等にする"
    ],
    answer: 1,
    explanation: "「20：80の法則（パレートの法則）」と同様、特定の複雑な箇所にバグは集中します。BrSEは統計的にリスクを判断し、リソースを最適配分します。",
  },
  'brse-qt-014': {
    question: "「デグレード（先祖返り）が多発している」というプロジェクトの品質改善策を提案してください。",
    answer: "改善策：\\n1. 構成管理の徹底：Gitフローのルールを見直し、コンフリクト解消のレビュープロセスを厳格化する。\\n2. 自動リグレッションテストの導入：クリティカルな機能に対して自動テスト(E2E)を組み込み、CI/CDで毎プッシュごとに回す。\\n3. リリース前チェックシート：マージ前、リリース前にデグレードがないかを確認する項目を必須化する。\\n4. インシデント分析：なぜデグレードが起きたのかの原因を特定し、再発防止策をチーム全体で共有する。",
    explanation: "デグレードは技術的なミスだけでなく、プロセスの不備で起こります。自動化とプロセスの両面からアプローチすることが必要です。",
  },
  'brse-qt-015': {
    question: "テストの結果が「NG」だった場合、スクリーンショットなどの証拠（エビデンス）を残す必要があるが、「OK」の場合は不要である。",
    answer: "偽",
    explanation: "「OK」の証拠こそが、後でバグが出た際に「あの時は確かに動いていた」と証明するために重要です。日本のクライアントはOKのエビデンスも同様に重視します。",
  },
  'brse-qt-016': {
    question: "デシジョンテーブル（決定表）を使用するのが最も効果的なケースはどれですか？",
    options: [
    "画面遷移が複雑な場合",
    "複数の条件の組み合わせによって、システムのアクションが複雑に変化するロジックを確認する場合",
    "データ量が多い場合",
    "レスポンス速度を確認する場合"
    ],
    answer: 1,
    explanation: "条件の組み合わせによる漏れを防ぐにはデシジョンテーブルが最適です。BrSEは仕様書の複雑なロジックをデシジョンテーブルに変換して、テストケースの網羅性を担保します。",
  },
  'brse-qt-017': {
    question: "リードBrSEとして、ベトナム側QAチームのスキルアップを図るために導入すべき制度はどれですか？",
    options: [
    "バグを見つけた数に応じてボーナスを出す",
    "「バグレポートの品質」を相互にレビューし合い、再現手順や原因分析の解像度を高める文化を作る",
    "QAチームと開発チームを完全に隔離する",
    "テストケースを全て日本語で書かせる"
    ],
    answer: 1,
    explanation: "単にバグを多く見つけるのではなく、「質の高いレポート」を書くことが開発の効率を上げ、プロジェクト全体の品質向上に寄与します。",
  },
  'brse-qt-018': {
    question: "静的解析ツール（SonarQubeなど）を導入する主なメリットは何ですか？",
    options: [
    "システムの実行速度が速くなる",
    "ソースコードを動かさずに解析し、コードの重複、複雑度、脆弱性、コーディング規約違反をプログラムで自動検出できる",
    "テストケースを自動で作成してくれる",
    "ドキュメントを自動で生成する"
    ],
    answer: 1,
    explanation: "人間によるレビューには限界があります。ツールで自動的にチェックできる部分は自動化し、人間はロジックなどの複雑な部分のレビューに集中すべきです。",
  },
  'brse-qt-019': {
    question: "リードBrSEとして、10プロジェクトが並行して走る部署の「品質ガバナンス（統制）」ルールを策定してください。",
    answer: "品質ガバナンスルール：\\n1. フェーズゲート審査：各工程（設計、実装、テスト）の終了時に、標準チェックリストを満たしているかリードBrSEが承認する。\\n2. 標準メトリクス報告：全プロジェクト共通の書式（進捗率、バグ密度、レビュー指摘数）で週次報告を義務化する。\\n3. 横断的QAレビュー：他プロジェクトのBrSEが外部の目で品質レビューを行う「クロスレビュー制度」の導入。\\n4. 品質アラート基準：バグ発生率が異常に高い（または低い）場合に、即座に介入する閾値を設定する。",
    explanation: "プロジェクトごとに品質がバラバラになるのを防ぐため、最低限守るべき「全社基準」を設け、それを客観的にチェックする仕組みが必要です。",
  },
  'brse-qt-020': {
    question: "What is \"Regression Testing\" and why is it vital in offshore maintenance projects?",
    options: [
    "Testing only the new features",
    "Re-running previously passed tests to ensure that new changes or bug fixes haven\\'t broken existing functionality",
    "Testing the database performance",
    "A manual test of the UI only",
    ""
    ],
    answer: 1,
    explanation: "Regression testing ensures \"side effects\" are caught. In offshore projects with frequent updates, automated regression suites are essential to maintain client trust and prevent old bugs from reappearing.",
  },
  'brse-qt-021': {
    question: "What is the \"Seven Testing Principles\" from ISTQB that a BrSE should advocate?",
    options: [
    "Always test everything at 7 PM",
    "Testing shows presence of bugs (not absence)",
    "Exhaustive testing is impossible",
    "Early testing",
    "Defect clustering",
    "Pesticide paradox",
    "Testing is context dependent",
    "Absence-of-errors fallacy",
    "Seven different types of browsers for testing",
    "QA",
    "Dev",
    "BA",
    "PO",
    "PM",
    "CEO",
    "User",
    ""
    ],
    answer: 1,
    explanation: "These principles help manage client expectations. For example, \"Early testing\" saves costs, and \"Testing is context dependent\" explains why we test a banking app differently than a blog.",
  },
  'brse-qt-022': {
    question: "What is \"Exploratory Testing\" and when is it useful?",
    options: [
    "Testing by exploring the server files",
    "Unstructured testing where the tester \"explores\" the app without pre-defined scripts to find edge cases",
    "Testing if the app works in different countries",
    "A type of automated load testing",
    ""
    ],
    answer: 1,
    explanation: "Exploratory testing relies on the tester\\'s experience and creativity. It is excellent for finding complex bugs that scripted tests might miss, often performed before a major release.",
  },
  'brse-qt-023': {
    question: "What is \"Static Analysis\" in quality assurance?",
    options: [
    "Running the app and checking for crashes",
    "Examining the code",
    "requirements",
    "or design without executing the program (e.g.",
    "linting",
    "code reviews)",
    "Testing the app on a static IP address",
    "A test that never changes",
    ""
    ],
    answer: 1,
    explanation: "Static analysis catches errors early. Code reviews and automated linting tools find syntax issues, security vulnerabilities, and logic flaws before the code even reaches the test environment.",
  },
  'brse-qt-024': {
    question: "A \"Defect Density\" metric measures the number of bugs found per unit of size (e.g., per 1,000 lines of code).",
    answer: "真",
    explanation: "Defect density helps identify \"problem areas\" in the code. If one module has a much higher density than others, it may need refactoring or more intensive testing.",
  },
  'brse-qt-025': {
    question: "What is the \"Shift-Left\" testing approach?",
    options: [
    "Testing only the left side of the screen",
    "Starting testing activities as early as possible in the lifecycle (e.g.",
    "reviewing requirements before coding)",
    "Moving the deadline to an earlier date",
    "Replacing testers with developers",
    ""
    ],
    answer: 1,
    explanation: "Finding a bug during requirement review costs 100x less than finding it in production. Shift-left emphasizes prevention over detection.",
  },
  'brse-qt-026': {
    question: "What is the primary difference between Black-box and White-box testing?",
    options: [
    "Black-box uses dark mode; White-box uses light mode",
    "Black-box tests functionality without looking at the internal code; White-box tests internal structure and logic of the code",
    "Black-box is for hardware; White-box for software",
    "They are the same",
    ""
    ],
    answer: 1,
    explanation: "BrSEs often handle Black-box (User perspective) while Tech Leads focus on White-box (Unit tests, code paths). Both are necessary for full coverage.",
  },
  'brse-qt-027': {
    question: "What is the main goal of \"UAT\" (User Acceptance Testing)?",
    options: [
    "To find as many bugs as possible",
    "To verify that the system meets the business requirements and is ready for use by the end-users",
    "To test the server performance",
    "To finish the project faster",
    ""
    ],
    answer: 1,
    explanation: "UAT isn\\'t about finding minor bugs, but about \"Acceptance\". If the user can complete their primary tasks, the system is accepted, even if some small polish is needed.",
  },
  'brse-qt-028': {
    question: "What is \"Statement Coverage\" vs \"Condition Coverage\" in white-box testing?",
    options: [
    "Statement is about sentences; Condition is about weather",
    "Statement coverage ensures every line of code is executed; Condition coverage ensures every logical path in an IF statement is tested (True and False)",
    "They are the same metric",
    "Only statement coverage matters",
    ""
    ],
    answer: 1,
    explanation: "100% statement coverage doesn\\'t mean 100% logic coverage. You might execute every line but still miss a bug that only occurs when a specific condition is false.",
  },
  'brse-rm-001': {
    question: "プロジェクトリスクとは何ですか？",
    options: [
    "プロジェクトの予算のこと",
    "プロジェクトの目標達成に影響を与える可能性のある不確実な事象 — 発生すると納期、品質、コストに悪影響を及ぼす",
    "プロジェクトで使用する技術のこと",
    "プロジェクトメンバーの評価のこと"
    ],
    answer: 1,
    explanation: "リスクの定義：「まだ起きていないが、起きる可能性のある問題」。リスク ≠ 問題（問題は既に発生している）。リスクの特性：①発生確率がある、②発生した場合の影響度がある、③事前対策が可能。BrSEとして、リスクを事前に識別し、対策を立てておくことで、問題の発生を防ぎます。",
  },
  'brse-rm-002': {
    question: "リスクの「発生確率」と「影響度」のマトリクスは何のために使いますか？",
    options: [
    "チームメンバーの評価のため",
    "リスクの優先順位を決めるため — 発生確率が高く影響度も高いリスクを最優先で対策する",
    "プロジェクトの予算を計算するため",
    "テストケースの数を決めるため"
    ],
    answer: 1,
    explanation: "リスクマトリクスは縦軸に影響度（高/中/低）、横軸に発生確率（高/中/低）を配置し、各リスクをマッピングします。高確率×高影響 = 最優先対策、低確率×低影響 = 監視のみ。BrSEはプロジェクト開始時にリスク一覧を作成し、マトリクスで優先順位を付け、対策を計画します。",
  },
  'brse-rm-003': {
    question: "リスク管理は、プロジェクト開始時に1回だけ行えば十分です。",
    answer: "偽",
    explanation: "リスク管理は継続的プロセスです。プロジェクト開始時にリスクを洗い出し、フェーズの移行時や状況変化時に再評価します。新しいリスクが発見されたら追加し、既存リスクのステータスを更新します。週次や月次のリスクレビューを定例会議に組み込むことが推奨されます。",
  },
  'brse-rm-004': {
    question: "オフショア開発特有のリスクとして最も重要なものはどれですか？",
    options: [
    "技術的リスクのみ",
    "コミュニケーションリスク（言語・文化・時差による認識齟齬）、人材リスク（メンバー離職）、品質リスク（仕様理解不足によるバグ）、為替リスク（通貨変動によるコスト変動）",
    "天候リスクのみ",
    "法律リスクのみ"
    ],
    answer: 1,
    explanation: "オフショア特有リスク：①コミュニケーション（仕様の認識齟齬、文化差、時差）→ 対策: Q&A管理、定例会議、用語集 ②人材（キーメンバー離職、スキルギャップ）→ 対策: ナレッジ共有、バックアップ体制 ③品質（日本品質基準との差異）→ 対策: コードレビュー、テストエビデンス ④為替（VND/JPYの変動）→ 対策: 長期契約での為替条件明記",
  },
  'brse-rm-005': {
    question: "リスク対応戦略の4つのオプションとして正しいものはどれですか？",
    options: [
    "A/B/C/Dの4段階評価",
    "回避（Avoid）：リスク要因を除去、軽減（Mitigate）：確率や影響を下げる、転嫁（Transfer）：第三者に移転、受容（Accept）：リスクを認識した上で許容する",
    "上/中/下/無の4段階",
    "開発/テスト/管理/保守の4フェーズ"
    ],
    answer: 1,
    explanation: "リスク対応の例：①回避: 技術リスクが高い新技術の採用を見送り、実績のある技術を選択 ②軽減: メンバー離職リスクに対し、クロストレーニングとドキュメント整備 ③転嫁: セキュリティリスクに対し、専門のセキュリティ企業に脆弱性検査を委託 ④受容: 発生確率が低く影響も小さいリスクは現状監視のみ",
  },
  'brse-rm-006': {
    question: "オフショアプロジェクトのリスク登録簿（Risk Register）を設計してください。含めるべき項目と管理方法を記述してください。",
    answer: "リスク登録簿の設計:\\n\\n項目構成:\\n| No | カテゴリ | リスク内容 | 発生確率(1-5) | 影響度(1-5) | リスクスコア | 対策 | 担当者 | 期限 | ステータス | 備考 |\\n\\nカテゴリ例:\\n- 仕様（仕様変更、仕様の曖昧さ）\\n- 技術（新技術、パフォーマンス、セキュリティ）\\n- 人材（離職、スキル不足、リソース不足）\\n- コミュニケーション（言語、時差、文化差）\\n- 外部（為替、法規制、サードパーティ依存）\\n\\n管理方法:\\n1. プロジェクト開始時に初期洗い出し（チーム全員参加）\\n2. 週次定例でリスクレビュー（新規追加、ステータス更新）\\n3. リスクスコア = 確率 × 影響度\\n4. スコア15以上 → 即座に対策実行\\n5. スコア10-14 → 対策計画を策定\\n6. スコア9以下 → 監視（ウォッチリスト）\\n7. 月次でクライアントにTOP5リスクを報告",
    explanation: "リスク登録簿は「生きた文書」です。作って棚に置いておくだけでは意味がありません。週次レビューで更新し、新しいリスクを追加し、対策の進捗を確認します。日本のクライアントにリスク報告をすることで、「先を見て管理している」という信頼感を与えます。",
  },
  'brse-rm-007': {
    question: "プロジェクトの途中でキーメンバー（テックリード）が突然退職しました。BrSEとしてどう対応すべきですか？",
    options: [
    "代わりの人を採用するまで待つ",
    "①即座にクライアントに報告（影響評価と暫定対策付き）②ナレッジ移管の最大化（引き継ぎ期間の確保）③チーム内でのタスク再配分④代替メンバーのアサイン⑤スケジュールへの影響の再評価と調整提案",
    "チームが自然に適応するのを待つ",
    "このリスクは予見できなかったので仕方がない"
    ],
    answer: 1,
    explanation: "キーメンバー退職は高確率で発生するリスクです。事前対策：①ナレッジの属人化防止（ドキュメント、ペアプログラミング）、②バックアップ人材の育成、③引き継ぎ期間を確保する契約上の取り決め。事後対策：早期報告、迅速なナレッジ移管、影響の最小化。「予見できなかった」ではなく、事前対策をしていたかが問われます。",
  },
  'brse-rm-008': {
    question: "「コンティンジェンシープラン（Contingency Plan）」とは何ですか？",
    options: [
    "通常のプロジェクト計画",
    "リスクが実際に発生した場合に発動する事前準備済みの代替計画 — 「もし〇〇が起きたら、△△を実行する」という形で事前に策定しておく",
    "プロジェクトを中止する計画",
    "予算を追加する計画"
    ],
    answer: 1,
    explanation: "コンティンジェンシープランの例：①サーバー障害 → バックアップ環境への切り替え手順を準備 ②キーメンバー退職 → 引き継ぎドキュメントと代替候補者リストを維持 ③納期遅延 → 回復シナリオ（増員、スコープ縮小、並行作業）を事前検討 ④セキュリティインシデント → インシデント対応フローを準備。「起きてから考える」のではなく「起きる前に備える」のがプロの仕事です。",
  },
  'brse-rm-009': {
    question: "リードBrSEとして、複数オフショアプロジェクトの統合リスク管理フレームワークを設計してください。共通リスクの管理と個別プロジェクトのリスク報告を含めてください。",
    answer: "統合リスク管理フレームワーク:\\n\\n1. リスクガバナンス体制:\\n- リスクオーナー: リードBrSE（統合管理）\\n- 各案件リスク担当: 各案件BrSE\\n- エスカレーション先: マネージャー/CTO\\n\\n2. 共通リスクカタログ:\\n- 過去の全案件から発生したリスクをカテゴリ別にDB化\\n- 新規案件開始時にカタログからリスクをスクリーニング\\n- カテゴリ: 仕様、技術、人、コミュニケーション、外部、財務\\n\\n3. 統合リスクダッシュボード:\\n- 全案件のTOP3リスクを一覧表示\\n- リスクスコアのトレンドグラフ（改善/悪化の可視化）\\n- 信号管理: 🔴(3件以上高リスク) 🟡(1-2件) 🟢(なし)\\n\\n4. リスクレビュープロセス:\\n- 各案件: 週次でリスクレビュー（BrSE+TL）\\n- 全体: 月次で統合リスクレビュー（全BrSE参加）\\n- 高リスク案件: 緊急レビュー（発生時即座）\\n\\n5. 教訓の蓄積:\\n- リスクが顕在化した場合のポストモーテム実施\\n- 教訓をカタログに反映（再発防止）\\n- 四半期ごとに「リスク管理振り返り」会議\\n\\n6. KPI:\\n- リスク事前識別率（顕在化前に識別された割合）目標: 80%以上\\n- 重大インシデント数の推移（月次）\\n- 対策実施率（計画した対策の実行率）",
    explanation: "統合リスク管理の価値は、個別案件の教訓を組織全体で共有し、同じ失敗を繰り返さないことです。リスクカタログは「組織の記憶」として機能し、新規案件で「このリスクは過去にも発生した」と事前警告できます。",
  },
  'brse-rm-010': {
    question: "「リスクの識別」フェーズで行うべきことは何ですか？",
    options: [
    "リスクを無視すること",
    "プロジェクトに影響を与える可能性のあるリスクを洗い出し、その特性（何が起きるか、なぜ起きるか）を文書化すること",
    "リスクの責任者だけを決めること",
    "予算を増やすこと"
    ],
    answer: 1,
    explanation: "識別はリスク管理の第一歩です。ブレインストーミングやチェックリストを使い、過去の教訓を活かして漏れなく洗い出すことが重要です。",
  },
  'brse-rm-011': {
    question: "リスクの「転嫁（Transfer）」の代表的な例はどれですか？",
    options: [
    "プロジェクトを中止する",
    "保険への加入や、専門業者へのアウトソーシング、契約書での免責条項の設定など、リスクの影響を第三者に移すこと",
    "リスクを小さくする努力をする",
    "リスクが発生しないと信じる"
    ],
    answer: 1,
    explanation: "自社で負いきれないリスク（例：サイバー攻撃による賠償、特殊な技術課題）を外部に分散させる戦略です。",
  },
  'brse-rm-012': {
    question: "「ウォッチリスト（Watch List）」に登録されたリスクはどう管理すべきですか？",
    options: [
    "二度と見なくて良い",
    "優先度は低いが、状況が変化して重大なリスクにならないか、定期的なレビューの中で継続的に監視する",
    "すぐに削除する",
    "全リソースを投入して対策する"
    ],
    answer: 1,
    explanation: "今は小さくても、将来大きくなる可能性があるリスクは捨てずに「監視対象」として残しておきます。",
  },
  'brse-rm-013': {
    question: "「未知のリスク（想定外の事態）」に対応するための予算や期間を何と呼びますか？",
    options: [
    "予備費",
    "マネジメント・リザーブ（Management Reserve）",
    "コンティンジェンシー・リザーブ（Contingency Reserve）",
    "ポケットマネー"
    ],
    answer: 1,
    explanation: "コンティンジェンシーは「既知の未知（識別済みのリスク）」用、マネジメント・リザーブは「未知の未知（識別できなかった事態）」用です。",
  },
  'brse-rm-014': {
    question: "日本のクライアントから「納期は絶対に変えられないが、追加要件も全て入れてほしい」と言われました。どうリスクを管理し、交渉しますか？",
    answer: "リスク管理と交渉戦略：\\n1. トレードオフの可視化：スコープ、納期、品質、コストの四角形（プロジェクトの鉄の三角形）を用いて、追加要件が他の要素に与える影響を数値化する。\\n2. 優先順位付け（MoSCoW法）：全要件をMust/Should/Could/Wontに分け、納期内にMustを完遂し、他はフェーズ分けすることを提案する。\\n3. 追加リソースのリスク：増員によるコミュニケーションコスト増と教育期間のロスを説明する。\\n4. 合意形成：完全な「Yes」ではなく、「この条件（優先順位）なら可能」というカウンタープロポーザルを出す。",
    explanation: "クライアントの無理な要求をそのまま受けるのは最大のリスクです。論理的なデータと代替案で「共創的」な解決を目指すのがシニアBrSEの役割です。",
  },
  'brse-rm-015': {
    question: "リスクが発生してしまった場合、それは「インシデント（問題）」となり、リスク管理表から削除して問題管理表(Issue Log)へ移行させる。",
    answer: "真",
    explanation: "発生した瞬間にそれは「リスク（可能性）」ではなく「問題（事実）」になります。管理の場所を移して、解決に向けたアクションを追跡します。",
  },
  'brse-rm-016': {
    question: "感度分析（Sensitivity Analysis）をプロジェクトリスクで行う主な目的は何ですか？",
    options: [
    "感情を分析するため",
    "どの不確実な要素（変量）がプロジェクトの結果に最も大きな影響を与えるかを特定するため（例：一つの遅延が全体に波及する度合い）",
    "メンバーのやる気を測るため",
    "パソコンの故障率を調べるため"
    ],
    answer: 1,
    explanation: "「どこが一番の急所か」を知ることで、限られたリソースを最も効果的な対策に集中させることができます。",
  },
  'brse-rm-017': {
    question: "リードBrSEとして、クライアントとの「リスク共有」において最も避けるべき態度はどれですか？",
    options: [
    "悪い情報を早期に伝えること",
    "「多分大丈夫です」と曖昧に答え、リスクが顕在化（問題化）するまで隠しておくこと",
    "対策案をセットで提示すること",
    "リスクの影響範囲を正確に示すこと"
    ],
    answer: 1,
    explanation: "「Bad News First」が鉄則です。日本のクライアントにとって最悪なのは「直前での報告」です。早く言えば協力が得られますが、遅いと不信感に繋がります。",
  },
  'brse-rm-018': {
    question: "リスク対応後の「二次リスク（Secondary Risk）」とは何ですか？",
    options: [
    "二番目に重大なリスク",
    "あるリスク対策を実施した結果として、新たに発生してしまうリスク（例：増員対策により、教育コストと認識齟齬のリスクが増える）",
    "二回目に起きるリスク",
    "予備のリスク"
    ],
    answer: 1,
    explanation: "良かれと思ってやった対策が、別の問題を引き起こすことがあります。対策を立てる際には、この二次リスクまで考慮する必要があります。",
  },
  'brse-rm-019': {
    question: "リードBrSEとして、プロジェクト終了後に行う「ポストモーテム（事後分析）」におけるリスク管理の振り返り項目を策定してください。",
    answer: "ポストモーテム・振り返り項目：\\n1. 把握率：事前に識別できていたリスクは全体の何％だったか？\\n2. 対策の有効性：実行した対策は実際に効果があったか？（空振りではなかったか）\\n3. 顕在化の予兆：問題が起きる前に「予兆（トリガー）」を検知できていたか？\\n4. 影響の見積精度：想定していた影響度と、実際の影響度に乖離はなかったか？\\n5. ナレッジ化：このプロジェクト特有だったリスクと、他案件でも起きうる共通リスクを整理したか？",
    explanation: "振り返ることで、組織のリスク感度が上がり、次のプロジェクトの成功率が高まります。失敗を責めるのではなく、学習の機会と捉えます。",
  },
  'brse-rs-001': {
    question: "日本のシステム開発における「要件定義書」の役割として正しいものはどれですか？",
    options: [
    "プログラムのソースコードをまとめた文書",
    "クライアントの業務要件やシステムに求める機能・非機能要件を定義した文書 — 開発の出発点",
    "開発者の評価シート",
    "テスト結果のレポート"
    ],
    answer: 1,
    explanation: "要件定義書は「何を作るか」を定義する最上位の文書です。業務フロー、機能要件、非機能要件（性能、セキュリティ等）、制約事項を記載します。BrSEはこの文書を正確に理解し、開発チームに伝達する必要があります。",
  },
  'brse-rs-002': {
    question: "「基本設計書」と「詳細設計書」の違いは何ですか？",
    options: [
    "同じ内容の異なるバージョン",
    "基本設計書はシステム全体の構造・画面遷移・DB設計を記述（WHAT）、詳細設計書はモジュール内部のロジック・アルゴリズムを記述（HOW）",
    "基本設計書は日本語、詳細設計書は英語で書く",
    "基本設計書はクライアント作成、詳細設計書は開発者作成"
    ],
    answer: 1,
    explanation: "基本設計（外部設計）: システム全体のアーキテクチャ、画面設計、DB設計、API設計、画面遷移 — ユーザーから見える部分。詳細設計（内部設計）: 各モジュールの処理ロジック、クラス設計、シーケンス図 — 開発者向けの詳細仕様。BrSEは特に基本設計書の理解が重要です。",
  },
  'brse-rs-003': {
    question: "日本の仕様書は一度確定したら変更されることはありません。",
    answer: "偽",
    explanation: "仕様変更は日常的に発生します。重要なのは変更管理プロセスです：①変更要求の受領→②影響範囲分析→③工数・スケジュールへの影響見積もり→④クライアント承認→⑤設計書・テスト計画の更新→⑥実装。BrSEは変更管理を正式なプロセスで行い、口頭指示だけで変更しないことが重要です。",
  },
  'brse-rs-004': {
    question: "日本の仕様書でよく使われる「CRUD表」とは何ですか？",
    options: [
    "コスト管理の表",
    "各画面・機能がデータに対してCreate（作成）、Read（読取）、Update（更新）、Delete（削除）のどの操作を行うかを一覧にした表",
    "チーム体制表",
    "テストケース一覧表"
    ],
    answer: 1,
    explanation: "CRUD表（CRUD Matrix）はデータと機能の関係を可視化します。縦軸にデータエンティティ（テーブル）、横軸に機能/画面を配置し、各セルにC/R/U/Dを記入します。これにより：①データの整合性確認、②漏れている機能の発見、③影響範囲分析が可能になります。BrSEはCRUD表を基にデータフローを理解します。",
  },
  'brse-rs-005': {
    question: "日本語の画面仕様書から以下の情報を読み取り、ベトナム開発チーム向けの開発指示書に変換してください：「ユーザー登録画面 — 氏名（必須）、メールアドレス（必須・形式チェック）、パスワード（必須・8文字以上・英数字混在）、確認用パスワード」",
    answer: "User Registration Screen Specification:\\n\\n| Field | Type | Required | Validation Rules | Error Message |\\n|-------|------|----------|-----------------|---------------|\\n| Full Name | text input | ✅ | Max 100 chars",
    explanation: "日本語仕様書は機能を簡潔に記述しますが、開発チーム向けには具体的なバリデーションルール、エラーメッセージ、画面動作を明確にする必要があります。BrSEは仕様の「行間」を読み、開発者が迷わないレベルまで詳細化します。",
  },
  'brse-rs-006': {
    question: "日本の仕様書における「非機能要件」として適切なものはどれですか？",
    options: [
    "ユーザー登録機能",
    "画面レスポンスタイムは3秒以内、同時接続ユーザー数1000人対応、データ暗号化（AES-256）、99.9%の可用性",
    "CSV出力機能",
    "帳票印刷機能"
    ],
    answer: 1,
    explanation: "非機能要件（NFR）のカテゴリ：性能（応答時間、スループット）、信頼性（可用性99.9%、障害復旧時間）、セキュリティ（暗号化、認証）、拡張性（同時接続数、データ量）、保守性（ドキュメント、コード品質）。BrSEは非機能要件を見落としがちですが、これらがシステム品質を決めます。",
  },
  'brse-rs-007': {
    question: "日本のクライアントから受領した仕様書に曖昧な点が多い場合、BrSEとしてのQ&A（質問管理）プロセスを設計してください。",
    answer: "Q&Aプロセス設計:\\n\\n1. 仕様書レビューフェーズ（1-2日）:\\n- BrSE+技術リード+QAが仕様書を精読\\n- 各自が疑問点をQ&Aシート（Excel）に記録\\n- カテゴリ分類: 仕様不明、矛盾、前提条件不明、非機能要件不足\\n\\n2. Q&Aシートの構成:\\n- No. | カテゴリ | 該当箇所（ページ・項番）| 質問内容 | 提案（BrSEの解釈案）| 回答 | 回答者 | 日付 | ステータス\\n- 「提案」列が重要: 「AとBどちらですか？」ではなく「Aと理解していますが合っていますか？」と自分の解釈を示す\\n\\n3. Q&A会議（週1-2回）:\\n- 質問を優先度順に確認\\n- クリティカル（開発着手を阻害）を先に解決\\n- 回答は必ずQ&Aシートに記録（口頭だけにしない）\\n\\n4. 回答のフィードバック:\\n- 回答を基に仕様書の補足資料を作成\\n- 開発チームへの共有（Q&Aシートの翻訳版）\\n- 影響がある場合は見積もり・スケジュールの修正\\n\\n5. クローズ管理:\\n- 未回答のQ&Aを週次で追跡\\n- 回答待ちが開発を阻害する場合はエスカレーション\\n- 全Q&Aクローズをマイルストーンに設定",
    explanation: "曖昧な仕様に対して「分からないまま進める」のが最大のリスクです。構造化されたQ&Aプロセスにより、曖昧さを体系的に排除します。「提案（自分の解釈）」を示すことで、クライアントは「はい/いいえ」で回答でき、回答効率が上がります。",
  },
  'brse-rs-008': {
    question: "日本の仕様書で「テーブル定義書」を読む際、BrSEが特に注意すべき項目はどれですか？",
    options: [
    "テーブル名の英語化のみ",
    "NULL許容/NOT NULL制約、外部キー関連、インデックス設計、データ型とサイズ、初期値（デフォルト値）、文字コード — これらがプログラム実装に直接影響する",
    "テーブルの色分けのみ",
    "作成日時のみ"
    ],
    answer: 1,
    explanation: "テーブル定義書の重要項目：①NOT NULL制約（入力必須とバリデーションに影響）、②外部キー（テーブル間の関係、JOINクエリに影響）、③インデックス（検索性能に影響）、④データ型・サイズ（VARCHAR(50) vs TEXT等）、⑤デフォルト値（初期データの挿入に影響）、⑥文字コード（日本語対応でUTF-8が標準）。",
  },
  'brse-rs-009': {
    question: "リードBrSEとして、日本のクライアントとアジャイル開発を行う場合の仕様管理方法を設計してください。従来のウォーターフォール型仕様書との違いと移行ポイントを含めてください。",
    answer: "アジャイル×オフショアの仕様管理:\\n\\n従来のWF型仕様書:\\n- 要件定義書 → 基本設計書 → 詳細設計書（すべて事前作成）\\n- 問題: 変更に弱い、作成に時間がかかる、実装時に古くなっている\\n\\nアジャイル型仕様管理:\\n\\n1. バックログベースの仕様管理:\\n- エピック（大きな機能単位）→ ストーリー（ユーザ視点の機能単位）→ タスク（技術タスク）\\n- 各ストーリーに受入基準（AC: Acceptance Criteria）を明記\\n- BrSEがACを日本語で作成し、クライアント承認を得る\\n\\n2. 「Just Enough」ドキュメント:\\n- 全体アーキテクチャ: 基本設計レベルの概要（1回作成、必要時更新）\\n- 画面仕様: Figmaモックアップ + 画面項目定義（スプリント単位で作成）\\n- API仕様: Swagger/OpenAPI（コードから自動生成）\\n- DB設計: ER図 + 主要テーブル定義（インクリメンタルに更新）\\n\\n3. スプリント内の仕様フロー:\\n- スプリント計画: ストーリーの詳細仕様確認（BrSE+クライアント）\\n- 開発中: 日次確認（チャットベースのQ&A）\\n- スプリントレビュー: デモで仕様の認識確認\\n- 仕様変更: バックログに追加、次スプリントで対応\\n\\n4. 移行のポイント:\\n- 日本のクライアントは「最初にすべて決めたい」傾向 → 段階的に説明\\n- 最初は重要画面だけ事前に詳細仕様を作り、残りはスプリント内で\\n- 「変更は歓迎」の姿勢をクライアントにも持ってもらう\\n- 品質管理は各スプリントで実施（最後にまとめてテストしない）",
    explanation: "アジャイル×オフショアは、仕様の「詳細度」と「タイミング」のバランスが鍵です。すべてを事前に詳細化するのは非効率ですが、何も詳細化しないとオフショアチームが迷います。「Just Enough」= 必要な時に必要な詳細度で仕様を作る — これがリードBrSEのデザイン力です。",
  },
  'brse-rs-010': {
    question: "仕様書における「ユースケース記述」の主な目的は何ですか？",
    options: [
    "システムのソースコードを記述するため",
    "ユーザーとシステム間のやり取り（インタラクション）を、順を追ってシナリオ形式で記述し、機能の漏れを防ぐため",
    "画面の色やフォントを決定するため",
    "データベースのインデックスを決めるため"
    ],
    answer: 1,
    explanation: "ユースケースは「ユーザーが何をしたいか」から出発します。これを記述することで、開発者は「なぜこの機能が必要か」を理解し、より適切な実装を行うことができます。",
  },
  'brse-rs-011': {
    question: "「入力チェック仕様」を記述する際、BrSEが記載漏れしやすい重要な観点はどれですか？",
    options: [
    "入力項目の名前",
    "エラーメッセージの文言、エラー時のフォーカス位置、サニタイジング（不正文字排除）ルール",
    "入力ボックスの長さ",
    "背景色"
    ],
    answer: 1,
    explanation: "「エラー時にどうなるか」まで決めておかないと、開発者が独自の判断でメッセージを作ってしまい、UIの不統一や脆弱性に繋がります。",
  },
  'brse-rs-012': {
    question: "状態遷移図（ステートマシン図）が必要とされる機能はどのようなものですか？",
    options: [
    "ユーザーの一覧表示機能",
    "「下書き→承認待ち→承認済み→公開」のように、特定のイベントによってデータの状態が変化し、それにより可能な操作が変わる機能",
    "単規な計算機能",
    "画像のアップロード機能"
    ],
    answer: 1,
    explanation: "ワークフローがあるシステムでは、状態遷移図がないと「不適切な状態でボタンが押せてしまう」などの重大なバグが発生しやすくなります。",
  },
  'brse-rs-013': {
    question: "「既存システムのリプレース」プロジェクトにおいて、新旧仕様の差分（Fit/Gap）を明確にするために最も重要なアクションはどれですか？",
    options: [
    "新しいシステムをゼロから設計する",
    "旧システムのソースコードを全て読み、現行の「正解」となっているロジックを抽出して要件定義書に反映させる",
    "旧システムは無視する",
    "クライアントに「旧システムと同じでいいですか？」と1回だけ聞く"
    ],
    answer: 1,
    explanation: "リプレースは仕様書の紛失や内容の古さが最大のリスクです。現行ソース（特に複雑な計算ロジック等）が唯一の正解であることを認識し、慎重に仕様を抽出すべきです。",
  },
  'brse-rs-014': {
    question: "「多言語対応（日・英・越）」のECサイトの要件定義において、非機能要件として検討すべき項目をリストアップしてください。",
    answer: "多言語NFR項目：\\n1. 文字コード：UTF-8による一貫した多言語表示。\\n2. タイムゾーン：サーバー時刻、DB時刻、表示時刻の適切な変換処理。\\n3. 通貨・小数点：各国の通貨記号表示と、四捨五入などの端数処理ルールの統一。\\n4. パフォーマンス：多言語リソース(i18nファイル)読み込みによる遅延の最小化。\\n5. 検索性：日本語の曖昧検索（ひらがな・カタカナ・漢字）への対応力。",
    explanation: "多言語対応は単なる翻訳ではなく、これら非機能的な側面がシステムの安定性に大きく寄与します。BrSEは単なる「言語の橋渡し」を超えて、これらを技術的にリードする必要があります。",
  },
  'brse-rs-015': {
    question: "ER図（実体関連図）は、データベースの物理的な構造だけでなく、ビジネスルール（1対多の関係など）を可視化するためにも使われる。",
    answer: "真",
    explanation: "ER図はデータの構造 and ビジネス上の制約を同時に表現します。BrSEはこれを読むことで、システムが扱うデータの「意味」を深く理解できます。",
  },
  'brse-rs-016': {
    question: "仕様書の「共通仕様」セクションに記載すべき内容として適切なのはどれですか？",
    options: [
    "特定の1画面だけのバリデーションルール",
    "日付のフォーマット（YYYY/MM/DD）、ボタンの共通デザイン、エラーメッセージの表示場所、共通の権限管理ルール",
    "個人的なメモ",
    "ログ出力のコード"
    ],
    answer: 1,
    explanation: "共通仕様を定義することで、各画面の仕様書に同じことを何度も書く必要がなくなり、仕様の矛盾を防ぎ、実装効率を大幅に向上させます。",
  },
  'brse-rs-017': {
    question: "リードBrSEとして、仕様書の「誤読」によるバグをゼロにするために、どのようなレビュープロセスを導入しますか？",
    options: [
    "開発者に「間違えないでください」と強く言う",
    "三者レビュー（日本側作成者、BrSE、ベトナム側実装者）による「仕様の読み合わせ会」を義務化し、理解のズレをその場で解消する",
    "レビューを完全に無視する",
    "ツールによる自動チェックだけに頼る"
    ],
    answer: 1,
    explanation: "オフショアにおける最大のバグは「翻訳/解釈のミス」です。異なる言語・文化背景を持つ人が集まり、同じ画面を見ながら「理解を同期」させることが最も確実な対策です。",
  },
  'brse-rs-018': {
    question: "「データ移行仕様書」において、最も重要なテスト観点はどれですか？",
    options: [
    "画面の見た目",
    "移行前後でのデータ件数の不一致、データ型の変換ミス、制約違反（NULLや一意性など）の有無",
    "フォントのサイズ",
    "移行にかかった正確な秒数"
    ],
    answer: 1,
    explanation: "データ移行は後戻りができない重大な作業です。特に旧システムのゴミデータが新システムのNOT NULL制約などに引っかかり、システムが停止するリスクを検証する必要があります。",
  },
  'brse-rs-019': {
    question: "リードBrSEとして、プロダクト全体の「トレーサビリティ（追跡可能性）」を確保するためのドキュメント管理ルールを策定してください。",
    answer: "トレーサビリティ・ルール：\\n1. ID体系の統一：要件(REQ-xx)、設計(DES-xx)、テスト(TST-xx)に共通の連番を振り、互いにリンクさせる。\\n2. RTM（要件トレーサビリティ・マトリクス）：全要件がどの設計、どのコード、どのテストで検証されたかの一覧表を維持する。\\n3. ツール統合：JiraチケットとGitHub PR、Confluenceページを自動連携させ、1つの要件から全ての履歴を追えるようにする。\\n4. 変更履歴の厳格化：単なる「更新」ではなく「なぜ変わったか(Reason for Change)」を必ず記録する。",
    explanation: "トレーサビリティがあれば、「この要件が変わったらどのテストをやり直すべきか」が即座に分かります。これは大規模・長期プロジェクトの保守において決定的な価値を持ちます。",
  },
  'brse-rw-001': {
    question: "日本のクライアントから「あの機能、ちょっといい感じにしておいて」と曖昧な指示が来ました。BrSEとしてまず何をするべきですか？",
    options: [
    "自分のセンスで「いい感じ」にベトナムの開発チームへ指示を出す",
    "日本側に「『いい感じ』とは具体的にどのような要件ですか？ 参考になるサイトや画面イメージはありますか？」と具体化するための質問をする",
    "仕様が不明確なので、開発を一時停止する",
    "ベトナムの開発者に直接聞いて決めさせる"
    ],
    answer: 1,
    explanation: "日本の「空気を読む」文化や「阿吽の呼吸」による曖昧な指示は、オフショア開発で最も危険です。BrSEは暗黙知を形式知に変換するブリッジの役割を担うため、そのまま流さずに必ず具体的な仕様・要件に落とし込むためのヒアリングが必要です。",
  },
  'brse-rw-002': {
    question: "ベトナム側の開発チームから「仕様書にないケースの挙動はどうすればいいですか？」と質問されました。納期まで時間がありません。どう対応しますか？",
    options: [
    "納期を優先し、一番実装が簡単な方法で進めるように指示する",
    "即座に日本側の担当者に連絡し、考えられる２つの解決案とそれぞれの工数を提示した上で判断を仰ぐ",
    "仕様書に書いていないのは日本側のミスなので、実装しなくていいと伝える",
    "自分で勝手に決めて、あとで日本側に報告する"
    ],
    answer: 1,
    explanation: "仕様の抜け漏れはよく発生します。BrSEが勝手に判断すると後で手戻りが発生するリスクが高いため、必ずクライアントに確認します。その際、単に「どうしますか？」と聞くのではなく、オプション（解決案）を提示することで、クライアントの意思決定を早めることができます。",
  },
  'brse-rw-003': {
    question: "定例会議（Webミーティング）中、日本のクライアントの早口な説明が聞き取れず、内容の半分しか理解できませんでした。どうすべきですか？",
    options: [
    "わかったフリをして、後で録画を見返すかチームメンバーに個人的に聞く",
    "その場で「申し訳ありません、理解が追いついていないので、もう一度少しゆっくりご説明いただけますでしょうか？」と素直に伝える",
    "黙って聞き流し、議事録の作成を諦める",
    "適当に「はい、わかりました」と相槌を打ち続ける"
    ],
    answer: 1,
    explanation: "理解できないまま進めるのは、オフショア開発において致命的なすれ違いを生む最大の原因です。日本のビジネスにおいても、あやふやなまま進めるより、その場で確認する方が誠実であり、後々の大きなトラブル（認識齟齬）を防げます。",
  },
  'brse-rw-004': {
    question: "納期前日になって、ベトナムの開発チームから「実はバグが多くて明日納品できません」と報告を受けました。BrSEとして次に行うべきアクションは？",
    options: [
    "日本のクライアントへすぐに「品質上の問題により納品が遅れます」と第一報を入れ（報連相の『報』）、現状のバグ数と復旧の目処を急いで確認する",
    "ベトナムチームを怒り、徹夜させてでも明日納品させる",
    "日本側にバレないように、バグがあるまま納品する",
    "クライアントからの連絡が来るまで待つ"
    ],
    answer: 0,
    explanation: "日本のビジネスでは「バッドニュース・ファースト」（悪い知らせほど早く報告する）が鉄則です。隠蔽や遅延報告は最も信頼を損ないます。まずは事実のみを速報し、その後詳細な原因とリカバリプランを報告するのが正しい「報連相」です。",
  },
  'brse-rw-005': {
    question: "【○か×か】日本側からレビューの指摘（バグや修正点）が一気に50件来ました。ベトナムチームのモチベーションが下がるのを避けるため、BrSEは半分の25件だけを先に伝え、残りは後日密かに伝えるのが良い。",
    answer: "偽",
    explanation: "×です。小出しにすると「いつまで経っても修正が終わらない」という状態になり、かえってモチベーションを下げ、スケジュール管理も難しくなります。全件を正確に共有し、優先順位をつけて計画的に修正を進めるのが正しいアプローチです。",
  },
  'brse-rw-006': {
    question: "日本とベトナムの祝日が重なり、プロジェクトのスケジュールに影響が出そうです。キックオフの時点でBrSEがしておくべきことは何ですか？",
    options: [
    "スケジュールが遅れた時に初めて祝日の言い訳をする",
    "キックオフ時にベトナムの祝日（テトなど）のカレンダーを日本側に共有し、稼働日が減ることを見越したマスタースケジュールを合意しておく",
    "日本のカレンダーに完全に合わせ、ベトナム側には祝日も出勤してもらう",
    "納期を適当に延ばして見積もる"
    ],
    answer: 1,
    explanation: "文化・制度の違い（祝日カレンダーの違い）による休日は、オフショア開発特有のリスクです。後から「ベトナムは祝日なので休みでした」と言うとトラブルになります。初期段階でマスタースケジュールに反映し、関係者全員のカレンダー認識を合わせることが重要です。",
  },
  'brse-rw-007': {
    question: "ベトナムの開発チームが「日本のQA（テストチーム）のバグ指摘は細かすぎる。1ピクセルのズレまで指摘してくる」と不満を漏らしています。BrSEとしてどう対応しますか？",
    options: [
    "「日本人は細かいから我慢して」とだけ伝える",
    "QAチームに「細かすぎるのでもっと大雑把にテストしてくれ」とクレームを入れる",
    "日本のエンドユーザーがUI/UXの品質にシビアであることを背景と共に説明し、仕様段階で品質基準（どこまで許容するか）のガイドラインをQA側と合意するよう動く",
    "開発チームの不満を無視して修正を強要する"
    ],
    answer: 2,
    explanation: "日本の「品質に対する高い要求水準」は、オフショアチームにとって理解しがたい場合があります。「なぜそれが重要視されるのか」という背景（エンドユーザーの期待値など）を説明し、同時に過剰品質を防ぐための明確な合意基準を作るのがブリッジとしての役割です。",
  },
  'brse-rw-008': {
    question: "システムの重要なバグが本番環境で発生しました。日本側は非常に怒っています。BrSEとして提出する「障害報告書」で最も強調すべき点は何ですか？",
    options: [
    "バグを作った特定のプログラマーの名前と処罰内容",
    "「ベトナムチームは頑張ったのですが…」という感情的な言い訳",
    "発生原因（なぜ起きたか）と、今後二度と同じバグを起こさないための「恒久的な再発防止策（プロセス改善）」",
    "日本側の仕様書の書き方が悪かったという反論"
    ],
    answer: 2,
    explanation: "日本のビジネスでは、ミスそのものよりも「なぜ起きたか（根本原因）」と「どうやって防ぐか（再発防止策）」の報告が非常に重視されます。個人の責任を追及するのではなく、レビュー体制やテスト工程などの「仕組み」で解決するアプローチを示すと信頼回復に繋がります。",
  },
  'brse-rw-009': {
    question: "クライアントとの要件定義会議で、技術的に実現不可能な（あるいは非常にコストがかかる）要望が出されました。BrSEとしての適切な返答は？",
    options: [
    "その場で「それは絶対に無理です」と冷たく断る",
    "とりあえず「はい、できます」と答えて持ち帰り、後で後悔する",
    "「〇〇という技術的制約があるため現時点では困難ですが、代替案として△△という方法であれば、低コストで近い目的を達成できますがご検討いただけますか？」と提案する",
    "黙って聞いておき、実装時に無視する"
    ],
    answer: 2,
    explanation: "単に「できない」と否定するのではなく、なぜ難しいのかという理由（予算、技術、納期）を論理的に説明し、クライアントのビジネス目的を達成できる「代替案」を提示するのが、付加価値の高いBrSEのコミュニケーションです。",
  },
  'brse-rw-010': {
    question: "【○か×か】翻訳効率を上げるため、BrSEは日本側の仕様書をそのまま何も考えずにGoogle翻訳にかけ、ベトナム語にしたものをそのまま開発チームに渡すのが最も良い方法である。",
    answer: "偽",
    explanation: "×です。直訳は「システム開発特有のコンテキスト」や「日本の暗黙知」が欠落するため、開発者に誤解を与えます。BrSEは内容をシステム的な振る舞いやロジックとして解釈し、必要に応じて図解や補足説明を追加する「意訳によるコンテキストの補完」を行う必要があります。",
  },
  'brse-rw-011': {
    question: "プロジェクト中盤で、クライアントが「仕様変更」を頻繁に要求するようになりました。予算も納期も固定です。プロジェクトを破綻させないためのシニアBrSEのアプローチは？",
    options: [
    "クライアントの機嫌を損ねないよう、すべて無償で残業して対応する",
    "すべての変更要求を「フェーズ2以降の対応」として拒否する",
    "変更管理表を作成し、追加仕様による「影響範囲」「必須工数」「スケジュール遅延リスク」を可視化。現在のスコープ内でどの機能とトレードオフ（入れ替え）にするかをクライアントと交渉する。",
    "途中でプロジェクトを放棄する"
    ],
    answer: 2,
    explanation: "スコープクリープ（終わりのない仕様拡張）への対応です。「No」と単純に拒否するのではなく、変更にはコスト・時間がかかる事実をデータ（変更管理表など）で可視化し、トレードオフの決断をクライアントに委ねるのが正しいコントロール手法です。",
  },
  'brse-rw-012': {
    question: "日本の本社のシステム担当者と、現場の業務ユーザーの言うことが違い、板挟みになっています。BrSEとしてどう立ち回るべきですか？",
    options: [
    "システムの担当者はお金を払う人なので、現場のユーザーの意見は無視する",
    "両者の意見の対立点、システムの技術的実現性、業務上のメリット・デメリットを整理したドキュメントを作成し、両者を交えた三者ミーティングでコンセンサス（合意）を形成する",
    "両方の意見をそのまま実装し、システムを複雑にする",
    "ベトナムの開発チームにどちらの意見を採用するか決めさせる"
    ],
    answer: 1,
    explanation: "ステークホルダー間の意見対立では、BrSEがファシリテーターとして機能する必要があります。お互いの主張を技術的・業務的観点から整理し、「根回し（Nemawashi）」や調整会議を通じて合意形成（コンセンサス）を図るのが上級者の役割です。",
  },
  'brse-rw-013': {
    question: "ベトナムの開発チームの離職率が高く、ナレッジが属人化してプロジェクトの引継ぎがうまくいっていません。この状況を改善策として最も効果的なものはどれですか？",
    options: [
    "給料を2倍にするよう社長に直訴する",
    "離職した人の代わりに新しい人をすぐに雇えば問題ない",
    "プロジェクト内でWiki（ドキュメント）運用を徹底し、コードのレビュー文化やペアプログラミングを導入して、チーム全体にノウハウが分散借共有される仕組み（標準化）を構築する",
    "BrSEが一人ですべてのコードを書き直す"
    ],
    answer: 2,
    explanation: "オフショア開発における「属人化の排除」と「ナレッジマネジメント」は重要課題です。人が辞める前提で、ドキュメントの最新化、標準化、コード品質の均一化のプロセスを組み込むことで、リソース変動リスクに強いチームを作ることができます。",
  },
  'brse-rw-014': {
    question: "日本の大手金融機関からの大型オフショア開発案件を獲得しました。しかし、顧客は「セキュリティ」と「品質」への懸念からオフショアに強い拒否感を示しています。シニアBrSEとして、顧客の不安を払拭するための「オフショア体制・プロセスの提案」を記述してください。",
    answer: "顧客の不安を払拭するための提案アプローチ：\\n\\n1. セキュリティ体制の構築：\\n・物理的対策の提示（スマホ持ち込み禁止、専用のセキュアルームでの開発）。\\n・ネットワーク対策の提示（VDI/VPNの使用、ソースコードや顧客データのローカル保存禁止）。\\n・情報セキュリティ教育（ISO27001）の実施証明を提示する。\\n\\n2. 品質担保プロセスの可視化：\\n・「ベトナムに丸投げ」ではなく、日本側の品質基準（JSTQB等）に準拠したテスト計画を策定する旨を説明。\\n・テスト自動化（CI/CD環境）を導入し、ヒューマンエラーを排除する仕組みを提案。\\n・コードレビューの多重化（ツールによる静的解析 ＋ ピアレビュー ＋ シニアテックリードによる最終確認）を実施する。\\n\\n3. コミュニケーションの透明性維持：\\n・週次定例会議、デイリーレポートによる進捗と課題の100%可視化を約束。\\n・KPI（バグ検出率、工数予実など）に基づく客観的な品質メトリクス報告を月次で行う。\\n\\n「仕組みとデータ」で証明することが、金融機関等の保守的なクライアントには最も効果的です。",
    explanation: "金融機関などのミッションクリティカルな案件では、「頑張ります」という精神論ではなく、「セキュアルーム等の物理/論理的インフラによる防御」と「プロセス・ツールによる人的ミスの排除」という論理的な証明が求められます。",
  },
  'brse-rw-015': {
    question: "あなたは何人ものBrSEを束ねるリードBrSEです。あるプロジェクトで、担当の若手BrSEがうつ病寸前になり、クライアントからのクレームも多発しています。原因は「クライアントの無茶振り（仕様の頻繁な変更）」と「ベトナムチームの開発力不足」の板挟みです。プロジェクトを立て直すための1週間のレスキュー計画（リカバリプラン）を立ててください。",
    answer: "炎上プロジェクトの1週間レスキュー計画：\\n\\n【Day 1：現状把握と止血（トリアージ）】\\n・若手BrSEの業務負荷を一時的に引き継ぎ、メンタルケアを行う。必要なら即座に休暇を取らせる。\\n・クライアントに対して「リードBrSEである自分が介入し、体制を立て直す」旨を緊急通知し、現在の開発作業を一旦ストップ（Freeze）させる。\\n\\n【Day 2-3：課題の棚卸しと可視化】\\n・現在の「変更要求一覧」「残タスク」「発生中のバグ」を全て洗い出し、事実ベースのリストを作成。\\n・ベトナムチームの技術的課題（なぜ遅れているのか、スキルギャップはどこか）をヒアリング・分析。\\n\\n【Day 4：スコープの再定義と対クライアント交渉】\\n・クライアントと緊急ミーティングを実施。頻繁な仕様変更がもたらす品質崩壊のメカニズムをデータ（バグ発生率など）で冷静に説明。\\n・「現状のリソースと期間で確実にデリバリーできる最低限のスコープ（MVP）」を再定義し、オーバーオーバーしている要件はフェーズ分離するよう交渉・合意する。\\n\\n【Day 5-7：体制とプロセスの再構築】\\n・開発チームにシニアエンジニアをヘルプで追加アサインし、技術的課題を解決するサポート体制を敷く。\\n・変更管理プロセス（勝手な変更は受け付けず、書面での合意を必須とするルール）を厳格化。\\n・若手BrSEが復帰する際のバックアップ体制（エスカレーションパスの明確化）を敷き、安全に開発を再開する。",
    explanation: "リードクラスには「火消し（トラブルシューティング）」のスキルが必須です。精神論で頑張らせるのではなく、①人を守る（負荷の分離）、②状況を客観的に可視化する、③クライアントと対等にスコープ交渉を行う、④プロセスと体制を根本から直す、というマネジメントの基本を迅速に実行できるかが問われます。",
  },
  'brse-tm-001': {
    question: "オフショア開発チームのモチベーションを維持するために最も重要なことはどれですか？",
    options: [
    "給与を上げ続けること",
    "明確な目標設定、公正な評価、成長機会の提供、チームの成果に対する認知（承認）— 金銭だけでなく、内発的動機づけが重要",
    "毎日残業させること",
    "個人の自由にすべて任せること"
    ],
    answer: 1,
    explanation: "ハーズバーグの動機付け理論：衛生要因（給与、環境のような問題がなければ不満が無い程度のもの）は不満を防ぐが、動機付け要因（成長、承認、達成感、責任）がモチベーションを高めます。BrSEとして：①プロジェクトの目的とメンバーの役割を明確化、②スキルアップ機会の提供、③良い仕事への具体的フィードバック、④クライアントからのポジティブな声の共有。",
  },
  'brse-tm-002': {
    question: "BrSEはプロジェクト管理だけでなく、チームメンバーのキャリア成長も支援する役割があります。",
    answer: "真",
    explanation: "BrSEはメンバーのキャリア成長にも責任があります。①技術スキルの向上計画（新技術の学習機会）、②日本語能力の向上支援、③ドメイン知識の共有、④より責任あるタスクの段階的割り当て、⑤1on1ミーティングでのキャリア相談。メンバーの成長はチーム品質の向上に直結し、人材の定着にも繋がります。",
  },
  'brse-tm-003': {
    question: "新メンバーのオンボーディングで最も重要なことはどれですか？",
    options: [
    "初日から重要なタスクを任せる",
    "開発環境のセットアップ、コーディング規約の説明、プロジェクト概要のブリーフィング、メンター（先輩）のアサイン、による段階的な立ち上げ",
    "特にオンボーディングは不要 — 自分で学べばよい",
    "研修資料を渡して終わり"
    ],
    answer: 1,
    explanation: "オンボーディングチェックリスト：①開発環境（ソースコード、ツール、アクセス権）、②プロジェクト概要（目的、アーキテクチャ、チーム体制）、③コーディング規約とレビュー基準、④メンター/バディのアサイン、⑤最初の2週間のタスク（小さなバグ修正や簡単な機能から開始）。立ち上がりにかかる時間は通常2-4週間。良いオンボーディングが生産性の早期向上に繋がります。",
  },
  'brse-tm-004': {
    question: "オフショアチーム内で技術的な意見の対立が起きた場合、BrSEはどう対応すべきですか？",
    options: [
    "上位者の意見を常に採用する",
    "両方の意見のメリット・デメリットを整理し、客観的なデータ（パフォーマンステスト、保守性、学習コスト等）に基づいて議論をファシリテートし、チームとしての合意形成を促す",
    "論争を避けるために片方の意見を無視する",
    "自分の意見を押し通す"
    ],
    answer: 1,
    explanation: "技術的対立は健全な議論の証。BrSEとして：①まず両方の意見を平等に聞く、②感情ではなく事実・データで議論を導く、③プロトタイプ/PoC（概念実証）で検証する提案、④合意後はチーム全体で決定を尊重する文化を醸成、⑤ プロジェクト要件（納期、保守性、チームスキル）の観点で判断基準を設定。",
  },
  'brse-tm-005': {
    question: "「1on1ミーティング」の目的とBrSEにとっての価値は何ですか？",
    options: [
    "タスクの進捗を確認するだけの会議",
    "メンバー個人との定期的な対話 — 仕事の課題、キャリアの相談、モチベーション、チーム内の人間関係の問題を早期に発見し対処するための場",
    "パフォーマンス評価を伝える場",
    "技術的な勉強会"
    ],
    answer: 1,
    explanation: "1on1は「メンバーのための時間」です。BrSEが行うべきこと：①定期開催（隔週30分推奨）、②メンバーに話題を設定させる（上司主導にしない）、③「仕事で困っていること」「チームで改善したいこと」「キャリアの目標」を聞く、④問題を早期発見して対処（退職の兆候、不満の蓄積）。1on1を怠ると、メンバーの退職で初めて問題に気づくことになります。",
  },
  'brse-tm-006': {
    question: "チームの「バス係数（Bus Factor）」とは何ですか？なぜBrSEはこの指標を気にすべきですか？",
    options: [
    "チームの通勤手段に関する指標",
    "特定のメンバーがいなくなった場合にプロジェクトが止まるリスク度合い — バス係数1（1人が抜けたら止まる）は極めて危険で、ナレッジ共有が必要",
    "バス移動の経費管理指標",
    "テストの実行回数に関する指標"
    ],
    answer: 1,
    explanation: "バス係数 = 「何人がバスに轢かれたらプロジェクトが止まるか」（比喩）。理想は3以上。対策：①重要なナレッジのドキュメント化、②定期的なコードレビュー（知識の共有）、③ペアプログラミング/モブプログラミング、④ローテーション（同じ人が同じモジュールを担当し続けない）。BrSEとして、チームのバス係数を把握し、脆弱な箇所を改善します。",
  },
  'brse-tm-007': {
    question: "オフショア開発チーム（10名）の人材定着率を高めるための戦略を設計してください。ベトナムIT業界の特性を考慮してください。",
    answer: "人材定着戦略:\\n\\n1. ベトナムIT業界の課題:\\n- 平均勤続年数2-3年（転職が一般的）\\n- 給与上昇の期待が高い\\n- 技術的なチャレンジとキャリア成長を重視\\n- ワークライフバランスを重視する傾向\\n\\n2. 定着率向上策:\\n\\n金銭的施策:\\n- 市場水準の給与（年1回以上の見直し）\\n- プロジェクト達成ボーナス\\n- 日本語資格取得手当（JLPT N3→月額手当）\\n\\n成長機会:\\n- 日本出張/研修プログラム（年1-2名、3-6ヶ月）\\n- 技術カンファレンス参加支援\\n- 社内勉強会（月2回、技術+日本語）\\n- キャリアパス明確化（Dev→TL→BrSE→PM）\\n\\nチーム文化:\\n- フラットなコミュニケーション\\n- 成功の称賛（社内表彰、クライアントからのフィードバック共有）\\n- 定期チームイベント（月1回のチームランチ）\\n- 柔軟な勤務体制（リモートワーク可）\\n\\n早期アラート:\\n- 月次1on1でモチベーション確認\\n- 退職の兆候チェック（業務への関心低下、残業の急減、SNSでの活動変化）\\n- 不満の早期対処（改善可能なものは即対応）\\n\\n3. KPI:\\n- 年間離職率目標: 15%以下\\n- メンバー満足度調査（四半期）\\n- 平均勤続年数の推移",
    explanation: "ベトナムIT業界の離職率は他業界より高く、優秀な人材の獲得競争が激しいです。給与だけでは差別化できないため、成長機会（日本出張、キャリアパス）とチーム文化が差別化要因になります。メンバーの「このチームで働きたい」という感情が最も強い定着力です。",
  },
  'brse-tm-008': {
    question: "リードBrSEとして、ジュニアBrSEの育成に最も効果的なアプローチはどれですか？",
    options: [
    "研修資料を渡して自己学習させる",
    "メンタリング制度 + OJT（実案件での段階的経験）+ 定期的なフィードバック — シニアBrSEの案件に同席させ、段階的に役割を拡大していく",
    "日本語試験の勉強だけさせる",
    "即座に案件を1人で担当させる"
    ],
    answer: 1,
    explanation: "BrSE育成の段階：①観察期（1-2ヶ月）: シニアの会議に同席、議事録作成 ②補助期（2-4ヶ月）: 小さな仕様確認やQ&Aをシニア監督下で担当 ③主導期（4-6ヶ月）: 小規模案件を担当（シニアがバックアップ）④独立期（6ヶ月以降）: 中規模案件を独立で担当。各段階で定期的なフィードバックとスキル評価を行い、課題を特定・改善します。",
  },
  'brse-tm-009': {
    question: "リードBrSEとして、30名規模のオフショア開発部門の組織構造を設計してください。チーム編成、役職階層、スキルマトリクス、人材育成計画を含めてください。",
    answer: "30名規模の組織構造:\\n\\n1. 組織階層:\\n- リードBrSE (1名): 部門全体管理、クライアント関係構築、戦略\\n- シニアBrSE (2-3名): 大規模案件のBrSE、ジュニアBrSE指導\\n- BrSE (3-4名): 中小規模案件のBrSE担当\\n- テックリード (3名): 技術判断、アーキテクチャ設計、コードレビュー\\n- シニア開発者 (5-6名): 複雑な機能の実装、ジュニア指導\\n- 開発者 (8-10名): 機能実装、テスト\\n- QA (3-4名): テスト設計・実行・自動化\\n\\n2. チーム編成（3チーム × 8-10名）:\\n- チームA: BrSE + TL + 3 Dev + 1 QA（クライアントA案件）\\n- チームB: BrSE + TL + 3 Dev + 1 QA（クライアントB案件）\\n- チームC: BrSE + TL + 2 Dev + 1 QA（小規模複数案件）\\n- フローティング: シニアBrSE 1名 + シニアDev 2名（プロジェクト間サポート）\\n\\n3. キャリアパス:\\n- Dev → Senior Dev → TL → （技術コース：アーキテクト / マネジメントコース：BrSE → Senior BrSE → リードBrSE）\\n- スキルマトリクスで各メンバーの現在地と目標を可視化\\n\\n4. 人材育成:\\n- 月次スキルアップ勉強会（技術+日本語+ソフトスキル）\\n- 四半期スキル評価と育成プラン更新\\n- 年1-2名の日本出張研修\\n- BrSEアカデミー（社内育成プログラム: 6ヶ月コース）",
    explanation: "30名規模でもチーム分割と明確な役割定義が必要です。フローティングメンバー（プロジェクト間サポート）の概念が重要で、ピーク時の負荷分散やナレッジ共有にも貢献します。キャリアパスの明確化は人材定着の鍵 — メンバーが「この組織で成長できる」と感じることが重要です。",
  },
  'brse-tm-010': {
    question: "チーム内での「心理的安全（Psychological Safety）」とは何を指しますか？",
    options: [
    "オフィスを施錠して安全にすること",
    "自分の意見、質問、懸念、あるいは失敗をさらけ出しても、恥をかかされたり、拒絶されたり、罰せられたりしないと、メンバーが確信している状態",
    "誰もが常に笑顔でいること",
    "ミスをしても一切指摘しないこと"
    ],
    answer: 1,
    explanation: "心理的安全性が高いチームほど、バグやリスクの報告が早く、結果として品質が高まります。反対に、恐れがあるチームでは悪い情報を隠す傾向があります。",
  },
  'brse-tm-011': {
    question: "「タックマンモデル」において、チームが最大の成果を出せるフェーズはどれですか？",
    options: [
    "形成期 (Forming)",
    "機能期 (Performing)",
    "混乱期 (Storming)",
    "統一期 (Norming)"
    ],
    answer: 1,
    explanation: "形成→混乱→統一を経て、初めて機能期（成果が出る時期）に到達します。BrSEは混乱期を恐れず、適切にファシリテートして統一期へ導く必要があります。",
  },
  'brse-tm-012': {
    question: "メンバーが作成した「設計書」のレビューにおいて、BrSEが行うべき適切な態度はどれですか？",
    options: [
    "「ダメだ」とだけ言って突き返す",
    "「人格の否定」ではなく「成果物の改善」に集中し、具体的な修正理由と解決案を提示する。また、良い点も同時に伝える",
    "自分で全て書き直す",
    "間違いを無視する"
    ],
    answer: 1,
    explanation: "レビューの目的は、成果物の改善とメンバーの教育です。心理的安全を保ちつつ、技術的な基準を妥協しないバランスが求められます。",
  },
  'brse-tm-013': {
    question: "「サーバントリーダーシップ」を実践するBrSEがとるべき最良の行動はどれですか？",
    options: [
    "メンバーに命令して従わせる",
    "チームメンバーが最大のパフォーマンスを発揮できるよう、彼らの障害（ブロック事項）を排除し、必要なリソースや支援を提供することに徹する",
    "何もしないこと",
    "自分が一番目立つこと"
    ],
    answer: 1,
    explanation: "リーダーは支配者ではなく「奉仕者」です。メンバーを支えることで、チーム全体の自律性と生産性が向上します。",
  },
  'brse-tm-014': {
    question: "リードエンジニアと、UIデザイナーの間で「実装の容易さ」と「デザインの美しさ」を巡って対立が起きました。どう仲裁しますか？",
    answer: "仲裁アプローチ：\\n1. 共通の目的（プロダクトの成功、ユーザー体験）への立ち返りを促す。\\n2. コスト・影響分析：そのデザインを完璧に実装するのにかかる工数と、簡略化した場合のユーザーへの影響をデータで可視化する。\\n3. 代替案の提示：デザインの意図（美しさ、使いやすさ）を保ちつつ、実装負荷の低い中間案（フェーズ分け、別のUI要素の使用）を提案する。\\n4. 合意形成：最終的にはプロダクトオーナー/クライアントの判断を仰ぐための材料を揃える。",
    explanation: "「どちらが正しいか」ではなく「プロダクトにとって何がベストか」を基準にします。専門性への敬意を払いつつ、現実的な妥協点を導き出します。",
  },
  'brse-tm-015': {
    question: "「ホウレンソウ（報告・連絡・相談）」は、部下から上司に行うだけでなく、上司から部下へも情報の透明性を保つために行うべきである。",
    answer: "真",
    explanation: "情報の透明性は信頼の基盤です。上司から状況（クライアントの意向、プロジェクトの危機など）を共有することで、チームの一体感が高まります。",
  },
  'brse-tm-016': {
    question: "「目標設定（SMART原則）」において、A（Attainable）とは何を表しますか？",
    options: [
    "明るい目標",
    "達成可能な現実的な目標",
    "憧れの目標",
    "あきらめないこと"
    ],
    answer: 1,
    explanation: "高すぎる目標はモチベーションを下げ、低すぎると成長を止めます。「頑張れば届く」ラインを設定することが管理者の腕の見せ所です。",
  },
  'brse-tm-017': {
    question: "リードBrSEとして、ベトナム側チームが日本側の「空気を読む」文化に適応できない場合の対応として最も適切なのはどれですか？",
    options: [
    "「空気をもっと読んで」と精神論で語る",
    "「言わなくても分かる」を期待せず、全ての暗黙の了解を「明示的なドキュメントや言葉」に変換して伝える仕組みを作る",
    "適応できない人を外す",
    "日本側の文化を全てベトナム側に変えさせる"
    ],
    answer: 1,
    explanation: "文化の壁は精神論では超えられません。「暗黙知を形式知に変える」ことこそがBrSEの技術であり、組織としての強みになります。",
  },
  'brse-tm-018': {
    question: "「ピグマリオン効果」を活かしたマネジメントとはどのようなものですか？",
    options: [
    "メンバーに厳しく接すること",
    "管理者がメンバーの可能性を信じ、期待をかけることで、メンバーがその期待に応えようとしてパフォーマンスが向上する現象",
    "放置すること",
    "競争させること"
    ],
    answer: 1,
    explanation: "「君ならできる」という期待は、強力なモチベーターになります。逆に「できない」という呪いをかけると、本当にできなくなります（ゴーレム効果）。",
  },
  'brse-tm-019': {
    question: "リードBrSEとして、将来のBrSE候補生（エンジニア）を育成するための「メンターシップ・プログラム」を設計してください。",
    answer: "メンターシップ・プログラム：\\n1. マッチング：シニアBrSEをメンター、候補生をメンティーとしてペアを作る。\\n2. 実務への段階的参加：エンジニア業務の20%を「BrSE補助（ドキュメント翻訳、Q&A対応）」に充てる。\\n3. シャドーイング：クライアント会議に同席し、交渉の進め方を観察する。\\n4. ソフトスキル研修：ロジカルシンキング、日本語教育、クリティカルパスの考え方などを講義形式で提供する。\\n5. 段階的評価：3ヶ月ごとに「BrSEとしての適性」を多角的に評価し、フィードバックする。",
    explanation: "BrSEはエンジニアとは異なる筋肉を必要とします。現場での経験と、理論的な学習を並行させることで、スムーズなキャリアチェンジを支援します。",
  },
  'brse-tm-020': {
    question: "What is the \"Tuckman Model\" of team development that a BrSE should be aware of?",
    options: [
    "A model for database table normalization",
    "The stages of team growth: Forming",
    "Storming",
    "Norming",
    "Performing",
    "and Adjourning",
    "A specific type of sprint retrospective",
    "A method for estimating code complexity",
    ""
    ],
    answer: 1,
    explanation: "Teams don\\'t become productive immediately. They go through a period of conflict (Storming) before establishing rules (Norming) and reaching high productivity (Performing). BrSEs need to manage the \"Storming\" phase carefully in offshore teams.",
  },
  'brse-tm-021': {
    question: "How do you handle a \"Hero Culture\" in an offshore development team?",
    options: [
    "Give the \"Hero\" a bonus every month",
    "Encourage knowledge sharing",
    "documentation",
    "and pair programming to reduce dependency on a single person",
    "Make everyone else work as hard as the hero",
    "Promote the hero to PM immediately",
    ""
    ],
    answer: 1,
    explanation: "Hero culture (where one person knows everything) is a major risk (Bus Factor = 1). BrSEs should promote a culture where the team succeeds together through collaboration and shared knowledge.",
  },
  'brse-tm-022': {
    question: "What is \"Psychological Safety\" and why is it important in a BrSE managed team?",
    options: [
    "Keeping the office door locked",
    "A belief that one will not be punished or humiliated for speaking up with ideas",
    "questions",
    "concerns",
    "or mistakes",
    "Ensuring every developer has a comfortable chair",
    "Providing free mental health apps",
    ""
    ],
    answer: 1,
    explanation: "In many offshore cultures, admitting a mistake is seen as \"losing face.\" BrSEs must create a safe environment where errors are reported early so they can be fixed before they impact the client.",
  },
  'brse-tm-023': {
    question: "What is the \"Situational Leadership\" theory proposed by Hersey and Blanchard?",
    options: [
    "Leading based on the current weather situation",
    "Adapting your leadership style (Directing",
    "Coaching",
    "Supporting",
    "Delegating) based on the maturity and competence of your team members",
    "Always being the most technical person in the room",
    "Replacing everyone who disagrees with you",
    ""
    ],
    answer: 1,
    explanation: "A BrSE might need to be \"Directing\" with a junior developer but should be \"Delegating\" to a senior Tech Lead. Using the wrong style can cause frustration or micromanagement.",
  },
  'brse-tm-024': {
    question: "Constructive feedback should be given in private (Praise in Public, Critique in Private).",
    answer: "真",
    explanation: "Critiquing someone in front of their peers can cause them to lose face and build resentment. Private feedback is more effective for growth and maintains team harmony.",
  },
  'brse-tm-025': {
    question: "According to Herzberg\\'s Two-Factor Theory, which of the following is a \"Motivator\" (leads to satisfaction) rather than a \"Hygiene\" factor (just prevents dissatisfaction)?",
    options: [
    "Salary",
    "Working conditions",
    "Recognition and Achievement",
    "Company policy",
    ""
    ],
    answer: 2,
    explanation: "Hygiene factors (salary, environment) won\\'t make people work harder, but their absence causes pain. True motivation comes from recognition, the work itself, and growth opportunities.",
  },
  'brse-tm-026': {
    question: "What is the \"GROW\" model in coaching developers?",
    options: [
    "Get Rich Or Whine",
    "Goal",
    "Reality",
    "Options",
    "Will (or Way forward)",
    "Grid",
    "Row",
    "Object",
    "Width",
    "Generate",
    "Review",
    "Optimize",
    "Win",
    ""
    ],
    answer: 1,
    explanation: "GROW is a simple framework for coaching. The BrSE helps the developer define a goal, assess their current reality, brainstorm options, and commit to a specific path forward.",
  },
  'brse-tm-027': {
    question: "How do you handle a \"Communication Gap\" caused by different regional holidays (e.g., Vietnam\\'s Tet vs. Japan\\'s Golden Week)?",
    options: [
    "Force everyone to work on their holidays",
    "Plan resources and milestones far in advance",
    "communicating the holiday schedules and buffer periods to the other side months earlier",
    "Ignore the holidays and hope for the best",
    "Cancel the project during those weeks",
    ""
    ],
    answer: 1,
    explanation: "Holiday management is a classic BrSE challenge. Transparency and early planning are the only ways to avoid \"surprises\" that frustrate the client or the team.",
  },
  'brse-tm-028': {
    question: "What is the \"Halo Effect\" in performance reviews?",
    options: [
    "A bug in the UI rendering",
    "A cognitive bias where one positive trait (e.g.",
    "being good at Java) influences the overall evaluation of the person (e.g.",
    "assuming they are also good at leadership)",
    "A method for tracking server uptime",
    "A type of light in the office",
    ""
    ],
    answer: 1,
    explanation: "BrSEs must guard against bias. Just because a developer has great technical skills doesn\\'t mean their communication or teamwork is also great; they should be evaluated on each criteria separately.",
  },
  'brse-tt-001': {
    question: "「要件定義」の英語訳として最も適切なものはどれですか？",
    options: [
    "Detailed Design",
    "Requirements Definition / Requirements Specification",
    "System Testing",
    "Code Review",
    ""
    ],
    answer: 1,
    explanation: "「要件定義」= Requirements Definition/Specification。日本のIT用語と英語の対応：要件定義→Requirements Definition、基本設計→Basic Design/High-Level Design、詳細設計→Detailed Design、単体テスト→Unit Testing、結合テスト→Integration Testing、総合テスト→System Testing。BrSEはこれらの対応を正確に理解する必要があります。",
  },
  'brse-tt-002': {
    question: "日本語の仕様書を翻訳する際、「画面遷移図」の英語訳はどれですか？",
    options: [
    "Screen Layout",
    "Screen Transition Diagram / Screen Flow Diagram",
    "Database Schema",
    "Network Topology",
    ""
    ],
    answer: 1,
    explanation: "画面遷移図 = Screen Transition/Flow Diagram。関連用語：画面一覧→Screen List、画面設計書→Screen Design Document/UI Specification、画面項目定義→Screen Item Definition、画面モックアップ→Screen Mockup/Wireframe。BrSEは画面関連用語を正確に翻訳し、開発チームに伝える必要があります。",
  },
  'brse-tt-003': {
    question: "技術翻訳では、日本語の文章をそのまま直訳すれば正確に意味が伝わります。",
    answer: "偽",
    explanation: "技術翻訳で直訳すると意味が通じないことが多いです。例：「〇〇の対応をお願いします」の直訳は \"Please handle XX\" ですが、具体的に何をするか不明です。BrSEは「対応」の意味を文脈から判断し、「修正する」「調査する」「テストする」など具体的なアクションに変換してから翻訳する必要があります。",
  },
  'brse-tt-004': {
    question: "日本の開発プロセスにおける「V字モデル」の各フェーズの対応関係として正しいものはどれですか？",
    options: [
    "要件定義→コーディング→テスト（順番に実施）",
    "要件定義⇔総合テスト、基本設計⇔結合テスト、詳細設計⇔単体テスト — 左側の各設計フェーズに対応するテストフェーズが右側にある",
    "設計とテストは独立しており、対応関係はない",
    "すべてのテストは開発後にまとめて実施する",
    ""
    ],
    answer: 1,
    explanation: "V字モデルの対応関係：要件定義→総合テスト（ST）、基本設計→結合テスト（IT）、詳細設計→単体テスト（UT）。日本のSIerではこのV字モデルが標準的です。BrSEは各フェーズの成果物とテスト観点を理解し、ベトナム側チームに正確に伝達する必要があります。",
  },
  'brse-tt-005': {
    question: "以下の日本語仕様を英語/ベトナム語の開発チームが理解できるように、具体的な仕様に変換してください：「ユーザーが不正な値を入力した場合、適切にエラーを表示すること」",
    answer: "変換後の具体的仕様:\\n\\n1. Validation Rules:\\n- Email field: Must match email format (RFC 5322). Error: \"メールアドレスの形式が正しくありません / Invalid email format\"\\n- Phone field: Must be 10-11 digits",
    explanation: "日本語仕様書でよく見る「適切に」「不正な」などの曖昧な表現は、開発チームにとって解釈の余地が大きく、実装のバラつきを生みます。BrSEの役割は、これらを具体的なルール（何が不正か、どう表示するか、いつ表示するか）に変換してから開発チームに渡すことです。",
  },
  'brse-tt-006': {
    question: "BrSEが技術翻訳で「用語集（グロッサリー）」を作成・管理する理由として最も重要なものはどれですか？",
    options: [
    "翻訳の速度を上げるため",
    "プロジェクト内で技術用語の翻訳を統一し、異なるBrSEやドキュメント間での表記揺れを防ぐため",
    "日本語能力試験の勉強のため",
    "クライアントに翻訳力をアピールするため",
    ""
    ],
    answer: 1,
    explanation: "用語集は翻訳品質の基盤です。例：「画面」をある箇所では \"screen\"、別の箇所では \"page\" と訳すと混乱します。用語集の管理ポイント：①プロジェクト固有の用語を定義、②日本語⇔英語⇔ベトナム語の3言語対応、③新しい用語は都度追加、④チーム全員で共有、⑤定期的にレビュー・更新。",
  },
  'brse-tt-007': {
    question: "大規模プロジェクト（仕様書200ページ以上）の翻訳プロセスを設計してください。品質管理、スケジュール管理、翻訳ツールの活用を含めてください。",
    answer: "大規模仕様書翻訳プロセス:\\n\\n1. 準備フェーズ（1-2日）:\\n- 全体構成の確認と翻訳計画作成\\n- 用語集の作成/更新（既存プロジェクトの用語集をベースに）\\n- 優先度付け: クリティカルパス上の仕様書を先に翻訳\\n- 翻訳メモリ（TM）の準備: 過去の翻訳資産を再利用\\n\\n2. 翻訳フェーズ（メインワーク）:\\n- AI翻訳（DeepL/ChatGPT）で1次翻訳を生成\\n- BrSEが技術的正確性をレビュー・修正（ポストエディット）\\n- 特に注意: 曖昧な日本語表現の具体化、省略語の補完、文脈依存の翻訳\\n- 1日あたり目標: 15-20ページ（ポストエディット込み）\\n\\n3. 品質管理:\\n- レベル1: 用語の一貫性チェック（用語集との照合）\\n- レベル2: 技術的正確性レビュー（シニアBrSEまたは技術リードが確認）\\n- レベル3: 曖昧な仕様の確認リスト作成 → クライアントに質問\\n- チェックリスト: 数値の正確性、図表の翻訳漏れ、参照先の整合性\\n\\n4. ツール活用:\\n- 翻訳支援ツール: memoQ",
    explanation: "大規模翻訳では「全部手動で翻訳」は非効率です。AI翻訳+人間のポストエディットが現在の最適解です。AIは速度を、BrSEは技術的正確性と文脈理解を提供します。翻訳メモリ（TM）の活用で、同じフレーズの再翻訳を防ぎ、プロジェクト間で資産を再利用できます。",
  },
  'brse-tt-008': {
    question: "日本語の仕様書でよく使われる「〇〇すること」という記述について、BrSEが注意すべきポイントは何ですか？",
    options: [
    "「すること」は命令なのでそのまま翻訳すればよい",
    "「すること」は要求レベルが曖昧 — 「必須（MUST）」「推奨（SHOULD）」「任意（MAY）」のどれに該当するかをクライアントに確認してから翻訳・伝達する",
    "「すること」は無視してもよい",
    "「すること」はすべて「MUST」と翻訳する",
    ""
    ],
    answer: 1,
    explanation: "RFC 2119の要求レベル：MUST（必須）、SHOULD（推奨）、MAY（任意）。日本語の「〇〇すること」はすべて同じ語調ですが、実際の要求強度は異なります。例：「パスワードは8文字以上とすること」（MUST）vs「画面の色は青を基調とすること」（SHOULD）。BrSEは文脈から要求レベルを判断し、開発チームに正確に伝える必要があります。",
  },
  'brse-tt-009': {
    question: "リードBrSEとして、会社全体の翻訳品質基準と翻訳資産管理（用語集、翻訳メモリ）の仕組みを設計してください。複数プロジェクトでの共有と新人BrSEの教育を含めてください。",
    answer: "全社翻訳品質管理システム:\\n\\n1. 翻訳品質基準:\\n- 品質レベル定義:\\n  - Lv.1 参考訳（ドラフト）: AI翻訳+軽微修正、社内共有用\\n  - Lv.2 業務利用訳: AI+BrSEレビュー、開発チーム向け\\n  - Lv.3 正式訳: BrSE翻訳+シニアレビュー、クライアント提出用\\n- 各レベルの品質チェックリスト\\n- 翻訳エラー分類: 致命的（意味が逆）、重大（情報欠落）、軽微（表現の不統一）\\n\\n2. 翻訳資産管理:\\n- 全社用語集（マスター）: 共通IT用語1000+語\\n- プロジェクト用語集: プロジェクト固有の用語を追加\\n- 翻訳メモリ: 過去の翻訳をDB化、新規翻訳時に参照\\n- 管理ツール: Airtable/Notion + GitHubで版管理\\n- 更新フロー: BrSE → レビュー → マスター反映（月次）\\n\\n3. プロジェクト間共有:\\n- 用語集マスターは全BrSEがアクセス可能\\n- 翻訳テンプレート集（よく使うメール文面、報告書フォーマット）\\n- ベストプラクティス共有会（月次、30分）\\n\\n4. 新人BrSE教育:\\n- 翻訳ガイドライン研修（2時間）\\n- 用語集の使い方トレーニング\\n- OJT: 先輩の翻訳を模写 → レビューを受ける\\n- 翻訳テスト（月次）: 課題仕様書を翻訳、先輩が評価\\n\\n5. KPI:\\n- 翻訳起因の仕様齟齬件数（目標: 月0件）\\n- 用語の統一率（目標: 95%以上）\\n- 翻訳効率（ページ/日）\\n- クライアント翻訳品質フィードバック",
    explanation: "翻訳品質は属人的になりがちですが、組織として管理することで品質の底上げと効率化が可能です。用語集と翻訳メモリは「翻訳資産」であり、プロジェクトが増えるほど価値が高まります。品質レベルの定義により、すべてのドキュメントに最高品質の翻訳を適用する非効率を避けられます。",
  },
  'brse-tt-010': {
    question: "日本語の「不具合」と「バグ」の違いとして、翻訳時に意識すべきことは何ですか？",
    options: [
    "全く同じ意味なので、常に \"bug\" と訳せば良い",
    "「不具合」はより広い意味（Defect/Issue/Malfunction）を含み、仕様との乖離だけでなくハードウェアの問題なども指すことがあるため、文脈により使い分ける",
    "「不具合」は古い言葉なので使わない",
    "「バグ」は敬語ではない"
    ],
    answer: 1,
    explanation: "エンジニア向けには \"bug\" が伝わりやすいですが、クライアント向けの正式な報告書では \"defect\" や \"issue\"、あるいは \"non-conformity\" が適切な場合があります。",
  },
  'brse-tt-011': {
    question: "「仕様書通りに動作しません」という報告をクライアントにする際、最も適切な英文はどれですか？",
    options: [
    "It does not work as specified.",
    "It is different from the document.",
    "The current behavior deviates from the functional requirements defined in the specification (Section 3.2).",
    "Broken function."
    ],
    answer: 2,
    explanation: "具体的に「どの仕様書のどこ」と指し示し、\"deviates from（〜から逸脱している）\" という表現を使うことで、客観的かつプロフェッショナルな報告になります。",
  },
  'brse-tt-012': {
    question: "技術用語の「勘所（かんどころ）」を開発チームに説明する際、どのように訳すと伝わりやすいですか？",
    options: [
    "Hand place",
    "Key points / Critical points / Tips for success",
    "I dont know",
    "Skill points"
    ],
    answer: 1,
    explanation: "日本語特有の比喩表現は、そのまま訳しても通じません。その言葉が意図する「最も重要なポイント」や「コツ」という意味に噛み砕いて翻訳する必要があります。",
  },
  'brse-tt-013': {
    question: "「既存踏襲（きぞんとうしゅう）」という指示を翻訳する際の注意点は何ですか？",
    options: [
    "「これまでと同じ」とだけ言えばよい",
    "「どのバージョンの、どの機能を」踏襲するのかを明確にし、\"Following the existing implementation of [specific module]\" と具体的に訳す",
    "新しいやり方でやれという意味だと解釈する",
    "翻訳を拒否する"
    ],
    answer: 1,
    explanation: "「踏襲」は便利な言葉ですが、開発者にとっては「何を見ればいいか」が不明確なことが多いため、BrSEが「見るべきソースコードやドキュメント」を指定してあげる必要があります。",
  },
  'brse-tt-014': {
    question: "日本語の「曖昧な仕様書」を英訳する際、BrSEがAI（ChatGPT）をどのように使い分けるのが最も効果的ですか？",
    options: [
    "そのまま全てChatGPTに翻訳させる",
    "1. まず日本語のまま「論理的矛盾や不足」をAIに指摘させる \\n2. BrSEが不足を埋めた上で翻訳させる \\n3. 出力された翻訳が技術的に正しいかBrSEが最終チェックする",
    "AIは一切使わない",
    "AIに仕様を勝手に作らせる"
    ],
    answer: 1,
    explanation: "AIは文法は得意ですが、プロジェクトの文脈や「不足している情報」には気づけません。BrSE가「上流での解釈」をAIに手伝わせ、最終的な「責任」を人間がとる体制が最強です。",
  },
  'brse-tt-015': {
    question: "IT用語の略語（例：API、DB、UI）は、日本語の仕様書内でもそのままアルファベットで記述するのが一般的である。",
    answer: "真",
    explanation: "これらは世界共通の用語であり、無理に日本語（アプリケーションインターフェース等）に開くとかえって分かりにくくなります。",
  },
  'brse-tt-016': {
    question: "クライアントが「〜の方向で進めてください」と言った場合、翻訳時にどう解釈すべきですか？",
    options: [
    "まだ決定していないので待てという意味",
    "「〜の方針で決定(Approve)した」と解釈し、\"Please proceed based on [current proposed plan]\" と訳す",
    "逆方向に進めという意味",
    "適当にやるという意味"
    ],
    answer: 1,
    explanation: "日本的な「〜の方向で」は、実質的な承諾（ゴーサイン）を意味することが多いです。BrSEはこれを明確な意思表示として翻訳し、開発を加速させる必要があります。",
  },
  'brse-tt-017': {
    question: "リードBrSEとして、プロジェクト横断的な「NGワード・禁句集（例：曖昧な指示語の禁止）」を策定する目的は何ですか？",
    options: [
    "言葉遣いを厳しくするため",
    "コミュニケーションの解像度を強制的に高め、認識齟齬による手戻りコストを全社レベルで削減するため",
    "日本語を忘れさせるため",
    "若手BrSEを怖がらせるため"
    ],
    answer: 1,
    explanation: "「よしなに」「いい感じで」などの言葉を禁止し、数値や図解を強要するルールを作ることで、結果としてエンジニアの生産性が上がります。",
  },
  'brse-tt-018': {
    question: "技術翻訳において「受身（〜される）」の文を「能動（〜する）」に書き直して翻訳することのメリットは何ですか？",
    options: [
    "文字数が減る",
    "「誰が/何が」そのアクションを行うのか（主語）が明確になり、システムの実装ロジックと一致しやすくなる",
    "日本語の方がかっこいいから",
    "特にメリットはない"
    ],
    answer: 1,
    explanation: "日本語の仕様書は主語が抜けた受身文が多いですが、プログラムは能動的なロジックの塊です。「主語を補う」ことがBrSEの翻訳において最も価値のある作業の一つです。",
  },
  'brse-tt-019': {
    question: "リードBrSEとして、ベトナム人エンジニアが書いた「片言の怪しい日本語」のバグレポートが、クライアントの信頼を損なわないようにするための仕組みを設計してください。",
    answer: "レポート品質向上の仕組み：\\n1. テンプレートの徹底：日本語の型（状況、期待値、実際、原因）を固定し、埋めるだけにさせる。\\n2. AI自動校正の組み込み：SlackやJiraに「投稿前に自然な日本語に変換する」ボタンを設置する。\\n3. BrSE検品フロー：クライアントの目に触れるレポートは、ステータスを「Pending Review」にしてBrSEが最終確認する。\\n4. 日本語フィードバック：間違った日本語を優しく直し、次回から使えるフレーズとしてチームに共有する。",
    explanation: "エンジニアに完璧な日本語を求めるのは酷ですが、クライアントにはプロフェッショナルな報告を出す必要があります。技術とプロセスの両輪でカバーします。",
  },
}
