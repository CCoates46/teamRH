import { test, expect } from "@playwright/test";
import { Helpers } from "./utils/helpers";

test.describe("when user navigates to scores-fixtures page of BBC Sports", () => {
  let helpers: Helpers;

  test("should load page succesfully", async ({ page }) => {
    helpers = new Helpers(page);
    await helpers.goto();

    await expect(page).toHaveTitle(/Scores & Fixtures - Football - BBC Sport/);
  });
});