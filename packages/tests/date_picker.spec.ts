import { test, expect } from '../fixtures/baseTest';

test.describe("when user selects dates using the date picker", () => {

  test("should display fixtures and results for current day", async ({
    helpers, page,
  }) => {
    const todaysDate = await helpers.getCurrentDate();

    await helpers.pickDate(todaysDate);

    const [homeTeam, awayTeam, , gameId, eventId] =
      await helpers.getMatchResultsForCurrentDay();
    const [matchDate, time, venue, homeTeamScore, awayTeamScore] =
      await helpers.getMatchLiveResults(gameId, eventId);
    const teamLocator = page.getByTestId("fixtures-page-wrapper");
    const homeScore = page
      .getByRole('link', { name: `${homeTeam} ${homeTeamScore} , ${awayTeam} ${awayTeamScore} at` })
    const awayScore = page
      .getByRole('link', { name: `${homeTeam} ${homeTeamScore} , ${awayTeam} ${awayTeamScore} at` })

    await expect(page).toHaveURL(
      `https://www.bbc.co.uk/sport/football/scores-fixtures/${todaysDate}`
    );
    await expect(teamLocator).toContainText(`${homeTeam}`);
    await expect(teamLocator).toContainText(`${awayTeam}`);
    await expect(homeScore).toContainText(`${homeTeamScore}`);
    await expect(awayScore).toContainText(`${awayTeamScore}`);
  });

  test("should display fixtures and results when previous day is selected", async ({
    helpers, page,
  }) => {
    const previousDate = await helpers.getPreviousDate();
    await helpers.pickDate(previousDate);

    const [homeTeam, awayTeam, , gameId, eventId] =
      await helpers.getMatchResultsForCompletedMatch();
    const [matchDate, time, venue, homeTeamScore, awayTeamScore] =
      await helpers.getMatchLiveResults(gameId, eventId);
    const teamLocator = page.getByTestId("fixtures-page-wrapper");
    const homeScore = page.getByRole('link', { name: `${homeTeam} ${homeTeamScore} , ${awayTeam} ${awayTeamScore} at Full` })
    const awayScore = page.getByRole('link', { name: `${homeTeam} ${homeTeamScore} , ${awayTeam} ${awayTeamScore} at Full` })

    await expect(page).toHaveURL(
      `https://www.bbc.co.uk/sport/football/scores-fixtures/${previousDate}`
    );
    await expect(teamLocator).toContainText(`${homeTeam}`);
    await expect(teamLocator).toContainText(`${awayTeam}`);
    await expect(homeScore).toContainText(`${homeTeamScore}`);
    await expect(awayScore).toContainText(`${awayTeamScore}`);
  });

  test("should display fixtures and results when next day is selected", async ({
    helpers, page,
  }) => {
    const nextDate = await helpers.getNextDate();
    await helpers.pickDate(nextDate);

    const [homeTeam, awayTeam] = await helpers.getMatchResultsForFutureMatch();
    const teamLocator = page.getByTestId("fixtures-page-wrapper");

    await expect(page).toHaveURL(
      `https://www.bbc.co.uk/sport/football/scores-fixtures/${nextDate}`
    );

    await expect(teamLocator).toContainText(`${homeTeam}`);
    await expect(teamLocator).toContainText(`${awayTeam}`);
  });
});
