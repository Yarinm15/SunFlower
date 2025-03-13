import { Locator, Page } from '@playwright/test';

export class HomePageLocators {
  readonly page: Page;

    readonly demoWebShopIcon: Locator; 
    readonly webTitle:string; 

    constructor(page: Page) {
      this.page = page;
  
      this.demoWebShopIcon = page.locator('img[src="/Themes/DefaultClean/Content/images/logo.png"]');
      this.webTitle = 'Demo Web Shop';
    }
  };