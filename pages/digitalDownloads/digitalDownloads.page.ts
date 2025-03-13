import { Page , expect } from '@playwright/test';
import { DigitalDownloadsLocators } from './digitalDownloads.locators';

export class DigitalDownloadsPage {
  private locators: DigitalDownloadsLocators;

  constructor(public readonly page: Page) {
    this.locators = new DigitalDownloadsLocators(page);
  }

  async openDigitalDownloadsPage() {
    await this.locators.digitalDownloadsButton.click();
    await this.locators.digitalDownloadsTitle.waitFor();
  }

  async addRandomProductToCart() {
    
    const products = this.locators.productItem;
    const productCount = await products.count();
    const randomIndex = Math.floor(Math.random() * productCount);
    const selectedProduct = products.nth(randomIndex);
    const selectedProductName = await selectedProduct.locator(this.locators.productTitle).textContent() as string;
    await selectedProduct.locator(this.locators.addToCartButton).click();
    await this.locators.notificationBar.waitFor({ state: 'visible', timeout: 5000 });
    const notificationBarVisible = await this.locators.notificationBar.isVisible();
    return { selectedProductName, notificationBarVisible };
  }
}