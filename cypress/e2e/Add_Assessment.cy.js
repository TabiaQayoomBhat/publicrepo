import Login from "../PageObjects/LoginPageObj"
import Assmnt from "../PageObjects/AddAssmntObj";
describe('pom', () => {
    it('Add Assessment', () =>{
      // cy.visit('https://testassessment.educian.com')
       
       const ln= new Login();
       cy.fixture("mcq.json").then((data)=>{
           ln.completeLogin(data.url,data.email,data.password)
           
        })
        const quiz =new Assmnt();
        cy.fixture("mcq.json").then((data)=>{
            quiz.Add(data.Assessment_Name)
        }) 
    })
    

    it.only('Preview Assessment', () =>{
        // cy.visit('https://testassessment.educian.com')
         
         const ln= new Login();
         cy.fixture("mcq.json").then((data)=>{
             ln.completeLogin(data.url,data.email,data.password)
             
          })
          const quiz =new Assmnt();
          cy.fixture("mcq.json").then((data)=>{
              quiz.Preview(data.Assmnt_Time,data.Assmnt_Marks,data.Adding_Question,data.Opt_1,data.Opt_2,data.Opt_3)
          }) 
      })
})
