describe('Viewport Sizing', () => {
    it('testcase 1 - Viewport in it', () => {
        cy.viewport(480, 760)
        cy.visit('https://www.google.com/')
    })
        it('testcase 3 - Preset Viewports', () => {
        cy.viewport('iphone-3')
        cy.visit('https://www.amazon.com/')
    })
        it('testcase 4 - Preset Viewports with orientation', () => {
        cy.viewport('iphone-6','landscape')
        cy.visit('https://www.saucedemo.com/')
    })

})
describe('Viewport Sizing 2',
    {viewportWidth: 480,
    viewportHeight: 760}
,() => {
    it('testcase 2 - View port in discribe', () => {
        cy.viewport(360, 460)
        cy.visit('https://www.yopmail.com/')
    })


})