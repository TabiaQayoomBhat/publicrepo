class Login {
      
    txtEmail= ":nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix"
    txtPasssword= ".sign-in-form > :nth-child(3) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix"
    btnClick= ".sign-in-form > .btn"
    


    setEmail(email)
    {
        cy.get(this.txtEmail).type(email);
    }

    setPassword(password)
    {
        cy.get(this.txtPasssword).type(password);
    }

    clickSubmit(submit)
    {
        cy.get(this.btnClick).click();
    }

    verifyLogin(vlogin)
    {
        cy.get("h4[class='assessment-heading'] b").should('have.text','Assessments')
    }

    completeLogin(url,email,password)
    {
        cy.visit(url)
        cy.get(this.txtEmail).type(email);
        cy.get(this.txtPasssword).type(password);
        cy.get(this.btnClick).click();
        cy.get("h4[class='assessment-heading'] b").should('have.text','Assessments')
    }

    edit_User()
    {
        
    }
 }
 
export default Login;