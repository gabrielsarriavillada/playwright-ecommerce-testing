# BUG-001: Product links navigate to the wrong product for `problem_user`

## Summary

Clicking a product image or title from the Inventory page redirects users to a different product instead of the selected one. The destination product ID is consistently one greater than the selected product ID.

## Environment

- Browser: Chrome 148
- OS: macOS
- User: `problem_user`

## Steps to Reproduce

1. Open the Sauce Demo site
2. Log in as `problem_user`
3. Click the image or title of any product
4. Compare the selected product with the product details page

## Expected Result

The Product Details page should display information for the selected product.

## Actual Result

The Product Details page displays information for a different product. The product identifier is consistently offset by +1 from the selected product.

## Business Impact

Users are redirected to incorrect product pages, making it difficult to inspect products before purchasing. This may result in users purchasing unintended products and significantly degrades the browsing experience.

## Severity

Major

## Priority

High

## Evidence

The issue is consistently reproducible for multiple products when logged in as `problem_user`.
