import { Locator, Page } from '@playwright/test';

export class ShoppingCartPageLocators {
  readonly page: Page;

  readonly cartItemRow: Locator;
  readonly shoppingCartButton: Locator;
  readonly shoppingCartTitle: Locator;

  constructor(page: Page) {
    this.page = page;

    this.cartItemRow = page.locator('.cart-item-row .product-name');
    this.shoppingCartButton = page.locator('//span[text()="Shopping cart"]');
    this.shoppingCartTitle = page.locator('h1:has-text("Shopping cart")');
  }
}