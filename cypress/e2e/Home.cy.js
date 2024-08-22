import Login from "../PageObjects/LoginPageObj"
import dashboard from "../PageObjects/DashboardObj"

describe('pom', () => {
     it('DashboardLogos', () =>{
       // cy.visit('https://testassessment.educian.com')
        
        const ln= new Login();
        cy.fixture("mcq.json").then((data)=>{
            ln.completeLogin(data.url,data.email,data.password)
            
         })
         const dash= new dashboard();
    
         dash.topNav();

         cy.wait(3000);
         dash.users();

         cy.wait(3000);
         dash.groups();

         cy.wait(3000)
         dash.pubAssessment();

         cy.wait(3000);
         dash.suborg();

         cy.wait(3000);
         dash.settings();

         cy.wait(3000);
         dash.home();

     })
 })

