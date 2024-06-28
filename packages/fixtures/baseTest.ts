import { test as base } from '@playwright/test';
import { Helpers } from '../utils/helpers';

type BaseTest = {
    helpers: Helpers
}

export const test = base.extend<BaseTest>({
    helpers: async ({ page }, use) => {
        const helpers = new Helpers(page)
        await helpers.goto()

        await use(helpers)
    }
})

export { expect } from '@playwright/test'