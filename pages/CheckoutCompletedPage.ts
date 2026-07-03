import { expect, Locator, Page } from '@playwright/test';

export class CheckoutCompletedPage {
  private readonly title: Locator;
  private readonly header: Locator;
  private readonly text: Locator;
  private readonly backHomeButton: Locator;

  constructor(private readonly page: Page) {
    this.title = page.getByTestId('title');
    this.header = page.getByTestId('complete-header');
    this.text = page.getByTestId('complete-text');
    this.backHomeButton = page.getByTestId('back-to-products');
  }

  async expectLoaded() {
    await expect(this.page).toHaveURL(/\/checkout-complete\.html$/);
    await expect(this.title).toHaveText('Checkout: Complete!');
  }

  async expectOrderCompleted() {
    await expect(this.header).toHaveText('Thank you for your order!');
    await expect(this.text).toHaveText(
      'Your order has been dispatched, and will arrive just as fast as the pony can get there!',
    );
  }

  async backToHome() {
    await this.backHomeButton.click();
  }
}
