import { expect } from "@playwright/test"

export class Live_Results {
    async getLiveResults (gameId, eventId) {
        const fixtureApiUrl = new URL('https://web-cdn.api.bbci.co.uk/wc-poll-data/container/live-header')
        fixtureApiUrl.searchParams.set('assetId', gameId)
        fixtureApiUrl.searchParams.set('globalContainerPoliing', 'true')
        fixtureApiUrl.searchParams.set('liveExperienceCrowdCount', 'true')
        fixtureApiUrl.searchParams.set('sportDataEventUrn',`urn:bbc:sportsdata:football:event:${eventId}`)
        fixtureApiUrl.searchParams.set('sportDiscipline', 'football')
        fixtureApiUrl.searchParams.set('uasEnv', 'live')

        const response = await fetch(fixtureApiUrl, {
            method: 'GET'
        })
        if(response.status === 200){
            const returnedLiveResults = await response.json()
            return returnedLiveResults
        }

        if(response.status !== 200) {
            throw new Error('Unable to fetch results')
        }
    }
}