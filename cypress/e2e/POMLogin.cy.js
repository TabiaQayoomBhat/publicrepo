import Login from "../PageObjects/LoginPageObj"

describe('pom', () => {
     it('LoginTest', () =>{
        cy.visit('https://testassessment.educian.com')
        
        const ln= new Login();
        cy.fixture("mcq.json").then((data)=>{
            ln.completeLogin(data.url,data.email,data.password)
    
            // ln.setEmail(data.email);
            // ln.setPassword(data.password);
            // ln.clickSubmit();
            // ln.verifyLogin(data.expected);
         })
     })
})
