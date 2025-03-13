import { Page , expect} from '@playwright/test';

import { HomePageLocators } from './homePage.locators';
import { config } from '../../config';

export class HomePage {
  private locators: HomePageLocators;

  constructor(public readonly page: Page) {
    this.locators = new HomePageLocators(page);
  }

  async openHomePage() {
    await this.page.goto(config.baseUrl);
    const WebTitleVisable = await this.locators.demoWebShopIcon.isVisible();
    const demoWebShopIconVisable = await this.locators.demoWebShopIcon.isVisible();
    return WebTitleVisable && demoWebShopIconVisable;
  }
}