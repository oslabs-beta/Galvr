describe('Checks drop-down menu', () => {

  beforeEach (() =>{
    cy.visit('http://localhost:3000/')
    cy.contains('Metrics').click()
    cy.get('button').contains('Select microservice').click()
  })

    it('visits loadgenerator', () => {
      cy.get('input').type('loadgenerator').type('{enter}')
    })

    it('visits featureflagservice', () => {
      cy.get('input').type('featureflagservice').type('{enter}')
    })

    it('visits frontend', () => {
      cy.get('input').type('frontend').type('{enter}')
    })

    it('visits adservice', () => {
      cy.get('input').type('adservice').type('{enter}')
    })

    it('visits recommendationservice', () => {
      cy.get('input').type('visits recommendationservice').type('{enter}')
    })

    it('visits currencyservice', () => {
      cy.get('input').type('currencyservice').type('{enter}')
    })

    it('visits paymentservice', () => {
      cy.get('input').type('paymentservice').type('{enter}')
    })

    it('visits emailservice', () => {
      cy.get('input').type('emailservice').type('{enter}')
    })

    it('visits accountingservice', () => {
      cy.get('input').type('accountingservice').type('{enter}')
    })

    it('visits frauddetectionservice', () => {
      cy.get('input').type('frauddetectionservice').type('{enter}')
    })

    it('visits productcatalogservice', () => {
      cy.get('input').type('productcatalogservice').type('{enter}')
    })

    it('visits cartservice', () => {
      cy.get('input').type('featureflagservice').type('{enter}')
    })

    it('visits shippingservice', () => {
      cy.get('input').type('shippingservice').type('{enter}')
    })

    it('visits checkoutservice', () => {
      cy.get('input').type('checkoutservice').type('{enter}')
    })

    it('visits quoteservice', () => {
      cy.get('input').type('quoteservice').type('{enter}')
    })

    it('visits kafka', () => {
      cy.get('input').type('kafka').type('{enter}')
    })

  })