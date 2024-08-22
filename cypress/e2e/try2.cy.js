describe('Login with JumpCloud and Cognito', () => {
    it('should login successfully', () => {
      // Send a POST request to the login endpoint
      cy.visit('https://www.cxair-develop.demandscience-apps.com/login')
      cy.get("html > body > main > div > div > div > div:nth-of-type(3) > a > button").click();
      cy.url('https://console.jumpcloud.com/login?context=sso&redirectTo=saml2%2Fcxairdev');
      cy.wait(7000)
      cy.origin('https://console.jumpcloud.com', () => {

      cy.wait(7000)
      cy.get('html > body > div > div > div > div > div > form > fieldset > div > input').click()
      cy.get('html > body > div > div > div > div > div > form > fieldset > div > input').type('tabia.qayoom@demandscience.com');
      cy.get('html > body > div > div > div > div > div > form > button').click()
      cy.wait(7000)
      cy.get('html > body > div > div > div > div > div:nth-of-type(2) > form > fieldset > div > input').click();
      cy.get('html > body > div > div > div > div > div:nth-of-type(2) > form > fieldset > div > input').type('Tab@616805');
      cy.wait(7000)
      cy.get('html > body > div > div > div > div > div:nth-of-type(2) > form > button').click();
      cy.wait(7000)
      //cy.get('html > body > div > div > div > div > div:nth-of-type(2) > div > form > fieldset').click();

      cy.request({
        method: 'POST',
        url: 'https://web-api.cxair-develop.demandscience-apps.com/api/auth/access-token?code=18e85333-c59f-468c-920b-24bea35b174e',
        body: {
          username: 'tabia.qayoom@demandscience.com',
          password: 'Tab@616805',
        },
      }).then((response) => {
        // Assert that the response status is successful
        expect(response.status).to.eq(200);
  
        // Extract the authentication token from the response
        const authToken = response.body.token;
  
        // Store the authentication token for later use
        Cypress.env('authToken', authToken);
      });
  
      // Visit a protected resource using the authentication token
    //   cy.request({
    //     method: 'GET',
    //     url: 'http://70.98.204.225/swagger/index.html#/',
    //     headers: {
    //       Authorization: `Bearer ${Cypress.env('authToken')}`,
    //     },
    //   }).then((response) => {
    //     // Assert that the response status is successful
    //     expect(response.status).to.eq(200);
    //   });
    });
  });
});