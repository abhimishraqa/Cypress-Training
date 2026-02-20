before(function(){
  cy.log("This is before hook")
})
after(function(){
  cy.log("This is after hook")
  })
beforeEach(function()  {
  cy.log("This is before each hook")
})
afterEach(function(){
  cy.log("This is after each hook") 
})
describe('1st test suite', () => {
  beforeEach(function(){
    cy.log("This is before each hook inside 1st test suite");
  });
  afterEach(function(){
    cy.log("This is after each hook inside 1st test suite");
  });
  it('Test Suite 1 - TC1', () => {
    cy.visit('https://www.saucedemo.com/')
  })
  it('Test Suite 1 - TC2', () => {
    cy.visit('https://www.yopmail.com/')
  })
})
describe('2nd Test Suite', () => {
  before(function(){
    cy.log("This is before hook inside 2nd test suite")
  });
  after(function(){
    cy.log("This is after hook inside 2nd test suite")
  });
  it('Test Suite 2 - TC3', () => {
    cy.log("This is Test Case 3")
  })
  it('Test Suite 2 - TC4', () => {
    cy.log("This is Test Case 4")
  })

}) 