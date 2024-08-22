import Login from "../PageObjects/LoginPageObj"
import home from "../PageObjects/HomeSearchObj";

describe('pom', () => {
    it('Home Search', () =>{
     
       const ln= new Login();
       cy.fixture("mcq.json").then((data)=>{
           ln.completeLogin(data.url,data.email,data.password)
           
        })
        const hom= new home();
        cy.fixture("mcq.json").then((data)=>{
         
         hom.HomeSearch(data.Dashboard_Search);

        })

    })
})