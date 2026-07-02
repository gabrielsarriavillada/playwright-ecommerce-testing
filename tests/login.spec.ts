import test from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { users } from "../test-data/users";
import { InventoryPage } from "../pages/InventoryPage";

test.describe("Login", () => {
    test("standard_user can log in successfully", async ({ page }) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);

        await loginPage.open();
        await loginPage.login(users.standard.username, users.standard.password);

        await inventoryPage.expectLoaded();
    });

    test("locked_out_user cannot log in", async ({ page }) => {

    });
});
