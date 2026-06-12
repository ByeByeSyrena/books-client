# Design Consistency

Maintain a consistent design system across the entire application.

## General Principles

- Reuse existing components before creating new ones.
- Follow established UI patterns already used in the project.
- Prefer consistency over creativity.
- Do not introduce new styles, colors, spacing systems, or interaction patterns unless explicitly requested.

## Component Reuse

Always look for existing components first:

- Buttons
- Inputs
- Selects
- Dropdowns
- Modals
- Drawers
- Tables
- Cards
- Badges
- Form fields
- Error messages
- Empty states

If a similar component already exists, extend or reuse it instead of creating a new implementation.

## Forms

All forms should follow the same structure:

- Consistent field spacing
- Consistent labels
- Consistent error handling
- React Hook Form
- Zod validation
- Shared input components
- Shared error components

Do not create custom field layouts when an existing pattern is available.

## Spacing

Use existing spacing values from the project.

Avoid introducing arbitrary values such as:

```tsx
mt-[17px]
px-[13px]
gap-[11px]
```

Prefer established spacing tokens and Tailwind utilities already used throughout the application.

## Colors

Use only colors defined by the design system.

Do not introduce:

- New brand colors
- New gradients
- New status colors
- New border colors

Reuse existing semantic colors:

- Primary
- Secondary
- Success
- Warning
- Error
- Neutral

## Typography

Use existing typography hierarchy.

Do not invent new font sizes for individual screens.

Reuse existing patterns for:

- Page titles
- Section titles
- Labels
- Body text
- Helper text
- Error text

## Tables

Tables should have consistent:

- Row heights
- Actions placement
- Status badges
- Empty states
- Pagination behavior
- Filters

## Drawers And Modals

All drawers and modals should follow the same structure:

```txt
Title
Description (optional)

Content

Footer Actions
```

Place the primary action consistently across all screens.

## New Components

Before creating a new component, ask:

1. Does a similar component already exist?
2. Can the existing component be extended?
3. Will another screen likely need this component?

If yes, create a reusable component instead of a screen-specific implementation.

## Before Finishing

Verify:

- Does this screen look like it belongs in the same application?
- Are existing components reused?
- Are spacing and typography consistent?
- Are colors consistent?
- Are interaction patterns consistent?
- Would a user immediately recognize this as part of the same product?

Favor consistency and maintainability over visual novelty.
