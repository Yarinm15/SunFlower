import { expect} from '@playwright/test';
import { test } from '../fixtures/fixtures'; 
import { generateUniqueEmail, generateUniquePassword } from '../helpers/credentialsGenerator';

test.describe('Demo Web Shop E2E Test', () => {
  test('User registration and Add product to cart', async ({ homePage, registrationPage, digitalDownloadspage, shoppingCartPage }) => {
    const uniqueEmail = generateUniqueEmail();
    const uniquePassword = generateUniquePassword();
    let selectedProductName: string;

    await test.step('Navigate to Demo Web Shop', async () => {
      expect(await homePage.openHomePage()).toBeTruthy();
    });

    await test.step('Navigate to Registration page', async () => {
      await registrationPage.openRegistrationPage();
    });

    await test.step('Fill registration form', async () => {
      await registrationPage.fillRegistrationForm(uniqueEmail, uniquePassword);
    });

    await test.step('Submit registration form', async () => {
      expect(await registrationPage.submitRegistrationForm()).toBeTruthy();
      await registrationPage.clickContinueButton();
    });

    await test.step('Verify successful login by checking the email', async () => {
      expect (await registrationPage.verifySuccessfulLogin(uniqueEmail)).toBeTruthy();
    });

    await test.step('Navigate to Digital Downloads', async () => {
      await digitalDownloadspage.openDigitalDownloadsPage();
    });

    await test.step('Add product to cart', async () => {
      let notificationBarVisible: boolean;
      ({ selectedProductName, notificationBarVisible } = await digitalDownloadspage.addRandomProductToCart());
      expect(notificationBarVisible).toBeTruthy();
    });

    await test.step('Navigate to Shopping Cart', async () => {
      expect(await shoppingCartPage.openShoppingCartPage()).toBeTruthy();
    });

    await test.step('Verify product in cart', async () => {
      expect(await shoppingCartPage.verifyProductInCart(selectedProductName)).toBeTruthy();
    });
  });
});
