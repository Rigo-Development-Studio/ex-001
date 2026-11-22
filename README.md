# ex-001

Minimal TypeScript + Node.js 22 project configured with `package.json` and `tsconfig.json`.

## Features
- **`slugify` Utility Function**: Converts input strings into clean, URL-friendly slugs in `src/utils/slugify.ts`.
- **Node.js 22 Native Test Runner**: Runs tests in `test/slugify.test.ts` using Node.js native test runner (`node:test` and `node:assert`) with `--experimental-strip-types`.

## Getting Started

### Installation
```bash
npm install
```

### Running Tests
Execute unit tests using Node.js 22 native type stripping:
```bash
npm test
```

### Type Checking
Run TypeScript type checking:
```bash
npm run typecheck
```

### Build
Run build / typecheck:
```bash
npm run build
```
