---

name: statick-json

description: Strict static data management guidelines for React TypeScript (Vite/npm) projects. This skill should be used to prevent hardcoding by enforcing JSON-based data isolation and strict TypeScript typing. Triggers on tasks involving mock data, configuration lists, UI text content, or static arrays/objects.

license: MIT

metadata:

&nbsp; author: Loris Moine

&nbsp; version: "1.0.0"

---



\# Statick JSON Best Practices



Comprehensive guide for managing static data in React and TypeScript applications. Contains 9 rules across 5 categories, prioritized by impact to ensure a strict separation between UI logic and data.



\## When to Apply



Reference these guidelines when:

\- Creating mock data for new components

\- Adding configuration lists or UI data

\- Refactoring code containing hardcoded objects or arrays

\- Adding, modifying, or deleting existing static content



\## Rule Categories by Priority



| Priority | Category | Impact | Prefix |

|----------|----------|--------|--------|

| 1 | Initialization \& Architecture | CRITICAL | `init-` |

| 2 | Data Isolation | CRITICAL | `isolate-` |

| 3 | Structure \& Naming | HIGH | `structure-` |

| 4 | Mutation \& CRUD | HIGH | `mutation-` |

| 5 | TypeScript Integration \& Typing | MEDIUM | `type-` |



\## Quick Reference



\### 1. Initialization \& Architecture (CRITICAL)



\- `init-data-folder` - Systematically check for the presence of a `src/data` folder. If it does not exist, create it before adding any data.



\### 2. Data Isolation (CRITICAL)



\- `isolate-no-hardcode` - Strict prohibition against adding raw data objects or static arrays directly in the source code (`.tsx` or `.ts`).

\- `isolate-use-json` - All static data must be exclusively stored in a dedicated `.json` file located in `src/data/`.



\### 3. Structure \& Naming (HIGH)



\- `structure-single-entity` - Only one type of object or entity is allowed per JSON file (e.g., do not mix users and products).

\- `structure-semantic-naming` - The generated file name must clearly and consistently reflect its content (e.g., `users.json`, `menu-links.json`).



\### 4. Mutation \& CRUD (HIGH)



\- `mutation-crud-json` - Data modifications (add/edit/delete) must always target the source `.json` file. If the user makes a direct request (e.g., "change the first name from Romain to Alex in users.json"), the AI modifies the file directly. If the code logic requires altering this data, the generated code must manipulate and update this JSON file, rather than simply mutating an in-memory variable within the UI logic.



\### 5. TypeScript Integration \& Typing (MEDIUM)



\- `type-direct-import` - Import the JSON file directly into the target React/TS file (e.g., `import products from '../data/products.json';`).

\- `type-strict-interface` - Always associate imported raw data with a strict TypeScript `interface` or `type` in the consuming `.ts`/`.tsx` file to ensure type safety.



\## How to Use



Apply these rules sequentially when generating or modifying code. Every action involving static data must follow this logical flow:



1\. Verify the architecture (`init-data-folder`).

2\. Create or target the correct file (`structure-semantic-naming`, `structure-single-entity`).

3\. Inject or modify the data in JSON (`isolate-no-hardcode`, `mutation-crud-json`).

4\. Connect to the source code with proper typing (`type-direct-import`, `type-strict-interface`).



\## Full Compiled Document



For the complete guide with all component integration and associated typing examples: `AGENTS.md`

