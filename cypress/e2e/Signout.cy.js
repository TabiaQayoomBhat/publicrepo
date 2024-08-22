import Login from "../PageObjects/LoginPageObj"
import logout from "../PageObjects/SignoutObj";

describe('pom', () => {
    it('Home Search', () =>{
     
       const ln= new Login();
       cy.fixture("mcq.json").then((data)=>{
           ln.completeLogin(data.url,data.email,data.password)
           
        })
        const log= new logout();
        cy.fixture("mcq.json").then((data)=>{
         
         log.logout();
        })

    })
})