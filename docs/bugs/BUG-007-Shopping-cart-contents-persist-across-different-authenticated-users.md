# BUG-007: Shopping cart contents persist across different authenticated users

## Summary

Products added to the shopping cart by one authenticated user remain in the cart after logging out and signing in as a different user using the same browser session. The shopping cart is therefore shared between authenticated users instead of being isolated per user session.

## Environment

- Browser: Chrome 148
- OS: macOS
- User: `standard_user` -> `problem_user`

## Steps to Reproduce

1. Open the Sauce Demo site
2. Log in as `standard_user`
3. Add one or more products to the shopping cart
4. Log out
5. Log in as `problem_user`
6. Open the shopping cart

## Expected Result

Each authenticated user should have an independent shopping session. The shopping cart should only contain products added by the currently authenticated user.

## Actual Result

Products added by the first user remain in the shopping cart after logging in as a different user using the same browser session.

## Business Impact

Sharing shopping cart contents across authenticated users may expose another user's shopping activity and can lead to incorrect purchases. In a production e-commerce application, shopping carts are generally expected to be isolated per authenticated user to preserve data integrity and user privacy.

## Severity

Major

## Priority

Medium

## Evidence

The behavior was reproduced consistently by repeating the steps described above using different predefined users.
