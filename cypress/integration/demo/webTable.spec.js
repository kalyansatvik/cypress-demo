

describe('Tool QA', () => {
    it.skip('Validate webtable', () => {
        cy.visit('https://demoqa.com/webtables')
        //cy.get('[type=radio]').eq(0).click({ force: true })
        cy.get('#edit-record-1 > svg').click()
        cy.get('#submit').click()

    })

    it('Adding entries to webtable', () => {
        cy.visit('https://demoqa.com/webtables')
        for (var i = 0; i <= 10; i++) {
            cy.get('#addNewRecordButton').click()
            cy.get('#firstName').type('test' + i)
            cy.get('#lastName').type('test' + i)
            cy.get('#userEmail').type('test' + i + '@test.com')
            cy.get('#age').type('27')
            cy.get('#salary').type('27000')
            cy.get('#department').type('ITO')
            cy.get('#submit').click()
        }
    })
})