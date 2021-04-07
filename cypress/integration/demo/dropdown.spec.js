describe('Tool QA', () => {
    it.skip('Validate dropdown with select tag', () => {
        cy.visit('http://the-internet.herokuapp.com/dropdown')
        cy.get('select[id=dropdown]').select('Option 1')
        cy.get('select[id=dropdown]').select('Option 2')
    })

    it('Validate dropdown without select tag', () => {
        cy.visit('https://www.phptravels.net/home')
        cy.get('a[data-name=flights]').click()
        cy.get('div[class*=single]').eq(0).click()
        cy.get('ul[class=chosen-results] li').eq(1).click()
    })
})