import { test, expect } from "@playwright/test";
import { Helpers } from "./utils/helpers";

test.describe("when user selects an upcoming fixture and selects a team", () => {
    let helpers: Helpers;

    test.beforeEach(async ({ page }) => {
      helpers = new Helpers(page);
      await helpers.goto();
    });

    test("should display correct team names on live results page", async ({ page }) => {
      const [homeTeam, awayTeam, url, gameId, eventId] = await helpers.getMatchResults();
      const [matchDate, time, venue] = await helpers.getMatchLiveResults(gameId, eventId)
      
      await helpers.pickMatch(url);

      const teamLocator = page.getByTestId("styled-match-header");
      const dateLocator = page.locator(".ssrcss-1hjuztf-Date")
      const timeLocator = page.locator(".ssrcss-r2yb1c-StyledTime")
      const eventVenue = page.getByText(`${venue}`)
      

      await expect(teamLocator).toContainText(`${homeTeam}`);

      await expect(teamLocator).toContainText(`${awayTeam}`);

      await expect(dateLocator).toContainText(`${matchDate}`)

      await expect(timeLocator).toContainText(`${time}`)

      await expect(eventVenue).toContainText(`${venue}`)

    });
  });