---
name: frontend-patterns
description: Project frontend coding guardrails for React/TypeScript work. Use when making or reviewing frontend changes in this repository, especially component edits, UI refactors, reusable component extraction, small logical file organization, feature folder structure, design consistency, existing component reuse, TypeScript cleanup, package-boundary decisions, or requests to keep changes minimal and aligned with existing patterns.
---

# Frontend Patterns

Use this skill to keep frontend work small, readable, and aligned with project conventions.

## Start Here

Before editing, read only the reference files relevant to the requested work:

- For repository scope, ignored folders, minimal changes, and monorepo/package boundaries, read `references/repo-scope.md`.
- For TypeScript, naming, constants, imports, repeated logic, and simplicity, read `references/code-quality.md`.
- For reusable React components, list rendering, JSX structure, UI states, and forms, read `references/component-patterns.md`.
- For feature folder structure, small logical files, file responsibilities, and extraction checks, read `references/small-logical-files.md`.
- For design system consistency, existing UI component reuse, forms, spacing, colors, typography, tables, drawers, and modals, read `references/design-consistency.md`.
- For API/business logic, architecture changes, env/DB boundaries, and refactor tradeoffs, read `references/architecture-boundaries.md`.
- For explaining changes and communicating before large refactors, read `references/workflow-communication.md`.

## Core Workflow

1. Identify the smallest package and files needed for the user request.
2. Inspect local patterns before choosing an approach.
3. Make the minimum scoped change that solves the task.
4. Keep unrelated files untouched.
5. Validate with the narrowest useful check available.
6. Explain why the change was needed, not only what changed.
