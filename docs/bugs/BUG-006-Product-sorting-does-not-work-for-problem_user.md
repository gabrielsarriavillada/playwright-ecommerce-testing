# BUG-006: Product sorting does not work for `problem_user`

## Summary

The product sorting functionality does not work when logged in as `problem_user`. Changing the selected sorting option has no effect on the displayed product order, whereas the same functionality works correctly for `standard_user`.

## Environment

- Browser: Chrome 148
- OS: macOS
- User: `problem_user`

## Steps to Reproduce

1. Open the Sauce Demo site
2. Log in as `problem_user`
3. Navigate to the Inventory page
4. Open the sort-by dropdown
5. Select any sorting option other than the default (for example, Price (low to high) or Name (Z to A))
6. Observe the order of the displayed products

## Expected Result

The product list should be reordered according to the selected sorting option.

## Actual Result

The selected sorting option doesn't change in the dropdown, and the product list remains in its original order. Default sorting is applied.

## Business Impact

Users cannot sort products according to their preferred criteria, making it more difficult to browse the product catalog efficiently. The issue affects a core catalog feature and degrades the shopping experience for the affected user profile.

## Severity

Major

## Priority

Medium

## Evidence

The issue is consistently reproducible when using `problem_user`, while the same functionality works correctly for `standard_user`, indicating that the defect is specific to the affected user profile.
