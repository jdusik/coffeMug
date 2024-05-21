import { Page } from "@playwright/test";


export async function getFirstItemName(page: Page) {

    var item = await page.locator("[data-box-name='allegro.cart'] item").first();
    return item.locator("a").textContent();

}