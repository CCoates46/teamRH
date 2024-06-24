import { test, expect } from '@playwright/test';
import { Helpers } from './utils/helpers'

test.describe.only('when user selects dates using the date picker', () => {
  let helpers: Helpers

  test.beforeEach( async ({ page }) => {
    helpers = new Helpers(page)
    await helpers.goto();
    const todaysDate = await helpers.getCurrentDate()
    await helpers.pickTodaysDate(todaysDate)
  })

  test('should display fixtures and results for selected date', async ({ page }) => {

    await expect(page).toHaveTitle('Scores & Fixtures - Football - BBC Sport')
  });
  
})
