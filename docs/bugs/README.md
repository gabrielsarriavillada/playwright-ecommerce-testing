# Exploratory Testing Report

The following issues were identified during exploratory testing of Sauce Demo.

| ID                                                                                        | Title                                                               | Severity | Priority |
| ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | -------- | -------- |
| [BUG-001](BUG-001-Product-links-navigate-to-the-wrong-product-for-problem_user.md)        | Product links navigate to the wrong product                         | Major | High     |
| [BUG-002](BUG-002-Last-name-field-cannot-be-completed-for-problem_user.md)                | Last Name field cannot be completed during checkout                 | Major | High     |
| [BUG-003](BUG-003-Cart-actions-are-inconsistent-for-problem_user.md)                      | Cart actions are inconsistent                                       | Major | High     |
| [BUG-004](BUG-004-Non-existent-product-can-be-added-to-the-cart.md)                       | Non-existent product can be added to the cart                       | Major | Medium   |
| [BUG-005](BUG-005-Product-sorting-displays-an-internal-error-dialog-for-error_user.md)    | Product sorting displays an internal error dialog                   | Major | Medium   |
| [BUG-006](BUG-006-Product-sorting-does-not-work-for-problem_user.md)                      | Product sorting does not work                                       | Major | Medium   |
| [BUG-007](BUG-007-Shopping-cart-contents-persist-across-different-authenticated-users.md) | Shopping cart contents persist across different authenticated users | Major | Medium   |
| [BUG-008](BUG-008-User-activity-does-not-extend-the-authenticated-session.md)             | User activity does not extend the authenticated session             | Minor | Medium   |
| [BUG-009](BUG-009-Product-images-are-incorrect-for-problem_user.md)                       | Product images are incorrect                                        | Minor | Medium   |
| [BUG-010](BUG-010-Error-message-is-truncated-when-displayed-on-the-login-page.md)         | Login error message is truncated                                    | Minor | Low      |

## Observations

The final bug list is intentionally prioritized by business impact rather than discovery order. Functional issues affecting product navigation, cart integrity, sorting, session handling, and user isolation were ranked higher than cosmetic or footer-related observations.

Several issues are specific to predefined user profiles. This suggests that testing each user independently is valuable, as the same feature can behave differently depending on the active user.

The `performance_glitch_user` was observed to introduce consistent 2-3 second delays in key interactions. This was not reported as a defect because it appears to be the expected behavior of that predefined user profile.

Several cosmetic observations (for example, outdated branding and footer content) were intentionally excluded from the final report to keep the findings focused on defects with the greatest impact on the application's core business flows.
