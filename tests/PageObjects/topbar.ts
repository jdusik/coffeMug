import { Page } from "@playwright/test";


//when it comes to locator it will be better to use ids/testids
// assumption: no user is logedin - in tests it will require new session/clear cookies or other way to handle already authenticatd user
export async function openSignupPage(page: Page) {

  await page.locator("div[data-dropdown-id='user_dropdown'] button").click();
  await page.locator("div[data-role='user-menu-unauthenticated'] a[href='/rejestracja']").click();

}

export async function getNumberOfItemsInShoppingCard(page: Page) {
   return await page.locator("div[data-role='cart-quantity']").textContent();
}
  
export async function openShoppingCard(page: Page) {
     await page.locator("[data-prototype-id='allegro.metrumHeader.cart']").click();
 }



