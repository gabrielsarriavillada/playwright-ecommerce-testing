import test from "@playwright/test"
import { LoginPage } from "../pages/LoginPage";
import { users } from "../test-data/users";
import { InventoryPage } from "../pages/InventoryPage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";

test.describe("standard_user can add products to the cart and complete checkout", () => {
    test("standard_user can log in successfully", async ({ page }) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);

        await loginPage.open();
        await loginPage.login(users.standard);

        await inventoryPage.expectEmptyCart();

        await inventoryPage.addProductToCart("sauce-labs-backpack");
        await inventoryPage.expectCartItems(1);
        
        await inventoryPage.addProductToCart("sauce-labs-bolt-t-shirt");
        await inventoryPage.expectCartItems(2);

        await inventoryPage.openCart();

        await cartPage.expectLoaded();
        await cartPage.checkout();

        await checkoutPage.expectLoaded();
    });
});
