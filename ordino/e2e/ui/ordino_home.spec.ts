import { test } from '../../fixtures/pages';

test.describe('Ordino Home Dashboard - Test Suite', () => {

    test('Verify Profile Logout', async ({ loginPage, homePage }) => {
        await loginPage.goto();
        await loginPage.step_enterUsername("admin@platform.com");
        await loginPage.step_enterPassword("admin");
        await loginPage.step_clickLogin();           
        await homePage.step_logout();
    });  

    
    test('Verify Profile Logout 2', async ({ loginPage, homePage }) => {
        await loginPage.goto();
        await loginPage.step_enterUsername("admin@platform.com");
        await loginPage.step_enterPassword("admin");
        await loginPage.step_clickLogin();           
        await homePage.step_logout();
    });  

     
    test('Verify Profile Logout 3', async ({ loginPage, homePage }) => {
        await loginPage.goto();
        await loginPage.step_enterUsername("admin@platform.com");
        await loginPage.step_enterPassword("admin");
        await loginPage.step_clickLogin();           
        await homePage.step_logout();
    });  
    
    test('Verify Profile Logout 4 ', async ({ loginPage, homePage }) => {
        await loginPage.goto();
        await loginPage.step_enterUsername("admin@platform.com");
        await loginPage.step_enterPassword("admin");
        await loginPage.step_clickLogin();           
        await homePage.step_logout();
    });  
    
    test('Verify Profile Logout 5', async ({ loginPage, homePage }) => {
        await loginPage.goto();
        await loginPage.step_enterUsername("admin@platform.com");
        await loginPage.step_enterPassword("admin");
        await loginPage.step_clickLogin();           
        await homePage.step_logout();
    });  
    
    test('Verify Profile Logout 6', async ({ loginPage, homePage }) => {
        await loginPage.goto();
        await loginPage.step_enterUsername("admin@platform.com");
        await loginPage.step_enterPassword("admin");
        await loginPage.step_clickLogin();           
        await homePage.step_logout();
    });  
    
    test('Verify Profile Logout 7', async ({ loginPage, homePage }) => {
        await loginPage.goto();
        await loginPage.step_enterUsername("admin@platform.com");
        await loginPage.step_enterPassword("admin");
        await loginPage.step_clickLogin();           
        await homePage.step_logout();
    });  

    test('Verify Profile Logout 8', async ({ loginPage, homePage }) => {
        await loginPage.goto();
        await loginPage.step_enterUsername("admin@platform.com");
        await loginPage.step_enterPassword("admin");
        await loginPage.step_clickLogin();           
        await homePage.step_logout();
    });  
    test('Verify Profile Logout 9', async ({ loginPage, homePage }) => {
        await loginPage.goto();
        await loginPage.step_enterUsername("admin@platform.com");
        await loginPage.step_enterPassword("admin");
        await loginPage.step_clickLogin();           
        await homePage.step_logout();
    });  

    test('Verify Profile Logout 10', async ({ loginPage, homePage }) => {
        await loginPage.goto();
        await loginPage.step_enterUsername("admin@platform.com");
        await loginPage.step_enterPassword("admin");
        await loginPage.step_clickLogin();           
        await homePage.step_logout();
    });  
    
    
});