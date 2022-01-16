
describe('User should be on the login page',() =>{
    it('Navigate to Login page', () => {
        cy.visit('/')
    })
    it('User logs in with valid credentails', () => {
        cy.get('.flex-dir-col > :nth-child(1) > .input')
            .type(Cypress.env('userName'))
        cy.get('.mt-9 > .input-container > .input')
            .type(Cypress.env('passWord'))
        cy.get('.mt-10')
            .click()    
    })
})

describe('User should be in the HomePage', () => {
    it('User should be on the expected page', () => {
        cy.url()
            .should('equal', Cypress.env('url'))
    })
})

describe('User should be on the fixed contract page', () => {
    it('User clicks on more options',() => {
        cy.get('.mobile-header-content-container > .button')
            .click()
    })
    it('User clicks on Create A Contract', () => {
        cy.get(':nth-child(2) > .anchor > .sidebar-link')
            .click()
    })
    it('User clicks on Fixed Rate', () => {
        cy.get(':nth-child(1) > .anchor > .box')
            .click()
    })
})

describe('User should be in the HomePage', () => {
    it('User should be on the expected page', () => {
        cy.url()
            .should('equal', Cypress.env('fixedUrl'))
    })
})

describe('User fills in the blanks as expected', () => {
    it('User enters contract name', () => {
        cy.get("[name='name']")
            .type(Cypress.env('contractName'))
    })
    it('User should select tax residance', () => {
        cy.get('.box > :nth-child(1) > .deel-ui__stack_vertical > .input-container > .flex > .deel-ui__select > .deel-ui__select__input-container > .deel-ui__select__control')
            .type(Cypress.env('contry'))
        cy.get('#react-select-2-option-1-2')
            .click()    

    })
    it('User should select state', () => {
        cy.get(':nth-child(2) > .deel-ui__select__input-container > .deel-ui__select__control')
            .type(Cypress.env('state'))
        cy.get("div[id*='react-select-4']").each(($e1,index,$list)=>{
             if($e1.text()==Cypress.env('state')){
                 $e1.click()
             }   
        }) 
    })
    it('User enters job title', () => {
        cy.get("[name='jobTitle']")
            .type(Cypress.env('jobTitle'))
        cy.get("p.suggestions-option").each(($e1,index,$list)=>{
                if($e1.text()==Cypress.env('jobTitle')){
                    $e1.click()
                }   
           }) 
    })
    it('User enters scope', () => {
        cy.get('.deel-ui__textarea-component__textarea')
            .type(Cypress.env('scope'))
    })
    it('User clicks on Next button', () => {
        cy.get('.justify-content-end > .button')
            .click()
    })
    it('User selects currency',() => {
        cy.get('.deel-ui__stack > .deel-ui__select > .deel-ui__select__input-container > .deel-ui__select__control')
            .type(Cypress.env('currency'))
        cy.get("div[id*='react-select-5']").each(($e1,index,$list)=>{
            if($e1.text()==Cypress.env('currency')){
                    $e1.click()
                }   
           }) 
    })
    it('User writes payment rate',() => {
        cy.get('.deel-ui__input-component__input')
            .type(Cypress.env('pay'))
    })
    it('User selects payment frequency',() => {
        cy.get(':nth-child(2) > .flex > .deel-ui__select > .deel-ui__select__input-container > .deel-ui__select__control')
            .click()
        cy.get("div[id*='react-select-6']").each(($e1,index,$list)=>{
            if($e1.text()==Cypress.env('freq')){
                    $e1.click()
                }   
           }) 
    })
    it('User clicks on Next button', () => {
        cy.get('.contract-creation-footer > .mt-9')
            .click()
    })
    it('User clicks on Next button', () => {
        cy.get('.submit-define-dates')
            .click()
    })
    it('User adds special clause',() => {
        cy.get(':nth-child(4) > .box > .flex > :nth-child(2) > .button')
            .click()
        cy.get('.textarea')
            .type(Cypress.env('clause'))
    })
    it('User clicks on Next button', () => {
        cy.get('.contract-creation-footer > .mt-7')
            .click()
    })
    it('User clicks on Create Contract button', () => {
        cy.get('.contract-creation-footer > .mt-7')
            .click()
    })
})

describe('User should be in the Final Page', () => {
    it('User should be on the expected page', () => {
        cy.url()
            .should('include', Cypress.env('finalPage'))
    })
})

