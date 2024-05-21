import test, { expect } from "@playwright/test";
import { getSearchField, getSearchInformation, searchFor } from "./PageObjects/searchBar";
import { setPriceFrom, setPriceTo } from "./PageObjects/filters";
import { getPriceOfArticle, listOfArticles } from "./PageObjects/productsTable";
import { navigateToMainPage } from "./common";

//next step: move it to separate config file to always open main page (if each test starts from that)
test.beforeEach(async ({ page }) => {
  await navigateToMainPage(page);
});

test('Search for electronics', async ({ page }) => {
    const searchText  =  "electronics";

    await searchFor(page,searchText);

    await expect(await getSearchField(page)).toEqual(searchText);
    let searchData = await getSearchInformation(page);

    //assert something specific for this search
    // this could be a tag, specific word in the name of item, when we have static testing data also specific number of items
    expect(searchData.numberOfFindProducts).toBeGreaterThan(0);
    expect(searchData.searchWord).toEqual(searchText);


  });

  test('Search for electronics from specific price range', async ({ page }) => {
    const searchText  =  "electronics";

    // I choose price as it has a range from-to fields
    const priceFrom = "10";
    const priceTo = "150";
    await searchFor(page,searchText);
    await setPriceFrom(page, priceFrom);
    await setPriceTo(page, priceTo);


    //iterate through the whole list of articles and checking if price in range
    var listofArticles =  await listOfArticles(page);
     listofArticles.forEach( async () => {
        var price =  await getPriceOfArticle(page);
         expect(price).toBeGreaterThan(parseFloat(priceFrom));
         expect(price).toBeLessThan(parseFloat(priceTo));
    
});


});