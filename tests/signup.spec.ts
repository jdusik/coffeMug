// assumptions:
// 2fa  is disabled for the  page, it will required additional tools to handle
// gdpr popup is not disturbing login or signup


import test from "@playwright/test";
import { openSignupPage } from "./PageObjects/topbar";
import { assertIncorrectEmailValidation, assertIncorrectPasswordValidation, assertSuccess, createAccount } from "./PageObjects/signupPage";
import { navigateToMainPage, randomEmail, randomPassword } from "./common";
  

  test('Create new account', async ({ page }) => {
    let email = randomEmail();
    let password = randomPassword();
    await navigateToMainPage(page);
    await openSignupPage(page);
    await createAccount(page, email,password);
    await assertSuccess(page);
  });


  //check  possible errors with email 
  const testData = [
    { email: '', password: randomPassword() },
    { email: 'user', password: randomPassword() },
    { email: 'user@', password: randomPassword() },
    { email: 'user@abc', password: randomPassword() },
    { email: 'user@abc.', password: randomPassword() }, 
    { email: 'DROP TABLE', password: randomPassword() },
    { email: '!#', password: randomPassword() },
    { email: '@email.com', password: randomPassword() },

  ];

  for (const data of testData) {
  test(`Wrong email displayed error - signup with email ${data.email} and password ${data.password} `, async ({ page }) => {
    await navigateToMainPage(page);
    await openSignupPage(page);
    await createAccount(page, data.email,data.password);
    await assertIncorrectEmailValidation(page);
  });
  }
    //check  possible errors with password, depends on validation for password 
    const testDataPassword = [
        { email: randomEmail(), password: '' },// empty
        { email: randomEmail(), password: '1' },//too short
        { email: randomEmail(), password: 'Test1' },// without special characters
        { email: randomEmail(), password: 'Test!' },// without numbers
        { email: randomEmail(), password: 'test1!' },// without capital letters
        // some pages have also validation for too easy password from dictionary, password lenght >8 characters
    
      ];
      for (const data of testDataPassword) {
      test(`Wrong email displayed error - signup with email ${data.email} and password ${data.password} `, async ({ page }) => {
        await navigateToMainPage(page);
        await openSignupPage(page);
        await createAccount(page, data.email,data.password);
        await assertIncorrectPasswordValidation(page);
      });
    }


