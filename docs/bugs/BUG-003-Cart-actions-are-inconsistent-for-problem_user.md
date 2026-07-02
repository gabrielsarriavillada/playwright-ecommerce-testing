# BUG-003: Cart actions are inconsistent for `problem_user`

## Summary

When logged in as `problem_user`, cart actions behave inconsistently across products. Three products can be added to the cart but cannot be removed from the Inventory or Product Details pages, while the other three products cannot be added to the cart at all.

## Environment

- Browser: Chrome 148
- OS: macOS
- User: `problem_user`

## Steps to Reproduce

1. Open the Sauce Demo site
2. Log in as `problem_user`
3. From the Inventory page, try to add each available product to the cart
4. Observe which products are added successfully
5. Try to remove the successfully added products from the Inventory page
6. Open the Product Details page for the affected products and repeat the add/remove actions
7. Open the cart and remove the products from there

## Expected Result

All products should be consistently addable to and removable from the cart from both the Inventory page and the Product Details page.

## Actual Result

Cart actions are inconsistent:

- Three products can be added to the cart, but cannot be removed from the Inventory or Product Details pages.
- The same products can only be removed from the Cart page.
- The remaining three products cannot be added to the cart.

## Business Impact

Users cannot reliably manage the shopping cart from the main shopping flow. This can prevent users from selecting the intended products, correcting mistakes, or completing the purchase with the desired cart contents.

## Severity

Major

## Priority

High

## Evidence

The issue is consistently reproducible when using `problem_user`.
