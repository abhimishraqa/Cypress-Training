describe('Swag Labs', () => {
  it('Open the website', () => {
    cy.visit('https://www.saucedemo.com/');
      
      //Login to the website
    
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    
    
      // Get the page title, Print and compare it.
    cy.title().then((title) => {
      cy.log('Current page title = ' + title);
      expect(title).to.eq('Swag Labs');
    });
      

      // Add 3 products to the cart by changing the filter and verify the cart count.
    cy.get('#add-to-cart-sauce-labs-backpack').click();
    cy.get('.product_sort_container') .select('hilo');
    cy.get('#add-to-cart-sauce-labs-onesie').click();
    cy.get('.product_sort_container') .select('lohi');
    cy.get('#add-to-cart-sauce-labs-fleece-jacket').click();

      //Check the cart badge; print in console. 
    cy.get('[data-test="shopping-cart-badge"]') .then((badge) => {
      // If we need to use the badge count just as a string, we can use:-
      cy.log('No of products in the cart = ' + badge.text());

      /*if have to use the badge count as a number, we can use:-
      const count = parseInt(badge.text());
      cy.log('No of products in the cart as number = ' + count);*/
    })
      
      // Remove 2 products from the cart.
    
      //Check the cart badge; print in console.
      
      //Open a product detail page.
      
      //Verify the title of the page; Print in console.
      
      //Add the product from the detail page to the cart
      
      //Check the cart badge; print in console.
      
      //Go to cart page
    
      //Verify the title of the page; Print in console.
      
      // Go to checkout
    
      // Fill the details
      
      // Get the information and print in the console.
      
      // Go to success page
      
      // Get the success message; print in console. 
    
  });
});