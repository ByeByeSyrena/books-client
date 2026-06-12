# Code Quality

- Use TypeScript strictly; avoid `any` unless there is a clear reason.
- Keep code simple and readable; do not over-engineer.
- Prefer explicit names over vague names like `data`, `item`, or `value` when context is unclear.
- Move repeated logic into helpers, hooks, or services.
- Do not hardcode repeated strings or magic values inside JSX.
- Write constants in uppercase and move them above the component.
- Use existing project patterns instead of inventing new ones.
- Keep imports clean and remove unused code.
- Prefer named exports for reusable components and utilities.
- Do not rewrite working code just to make it prettier.
