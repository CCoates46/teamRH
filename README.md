# TeamRH-tests

This is a subset of tests that have been written as part of a technical challenge.
The tests cover the functionality and accuracy of the fixtures and results of the BBC Sports website (`https://www.bbc.co.uk/sport/football/scores-fixtures`)
The framework used is Playwright.

## How to setup the repo

1. Clone the repo from `https://github.com/CCoates46/teamRH`
2. Install project dependencies:
    1. Run `yarn`
    2. Run `yarn playwright install` 

## How to run locally

1. To run headless mode - Run `yarn test`
2. To run in headed mode - Run `yarn test --headed`
3. To run the debug mode - Run `yarn test --debug`
4. To run the tests through Playwright UI - Run `yarn test --ui`

## Limitations

Due to time constraints, there are some areas that could be improved upon e.g:
1. Typing with Typescript
2. Refactoring of some methods as there is duplication of code
3. Introduction of more error handling



