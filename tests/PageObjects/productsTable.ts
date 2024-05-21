import { Page, expect} from "@playwright/test";



export async function listOfArticles(page: Page) {
    return page.locator("article").all();
}

export async function openFirstArticle(page: Page) {
    return page.locator("article").first().click();
}

export async function getPriceOfArticle(page: Page)  {
   
     return page.locator("[data-test-tag='price-container']").textContent();
}







