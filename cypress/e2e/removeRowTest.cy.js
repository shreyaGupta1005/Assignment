import frontEndData from "../fixtures/frontEnd.Data";
import frontEndPage from "../pageObjects/frontEnd.page";

describe('Verify remove row functionality', () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false
  })
  it('TE_06- Verify remove row functionality', () => {
    // Open page
    cy.visit(Cypress.config().baseUrl);
    // Click Add button
    frontEndPage.elementById(frontEndData.elements.addButtonId).click();
    //Wait for loading button
    frontEndPage.elementById(frontEndData.elements.loadingId).should(`be.visible`);
    cy.wait(5000)
    // Wait for Row 2 input field to be displayed
    frontEndPage.elementById(frontEndData.elements.row2Id).should('be.visible');
    //Verify remove button to be visible
    frontEndPage.specificRowButton(frontEndData.elements.removeButtonId, "row2").should(`be.visible`);
    //Click on remove button
    frontEndPage.specificRowButton(frontEndData.elements.removeButtonId, "row2").click()
    //Verify the confirmation text
    frontEndPage.elementByIdAndText(frontEndData.elements.confirmationId,frontEndData.data.removeConfirmationText);
    //Row2 should not be visible
    frontEndPage.elementById(frontEndData.elements.row2Id).should('not.be.visible');
    //Verify edit and add button to be display in row 1
    frontEndPage.specificRowButton(frontEndData.elements.editButtonId, "row1").should(`be.visible`)
    frontEndPage.specificRowButton(frontEndData.elements.addButtonId, "row1").should(`be.visible`)

  })
})