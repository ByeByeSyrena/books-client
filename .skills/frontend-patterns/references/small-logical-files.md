# Small Logical Files

When implementing features, split code into small, logical, maintainable files instead of putting everything in one large file.

## Main Rules

- Keep each file focused on one responsibility.
- Avoid large components that contain UI, business logic, form config, validation, helpers, and mock data all together.
- Prefer extracting reusable pieces into separate files.
- Do not over-engineer, but split files when a component becomes hard to scan or reuse.

## Suggested Structure

For each feature, prefer a feature-based folder structure:

```txt
features/
  users/
    components/
      users-table.tsx
      users-form-drawer.tsx
      invite-user-drawer.tsx
      user-status-badge.tsx
    schemas/
      user-form.schema.ts
      invite-user.schema.ts
    config/
      user-fields.ts
      invite-user-fields.ts
    types.ts
    utils.ts
    index.ts
```

## What Goes Where

- `components/` contains UI components only.
- `schemas/` contains Zod schemas and validation-related types.
- `config/` contains static field configs, table columns, and options.
- `types.ts` contains shared feature types.
- `utils.ts` contains small pure helper functions.
- `hooks/` contains feature-specific React hooks.
- `api/` contains API calls or data-fetching logic.

## Component Rules

- Keep components mainly responsible for rendering UI.
- Move repetitive field definitions into config files.
- Move complex conditional logic into helper functions.
- Move form validation into schema files.
- Move API calls outside UI components.
- Avoid deeply nested JSX when it can be extracted into smaller components.

## Naming

Use clear file names based on responsibility:

```txt
invite-user-drawer.tsx
invite-user-form.tsx
invite-user.schema.ts
invite-user-fields.ts
format-user-role.ts
get-user-status-label.ts
```

## Before Finishing

Check:

- Is any file doing too many things?
- Is the component longer than needed?
- Can another developer understand the folder without reading everything?
- Are repeated form fields, table columns, or options extracted?
- Are schemas and types separated from UI?

Aim for readable, boring, maintainable code.
