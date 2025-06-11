describe('The home page', () => {
  it('successfully loads', () => {
    cy.visit('/');
  });
});

// describe('Contact form functionality', () => {
//   it('navigates to the correct FormSubmit URL after submission', () => {
//     cy.visit('/');

//     cy.get('#contact-button').click();
//     cy.get('#name').type('John Doe');
//     cy.get('#email').type('tetst@example.com');
//     cy.get('#message').type('This is a test message.');

//     cy.get('form.contact__form').submit();

//     cy.origin('https://formsubmit.co', () => {
//       cy.location('href').should('include', 'formsubmit.co/radapls8@gmail.com');
//     });
//   });
// });
