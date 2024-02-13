import frontEndData from "../fixtures/frontEnd.Data";
import frontEndPage from "../pageObjects/frontEnd.page";

describe("Verify Edit Fucntionality in existing row", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
        return false
    })
    it("TE_01 - Verify edit functionality by updating the existing data in row1 with valid input", () => {
        //open page
        cy.visit(Cypress.config().baseUrl);
        //Verify header name
        frontEndPage.elementByText(frontEndData.data.headerText).should(`exist`)
        //Verify instruction text
        frontEndPage.elementByText(frontEndData.data.instructionText).should(`be.visible`)
        //Verify the existing data in row 1
        frontEndPage.elementByText("Row 1").should(`be.visible`)
        //Verify input field is disabled by default
        frontEndPage.verifyDisabledInputField("row1")
        //Verify add button to be display
        frontEndPage.elementById(frontEndData.elements.addButtonId).should(`be.visible`)
        //Verify edit button to be display
        frontEndPage.elementById(frontEndData.elements.editButtonId).should(`be.visible`)
        //Click on edit button
        frontEndPage.elementById(frontEndData.elements.editButtonId).click();
        //Verify input field is not disabled
        frontEndPage.elementByClass(frontEndData.elements.inputField).should('not.be.disabled')
        frontEndPage.editAndVerifyInputField("Orange",frontEndData.data.confirmationTextForRow1,"row1")
    })

    it("TE_02 - Verify editing the text when input field is disabled", () => {
        //open page
        cy.visit(Cypress.config().baseUrl);
        //Verify the existing data in row 1
        frontEndPage.elementByText("Row 1").should(`be.visible`)
        //Verify input field is disabled by default
        frontEndPage.verifyDisabledInputField("row1")
        if (frontEndPage.elementByClass(frontEndData.elements.inputField).should('be.disabled')) {
            cy.log("Error Message: Input field is disabled")
        }
        else {
            frontEndPage.editAndVerifyInputField("Orange1",frontEndData.data.confirmationTextForRow1,"row1")
        }
    })
})