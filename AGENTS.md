## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Architecture

- Never commit to main branch
- Create a new branch for each bugfix / feature
- Write test for each new bugfix / feature

### Module boundaries

Layered separation of concerns inside `src/`, enforced by `import-x/no-restricted-paths` (see `eslint.config.mjs`):

| Layer                           | May import from                         | Responsibility                                                                  |
| ------------------------------- | --------------------------------------- | ------------------------------------------------------------------------------- |
| `src/data/` (content)           | nothing outside `src/data`              | Static content + co-located types. No architectural logic.                      |
| `src/lib/` (logic)              | `src/data` only                         | Pure derivation/selectors (nav, seo, contact, featured projects). No UI markup. |
| `src/components/` (UI)          | `src/data`, `src/lib`                   | Presentational components. Never `src/pages` or `src/layouts`.                  |
| `src/layouts/`                  | `src/data`, `src/lib`, `src/components` | Page shells (head/meta, header/footer).                                         |
| `src/pages/` (composition root) | anything, but never other `src/pages`   | Thin page composition; logic via `src/lib`.                                     |

- Put new content and its TypeScript types in the matching `src/data/*` domain module — keep them close to each other.
- Derived values (filters, formatting, active-route matching, SEO strings) belong in `src/lib/*` with a unit test, never inline in a page/component.
- Run `npm run lint` locally; the same check is a CI quality gate.
