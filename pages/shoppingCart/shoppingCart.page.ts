import { Page , expect } from '@playwright/test';
import { ShoppingCartPageLocators } from './shoppingCart.locators';

export class ShoppingCartPage {
  private locators: ShoppingCartPageLocators;

  constructor(public readonly page: Page) {
    this.locators = new ShoppingCartPageLocators(page);
  }

  async openShoppingCartPage() { 
    await this.locators.shoppingCartButton.click();
    const shoppingCartTitleVisible = this.locators.shoppingCartTitle.isVisible();
    return shoppingCartTitleVisible;
  }

  async verifyProductInCart(productName: string) {

    const cartProducts = this.locators.cartItemRow;
    
    const productInCartVisible = await cartProducts.isVisible();
    const productInCart = await cartProducts.textContent();
    return productInCartVisible && productInCart?.includes(productName.trim());
  }
}