import { expect, Locator, Page } from '@playwright/test';
import { User } from '../test-data/users';

export class LoginPage {
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;
  private readonly errorMessage: Locator;

  constructor(private readonly page: Page) {
    this.usernameInput = page.getByTestId('username');
    this.passwordInput = page.getByTestId('password');
    this.loginButton = page.getByTestId('login-button');
    this.errorMessage = page.getByTestId('error');
  }

  async open() {
    await this.page.goto('/');
  }

  async login(user: User) {
    await this.usernameInput.fill(user.username);
    await this.passwordInput.fill(user.password);
    await this.loginButton.click();
  }

  async expectLoaded() {
    await expect(this.page).toHaveURL(/\/$/);
    await expect(this.usernameInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
    await expect(this.loginButton).toBeVisible();
  }

  async expectLoginError(message: string) {
    await expect(this.errorMessage).toHaveText(message);
  }
}
