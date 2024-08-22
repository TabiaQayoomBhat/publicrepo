import SignUp from "../PageObjects/SignupObj";
describe('pom', () => {
    it('SignUp', () =>{
     
     cy.visit('https://testassessment.educian.com')
       const sgnup= new SignUp()
       cy.fixture("mcq.json").then((data)=>{
           sgnup.org_detail(data.S_Organization_Name,data.S_Organization_Email,data.S_Password)
           //sgnup.new_sub(data.S_Parent,data.S_Organization_Name,data.S_Organization_Email,data.S_Password)
        
        })
        
    })

    it.only('SignUp as sub Org', () =>{
     
        cy.visit('https://testassessment.educian.com')
          const sgnup= new SignUp()
          cy.fixture("mcq.json").then((data)=>{
              //sgnup.org_detail(data.S_Organization_Name,data.S_Organization_Email,data.S_Password)
              sgnup.new_sub(data.S_Parent,data.S_Organization_Name,data.S_Organization_Email,data.S_Password)
              
           })
           
       })
})