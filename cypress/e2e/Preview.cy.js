import Login from "../PageObjects/LoginPageObj"
import preview from "../PageObjects/Preview_AssmntObj";

describe('pom', () => {
    it('Preview Assessment', () =>{
     
       const ln= new Login();
       cy.fixture("mcq.json").then((data)=>{
           ln.completeLogin(data.url,data.email,data.password)
           
        })
        const prev= new preview();
        cy.fixture("mcq.json").then((data)=>{
         
         prev.prvw();

         prev.stop_prvw();

        })

    })
})