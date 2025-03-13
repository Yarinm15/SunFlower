import { Locator, Page } from '@playwright/test';

export class RegistrationPageLocators {
  readonly page: Page;

  readonly accountHeader: Locator;
  readonly confirmPassword: Locator;
  readonly continueButton: Locator;
  readonly email: Locator;
  readonly firstName: Locator;
  readonly genderMale: Locator;
  readonly lastName: Locator;
  readonly password: Locator;
  readonly registerButton: Locator;
  readonly registerHeadline: Locator;
  readonly registerLink: Locator;
  readonly registrationResult: Locator;

  constructor(page: Page) {
    this.page = page;

    this.accountHeader = page.locator('.header-links .account');
    this.confirmPassword = page.locator('input#ConfirmPassword');
    this.continueButton = page.locator('input.button-1[value="Continue"]');
    this.email = page.locator('input#Email');
    this.firstName = page.locator('input#FirstName');
    this.genderMale = page.locator('input#gender-male');
    this.lastName = page.locator('input#LastName');
    this.password = page.locator('input#Password');
    this.registerButton = page.locator('input#register-button');
    this.registerHeadline = page.locator('//div[@class="page-title"]/h1');
    this.registerLink = page.locator('a.ico-register');
    this.registrationResult = page.locator('.result');
  }
}