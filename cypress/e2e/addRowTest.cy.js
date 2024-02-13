import frontEndData from "../fixtures/frontEnd.Data";
import frontEndPage from "../pageObjects/frontEnd.page";

describe('Verify add row functionality', () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false
  })
  it('TE_03- verify Row 2 input field is displayed after clicking Add button after 5 sec wait', () => {
    // Open page
    cy.visit(Cypress.config().baseUrl);
    // Click Add button
    frontEndPage.elementById(frontEndData.elements.addButtonId).click();
    //Wait for loading button
    frontEndPage.elementById(frontEndData.elements.loadingId).should(`be.visible`);
    cy.wait(5000)
    // Wait for Row 2 input field to be displayed
    frontEndPage.elementById(frontEndData.elements.row2Id).should('be.visible');
    //Verify the verification message after adding row 2
    frontEndPage.elementByIdAndText(frontEndData.elements.confirmationId, frontEndData.data.row2ConfirmationText);
    //Verify save and remove button to be display
    frontEndPage.specificRowButton(frontEndData.elements.saveButtonId, "row2").should(`be.visible`)
    frontEndPage.specificRowButton(frontEndData.elements.removeButtonId, "row2").should(`be.visible`)
    //add and verify the data in row 2
    frontEndPage.editAndVerifyInputField("Apple", frontEndData.data.confirmationTextForRow2, "row2")
    //verify edit and remove button to be display in row2
    frontEndPage.specificRowButton(frontEndData.elements.editButtonId, "row2").should(`be.visible`)
    frontEndPage.specificRowButton(frontEndData.elements.removeButtonId, "row2").should(`be.visible`)
    //Verify both rows to be display on page
    frontEndPage.verifyDisabledInputField("row1")
    frontEndPage.verifyDisabledInputField("row2")
    //Verify add button should not exists
    frontEndPage.elementById(frontEndData.elements.addButtonId).should(`not.be.visible`)
    //Verify instruction text element should not display
    frontEndPage.elementByText(frontEndData.data.instructionText).should(`not.exist`)
  });

  it('TE_04- verify Row 2 input field should not displayed after clicking Add button immediately', () => {
    // Open page
    cy.visit(Cypress.config().baseUrl);
    // Click Add button
    frontEndPage.elementById(frontEndData.elements.addButtonId).click();
    //Wait for loading button
    frontEndPage.elementById(frontEndData.elements.loadingId).should(`be.visible`);
    //verify row2 field should not display
    if (frontEndPage.elementById(frontEndData.elements.row2Id).should('not.exist')) {
      cy.log("Message:Please wait for 5 sec")
    } else {
      // verify row2 input field should display
      frontEndPage.elementById(frontEndData.elements.row2Id).should('exist');
    }

  });

  it('TE_05- verify Row 2 input field should not after clicking Add button after 3 sec wait', () => {
    // Open page
    cy.visit(Cypress.config().baseUrl);
    // Click Add button
    frontEndPage.elementById(frontEndData.elements.addButtonId).click();
    //Wait for loading button
    frontEndPage.elementById(frontEndData.elements.loadingId).should(`be.visible`);
    cy.wait(3000)
    //verify row2 field should not display
    if (frontEndPage.elementById(frontEndData.elements.row2Id).should('not.exist')) {
      cy.log("Message:Please wait for 5 sec")
    } else {
      // verify row2 input field should display
      frontEndPage.elementById(frontEndData.elements.row2Id).should('exist');
    }
  });
});
