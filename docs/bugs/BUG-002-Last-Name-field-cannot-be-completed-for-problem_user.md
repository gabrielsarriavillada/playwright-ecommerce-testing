# BUG-002: Last Name field cannot be completed for `problem_user`

## Summary

When logged in as `problem_user`, typing into the Last Name field during checkout updates the First Name field instead. As a result, the Last Name field cannot be populated and the checkout process cannot continue.

## Environment

- Browser: Chrome 148
- OS: macOS
- User: `problem_user`

## Steps to Reproduce

1. Open the Sauce Demo site
2. Log in as `problem_user`
3. Add any product to the shopping cart
4. Proceed to Checkout
5. Enter a value in the First Name field
6. Click the Last Name field
7. Type any text

## Expected Result

The entered text should be displayed in the Last Name field while preserving the value already entered in the First Name field.

## Actual Result

The last entered character is written into the First Name field, replacing its previous value. The Last Name field remains empty, preventing the user from completing the mandatory checkout information.

## Business Impact

Users cannot complete the checkout process because one of the mandatory fields cannot be populated. This blocks the application's primary business flow for the affected user profile.

## Severity

Major

## Priority

High

## Evidence

The issue is consistently reproducible when using `problem_user`.
