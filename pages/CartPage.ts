import { expect, Locator, Page } from '@playwright/test';

export class CartPage {
  private readonly title: Locator;
  private readonly checkoutButton: Locator;

  constructor(private readonly page: Page) {
    this.title = page.getByTestId('title');
    this.checkoutButton = page.getByTestId('checkout');
  }

  async expectLoaded() {
    await expect(this.page).toHaveURL(/\/cart\.html$/);
    await expect(this.title).toHaveText('Your Cart');
  }

  async checkout() {
    await this.checkoutButton.click();
  }
}
