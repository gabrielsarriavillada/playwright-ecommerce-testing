# BUG-008: User activity does not extend the authenticated session

## Summary

The application automatically logs out authenticated users after approximately 10 minutes, even when they continuously interact with the application. User activity does not refresh the authenticated session, causing active users to be redirected to the login page unexpectedly.

## Environment

- Browser: Chrome 148
- OS: macOS
- User: `standard_user`

## Steps to Reproduce

1. Open the Sauce Demo site
2. Log in using valid credentials
3. Continuously interact with the application (for example, browse products, open product details, add or remove products from the cart) for approximately 10 minutes without remaining idle
4. Attempt to access any page that requires authentication (for example, Inventory, Cart or Checkout)

## Expected Result

Assuming a typical e-commerce application, continuous user activity should refresh the authenticated session, preventing unexpected logout while the user remains active.

## Actual Result

After approximately 10 minutes, the authenticated session expires regardless of user activity. When attempting to access a protected page, the user is redirected to the login page and an error message is displayed indicating that authentication is required.

## Business Impact

Active users may unexpectedly lose their authenticated session while browsing products or completing the purchase process. This interruption may negatively impact the user experience and increase the risk of users abandoning their purchase due to the unexpected need to authenticate again.

## Severity

Minor

## Priority

Medium

## Evidence

The behavior was reproduced consistently after approximately 10 minutes of continuous interaction with the application. The user was redirected to the login page when attempting to access a protected page, despite remaining active throughout the session.
