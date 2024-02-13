import frontEndData from "../fixtures/frontEnd.Data";
import frontEndPage from "../pageObjects/frontEnd.page";

describe('Verify remove row functionality', () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
        return false
    })
    it('TL_01- Verify Login with valid username and password', () => {
        // Open page
        cy.visit(Cypress.config().loginTestBaseUrl);
        //enter valid username in username field
        frontEndPage.elementById(frontEndData.elements.userNameFieldId).click().type(frontEndData.data.validUserName)
        //enter valid password
        frontEndPage.elementById(frontEndData.elements.passwordFieldId).click().type(frontEndData.data.validPassword)
        //Click on submit button
        frontEndPage.elementById(frontEndData.elements.submitButtonId).click()
        //Verify redirection url
        // cy.url(`https://practicetestautomation.com/logged-in-successfully/`).should(`be.visible`)
        //Verify the successful login message
        frontEndPage.elementByText("Logged In Successfully")
        frontEndPage.elementByText("Congratulations student. You successfully logged in!")
        //Verify logout button to be display and is clickable
        frontEndPage.elementByText("Log out").should('have.attr', 'href')
    })

    it("TL_02 -Verify login with case sensitive username and password", () => {
        // Open page
        cy.visit(Cypress.config().loginTestBaseUrl);
        //enter valid username in username field
        frontEndPage.elementById(frontEndData.elements.userNameFieldId).click().type("STUdent")
        //enter valid password
        frontEndPage.elementById(frontEndData.elements.passwordFieldId).click().type("PassWORD123")
        //Click on submit button
        frontEndPage.elementById(frontEndData.elements.submitButtonId).click()
        //Verify validation message
        frontEndPage.elementByText(frontEndData.data.invalidUserNameValidationText)
    })

    it("TL_03 -Verify login with incorrect username and correct password", () => {
        // Open page
        cy.visit(Cypress.config().loginTestBaseUrl);
        //enter valid username in username field
        frontEndPage.elementById(frontEndData.elements.userNameFieldId).click().type("employee")
        //enter valid password
        frontEndPage.elementById(frontEndData.elements.passwordFieldId).click().type("Password123")
        //Click on submit button
        frontEndPage.elementById(frontEndData.elements.submitButtonId).click()
        //Verify validation message
        frontEndPage.elementByText(frontEndData.data.invalidUserNameValidationText)
    })

    it("TL_04 -Verify login with correct username and incorrect password", () => {
        // Open page
        cy.visit(Cypress.config().loginTestBaseUrl);
        //enter valid username in username field
        frontEndPage.elementById(frontEndData.elements.userNameFieldId).click().type("student")
        //enter valid password
        frontEndPage.elementById(frontEndData.elements.passwordFieldId).click().type("Passwor")
        //Click on submit button
        frontEndPage.elementById(frontEndData.elements.submitButtonId).click()
        //Verify validation message
        frontEndPage.elementByText(frontEndData.data.invalidPasswordValidationText)
    })

    it("TL_05 -Verify login with incorrect username and incorrect password", () => {
        // Open page
        cy.visit(Cypress.config().loginTestBaseUrl);
        //enter valid username in username field
        frontEndPage.elementById(frontEndData.elements.userNameFieldId).click().type("employee")
        //enter valid password
        frontEndPage.elementById(frontEndData.elements.passwordFieldId).click().type("Password")
        //Click on submit button
        frontEndPage.elementById(frontEndData.elements.submitButtonId).click()
        //Verify validation message
        frontEndPage.elementByText(frontEndData.data.invalidUserNameValidationText)
    })

    it("TL_06 -Verify login without username and password", () => {
        // Open page
        cy.visit(Cypress.config().loginTestBaseUrl);
        //enter valid username in username field
        frontEndPage.elementById(frontEndData.elements.userNameFieldId).click().type(" ")
        //enter valid password
        frontEndPage.elementById(frontEndData.elements.passwordFieldId).click().type(" ")
        //Click on submit button
        frontEndPage.elementById(frontEndData.elements.submitButtonId).click()
        //Verify validation message
        frontEndPage.elementByText(frontEndData.data.invalidUserNameValidationText)
    })

    it("TL_07 - Verify logout button functionality",()=>{
        cy.visit(Cypress.config().loginTestBaseUrl);
        //enter valid username in username field
        frontEndPage.elementById(frontEndData.elements.userNameFieldId).click().type(frontEndData.data.validUserName)
        //enter valid password
        frontEndPage.elementById(frontEndData.elements.passwordFieldId).click().type(frontEndData.data.validPassword)
        //Click on submit button
        frontEndPage.elementById(frontEndData.elements.submitButtonId).click()
        //Verify logout button to be display and is clickable
        frontEndPage.elementByText("Log out").should('have.attr', 'href')
        //Click on log out button
        frontEndPage.elementByText("Log out").click();
        //verify login page details - username and password
        frontEndPage.elementByText("Test login").should('be.visible')
        frontEndPage.elementById(frontEndData.elements.userNameFieldId).should('be.visible')
        frontEndPage.elementById(frontEndData.elements.passwordFieldId).should('be.visible')
    })

})