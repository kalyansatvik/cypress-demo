describe('Tool QA', () => {
    it('Validate radio button', () => {
        cy.visit('https://demoqa.com/radio-button')
        //cy.get('[type=radio]').eq(0).click({ force: true })
        cy.get('#yesRadio').click({ force: true })

    })
})