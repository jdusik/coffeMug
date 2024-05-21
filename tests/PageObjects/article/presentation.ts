
import { Page} from "@playwright/test";

export async function getFullNameOfProduct(page: Page) {
    return page.locator("[data-prototype-id='allegro.showoffer.productHeader'] h4").innerText();
}
