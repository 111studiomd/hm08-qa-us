const page = require('../../page');
const helper = require('../../helper')

describe('Create an order', () => {

    it('should open phone number modal', async () => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumberButton = await $(page.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const phoneNumberModal = await $(page.phoneNumberModal);
        await expect(phoneNumberModal).toBeExisting();
    });

    it('should save the phone', async () => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        const phoneNumberElement = await helper.getElementByText(phoneNumber);
        await expect(phoneNumberElement).toBeExisting();
    });

    it('should be able to select a supportive plan', async() => {
        await browser.url('/');
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const supportivePlanButton = await $(page.supportivePlanButton);
        await supportivePlanButton.waitForDisplayed();
        await supportivePlanButton.click();
        await expect(supportivePlanButton).toBeDisplayed();
    });

    it('should be able to add credit card and cvv code', async() => {
        await browser.url('/');
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.fillCardNumber('1234 0000 4321');
        await page.fillCvvCode('13');
        await expect($(page.linkButton)).toBeExisting();
        await expect($(page.addCardButton)).toBeExisting();
    });

    it('should write a message for the driver', async () => {
        await browser.url('/');
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const messageForDriverField = await $(page.messageForDriverField);
        await messageForDriverField.waitForDisplayed();
        await messageForDriverField.scrollIntoView();
        await messageForDriverField.setValue('Please leave the package at the front door.');

    });

    it('should order a Blanket and handkerchiefs', async () => {
        await browser.url('/');
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const supportivePlanButton = await $(page.supportivePlanButton);
        await supportivePlanButton.waitForDisplayed(20000);
        await supportivePlanButton.click();
        const blanketAndHandkerchiefsButton = await $(page.blanketAndHandkerchiefsButton);
        await blanketAndHandkerchiefsButton.click();
        await expect($(page.blanketSwitch)).toBeChecked();
    });

    it('should order 2 Ice creams', async () => {
        await browser.url('/');
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const plusOneIceCreamButton = await $(page.plusOneIceCreamButton);
        await plusOneIceCreamButton.waitForDisplayed(20000);
        await plusOneIceCreamButton.click();
        await plusOneIceCreamButton.click();
        const iceCreamValue = await $(page.iceCreamValue);
        await expect(iceCreamValue).toHaveTextContaining('2');
    });

    it('should display the car search modal', async () => {
        await browser.url('/');
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        const orderButton = await $(page.orderButton);
        await orderButton.click();
        const carSearchModal = await $(page.carSearchModal);
        await expect(carSearchModal).toBeDisplayed();
    });
});

