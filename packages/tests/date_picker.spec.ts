import { test, expect } from "@playwright/test";
import { Helpers } from "./utils/helpers";

test.describe("when user selects dates using the date picker", () => {
  let helpers: Helpers;

  test.beforeEach(async ({ page }) => {
    helpers = new Helpers(page);
    await helpers.goto();
  });

  test("should display fixtures and results for current day", async ({
    page,
  }) => {
    const todaysDate = await helpers.getCurrentDate();

    await helpers.pickDate(todaysDate);

    await expect(page).toHaveURL(
      `https://www.bbc.co.uk/sport/football/scores-fixtures/${todaysDate}`
    );
  });

  test("should display fixtures and results when previous day is selected", async ({
    page,
  }) => {
    const previousDate = await helpers.getPreviousDate();
    await helpers.pickDate(previousDate);

    await expect(page).toHaveURL(
      `https://www.bbc.co.uk/sport/football/scores-fixtures/${previousDate}`
    );
  });

  test("should display fixtures and results when next day is selected", async ({
    page,
  }) => {
    const nextDate = await helpers.getNextDate();
    await helpers.pickDate(nextDate);

    await expect(page).toHaveURL(
      `https://www.bbc.co.uk/sport/football/scores-fixtures/${nextDate}`
    );
  });
});
