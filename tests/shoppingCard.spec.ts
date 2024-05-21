import { test, expect } from '@playwright/test';
import { navigateToMainPage } from './common';
import { searchFor } from './PageObjects/searchBar';
import { openFirstArticle } from './PageObjects/productsTable';
import { addToBasket } from './PageObjects/article/actions';
import { getNumberOfItemsInShoppingCard, openShoppingCard } from './PageObjects/topbar';
import { getFullNameOfProduct } from './PageObjects/article/presentation';
import { getFirstItemName } from './PageObjects/shoppingCard/items';


//next step: move it to separate config file to always open main page (if each test starts from that)
test.beforeEach(async ({ page }) => {
    await navigateToMainPage(page);
  });


//this test is a simple version of  what could be here
// we can check more fields and also create more generic method to go through any item
// assumptions: we are starting from empty shopping card and we are adding only one item

test('Adding Items to Cart', async ({ page }) => {
    const searchText  =  "kawa";

    await searchFor(page,searchText);
    await openFirstArticle(page);
    var name = await getFullNameOfProduct(page);
    await addToBasket(page);

    expect(getNumberOfItemsInShoppingCard(page)).toEqual("1");

    await openShoppingCard(page);   
    expect(name).toContain(getFirstItemName(page));
    

});