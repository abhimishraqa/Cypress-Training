describe('Swag Labs', () => {
  it('Swag Labs Happy Flow', () => {

      // Visit the website

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

      //Check the cart badge; print in console and apply chai assertion with expected value.

    cy.get('[data-test="shopping-cart-badge"]') .then((badge) => {
      // If we need to use the badge count just as a string, we can use:-
      cy.log('No of products in the cart = ' + badge.text());

      /*if have to use the badge count as a number, we can use:-
      const count = parseInt(badge.text());
      cy.log('No of products in the cart as number = ' + count);*/

      expect(badge.text()).to.eq('3');
    })
      
      // Remove 2 products from the cart.

    cy.get('#remove-sauce-labs-backpack').click();
    cy.get('#remove-sauce-labs-onesie').click();

      //Check the cart badge; print in console and apply chai assertion with expected value.
      
    cy.get('[data-test="shopping-cart-badge"]') .then((badge) => {
      /* If we need to use the badge count just as a string, we can use:-
      cy.log('No of products in the cart = ' + badge.text());*/

      //if have to use the badge count as a number, we can use:-
      const count = parseInt(badge.text());
      cy.log('No of products in the cart as number = ' + count);

      expect(badge.text()).to.eq('1');
    })

      //Open a product detail page.

    cy.contains('.inventory_item_label', 'Sauce Labs Bike Light')
      .find('.inventory_item_name').click();
      
      //Verify the title of the page; Print in console.
      
    cy.title().then((title) => {
      cy.log('Current page title = ' + title);
      expect(title).to.eq('Swag Labs');
    })

      //Add the product from the detail page to the cart
      
    cy.contains('button', 'Add to cart').click();

      //Check the cart badge; print in console.

    cy.get('[data-test="shopping-cart-badge"]') .then((badge) => {
      const count = parseInt(badge.text())
      cy.log('No of products in the cart = ' + badge.text());
      })
      
      //Go to product list page and then cart page
    
    cy.get('#back-to-products').click();
    cy.get('[data-test="shopping-cart-link"]').click();

      //Verify the title of the page; Print in console.

    cy.get('.cart_item') .each((product) => {
      cy.log(product.text()); 
    });
      // Go to checkout
    
      // Fill the details
      
      // Get the information and print in the console.
      
      // Go to success page
      
      // Get the success message; print in console. 
    
  });
});