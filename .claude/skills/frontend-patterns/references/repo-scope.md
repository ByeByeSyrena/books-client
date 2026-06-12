# Repository Scope

- Never scan the entire repository unless explicitly requested.
- Work only in the package mentioned by the user.
- Prefer minimal changes.
- Do not modify unrelated files.
- Ask before performing large refactors.
- Ignore `.next`, `dist`, `coverage`, and `node_modules`.
- For monorepos, respect package boundaries and do not create bad dependencies.
