class SignUp{

    org_detail(S_Organization_Name,S_Organization_Email,S_Password)
    {
        cy.get('.left-panel > .content > .btn').click()
        cy.get('.sign-up-form > :nth-child(3) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(S_Organization_Name) //organizaton name
        cy.get(':nth-child(4) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(S_Organization_Email) //organization email
        cy.get(':nth-child(5) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(S_Password)  //password
        cy.get('.sign-up-form > .btn').click()
    }


    new_sub(S_Parent,S_Organization_Name,S_Organization_Email,S_Password) //having already a parent org, and registering as sub org
    {
        cy.get('.left-panel > .content > .btn').click()
        cy.get('.mat-checkbox-inner-container').click()
        cy.get('p.ng-star-inserted > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(S_Parent)
        cy.get(':nth-child(4) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(S_Organization_Name) //organizaton name
        cy.get(':nth-child(5) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(S_Organization_Email) //organization email
        cy.get(':nth-child(6) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(S_Password)  //password
        cy.get('.sign-up-form > .btn').click()
    }
}
export default SignUp;