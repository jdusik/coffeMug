import { Page} from "@playwright/test";

export async function addToBasket(page: Page) {
    return page.locator("id=add-to-cart-button").click();
}