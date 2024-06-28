import { Page } from "@playwright/test";
import { Results } from "./results";
import { Live_Results } from "./live_results";

export class Helpers {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(
      "https://www.bbc.co.uk/sport/football/scores-fixtures"
    );
  }

  async getCurrentDate() {
    let currentDate = new Date().toJSON().slice(0, 10);
    return currentDate;
  }

  async getPreviousDate() {
    const todaysDate = new Date();
    const previousDateInMS = todaysDate.setDate(todaysDate.getDate() - 1);
    const previousDate = new Date(previousDateInMS).toJSON().slice(0, 10);
    return previousDate;
  }

  async getNextDate() {
    const todaysDate = new Date();
    const nextDateInMS = todaysDate.setDate(todaysDate.getDate() + 1);
    const nextDate = new Date(nextDateInMS).toJSON().slice(0, 10);
    return nextDate;
  }

  async pickDate(date) {
    this.page
      .getByTestId("datepicker")
      .getByTestId("datepicker-dates")
      .getByRole("list")
      .getByTestId(`datepicker-date-link-${date}`)
      .click();
  }
  

  async getMatchResultsForFutureMatch() {
    const results = new Results();
    const date = await this.getNextDate();
    const todaysDate = await this.getCurrentDate();
    await this.pickDate(date);
    const retrievedResults = await results.getResults(date, todaysDate);
    const homeTeam = retrievedResults.home.fullName;
    const awayTeam = retrievedResults.away.fullName;
    const url = retrievedResults.onwardJourneyLink;
    const gameId = retrievedResults.tipoTopicId
    const eventId = retrievedResults.id
    return [homeTeam, awayTeam, url, gameId, eventId]

  }

  async getMatchResultsForCompletedMatch() {
    const results = new Results();
    const date = await this.getPreviousDate()
    const todaysDate = await this.getCurrentDate();
    await this.pickDate(date);
    const retrievedResults = await results.getResults(date, todaysDate);
    const homeTeam = retrievedResults.home.fullName;
    const awayTeam = retrievedResults.away.fullName;
    const url = retrievedResults.onwardJourneyLink;
    const gameId = retrievedResults.tipoTopicId
    const eventId = retrievedResults.id
    return [homeTeam, awayTeam, url, gameId, eventId]
  }

  async getMatchResultsForCurrentDay() {
    const results = new Results();
    const todaysDate = await this.getCurrentDate();
    await this.pickDate(todaysDate);
    const retrievedResults = await results.getResults(todaysDate, todaysDate);
    const homeTeam = retrievedResults.home.fullName;
    const awayTeam = retrievedResults.away.fullName;
    const url = retrievedResults.onwardJourneyLink;
    const gameId = retrievedResults.tipoTopicId
    const eventId = retrievedResults.id
    return [homeTeam, awayTeam, url, gameId, eventId]
  }

  async getMatchLiveResults(gameId, eventId) {
    const live_results = new Live_Results
    const retrievedLiveResults = await live_results.getLiveResults(gameId, eventId)
    const matchDate = retrievedLiveResults.sportDataEvent.date
    const time = retrievedLiveResults.sportDataEvent.time.displayTimeUK
    const venue = retrievedLiveResults.sportDataEvent.venue.name
    const homeTeamScore = retrievedLiveResults.sportDataEvent.home.score
    const awayTeamScore = retrievedLiveResults.sportDataEvent.away.score
    const fullTime = retrievedLiveResults.sportDataEvent.periodLabel.value

    return [matchDate, time, venue, homeTeamScore, awayTeamScore, fullTime]
    
  }

  async pickMatch(url) {
    this.page
      .getByTestId("fixtures-page-wrapper")
      .getByRole('list')
      .locator(`a[href="${url}"]`)
      .click();
  }
}
