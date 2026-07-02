import { Locator, type Page } from "@playwright/test";

export class LoginPage {
    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;

    constructor(private readonly page: Page) {
        this.usernameInput = page.getByTestId("username");
        this.passwordInput = page.getByTestId("password");
        this.loginButton = page.getByTestId("login-button");
    }

    async open() {
        await this.page.goto("/");
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}