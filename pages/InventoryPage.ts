import { expect, Locator, Page } from "@playwright/test";

export class InventoryPage {
    private readonly title: Locator;

    constructor(private readonly page: Page) {
        this.title = page.getByTestId("title");
    }

    async expectLoaded() {
        await expect(this.page).toHaveURL("/inventory.html");
        await expect(this.title).toHaveText("Products");
    }
}