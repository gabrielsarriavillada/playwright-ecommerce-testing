import { expect, Locator, Page } from "@playwright/test";

export class CheckoutPage {
    private readonly title: Locator;
    private readonly continueButton: Locator;

    constructor(private readonly page: Page) {
        this.title = page.getByTestId("title");
        this.continueButton = page.getByTestId("continue");
    }

    async expectLoaded() {
        await expect(this.page).toHaveURL(/\/checkout-step-one\.html$/);
        await expect(this.title).toHaveText("Checkout: Your Information");
    }

    async continueCheckout() {
        await this.continueButton.click();
    }
}
