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


## Timebox Exploratory Testing Approach

## Objectives
The primary objective of this exploratory test approach is to ensure the functionality, usability, and performance of the BBC Sports page. The test session was limited to 20 minutes. 

## Scope
Areas covered in the test session:
 - Links
 - Videos
 - Live pages
 - Menu Options
 - Breadcrumbs
 - Navigation
 - Mobile responsiveness

 ## Testing Areas and Approach

 1. Links Verification

 - Objective: Ensure all links on the page are functional and navigate to the correct destinations
 - Approach: 
    - manually click all links on the sports homepage and verify they open the correct article or lead to the appropriate page.
    - manually check all internal links (e.g. to similar stories, sections)
    - validate that social media links navigate to the correct BBC sports social media pages.
    - test across multiple browsers such as Safari, Chrome and Edge

 2. Video Playback 

 - Objective: Verify that all embedded videos play without issues
 - Approach: 
    - play each video on the homepage to ensure they start without errors.
    - check for video controls (play, pause, full screen, volume) functionality
    - test video playback across different browsers.
    
3. LIVE pages

 - Objectives: Verify that LIVE pages update regularly
 - Approach:
    - visually check that live reports are posted on a regular basis 
    - manually click on thumbs up and thumbs down for posts
    - verify that share button works and links can be copied 
    - manually click on tooltips
    - verify that Listen Live button works

4. Menu Options

 - Objectives: Ensure all menu options are accessible and lead to the correct sections.
 - Approach:
    - click on each menu item to verify it navigates to the correct section or page.
    - check dropdown menus and ensure sub-options are accessible.
    - validate that the menu is responsive and works well on various screen sizes.

5. Breadcrumbs

- Objective: Confirm that breadcrumbs accurately reflect the user's location and provide easy navigation.
- Approach:
    - navigate through different sections and articles to verify breadcrumb trails are accurate.
    - validate that breadcrumbs are consistently displayed across all pages.
    - test breadcrumbs on various browsers and devices for consistency.

6. Navigation

 - Objective: Assess the overall navigation for ease of use and efficiency.
 - Approach:
    - perform typical user journeys to ensure intuitive navigation (e.g., finding a specific sports article, accessing live scores).
    - verify the presence and functionality of the main navigation bar.
    - test the search functionality for accuracy and relevance of results.
    - ensure navigation elements (back, forward, refresh) work seamlessly across different browsers.

7. Mobile Responsiveness

 - Objective: Assess that all of the above functionalities work when viewing the webpage in mobile view
 - Approach:
    - preview webpage in various mobile and tablet dimensions.
    - spot check all of the above e.g articles open, videos play, links work, search bar works, menu options are visible.
    - ensure navigation elements (scroll up, scroll down, back, forward, refresh) work seamlessly.
    - visually check layout of pages.

 ## Issues Found

 The following issues were identified from the exploratory testing:

 1. In desktop view - when you select an article which is a short article, there seems to be a lot of whitespace underneath the article due to the number of posts under the Elsewhere on the BBC section.
 I believe that there needs to be validation on the page which checks the length of the article and only display the proportion of posts under the Elsewhere on the BBC to remove the unnecessary whitespace.

 2. In both desktop view and mobile view - there is no scroll to bottom button or scroll to top button.
 Given some of the pages are extremely long, it's a lot of scrolling on mouse to get to the bottom of the webpage and then back up again.

3. Clicking on search bar opens another search bar??
I don't see the need for having a search bar on the top of the page, which when clicks opens up a larger search bar which means I can then search for something.
Should just change the first search to either be the main search bar or a button which says Search.
Seems unnecessary in my opinion to display it as a search bar functionality only to open up the real search bar.