# Test Plan

## Objective

Validate the critical e-commerce flows of Sauce Demo, focusing on user authentication, product browsing, cart management, and checkout completion. The goal is to identify functional issues, prioritize business-critical risks, and define a balanced approach between manual exploratory testing and UI automation.

## Scope

The following functionalities will be tested:

- Login with predefined users: `standard_user`, `locked_out_user`, `problem_user`, `performance_glitch_user`
- Negative login scenarios
- Product catalog visibility and basic navigation
- Add/remove products from the cart
- Cart badge and cart contents validation
- Successful purchase flow
- Final order confirmation page
- Negative checkout scenarios

## Test Types

| **Type** | **Coverage** |
| --- | --- |
| Manual exploratory testing | User-specific behaviors, visual anomalies, negative scenarios, edge cases |
| UI smoke automation | Login and successful purchase flow |
| UI regression automation | Cart and checkout happy path |
| Negative testing | Locked user, invalid credentials, empty checkout fields |
| Basic performance observation | Manual comparison of normal vs. performance glitch user |

## Prioritization

Highest priority is given to flows that directly impact business continuity:

1. **Login** - users must be able to access the application.
2. **Checkout** - users must be able to complete a purchase.
3. **Cart management** - selected products must be correctly added, removed and retained.
4. **Negative and restricted users** - blocked users and validation errors must behave as expected.
5. **Visual/performance anomalies** - important, but lower priority unless they block the purchase journey.

## Automation Scope

Automated tests will cover stable and high-value regression scenarios:

- Successful login with `standard_user`
- Successful purchase flow
- Locked out user login validation

These scenarios are repeatable, business critical and suitable for CI smoke/regression execution.

## Manual Testing Scope

Manual testing will focus on areas where exploratory investigation provides more value:

- Visual issues with `problem_user`
- Performance issues with `performance_glitch_user`
- Edge cases around browser navigation, refresh and session behaviour
- Form validation and error message clarity
- General usability observations

## Out of Scope / Limitations

Due to the assigment timebox, the following areas will not be tested in depth:

- Cross-browser and cross-device coverage
- Accessibility testing beyond high-level observations
- Security testing
- API/backend validation
- Load or stress testing
- Payment integrations, since Sauce Demo uses a simulated checkout
- Database or data persistence validation

## Tools

- Playwright with TypeScript for UI automation
- GitHub for version control and repository sharing
- Browser DevTools for exploratory testing support
- Screenshots where useful for bug evidence
- Markdown for documentation

## Assumptions

- Sauce Demo behaves like a typical e-commerce application
- Product inventory, pricing and checkout confirmation are expected to be reliable and consistent
- The predefined users intentionally represent different risk scenarios
- The main business-critical journey is:
```
login -> add product -> cart -> checkout -> order confirmation
```
