# Playwright E-commerce Testing

UI automation and exploratory testing solution developed as part of the technical assignment for the **Senior QA Engineer** position at Qualifyze.

The project demonstrates a maintainable Playwright + TypeScript automation framework using the Page Object Model, together with a risk-based exploratory testing approach and structured bug reporting.

---

## Scope

### Test Strategy

A concise test plan describing:

- Testing scope and priorities
- Test types
- Assumptions
- Automation strategy
- Out-of-scope items

Location:

```
docs/test-plan.md
```

### Exploratory Testing

The exploratory testing results are documented as individual bug reports, prioritized by business impact.

Location:

```
docs/bugs/
```

### UI Automation

The automated scenarios cover the business-critical purchase flow:

- Successful login with `standard_user`
- Successful purchase flow
- Login validation for `locked_out_user`

The automation is implemented using:

- Playwright
- TypeScript
- Page Object Model (POM)

---

## Project Structure

```
.
├── docs/
│   ├── bugs/
│   └── test-plan.md
├── pages/
├── test-data/
├── tests/
├── playwright.config.ts
└── README.md
```

---

## Prerequisites

- Node.js 20+ (or current LTS)
- npm

---

## Installation

Install project dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## Running the Tests

Run the complete test suite:

```bash
npm test
```

Run using Playwright UI Mode:

```bash
npm run test:ui
```

Run in headed mode:

```bash
npm run test:headed
```

Open the HTML report after execution:

```bash
npm run test:report
```

---

## Continuous Integration

A GitHub Actions workflow is included to automatically validate the project on every push and pull request.

The pipeline performs the following quality checks:

- Install project dependencies
- Verify code formatting
- Run ESLint
- Execute the Playwright test suite
- Publish the Playwright HTML report as a workflow artifact

---

## Code Quality

Check formatting:

```bash
npm run format:check
```

Automatically format the project:

```bash
npm run format
```

Run ESLint:

```bash
npm run lint
```

Automatically fix lint issues:

```bash
npm run lint:fix
```

---

## Design Decisions

- Stable `data-test` selectors are preferred whenever available.
- Page Object Model is used to improve readability and maintainability.
- Assertions are encapsulated within Page Objects to keep test scenarios focused on business workflows.
- Test data is separated from test logic to improve readability and reduce duplication.
- Exploratory testing findings are prioritized according to business impact rather than discovery order.
