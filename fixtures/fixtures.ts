import { test as base } from '@playwright/test';
import { DigitalDownloadsPage } from '../pages/digitalDownloads/digitalDownloads.page';
import { HomePage } from '../pages/homePage/homePage.page';
import { RegistrationPage } from '../pages/registration/registration.page';
import { ShoppingCartPage } from '../pages/shoppingCart/shoppingCart.page';

type PagesFixtures = {
  digitalDownloadspage: DigitalDownloadsPage;
  homePage: HomePage;
  registrationPage: RegistrationPage;
  shoppingCartPage: ShoppingCartPage;
  };

export const test = base.extend<PagesFixtures>({
    digitalDownloadspage: async ({ page }, use) => {
      const digitalDownloadspage = new DigitalDownloadsPage(page);
      await use(digitalDownloadspage);
  },

  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },

  registrationPage: async ({ page }, use) => {
    const registrationPage = new RegistrationPage(page);
    await use(registrationPage);
  },

  shoppingCartPage: async ({ page }, use) => {
    const shoppingCartPage = new ShoppingCartPage(page);
    await use(shoppingCartPage);
  },
});