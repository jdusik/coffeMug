import { Page, expect} from "@playwright/test";


export async function searchFor(page: Page, text: string) {
    await setSearchField(page, text); 
    page.locator("button[data-role='search-button']").click();
}


export async function setSearchField(page: Page, text: string) {
    page.locator("input[data-role='search-input']").fill(text);   
}

export async function getSearchField(page: Page) {
    return page.locator("input[data-role='search-input']").inputValue;   
}


export async function assertSuccess(page: Page) {
    await expect(page.locator('.success-message')).toBeVisible();
}

//here we can check searching info and gather useful information
export async function getSearchInformation(page: Page) {
    var wholetext =  page.locator("div[data-analytics-category='allegro.listing.title']");  
    var searchWord = wholetext.locator("").textContent().then((x)=> {return  x});//in this case there was not clear locator 
    var numberOfFindProducts = wholetext.locator("").textContent().then((x)=> {return  x});//in this case there was not clear locator 
    return {searchWord, numberOfFindProducts};
}
