import { Locator, Page } from '@playwright/test';

export class DigitalDownloadsLocators {
  readonly page: Page;

  readonly addToCartButton: Locator;
  readonly digitalDownloadsButton: Locator;
  readonly digitalDownloadsTitle: Locator;
  readonly notificationBar: Locator;
  readonly productItem: Locator;
  readonly productTitle: Locator;

  constructor(page: Page) {
    this.page = page;

    this.addToCartButton = page.locator('input[value="Add to cart"]');
    this.digitalDownloadsButton = page.locator('//a[contains(text(), "Digital downloads")]').first();
    this.digitalDownloadsTitle = page.locator('h1:has-text("Digital downloads")');
    this.notificationBar = page.locator('//div[@id="bar-notification" and contains(@style, "display: block;")]');
    this.productItem = page.locator('.product-item');
    this.productTitle = page.locator('.product-title');
  }
}