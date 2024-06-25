import { Locator, Page } from "@playwright/test"

export class Helpers {
  private readonly page: Page
  private readonly datePicker: Locator

  constructor(page: Page) {
    this.page = page
    
    
  }

  async goto() {
    await this.page.goto(
      "https://www.bbc.co.uk/sport/football/scores-fixtures"
    )
  }

  async getCurrentDate() {
    let currentDate = new Date().toJSON().slice(0,10)
    return currentDate
  }

  async getPreviousDate() {
    const todaysDate = new Date()
    const previousDateInMS = todaysDate.setDate(todaysDate.getDate() - 1)
    const previousDate = new Date(previousDateInMS).toJSON().slice(0, 10)
    return previousDate
  }

  async getNextDate() {
    const todaysDate = new Date()
    const nextDateInMS = todaysDate.setDate(todaysDate.getDate() + 1)
    const nextDate = new Date(nextDateInMS).toJSON().slice(0, 10)
    return nextDate
  }

  async pickDate(date) {
    this.page.getByTestId('datepicker')
        .getByTestId('datepicker-dates')
        .getByRole('list')
        .getByTestId(`datepicker-date-link-${date}`)
        .click()
  }
}
