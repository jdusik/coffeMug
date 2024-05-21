import { Page, expect} from "@playwright/test";


export async function createAccount(page: Page, email: string, password:string) {
    await setEmail(page, email);
    await setPassword(page,password);
    await setCorrectlyOtherFields(page);
    await submit (page);
}

export async function setEmail(page: Page, email: string) {
    page.locator("id=email").fill(email);   
}

export async function setPassword(page: Page, password: string) {
    page.locator("id=password").fill(password);   
}

export async function submit(page: Page) {
    page.getByTestId("submit-btn").click();   
}


//specific things from page, in normal test that should also be validated
export async function setCorrectlyOtherFields(page: Page) {
    await setAgeOption(page);
    await setPolicyConfirmation(page);
}

//specific things from page, in normal test that should also be validated
export async function setAgeOption(page: Page) {
    page.locator("label[for='isAdultYES']").click();   
}

//specific things from page, in normal test that should also be validated
export async function setPolicyConfirmation(page: Page) {
    page.locator("label[for='agreementTerm']").click();   
}

export async function assertSuccess(page: Page) {
    await expect(page.locator('.success-message')).toBeVisible();
}
export async function assertIncorrectPasswordValidation(page: Page) {
    await expect(page.locator("id=password-hint-id")).toBeVisible();
}

export async function assertIncorrectEmailValidation(page: Page) {
    await expect(page.locator("id=email-error")).toBeVisible();
}
