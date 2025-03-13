import { Page , expect } from '@playwright/test';
import { RegistrationPageLocators } from './registration.locators';

export class RegistrationPage {
  private locators: RegistrationPageLocators;

  constructor(public readonly page: Page) {
    this.locators = new RegistrationPageLocators(page);
  }

  async openRegistrationPage() {
    await this.locators.registerLink.click();
    const registerHeadlineVisible = await this.locators.registerHeadline.isVisible();
    return registerHeadlineVisible;
  }

  async fillRegistrationForm(email: string, password: string) {
    await this.locators.genderMale.click();
    await this.locators.firstName.fill('Test');
    await this.locators.lastName.fill('User');
    await this.locators.email.fill(email);
    await this.locators.password.fill(password);
    await this.locators.confirmPassword.fill(password);
  }

  async submitRegistrationForm() {
    await this.locators.registerButton.click();
    const registrationResultText = await this.locators.registrationResult.textContent();
    return registrationResultText?.includes('Your registration completed');
  }

  async clickContinueButton() {
    await this.locators.continueButton.click();
  }

  async verifySuccessfulLogin(email: string) {
    const accountHeaderVisible = await this.locators.accountHeader.isVisible();
    const accountHeaderContainsEmail = await this.locators.accountHeader.textContent();
    return accountHeaderVisible && accountHeaderContainsEmail?.includes(email);
  }
}