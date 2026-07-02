import test from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { users } from "../test-data/users";
import { InventoryPage } from "../pages/InventoryPage";

test.describe("Login", () => {
    test("standard_user can log in successfully", async ({ page }) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);

        await loginPage.open();
        await loginPage.login(users.standard);

        await inventoryPage.expectLoaded();
    });

    test("locked_out_user cannot log in", async ({ page }) => {
        const errorMessage = "Epic sadface: Sorry, this user has been locked out.";
        const loginPage = new LoginPage(page);

        await loginPage.open();
        await loginPage.login(users.locked);

        await loginPage.expectLoginError(errorMessage);
        await loginPage.expectLoaded();
    });
});
