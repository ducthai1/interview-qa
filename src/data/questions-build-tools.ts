import type { Question } from '../types'

export const buildToolsQuestions: Question[] = [
  {
    id: 'bt-001',
    topic: 'build-tools',
    difficulty: 'junior',
    type: 'mcq',
    question: 'What makes Vite\'s development server significantly faster than webpack-dev-server?',
    options: [
      'Vite uses more CPU cores for parallel compilation',
      'Vite serves source files as native ES modules directly to the browser, only transforming files on-demand when requested, instead of bundling everything upfront',
      'Vite pre-compiles all code to WebAssembly',
      'Vite skips TypeScript type checking entirely',
    ],
    answer: 1,
    explanation: 'Vite\'s dev server leverages native ES modules (ESM) in modern browsers. It only transforms a file when the browser requests it (on-demand), instead of bundling the entire app. It also splits work: pre-bundling slow node_modules with esbuild (Go-based, 10-100x faster than JS bundlers) while serving app code as raw ESM.',
    tags: ['vite', 'esm', 'dev-server', 'performance'],
    year: 2025,
  },
  {
    id: 'bt-002',
    topic: 'build-tools',
    difficulty: 'junior',
    type: 'true-false',
    question: 'Tree shaking only works with ES modules (import/export) and cannot eliminate unused code from CommonJS (require/module.exports) modules.',
    answer: true,
    explanation: 'Tree shaking relies on static analysis of ES module imports/exports, which are statically deterministic at compile time. CommonJS exports (module.exports = {...}) are dynamic — the bundler cannot statically determine which exports are used since require() calls can be conditional or computed. This is why libraries are encouraged to ship ESM builds alongside CJS.',
    tags: ['tree-shaking', 'esm', 'cjs', 'bundling'],
    year: 2025,
  },
  {
    id: 'bt-003',
    topic: 'build-tools',
    difficulty: 'junior',
    type: 'mcq',
    question: 'What is the difference between ESM (ES Modules) and CJS (CommonJS)?',
    options: [
      'ESM is for frontend; CJS is for backend',
      'ESM uses static import/export syntax, supports tree shaking, and is the browser native module system. CJS uses require/module.exports, is dynamic, and is Node.js\'s legacy module system.',
      'CJS is faster at runtime than ESM',
      'ESM requires a bundler; CJS runs natively everywhere',
    ],
    answer: 1,
    explanation: 'ESM (import/export) is statically analyzable (enables tree shaking), supports top-level await, loads asynchronously, and is natively supported in browsers and Node.js 12+. CJS (require/exports) is synchronous, dynamic, and was Node\'s original module system. Modern packages ship dual CJS+ESM via package.json "exports" field.',
    tags: ['esm', 'cjs', 'modules', 'node'],
    year: 2025,
  },
  {
    id: 'bt-004',
    topic: 'build-tools',
    difficulty: 'junior',
    type: 'mcq',
    question: 'What is code splitting in the context of JavaScript bundlers?',
    options: [
      'Breaking CSS into multiple stylesheets',
      'Dividing a JavaScript bundle into smaller chunks that can be loaded on-demand, reducing initial page load time by only loading code needed for the current view',
      'Splitting TypeScript code into separate type files',
      'Distributing code across multiple CDN servers',
    ],
    answer: 1,
    explanation: 'Code splitting creates separate JS chunks: a main bundle and lazily-loaded feature chunks. React.lazy() + dynamic import() triggers code splitting automatically in Vite/webpack. Result: the landing page doesn\'t load the checkout page JS. Bundlers also do automatic vendor splitting (separating node_modules from app code for better caching).',
    tags: ['code-splitting', 'lazy-loading', 'bundling'],
    year: 2025,
  },
  {
    id: 'bt-005',
    topic: 'build-tools',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is Vite\'s HMR (Hot Module Replacement) and how does it achieve near-instant updates?',
    options: [
      'HMR reloads the entire page on every file change',
      'HMR invalidates only the changed module and its dependents in the ES module graph, exchanging the new module without a page reload, preserving application state in unaffected parts',
      'HMR compiles the entire project in the background during edits',
      'HMR only works for CSS changes; JS always triggers a full reload',
    ],
    answer: 1,
    explanation: 'Vite\'s HMR exploits the ESM module graph. When a file changes, Vite: (1) invalidates the changed module and its direct importers, (2) sends an HMR update message to the browser, (3) the browser fetches only the updated modules and re-executes them. CSS updates are even faster — injected directly into the page with zero reload.',
    tags: ['vite', 'hmr', 'dev-experience'],
    year: 2025,
  },
  {
    id: 'bt-006',
    topic: 'build-tools',
    difficulty: 'mid',
    type: 'code-output',
    question: 'What does this Vite config accomplish?',
    code: `// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
        },
      },
    },
  },
})`,
    answer: 'Configures manual chunk splitting: React and ReactDOM are extracted into a "vendor" chunk, Radix UI components into a "ui" chunk. These are separate JS files that can be cached independently by browsers.',
    explanation: 'manualChunks lets you control chunk boundaries. By separating vendor (rarely changes) from UI library chunks and app code, browsers can cache vendor.js and ui.js long-term. When you update your app code, users only download the changed app chunk, not the 100KB react+react-dom chunk they already cached.',
    tags: ['vite', 'rollup', 'code-splitting', 'caching'],
    year: 2025,
  },
  {
    id: 'bt-007',
    topic: 'build-tools',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is Module Federation in webpack 5 and what problem does it solve?',
    options: [
      'A way to split webpack config into multiple files',
      'A mechanism that allows multiple separately built and deployed JavaScript applications to share code at runtime, enabling micro-frontend architectures where teams deploy independently',
      'An npm package registry for private modules',
      'A way to federate CSS across multiple stylesheets',
    ],
    answer: 1,
    explanation: 'Module Federation lets App A expose React components that App B imports at runtime without bundling them together. Shell app + micro-frontends pattern: the shell loads remote entries from deployed micro-frontends at runtime. Shared dependencies (React, ReactDOM) are deduplicated via the shared: {} config, avoiding multiple React instances.',
    tags: ['webpack', 'module-federation', 'micro-frontends'],
    year: 2025,
  },
  {
    id: 'bt-008',
    topic: 'build-tools',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is Turbopack and how does it compare to Vite?',
    options: [
      'Turbopack is a CSS preprocessor built by Vercel',
      'Turbopack is a Rust-based incremental bundler built by Vercel, designed as webpack\'s successor. It uses persistent caching and task parallelization for faster cold starts and incremental builds. Next.js uses it as its dev bundler. Unlike Vite (unbundled ESM dev), Turbopack bundles in dev mode.',
      'Turbopack is an alternative to npm for package management',
      'Turbopack and Vite use identical architectures, Turbopack just has better marketing',
    ],
    answer: 1,
    explanation: 'Turbopack (Rust) vs Vite (Go+Rollup): Both are extremely fast. Turbopack bundles even in dev (unlike Vite\'s native ESM) which is better for large apps where ESM 1000s of requests become slow. Turbopack has deep Next.js integration and persistent disk caching. Vite has a larger plugin ecosystem and works with any framework. Turbopack is webpack-compatible.',
    tags: ['turbopack', 'vite', 'nextjs', 'bundler'],
    year: 2025,
  },
  {
    id: 'bt-009',
    topic: 'build-tools',
    difficulty: 'mid',
    type: 'true-false',
    question: 'Turborepo\'s remote caching allows CI builds to reuse build artifacts from previous runs on the same commit, even across different machines.',
    answer: true,
    explanation: 'Turborepo\'s remote cache (Vercel or self-hosted) uploads task outputs (build artifacts, test results) keyed by input hash. If the inputs haven\'t changed, any machine (CI worker, developer laptop) downloads and restores the cached output instead of re-running. This turns a 10-minute CI build into seconds when only 1 package changed.',
    tags: ['turborepo', 'caching', 'monorepo', 'ci'],
    year: 2025,
  },
  {
    id: 'bt-010',
    topic: 'build-tools',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is the purpose of the "sideEffects" field in package.json and how does it affect tree shaking?',
    options: [
      'It declares runtime side effects like console.log calls',
      'It tells bundlers which modules have side effects (and thus cannot be tree-shaken) vs which are pure. "sideEffects: false" means all modules are side-effect-free and unused exports can be safely removed. "sideEffects: [\"*.css\"]" protects CSS imports from removal.',
      'It lists npm packages that conflict with the current package',
      'It declares browser-only vs Node-only entry points',
    ],
    answer: 1,
    explanation: 'sideEffects controls aggressive tree shaking. A "side effect" is code that runs on import beyond what it exports (e.g., polluting globals, registering event listeners). When sideEffects: false, the bundler can drop imported modules with no used exports entirely. CSS files imported for their side effect of adding styles must be listed in sideEffects: ["**/*.css"] to prevent removal.',
    tags: ['tree-shaking', 'sideEffects', 'package-json', 'bundling'],
    year: 2025,
  },
  {
    id: 'bt-011',
    topic: 'build-tools',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is the difference between Nx and Turborepo for monorepo management?',
    options: [
      'Nx is only for Angular; Turborepo works with any framework',
      'Turborepo focuses on task orchestration and caching with minimal configuration. Nx is a full-featured monorepo platform with code generation, project graph analysis, affected-command detection, module boundary enforcement, and framework-specific generators/executors — more opinionated but more powerful for large enterprise repos.',
      'Nx uses yarn workspaces; Turborepo uses npm workspaces',
      'They are identical tools from the same company',
    ],
    answer: 1,
    explanation: 'Turborepo: simple turbo.json config, great for teams wanting fast builds with minimal setup. Nx: project graph (understands imports between packages), affected builds (only rebuild what changed based on code analysis, not just file changes), code generators, task caching, module boundary eslint rules. Nx is better for complex, large organizations. Both support remote caching.',
    tags: ['nx', 'turborepo', 'monorepo', 'comparison'],
    year: 2025,
  },
  {
    id: 'bt-012',
    topic: 'build-tools',
    difficulty: 'senior',
    type: 'debug',
    question: 'A production bundle is unexpectedly large. What steps would you take to diagnose and fix this?',
    code: `// The built output:
// dist/assets/index-Bx7kN2.js  2.4 MB (gzipped: 890 KB)
// Expected: < 200KB gzipped

// vite.config.ts
export default defineConfig({
  build: {
    // No special config
  }
})`,
    answer: 'Run bundle analysis (rollup-plugin-visualizer), look for: (1) entire libraries imported instead of specific functions (import _ from "lodash" vs import debounce from "lodash/debounce"), (2) large dependencies (moment.js, faker), (3) missing code splitting for routes, (4) duplicate packages at different versions, (5) dev-only code in production.',
    solutionCode: `// vite.config.ts — FIXED: add bundle analyzer + manual chunks + dynamic imports
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: true }), // analyze bundle
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          // Each route lazy-loaded separately
        },
      },
    },
  },
})

// In your route files — use dynamic imports for code splitting:
// const HeavyPage = lazy(() => import('./pages/HeavyPage'))

// Fix tree-shaking — import specific functions:
// import debounce from 'lodash-es/debounce'  // not: import _ from 'lodash'
// import { format } from 'date-fns'           // not: import moment from 'moment'`,
    explanation: 'Diagnosis: add rollup-plugin-visualizer to see bundle composition. Common culprits: lodash (70KB→3KB with tree-shaking), moment.js (use date-fns), large icon libraries (import entire set instead of specific icons), missing dynamic import() for routes, unintentionally including test files or mocks in production. Fix: lazy routes, tree-shaken imports, replace heavy libs.',
    tags: ['bundle-analysis', 'optimization', 'vite', 'performance'],
    year: 2025,
  },
  {
    id: 'bt-013',
    topic: 'build-tools',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is the "exports" field in package.json and why is it important for modern packages?',
    options: [
      'It lists the npm registry keywords for a package',
      'It defines the public API surface of a package with conditional exports for different environments (browser vs Node, ESM vs CJS, development vs production), preventing access to internal paths and enabling dual-package hazard solutions',
      'It declares which files are included in the npm publish',
      'It specifies peer dependencies that consumers must install',
    ],
    answer: 1,
    explanation: 'The "exports" field (package.json) controls module resolution: { "exports": { ".": { "import": "./dist/esm/index.js", "require": "./dist/cjs/index.js" }, "./utils": "./dist/esm/utils.js" } }. It prevents deep imports into package internals (encapsulation), provides different code for different environments, and enables bundlers to pick the optimal format. package.json "exports" takes priority over "main".',
    tags: ['package-json', 'exports', 'esm', 'cjs'],
    year: 2025,
  },
  {
    id: 'bt-014',
    topic: 'build-tools',
    difficulty: 'lead',
    type: 'mcq',
    question: 'How do you prevent the "dual package hazard" when a library ships both CJS and ESM?',
    options: [
      'Only ship ESM and drop CJS support',
      'The dual package hazard occurs when both CJS and ESM versions of a package are loaded simultaneously, creating two instances of singleton modules (React, stores). Prevent it by using the "exports" conditional exports to ensure bundlers pick one format, and by marking singleton dependencies in the package as "external" to ensure the consumer\'s copy is used.',
      'Use webpack aliases to always resolve to the CJS version',
      'Ship only CJS until all environments support ESM natively',
    ],
    answer: 1,
    explanation: 'Dual package hazard: if one part of an app loads pkg/esm and another loads pkg/cjs (same package, different instances), singletons break (React context not found, Zustand store not shared). Prevention: (1) correct "exports" conditional map so bundlers consistently pick one format; (2) "peerDependencies" for shared singletons instead of "dependencies" so consumers provide one instance; (3) test with bundler\'s dedupe configuration.',
    tags: ['dual-package', 'esm', 'cjs', 'packages'],
    year: 2025,
  },
  {
    id: 'bt-015',
    topic: 'build-tools',
    difficulty: 'lead',
    type: 'mcq',
    question: 'What is chunk optimization and what are the key strategies for optimal chunking in a large application?',
    options: [
      'Merging all chunks into one file for maximum cache performance',
      'Strategies: (1) Route-based splitting for lazy loading (2) Vendor chunk isolation (react, react-dom separated) (3) Shared chunk extraction for code used across multiple routes (4) Dynamic imports for heavy libraries (charts, editors) (5) Prefetch directives for likely-next-navigation chunks',
      'Always use the default bundler chunking without customization',
      'Chunk size optimization only matters for Node.js applications',
    ],
    answer: 1,
    explanation: 'Optimal chunking balances: initial load (minimize first-visit bytes), caching (stable hash = long cache life), parallelism (download multiple small chunks vs one large one), and overhead (too many HTTP/2 requests vs too few). The art: vendor chunks (stable, cached long-term) + route chunks (lazy) + shared chunks (deduped common code) + asset chunks (images, fonts). Analyze with rollup-plugin-visualizer.',
    tags: ['code-splitting', 'chunk-optimization', 'caching', 'performance'],
    year: 2025,
  },
  {
    id: 'bt-016',
    topic: 'build-tools',
    difficulty: 'mid',
    type: 'code-output',
    question: 'What does this Vite plugin do?',
    code: `// vite.config.ts
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    {
      name: 'inject-version',
      transformIndexHtml(html) {
        return html.replace(
          '__APP_VERSION__',
          process.env.npm_package_version ?? '0.0.0'
        )
      },
    },
  ],
})`,
    answer: 'A custom Vite plugin that replaces the placeholder string "__APP_VERSION__" in index.html with the current package version from package.json during the build.',
    explanation: 'Vite plugins implement Rollup-compatible hooks. transformIndexHtml() is a Vite-specific hook that receives and transforms the HTML template. process.env.npm_package_version is automatically set by npm/pnpm when running scripts to the current package.json version. This injects the version into the HTML without any build step.',
    tags: ['vite', 'plugins', 'transformIndexHtml'],
    year: 2025,
  },
  {
    id: 'bt-017',
    topic: 'build-tools',
    difficulty: 'junior',
    type: 'mcq',
    question: 'In a monorepo using pnpm workspaces, how do you install a shared package across all workspace packages?',
    options: [
      'Run npm install in each package directory separately',
      'Run pnpm install from the root directory — pnpm hoists shared dependencies and creates a node_modules layout that avoids phantom dependencies',
      'Add the dependency to each package.json manually then run pnpm install',
      'Use pnpm global install for shared packages',
    ],
    answer: 1,
    explanation: 'pnpm uses a content-addressable store and symlinks for its node_modules structure. Running pnpm install at the root installs all workspace dependencies. pnpm\'s strict node_modules layout prevents phantom dependencies (packages that aren\'t in your package.json but happen to be installed). Use pnpm add typescript --workspace-root for root-level devDependencies.',
    tags: ['pnpm', 'monorepo', 'workspaces'],
    year: 2025,
  },
  {
    id: 'bt-018',
    topic: 'build-tools',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is the purpose of the Vite "define" configuration option?',
    options: [
      'Defines TypeScript types for import.meta.env',
      'Replaces global constants at build time (like webpack DefinePlugin). Used for dead code elimination: define: { __DEV__: false } allows bundlers to remove if (__DEV__) blocks in production builds.',
      'Defines CSS custom property values',
      'Sets module aliases for import resolution',
    ],
    answer: 1,
    explanation: 'define performs text replacement at build time: define: { "process.env.NODE_ENV": JSON.stringify("production") }. The bundler substitutes the literal value, then minifiers eliminate dead code (if (false) { ... }). Important: values must be JSON.stringify\'d for strings. Vite also supports import.meta.env variables defined in .env files via the VITE_ prefix convention.',
    tags: ['vite', 'define', 'dead-code-elimination', 'build'],
    year: 2025,
  },
  {
    id: 'bt-019',
    topic: 'build-tools',
    difficulty: 'mid',
    type: 'true-false',
    question: 'Using dynamic import() with a static string path (e.g., import("./features/checkout")) generates a separate chunk at build time, while import() with a dynamic variable cannot be statically analyzed for chunk splitting.',
    answer: true,
    explanation: 'Bundlers statically analyze import() calls. import("./features/checkout") → bundler creates checkout.[hash].js chunk at build time. import("./" + path) → bundler cannot determine which files to split; it either fails, bundles everything matching the pattern, or uses a dynamic require without splitting. Always use static strings in import() for predictable code splitting.',
    tags: ['dynamic-import', 'code-splitting', 'static-analysis'],
    year: 2025,
  },
  {
    id: 'bt-020',
    topic: 'build-tools',
    difficulty: 'lead',
    type: 'mcq',
    question: 'What are the key considerations when setting up a shared component library in a monorepo that is consumed by multiple applications?',
    options: [
      'Just publish to npm and have apps install it as a dependency',
      'Key decisions: (1) Build format: ESM + CJS dual package or ESM-only; (2) CSS handling: CSS Modules, CSS-in-JS, or style injection; (3) Peer dependencies vs bundled (React must be peer); (4) TypeScript declaration files (.d.ts); (5) Workspace protocol for local linking; (6) Whether to pre-build or use path aliases for IDE support; (7) Version strategy (independent vs fixed)',
      'Bundle everything including React into one UMD file',
      'Use iframe isolation for complete style encapsulation',
    ],
    answer: 1,
    explanation: 'Shared component library in monorepo: use "workspace:*" protocol for local linking (no publish needed during development). Expose "exports" with ESM/CJS + types fields. Mark React as peerDependency to avoid multiple React instances. Use unbundled-library mode (Vite lib mode or tsup) for consuming apps to tree-shake. Set up path aliases in tsconfig for IDE autocomplete.',
    tags: ['monorepo', 'component-library', 'packages', 'architecture'],
    year: 2025,
  },
  {
    id: 'bt-021',
    topic: 'build-tools',
    difficulty: 'junior',
    type: 'mcq',
    question: 'What does the Vite command "vite preview" do?',
    options: [
      'Opens a preview of the source code in the browser',
      'Starts a local static server serving the production build from the dist/ folder, allowing you to test the built output before deploying',
      'Previews changes without saving them to disk',
      'Runs Vite in watch mode for development',
    ],
    answer: 1,
    explanation: 'vite preview serves the production build (dist/) locally via a static HTTP server. Unlike vite (dev server with HMR and source files), preview serves the actual compiled and minified output. Use it to catch issues that only appear in production builds, like missing assets, wrong base paths, or code that relied on dev-only behavior.',
    tags: ['vite', 'build', 'preview'],
    year: 2025,
  },
  {
    id: 'bt-022',
    topic: 'build-tools',
    difficulty: 'senior',
    type: 'code-output',
    question: 'What is the output bundle structure from this Turborepo task config?',
    code: `// turbo.json (Turborepo v2)
{
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**"]
    },
    "test": {
      "dependsOn": ["build"],
      "outputs": []
    },
    "lint": {
      "outputs": []
    }
  }
}`,
    answer: 'build runs after all dependency packages have built first (^build = build dependencies first). test runs after the current package builds. lint runs independently with no dependencies. Build outputs in dist/ are cached.',
    explanation: '"^build" means "run build in all packages this package depends on first" — enables correct build order in a monorepo where pkg-b depends on pkg-a\'s built output. "dependsOn: [\'build\']" (no ^) means "run this package\'s build first". Empty outputs: [] for test/lint means results aren\'t cached to disk (but task completion is cached). This ensures correct topological order.',
    tags: ['turborepo', 'pipeline', 'monorepo', 'caching'],
    year: 2025,
  },
  {
    id: 'bt-023',
    topic: 'build-tools',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is the purpose of PostCSS and how does it fit into a modern frontend build pipeline?',
    options: [
      'PostCSS is a CSS preprocessor like Sass or Less',
      'PostCSS is a tool that transforms CSS with JavaScript plugins. It enables Autoprefixer (adds vendor prefixes), cssnano (minification), nesting support, and custom property fallbacks. Vite and Next.js have built-in PostCSS support via postcss.config.js.',
      'PostCSS is a CSS-in-JS solution',
      'PostCSS only works with webpack, not modern bundlers',
    ],
    answer: 1,
    explanation: 'PostCSS is a CSS transformation platform: input CSS → PostCSS parses to AST → plugins transform AST → output CSS. Key plugins: autoprefixer (adds -webkit-, -moz- prefixes based on browserslist), cssnano (minifies, deduplicates), postcss-preset-env (use future CSS today). Tailwind CSS is itself implemented as a PostCSS plugin. Vite applies PostCSS automatically if postcss.config.js exists.',
    tags: ['postcss', 'autoprefixer', 'build', 'css'],
    year: 2025,
  },
  {
    id: 'bt-024',
    topic: 'build-tools',
    difficulty: 'lead',
    type: 'mcq',
    question: 'In a large-scale monorepo, what does Nx\'s "affected" commands do and why is it superior to running all tests on every commit?',
    options: [
      'It runs tests on files that were modified in the last git commit only',
      'Nx builds a project dependency graph by analyzing imports. "nx affected:test" identifies which packages are affected by changes (changed package + all packages that import from it transitively) and only runs tests for those. This turns a 2-hour full CI run into a 5-minute targeted run.',
      'It uses machine learning to predict which tests will fail',
      'It parallelizes all tests across cloud machines',
    ],
    answer: 1,
    explanation: 'Nx creates a task graph by analyzing source imports between packages. When pkg-ui changes, Nx knows: test pkg-ui + test every app that imports pkg-ui. It does NOT run unaffected packages. Compared to Turborepo: Turborepo uses file-hash-based caching (if files didn\'t change, use cache). Nx uses import analysis for affected (more intelligent, understands dependency boundaries even without running).',
    tags: ['nx', 'affected', 'monorepo', 'ci'],
    year: 2025,
  },
  {
    id: 'bt-025',
    topic: 'build-tools',
    difficulty: 'mid',
    type: 'true-false',
    question: 'Vite uses Rollup for production builds while using its own dev server for development, meaning the dev and production environments use different bundling strategies.',
    answer: true,
    explanation: 'Vite\'s split architecture: development uses a native ESM dev server (no bundling, files served as-is with fast transforms), while production builds use Rollup (mature, powerful, optimized for production bundles with tree-shaking, chunk optimization, output format flexibility). This duality can occasionally cause "works in dev, breaks in prod" bugs, usually around CJS/ESM resolution differences.',
    tags: ['vite', 'rollup', 'dev-vs-prod', 'architecture'],
    year: 2025,
  },
  {
    id: 'bt-026',
    topic: 'build-tools',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is the Vite 6 Environment API and what problem does it solve?',
    options: [
      'An API for setting environment variables in .env files',
      'A first-class abstraction for targeting multiple runtime environments (browser, SSR Node, edge, service worker) within a single Vite project. Each environment has its own module graph, transforms, and dev server, enabling frameworks to handle client and server code consistently.',
      'A plugin API for managing process.env variables at build time',
      'A new way to configure browserslist targets in Vite 6',
    ],
    answer: 1,
    explanation: 'Vite 6 Environment API (2024) was designed to solve framework-level needs (Next.js, Remix, Nuxt) where different parts of the app target different runtimes. Previously, frameworks hacked around Vite\'s single-environment assumption. Now: environments.client, environments.ssr, environments.edge each get an independent module graph and can have different resolve conditions (e.g., "browser" vs "node" exports). Frameworks like Remix benefit significantly.',
    tags: ['vite', 'environment-api', 'ssr', 'vite-6'],
    year: 2025,
  },
  {
    id: 'bt-027',
    topic: 'build-tools',
    difficulty: 'senior',
    type: 'mcq',
    question: 'How does Turbopack achieve faster builds than webpack through its Rust-based incremental architecture?',
    options: [
      'Turbopack avoids code analysis entirely for speed',
      'Turbopack uses Rust for native-speed execution, a demand-driven incremental computation engine (Turbo engine) that caches individual function results, and parallelizes work across CPU cores. Only affected parts of the module graph are recomputed on file change.',
      'Turbopack pre-bundles all node_modules like Vite does with esbuild',
      'Turbopack achieves speed by skipping TypeScript type checking entirely',
    ],
    answer: 1,
    explanation: 'Turbopack\'s Turbo engine is a general-purpose incremental memoization framework: every function\'s result is cached by its inputs. On file change, only functions whose inputs changed are re-executed. Combined with Rust\'s zero-cost abstractions and parallelism across cores, this achieves sub-millisecond incremental updates. Vercel benchmarks show up to 10x faster than Vite and 700x faster than webpack for cold starts in large apps.',
    tags: ['turbopack', 'rust', 'incremental-builds', 'architecture'],
    year: 2025,
  },
  {
    id: 'bt-028',
    topic: 'build-tools',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is Module Federation 2.0 and what improvements does it bring over the original webpack 5 implementation?',
    options: [
      'Module Federation 2.0 is a complete rewrite of webpack from scratch',
      'Module Federation 2.0 (from the module-federation/core project) adds: framework-agnostic runtime (works with Rspack, Vite, webpack), type safety for remote modules via TypeScript declaration generation, better SSR support, dynamic remote loading improvements, and a plugin ecosystem independent of webpack.',
      'Module Federation 2.0 adds CSS federation capabilities',
      'Module Federation 2.0 is only available in webpack 6',
    ],
    answer: 1,
    explanation: 'The @module-federation/core package decouples the runtime from webpack, enabling Vite and Rspack to use Module Federation via @module-federation/vite and @module-federation/rsbuild. Key improvements: (1) Runtime plugin system for customizing remote loading behavior. (2) @module-federation/typescript for generating and consuming remote type declarations. (3) Better error boundaries when remotes fail to load. (4) Improved manifest-based remote discovery.',
    tags: ['module-federation', 'micro-frontends', 'webpack', 'vite'],
    year: 2025,
  },
  {
    id: 'bt-029',
    topic: 'build-tools',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What are import maps and how do they enable running ES modules in the browser without a bundler?',
    options: [
      'Import maps are a webpack feature for resolving module aliases',
      'Import maps are a browser-native JSON spec that maps module specifiers (like "react") to URLs, allowing bare specifiers in ES module imports to resolve without a bundler. <script type="importmap"> defines the mapping in HTML.',
      'Import maps are an alternative to the package.json "exports" field',
      'Import maps only work in Node.js environments, not browsers',
    ],
    answer: 1,
    explanation: '<script type="importmap">{"imports": {"react": "https://esm.sh/react@18", "react-dom/client": "https://esm.sh/react-dom@18/client"}}</script> allows import React from "react" to work in the browser without a build step. Supported in all modern browsers (Chrome 89+, Firefox 108+, Safari 16.4+). Tools like esm.sh serve npm packages as browser-compatible ESM. Import maps are useful for CDN-based setups, quick prototyping, and native module testing.',
    tags: ['import-maps', 'esm', 'browser', 'modules'],
    year: 2025,
  },
  {
    id: 'bt-030',
    topic: 'build-tools',
    difficulty: 'mid',
    type: 'code-output',
    question: 'What does this package.json "exports" field configure?',
    code: `{
  "name": "my-lib",
  "exports": {
    ".": {
      "import": "./dist/esm/index.js",
      "require": "./dist/cjs/index.js",
      "types": "./dist/types/index.d.ts"
    },
    "./utils": {
      "import": "./dist/esm/utils.js",
      "require": "./dist/cjs/utils.js"
    }
  }
}`,
    answer: 'The root import ("my-lib") resolves to ESM or CJS depending on the consumer\'s module system, with TypeScript types. A deep import "my-lib/utils" is explicitly allowed. Any other deep path (e.g., "my-lib/internal") is blocked by the exports map.',
    explanation: 'The "exports" field is the modern package entry point. Bundlers and Node.js use the condition matching: ESM consumers (import statement) get the "import" path, CJS consumers (require()) get "require", TypeScript LSP gets "types". Paths not listed in exports are inaccessible — this enforces your public API surface. The "." key is the package root. This replaces "main" and "module" fields for modern tooling.',
    tags: ['package-json', 'exports', 'esm', 'cjs', 'types'],
    year: 2025,
  },
  {
    id: 'bt-031',
    topic: 'build-tools',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is Browserslist and how does it influence the transpilation output of your build?',
    options: [
      'Browserslist is a CDN that serves polyfills based on browser detection',
      'Browserslist is a configuration standard (in .browserslistrc or package.json "browserslist" field) that defines which browsers your app supports. Tools like Babel, PostCSS/Autoprefixer, and esbuild read it to determine which JavaScript features to transpile and which CSS vendor prefixes to add.',
      'Browserslist is a webpack plugin for per-browser code splitting',
      'Browserslist automatically adds polyfills to your HTML entry point',
    ],
    answer: 1,
    explanation: '"browserslist": "> 0.5%, last 2 versions, not dead" means: target browsers with >0.5% global usage, plus the last 2 versions of each, excluding dead browsers. Babel\'s @babel/preset-env uses this to decide: does arrow function need transpiling? Does optional chaining need a polyfill? esbuild\'s target option accepts browserslist output. Vite accepts a build.target that maps to browserslist-equivalent browser versions. Narrower targets = less transpilation = smaller/faster output.',
    tags: ['browserslist', 'transpilation', 'babel', 'compatibility'],
    year: 2025,
  },
  {
    id: 'bt-032',
    topic: 'build-tools',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What are source maps, what types exist, and what are the security considerations for production?',
    options: [
      'Source maps are only for CSS debugging; JavaScript has its own system',
      'Source maps map minified/compiled output back to original source code for debugging. Types: "source-map" (full, external file), "inline-source-map" (embedded in bundle as base64), "cheap-module-source-map" (line-only, faster), "eval" (fastest, dev-only). Production security risk: exposing source maps reveals proprietary business logic to the public.',
      'Source maps are generated automatically and cannot be configured',
      'Source maps only work in Chrome DevTools, not Firefox or Safari',
    ],
    answer: 1,
    explanation: 'Source map security: publishing source maps to a public CDN exposes your entire source code. Options: (1) No source maps in production (least debuggable), (2) Hidden source maps — generate but don\'t reference in the bundle header, upload to error tracking (Sentry) only, (3) Auth-gated source maps served only to internal tooling. Vite: build.sourcemap: "hidden" generates .map files without the //# sourceMappingURL comment. Sentry CLI uploads them post-build.',
    tags: ['source-maps', 'security', 'debugging', 'production'],
    year: 2025,
  },
  {
    id: 'bt-033',
    topic: 'build-tools',
    difficulty: 'senior',
    type: 'mcq',
    question: 'How does Turborepo remote caching work and what are the security implications?',
    options: [
      'Remote caching stores results in git LFS alongside the codebase',
      'Turborepo hashes task inputs (source files, env vars, configs) to create a cache key. If a remote cache hit exists for that key, artifacts are downloaded instead of rebuilt. Hosted on Vercel or self-hosted. Security: cache keys must include all relevant inputs, leaked tokens give cache read/write access.',
      'Remote caching only works for the build task, not test or lint',
      'Turborepo remote caching requires a paid Vercel subscription for all uses',
    ],
    answer: 1,
    explanation: 'Turborepo cache key = hash of: file contents, env vars (listed in globalEnv/env per task), task config. CI machines authenticate via TURBO_TOKEN env var. Security considerations: (1) Cache poisoning: a compromised machine with write access could inject malicious artifacts — use read-only tokens in most CI environments. (2) Env var leakage: ensure secrets used during build are hashed into cache keys so builds with different secrets don\'t share cache. Self-host with @turborepo/remote-cache for full control.',
    tags: ['turborepo', 'remote-caching', 'security', 'ci'],
    year: 2025,
  },
  {
    id: 'bt-034',
    topic: 'build-tools',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is Nx\'s "affected" detection and how does it differ from Turborepo\'s cache-based approach?',
    options: [
      'They are identical — both use file hashing to determine what to rebuild',
      'Nx statically analyzes import statements to build a project dependency graph, then determines which projects are transitively affected by a git change. Turborepo uses file hashing: if inputs haven\'t changed (cached), skip the task. Nx can identify affected projects even on the first run without cache.',
      'Nx uses machine learning; Turborepo uses git diffs',
      'Affected detection is only available in Nx Enterprise',
    ],
    answer: 1,
    explanation: 'Nx affected: nx affected --target=test uses "git diff --name-only base...HEAD" to find changed files, maps them to Nx projects via the project graph (built from import analysis), then finds all downstream dependents. This works without any prior build cache. Turborepo relies on hashed inputs: no cache = rebuild everything. Nx understands your codebase structure semantically; Turborepo treats projects as black boxes with declared inputs/outputs.',
    tags: ['nx', 'affected', 'turborepo', 'monorepo'],
    year: 2025,
  },
  {
    id: 'bt-035',
    topic: 'build-tools',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is Bun and how does it compare to Node.js and other bundlers as a JavaScript runtime?',
    options: [
      'Bun is a CSS preprocessor built for frontend workflows',
      'Bun is a fast all-in-one JavaScript runtime (written in Zig) that includes a bundler, test runner, package manager, and Node.js-compatible runtime. It achieves speed via the JavaScriptCore engine (instead of V8) and native implementations of many Web APIs.',
      'Bun is a replacement for webpack with a different plugin API',
      'Bun only runs in browser environments, not server-side',
    ],
    answer: 1,
    explanation: 'Bun (1.0 released Sept 2023) is positioned as a drop-in Node.js alternative. Key features: bun install (10-100x faster than npm), bun run (runs scripts), bun build (bundler), bun test (Jest-compatible test runner). Uses JavaScriptCore (Safari\'s JS engine) instead of V8, which has faster startup times. Most Node.js built-ins are compatible. Still maturing for production use cases — some Node.js APIs have edge-case differences.',
    tags: ['bun', 'runtime', 'bundler', 'package-manager'],
    year: 2025,
  },
  {
    id: 'bt-036',
    topic: 'build-tools',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What are esbuild\'s key strengths and notable limitations compared to Rollup?',
    options: [
      'esbuild is only useful for bundling CSS, not JavaScript',
      'Strengths: extremely fast (10-100x Rollup, written in Go), built-in TypeScript/JSX support, tree shaking, code splitting. Limitations: no plugin API as rich as Rollup, lacks some advanced code transformations, limited output format customization, no UMD output, less suitable for library authoring.',
      'esbuild produces larger bundles than Rollup due to lack of optimization',
      'esbuild requires a separate TypeScript compiler step',
    ],
    answer: 1,
    explanation: 'esbuild\'s speed comes from Go\'s parallelism and avoiding AST traversal overhead. Vite uses esbuild for dependency pre-bundling (fast!) and TypeScript stripping but uses Rollup for production builds (better optimization, richer plugins). For application bundling, esbuild\'s limitations: no CSS Modules natively (needs plugins), no CommonJS → ESM conversion edge cases, limited dead code elimination compared to Rollup\'s thorough tree shaking.',
    tags: ['esbuild', 'rollup', 'bundler', 'comparison'],
    year: 2025,
  },
  {
    id: 'bt-037',
    topic: 'build-tools',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is Rolldown and how does it relate to the future of Vite?',
    options: [
      'Rolldown is a new CSS preprocessor from the Vite team',
      'Rolldown is a Rust-based JavaScript bundler (compatible with Rollup\'s plugin API) developed by the Vite team. It is designed to eventually replace both esbuild (for dev pre-bundling) and Rollup (for production builds) in Vite, providing consistent behavior across dev and prod with Rust-level speed.',
      'Rolldown is a fork of webpack rewritten in Rust',
      'Rolldown is a runtime for executing build scripts written in Rust',
    ],
    answer: 1,
    explanation: 'Rolldown (oxc-project/rolldown) aims to solve Vite\'s split architecture (esbuild dev + Rollup prod) that can cause dev/prod behavior differences. By using one Rust-based bundler for both environments, Vite would get: (1) consistent module resolution, (2) ~10x speed improvement on large codebases, (3) maintained Rollup plugin compatibility (huge ecosystem). As of 2025 Rolldown is in beta and being integrated into Vite experimental builds.',
    tags: ['rolldown', 'vite', 'rust', 'bundler'],
    year: 2025,
  },
  {
    id: 'bt-038',
    topic: 'build-tools',
    difficulty: 'mid',
    type: 'mcq',
    question: 'How does CSS preprocessing (Sass, Less, PostCSS) integrate into a Vite build pipeline?',
    options: [
      'Vite requires a separate webpack config for CSS preprocessing',
      'Vite has built-in support for Sass, Less, and Stylus — install the preprocessor (e.g., sass), and .scss files work automatically. PostCSS is applied if postcss.config.js exists. CSS Modules work out of the box for *.module.css/scss files.',
      'CSS preprocessing in Vite requires a dedicated plugin for each language',
      'Vite only supports PostCSS; Sass and Less must be pre-compiled',
    ],
    answer: 1,
    explanation: 'Vite\'s CSS handling (no plugin needed): install sass and import "./styles.scss" just works. install less → .less files work. CSS Modules: *.module.css → import styles from "./Button.module.css" → styles.btn. Global CSS: import "./global.css" in main.tsx. PostCSS: drop postcss.config.cjs in the root. Vite processes CSS through: CSS preprocessor → PostCSS → CSS Modules scoping → injects into document or extracts to file in production.',
    tags: ['vite', 'css', 'sass', 'postcss', 'css-modules'],
    year: 2025,
  },
  {
    id: 'bt-039',
    topic: 'build-tools',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is scope hoisting in bundlers and how does it reduce bundle size and improve runtime performance?',
    options: [
      'Scope hoisting moves CSS class definitions to the top of the file',
      'Scope hoisting (also called module concatenation in webpack) merges multiple ES modules into a single function scope instead of wrapping each module in a separate function closure. This reduces function call overhead, enables minifier to rename across module boundaries, and reduces bundle size.',
      'Scope hoisting is a technique for hoisting JavaScript variable declarations',
      'Scope hoisting merges duplicate CSS selectors',
    ],
    answer: 1,
    explanation: 'Without scope hoisting: each module is wrapped in a factory function (IIFE) with its own scope, adding overhead. With scope hoisting (Rollup does this by default, webpack 4+ with optimization.concatenateModules): modules that are only used once are inlined directly into the consumer\'s scope, eliminating wrapper overhead. Benefits: (1) smaller code (fewer function wrappers), (2) faster execution (no scope chain traversal), (3) better minification (variables across modules can be renamed/eliminated together).',
    tags: ['scope-hoisting', 'module-concatenation', 'rollup', 'webpack', 'optimization'],
    year: 2025,
  },
  {
    id: 'bt-040',
    topic: 'build-tools',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is dead code elimination (DCE) and how does it work in conjunction with tree shaking?',
    options: [
      'DCE and tree shaking are the same thing with different names',
      'Tree shaking removes unused exports at the module graph level (static analysis of import/export). Dead code elimination (DCE) is a minifier-level pass that removes unreachable code after tree shaking: branches of if (false), code after return statements, and constants that evaluate to false at build time. Both work together for optimal output.',
      'DCE only works for CSS; tree shaking works for JavaScript',
      'DCE requires TypeScript; tree shaking works with plain JavaScript',
    ],
    answer: 1,
    explanation: 'Two-phase elimination: (1) Tree shaking: bundler builds the import graph, marks only imported symbols as "live", removes unused exports. (2) DCE: minifier (Terser, esbuild) evaluates constant expressions and removes dead branches: define: { __DEV__: false } → if (false) { ... } → minifier eliminates the entire block. Together: tree shaking removes unused modules, DCE removes dead code within kept modules. Both require ESM static analysis for full effectiveness.',
    tags: ['dead-code-elimination', 'tree-shaking', 'minification', 'optimization'],
    year: 2025,
  },
  {
    id: 'bt-041',
    topic: 'build-tools',
    difficulty: 'junior',
    type: 'true-false',
    question: 'esbuild is written in Go and is typically 10-100x faster than JavaScript-based bundlers like webpack for cold builds.',
    answer: true,
    explanation: 'esbuild achieves its speed through: (1) Go\'s native concurrency model (goroutines for parallel parsing), (2) avoiding unnecessary data conversions, (3) all in one pass (parse, link, minify in a single AST traversal), (4) compiled native binary vs interpreted JavaScript. Benchmarks: esbuild bundles a large app in ~0.1s vs webpack\'s 10-30s. Vite uses esbuild for dependency pre-bundling and TypeScript/JSX transforms specifically because of this speed.',
    tags: ['esbuild', 'performance', 'go', 'bundler-speed'],
    year: 2025,
  },
  {
    id: 'bt-042',
    topic: 'build-tools',
    difficulty: 'mid',
    type: 'code-output',
    question: 'What does this Turborepo task pipeline configuration mean for a monorepo?',
    code: `// turbo.json
{
  "$schema": "https://turbo.build/schema.json",
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "inputs": ["src/**", "package.json"],
      "outputs": ["dist/**"]
    },
    "test": {
      "dependsOn": ["^build"],
      "inputs": ["src/**", "tests/**"]
    },
    "typecheck": {
      "dependsOn": ["^typecheck"]
    }
  }
}`,
    answer: 'build requires all dependency packages to build first (^build), caches the dist/ output keyed by src files and package.json. test requires dependency packages to have built (^build) but produces no cached outputs. typecheck runs in dependency order with no explicit input/output caching.',
    explanation: 'Turborepo v2 uses "tasks" instead of "pipeline". The "^" prefix means "run this task in all packages that this package depends on first". "inputs" defines which files contribute to the cache key — changing only test files won\'t invalidate the build cache. "outputs" are what gets stored/restored from cache. No "outputs" = task result not cached to disk (but task completion is tracked). This enables precise incremental builds.',
    tags: ['turborepo', 'pipeline', 'caching', 'inputs-outputs'],
    year: 2025,
  },
  {
    id: 'bt-043',
    topic: 'build-tools',
    difficulty: 'lead',
    type: 'mcq',
    question: 'How do you configure a Vite-based component library for optimal consumption by downstream applications?',
    options: [
      'Bundle everything including React into the output',
      'Use Vite lib mode with: build.lib config for entry/formats (ESM+CJS), externalize peer deps (React), generate TypeScript declarations (vite-plugin-dts), configure "exports" in package.json for conditional resolution, and set "sideEffects: false" for tree shaking.',
      'Ship only the source TypeScript files without building',
      'Use Vite in SSR mode for library builds',
    ],
    answer: 1,
    explanation: 'Library vite.config.ts: build: { lib: { entry: "src/index.ts", formats: ["es", "cjs"] }, rollupOptions: { external: ["react", "react-dom"], output: { globals: { react: "React" } } } }. Add vite-plugin-dts for type declarations. In package.json: "exports" with import/require/types conditions, "peerDependencies" for React, "sideEffects": false (or ["**/*.css"]). This ensures downstream apps can tree-shake your library and use their own React instance.',
    tags: ['vite', 'lib-mode', 'component-library', 'build-config'],
    year: 2025,
  },
  {
    id: 'bt-044',
    topic: 'build-tools',
    difficulty: 'junior',
    type: 'mcq',
    question: 'What is the purpose of the `.env`, `.env.local`, `.env.production` files in a Vite project?',
    options: [
      'They configure the Vite dev server port and host',
      '.env files define environment variables available to your app via import.meta.env. Only variables prefixed with VITE_ are exposed to client code. .env.local is gitignored (for secrets). .env.production overrides are applied during vite build.',
      'These files replace the vite.config.ts configuration',
      'They store build cache metadata used by Vite internally',
    ],
    answer: 1,
    explanation: 'Vite\'s env file loading order (later files override earlier): .env (all environments), .env.local (all environments, gitignored), .env.[mode] (mode-specific), .env.[mode].local (mode-specific, gitignored). VITE_API_URL=https://api.example.com is accessible as import.meta.env.VITE_API_URL. Variables without VITE_ prefix are NOT exposed to browser code (only available server-side in SSR or in vite.config.ts). Use import.meta.env.MODE for "development"/"production".',
    tags: ['vite', 'env-variables', 'import.meta.env', 'configuration'],
    year: 2025,
  },
  {
    id: 'bt-045',
    topic: 'build-tools',
    difficulty: 'lead',
    type: 'debug',
    question: 'A library consumer reports that importing your package causes "Invalid hook call" errors in their React app. What is most likely wrong?',
    code: `// Your library's package.json (simplified)
{
  "dependencies": {
    "react": "^18.0.0"
  },
  "main": "./dist/cjs/index.js",
  "module": "./dist/esm/index.js"
}

// Consumer's error:
// Error: Invalid hook call. Hooks can only be called inside
// of the body of a function component.`,
    answer: 'React is listed as a "dependencies" instead of "peerDependencies", causing two copies of React to be bundled — one from your library and one from the consumer\'s app. React hooks break when multiple React instances exist.',
    solutionCode: `// Fixed package.json — move React to peerDependencies
{
  "peerDependencies": {
    "react": ">=17",
    "react-dom": ">=17"
  },
  "devDependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
  "main": "./dist/cjs/index.js",
  "module": "./dist/esm/index.js",
  "exports": {
    ".": {
      "import": "./dist/esm/index.js",
      "require": "./dist/cjs/index.js"
    }
  }
}

// vite.config.ts — externalize React so it's not bundled
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: { react: 'React', 'react-dom': 'ReactDOM' },
      },
    },
  },
})`,
    explanation: 'The fix: move React to "peerDependencies": { "react": ">=17" } and add to "devDependencies" for local development. Also externalize React in your Vite/Rollup config: external: ["react", "react-dom"]. This ensures the consumer\'s single React instance is used. The same issue occurs with context, forwardRef, and any React singleton. Always use peerDependencies for framework packages in libraries.',
    tags: ['react', 'peer-dependencies', 'multiple-instances', 'library-authoring'],
    year: 2025,
  },
]
