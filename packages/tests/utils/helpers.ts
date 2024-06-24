import { Locator, Page } from "@playwright/test";

export class Helpers {
    private readonly page: Page
    private readonly datePicker: Locator

    constructor(page: Page) {
        this.page = page
        this.datePicker = page.getByTestId('datepicker-dates')

    }

    async goto() {
        await this.page.goto("https://www.bbc.co.uk/sport/football/scores-fixtures")
    }

    async getCurrentDate() {
        let currentDate = new Date().toJSON().slice(0,10)
    }

    async pickTodaysDate(date) {
        await this.datePicker.click()
    }
}