import { Page} from "@playwright/test";

export async function setPriceFrom(page: Page, priceFrom: string) {
    page.locator("id=price_from").fill(priceFrom);
}

export async function setPriceTo(page: Page, priceTo: string) {
    page.locator("id=price_to").fill(priceTo);
}


