import frontEndData from "../fixtures/frontEnd.Data";
class frontEndPage {

    //Xpath
    elementById(id=string){
        return cy.xpath(`//*[@id="${id}"]`)
    }
    elementByIdAndText(id=string,text=string){
        return cy.xpath(`//*[@id="${id}" and text()="${text}"]`)
    }

    elementByText(text=string){
        return cy.xpath(`//*[text()="${text}"]`)
    }
    elementByClass(className=string){
        return cy.xpath(`//*[@class="${className}"]`)
    }

    //xpath to get button in row2
    specificRowButton(buttonId=string,rowId=string){
        return cy.xpath(`//*[@id="${rowId}"]//child::button[@id="${buttonId}"]`)
    }

    //xpath to get specific row input field
    specificRowInputField(rowId=string){
        return cy.xpath(`//*[@id="${rowId}"]//child::input[@class="input-field"]`)
    }

    //Verify existing value in the input field
    verifyDataInInputField(value=string){
        cy.xpath(`//*[@class="input-field" and @value="${value}"]`).should('be.visible')
    }
    
    //verify the input field is disabled 
    verifyDisabledInputField(rowId=string){
        cy.xpath(`//*[@id="${rowId}"]//child::input[@class="input-field" and @disabled]`).should('be.visible')
    }

    //Edit the input field, enter new data, verify the field is updated
    editAndVerifyInputField(inputText=string,confirmationText=string,rowId=string){
         //Clear the data in the exising field
         this.specificRowInputField(rowId).click().clear()
         //Enter the data in input field
         this.specificRowInputField(rowId).type(inputText)
         //Click on save button
         this.specificRowButton(frontEndData.elements.saveButtonId,rowId).click()
         //Verify the confirmation message
         this.elementById(frontEndData.elements.confirmationId).should(`have.text`, confirmationText)
         //Verify save button should not exists
         this.specificRowButton(frontEndData.elements.saveButtonId,rowId).should(`not.be.visible`)
         //Verify Edit button to be display after saving
         this.specificRowButton(frontEndData.elements.editButtonId,rowId).should(`be.visible`)
    }
}
export default new frontEndPage
