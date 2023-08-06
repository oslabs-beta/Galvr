// describe('My First Test', () => {
//   it('Visits the Kitchen Sink', () => {
//     cy.visit('https://example.cypress.io')

//     cy.contains('type').click()

//     cy.url().should('include', '/commands/actions')

//     cy.get('.action-email').type('fake@email.com')

//     cy.get('.action-email').should('have.value', 'fake@email.com')
//   })
// })


import {addCommands} from "cypress-mongodb";

addCommands();

describe('Check data ', () => {
  it('connects', () => {
    cy.visit('https://example.cypress.io')
  })
})


describe('MongoDB test ', () => {
  it('create_collection', () => {
    cy.createCollection('testCollection', { database: 'test', failSilently: 'true' }).then(result => {
      cy.log('collection created!')
      cy.log(result); // Will return 'Collection created' or the error object if collection already exists. Will not fail the test 
    });
  })
})

// TODO: Seed our data into database
// Before running the tests, we need to seed our data into the database.
// This ensures that the tests will always be run against the same data.
// This lets us emulate real-world scenarios and verify that the system behaves 
// as expected.