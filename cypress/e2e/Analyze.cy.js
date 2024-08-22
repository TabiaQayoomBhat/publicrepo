import analyz from "../PageObjects/AnalyzeObj";
import Login from "../PageObjects/LoginPageObj"

describe('pom', () => {
    it('Analyze Assessment', () =>{
     
       const ln= new Login();
       cy.fixture("mcq.json").then((data)=>{
           ln.completeLogin(data.url,data.email,data.password)
           
        })
        const analyzAssmnt= new analyz();
        cy.fixture("mcq.json").then((data)=>{
         
         analyzAssmnt.analyze_assmnt();

        })

    })
})