import { expect } from "@playwright/test"

export class Results {

    async getResults(date, todaysDate) {
        const fixtureApiUrl = new URL('https://www.bbc.co.uk/wc-data/container/sport-data-scores-fixtures')
        fixtureApiUrl.searchParams.set('selectedEndDate', date)
        fixtureApiUrl.searchParams.set('selectedStartDate', date)
        fixtureApiUrl.searchParams.set('todayDate', todaysDate)
        fixtureApiUrl.searchParams.set('urn', 'urn:bbc:sportsdata:football:tournament-collection:collated')
        fixtureApiUrl.searchParams.set('useSdApi', 'false')

        const response = await fetch(fixtureApiUrl, {
            method: 'GET'
        })
        if(response.status === 200){
            const returnedFixtures = await response.json()
            return returnedFixtures.eventGroups[0].secondaryGroups[0].events[0]
        }

        if(response.status !== 200) {
            throw new Error('Unable to fetch results')
        }
    }
}