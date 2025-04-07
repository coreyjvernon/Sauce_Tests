const { expect } = require('@wdio/globals')

describe('My Dashboard Page', () => {
    it('should open the dashboard and check title', async () => {
        await browser.url('https://www.saucedemo.com')
        const title = await browser.getTitle()
        expect(title).toContain('Swag Labs')
    })
})
