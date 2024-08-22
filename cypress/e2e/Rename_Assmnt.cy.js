import Login from "../PageObjects/LoginPageObj"
import Rename from"../PageObjects/RenameAssmntObj"

describe('pom', () => {
    it('Rename Assessment', () =>{
     
       const ln= new Login();
       cy.fixture("mcq.json").then((data)=>{
           ln.completeLogin(data.url,data.email,data.password)
           
        })
        const rename= new Rename()
        cy.fixture("mcq.json").then((data)=>{
         
         rename.Rename_Assmnt(data.Renamed_Assessment);

        })

    })
})