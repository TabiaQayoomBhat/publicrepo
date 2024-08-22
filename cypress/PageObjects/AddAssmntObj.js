class Assmnt{

    Add(Assessment_Name)
    {
        cy.get('.rounded').click()
        cy.get('.input_q > .form-control').type(Assessment_Name)
        cy.get('.mat-dialog-actions > :nth-child(2)').click() 
    }

    Preview(Assmnt_Time,Assmnt_Marks,Adding_Question,Opt_1,Opt_2,Opt_3)// when there's no question inside the assessment
    {
        cy.xpath("/html[1]/body[1]/app-root[1]/main-layout-component[1]/mat-sidenav-container[1]/mat-sidenav-content[1]/app-my-layout[1]/mat-drawer-container[1]/mat-drawer-content[1]/app-teacher-dashboard[1]/div[1]/div[1]/div[2]/app-main-dashboard[1]/cdk-virtual-scroll-viewport[1]/div[1]/mat-card[1]/mat-card-content[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[1]/button[1]/span[1]").click() //Preview Button
        cy.get('.btn').click()          //Ok Pop Up
        cy.get('.button').click()            //Add Questions Button
        cy.get('.mat-select-arrow-wrapper').click()//MCQ Type 
        cy.get('#mat-option-2 > .mat-option-text').click()//Option  
        cy.get('#mat-input-5').type(Assmnt_Time)//Time
        cy.get('#Points').type(Assmnt_Marks)//Points
        cy.get('.ql-editor > p').type(Adding_Question) //Adding a Question
        cy.get('#option').click()  
        cy.xpath(".//input[@id='Option 1']").type(Opt_1) 
        cy.get('#option').click() 
        cy.xpath(".//input[@id='Option 2']").type(Opt_2)
        cy.get('#option').click()
        cy.xpath(".//input[@id='Option 3']").type(Opt_3)
       // cy.xpath(".//div[@class='form-group d-flex']//div[2]//div[1]//div[2]//input[1]").click()
        cy.xpath(".//div[@class='d-flex flex-grow-1 align-items-baseline display-mobile ng-pristine ng-valid ng-star-inserted ng-touched']//label[@class='display-6'][normalize-space()='Correct']").click()
        cy.get('.mat-card-actions > .button').click()

    }
}

export default Assmnt;