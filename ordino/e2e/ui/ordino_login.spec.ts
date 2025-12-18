import { test } from '../../fixtures/pages';

test.describe('Ordino Auth Sign-in - Test Suite', () => {

  test('Auth Sign-in with Valid Credentials', async ({ loginPage, homePage }) => {
    await loginPage.goto()
    await loginPage.step_enterUsername("admin@platform.com")
    await loginPage.step_enterPassword("admin")
    await loginPage.step_clickLogin() 
  });

  test('Auth Sign-in with In-Valid Credentials', async ({ loginPage, homePage }) => {
    await loginPage.goto()
    await loginPage.step_enterUsername("admin")
    await loginPage.step_enterPassword("wrongPassword")
    await loginPage.validate_login_error()
    await loginPage.step_clickLogin()
  })

  test('Auth Sign-in with In-Valid Credentials 2', async ({ loginPage, homePage }) => {
    await loginPage.goto()
    await loginPage.step_enterUsername("admin")
    await loginPage.step_enterPassword("wrongPassword")
    await loginPage.validate_login_error()
    await loginPage.step_clickLogin()
  })

  test('Auth Sign-in with In-Valid Credentials 3 ', async ({ loginPage, homePage }) => {
    await loginPage.goto()
    await loginPage.step_enterUsername("admin")
    await loginPage.step_enterPassword("wrongPassword")
    await loginPage.validate_login_error()
    await loginPage.step_clickLogin()
  })

  test('Auth Sign-in with In-Valid Credentials 4', async ({ loginPage, homePage }) => {
    await loginPage.goto()
    await loginPage.step_enterUsername("admin")
    await loginPage.step_enterPassword("wrongPassword")
    await loginPage.validate_login_error()
    await loginPage.step_clickLogin()
  })

  test('Auth Sign-in with In-Valid Credentials 5', async ({ loginPage, homePage }) => {
    await loginPage.goto()
    await loginPage.step_enterUsername("admin")
    await loginPage.step_enterPassword("wrongPassword")
    await loginPage.validate_login_error()
    await loginPage.step_clickLogin()
  })

  test('Auth Sign-in with In-Valid Credentials 7', async ({ loginPage, homePage }) => {
    await loginPage.goto()
    await loginPage.step_enterUsername("admin")
    await loginPage.step_enterPassword("wrongPassword")
    await loginPage.validate_login_error()
    await loginPage.step_clickLogin()
  })

  test('Auth Sign-in with In-Valid Credentials 8', async ({ loginPage, homePage }) => {
    await loginPage.goto()
    await loginPage.step_enterUsername("admin")
    await loginPage.step_enterPassword("wrongPassword")
    await loginPage.validate_login_error()
    await loginPage.step_clickLogin()
  })

  test('Auth Sign-in with In-Valid Credentials 9', async ({ loginPage, homePage }) => {
    await loginPage.goto()
    await loginPage.step_enterUsername("admin")
    await loginPage.step_enterPassword("wrongPassword")
    await loginPage.validate_login_error()
    await loginPage.step_clickLogin()
  })

  test('Auth Sign-in with In-Valid Credentials 10', async ({ loginPage, homePage }) => {
    await loginPage.goto()
    await loginPage.step_enterUsername("admin")
    await loginPage.step_enterPassword("wrongPassword")
    await loginPage.validate_login_error()
    await loginPage.step_clickLogin()
  })

  test('Auth Sign-in with In-Valid Credentials 11', async ({ loginPage, homePage }) => {
    await loginPage.goto()
    await loginPage.step_enterUsername("admin")
    await loginPage.step_enterPassword("wrongPassword")
    await loginPage.validate_login_error()
    await loginPage.step_clickLogin()
  })

  test('Auth Sign-in with In-Valid Credentials 12', async ({ loginPage, homePage }) => {
    await loginPage.goto()
    await loginPage.step_enterUsername("admin")
    await loginPage.step_enterPassword("wrongPassword")
    await loginPage.validate_login_error()
    await loginPage.step_clickLogin()
  })

});
