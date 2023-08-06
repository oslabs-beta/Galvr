import React from 'react'
import Home from '../../app/page.tsx'
import Image from 'next/image';
import Nav from '../../components/Nav';

describe('Nav.cy.tsx', () => {
  it('mounts', () => {
    //   cy.fixture('/../../public/Galvr.png', null).then((logo) => {
    //     // logo will be read as a buffer
    //     // and should look something like this:
    //     // Buffer([0, 0, ...])
    //     // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    //     expect(Cypress.Buffer.isBuffer(logo)).to.be.true
    // })

    // cy.get('input[type="file"]').selectFile('/../../public/Galvr.png');
    cy.readFile('public/Galvr.png', null).then((img) => {
      // Intercept requests to Next.js backend image endpoint
      cy.intercept('_next/image*', {
        statusCode: 200,
        headers: { 'Content-Type': 'image/png' },
        body: img.buffer,
      });
      cy.mount(<Nav />);
      expect(Cypress.Buffer.isBuffer(img)).to.be.true;
      //cy.mount(<Home/>)
    });
  });
});

//start backend server
//start fake database and connect
//store fake data in fake database
//need to add on client side 
//if else statement if node enviornment is dev, then request is routed to local host 3000, if node is production