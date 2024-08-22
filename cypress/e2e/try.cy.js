import { authenticator } from 'otplib';

describe('Login with TOTP 2FA', () => {
  it('should login with TOTP 2FA', () => {
    // Visit the login page
    cy.visit('https://console.jumpcloud.com/login?context=sso&redirectTo=saml2%2Fcxairdev')

    // Enter username and password
    cy.get("html > body > main > div > div > div > div:nth-of-type(3) > a > button").click();
  
    // Handle the SSO redirect and fill in the login form
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

    // Submit the login form
    cy.get('html > body > div > div > div > div > div:nth-of-type(2) > form > button').click();
      cy.wait(7000)

    // Wait for TOTP input field to appear
    cy.get('html > body > div > div > div > div > div:nth-of-type(2) > div > form > fieldset').should('be.visible')

    // Generate TOTP code using otplib library
    const secretKey = 'Test@123'; // Replace with your actual secret key
    const totpCode = authenticator.generate(secretKey);

    // Enter the generated TOTP code
    cy.get('html > body > div > div > div > div > div:nth-of-type(2) > div > form > fieldset').type(totpCode)

    // Submit the TOTP form
    cy.get('button[type="submit"]').click()

    // Assert that login was successful
    cy.url().should('eq', 'https://your-website.com/dashboard')
  })
})
})