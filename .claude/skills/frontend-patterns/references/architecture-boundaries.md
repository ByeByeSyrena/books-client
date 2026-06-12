# Architecture Boundaries

- Keep API and business logic out of UI components.
- Move repeated non-UI logic into helpers, hooks, or services.
- Use existing project patterns before introducing a new architecture.
- For DB/env work, do not make packages depend on app-specific `.env` files.
- Before changing architecture, explain tradeoffs first.
- Ask before performing large refactors.
