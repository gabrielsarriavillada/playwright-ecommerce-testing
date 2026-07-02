import { expect, Locator, Page } from "@playwright/test";

export class InventoryPage {
    private readonly title: Locator;
    private readonly cartLink: Locator;
    private readonly cartBadge: Locator;

    constructor(private readonly page: Page) {
        this.title = page.getByTestId("title");
        this.cartLink = page.getByTestId("shopping-cart-link");
        this.cartBadge = page.getByTestId("shopping-cart-badge");
    }

    async expectLoaded() {
        await expect(this.page).toHaveURL(/\/inventory\.html$/);
        await expect(this.title).toHaveText("Products");
    }

    async addProductToCart(productId: string) {
        await this.page.getByTestId(`add-to-cart-${productId}`).click();
    }

    async openCart() {
        await this.cartLink.click();
    }

    async expectEmptyCart() {
        await expect(this.cartBadge).toHaveCount(0);
    }

    async expectCartItems(amount: number) {
        await expect(this.cartBadge).toHaveText(amount.toString());
    }
}
