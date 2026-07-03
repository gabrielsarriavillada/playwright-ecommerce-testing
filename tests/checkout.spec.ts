import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { users } from '../test-data/users';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPersonalDataPage } from '../pages/CheckoutPersonalDataPage';
import { CheckoutOverviewPage } from '../pages/CheckoutOverviewPage';
import { CheckoutCompletedPage } from '../pages/CheckoutCompletedPage';
import { products } from '../test-data/products';
import { checkoutData } from '../test-data/checkout';

test.describe('Checkout', () => {
  test('standard_user can add two products to the cart and complete checkout', async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPersonalDataPage = new CheckoutPersonalDataPage(page);
    const checkoutOverviewPage = new CheckoutOverviewPage(page);
    const checkoutCompletedPage = new CheckoutCompletedPage(page);

    await loginPage.open();
    await loginPage.login(users.standard);

    await inventoryPage.expectLoaded();
    await inventoryPage.expectEmptyCart();

    await inventoryPage.addProductToCart(products.backpack);
    await inventoryPage.expectCartItems(1);

    await inventoryPage.addProductToCart(products.boltTShirt);
    await inventoryPage.expectCartItems(2);

    await inventoryPage.openCart();

    await cartPage.expectLoaded();
    await cartPage.checkout();

    await checkoutPersonalDataPage.expectLoaded();
    await checkoutPersonalDataPage.completePersonalDataForm(checkoutData);
    await checkoutPersonalDataPage.continueCheckout();

    await checkoutOverviewPage.expectLoaded();
    await checkoutOverviewPage.finishCheckout();

    await checkoutCompletedPage.expectLoaded();
    await checkoutCompletedPage.expectOrderCompleted();
  });
});
