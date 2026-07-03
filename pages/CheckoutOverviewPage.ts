import { expect, Locator, Page } from '@playwright/test';

export class CheckoutOverviewPage {
  private readonly title: Locator;
  private readonly finishButton: Locator;

  constructor(private readonly page: Page) {
    this.title = page.getByTestId('title');
    this.finishButton = page.getByTestId('finish');
  }

  async expectLoaded() {
    await expect(this.page).toHaveURL(/\/checkout-step-two\.html$/);
    await expect(this.title).toHaveText('Checkout: Overview');
  }

  async finishCheckout() {
    await this.finishButton.click();
  }
}
