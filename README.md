# Cypress Training 🚀

## 📌 About This Repository

This repository is created to practice and learn **Cypress**, a modern end-to-end testing framework for web applications.  
It contains sample configurations, test cases, and experiments as I explore Cypress features.

## 🎯 Goals

- Understand Cypress basics
- Write simple end-to-end tests
- Explore advanced features like fixtures, intercepts, and custom commands
- Build confidence in automated testing workflows

## 🛠️ Setup Instructions
1. Clone the repository:
   
```
   git clone https://github.com/abhimishraqa/Cypress-Training.git
   ```
2. Install dependencies:
   
```
   npm install
   ```
3. Run Cypress:
   
```
   npx cypress open
   ```
## 📂 Project Structure:  

    -cypress.config.js → Cypress configuration file
    -package.json → Project dependencies  
    -cypress/e2e/ → Test files will be added here

## ✅ Example Test:  

```
describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
    cy.url().should('include', '/commands/actions')
  })
})
```
## 📖 Learning Notes:

   This repo will track my progress as I learn Cypress step by step.
   
### Future commits will include:

      Sample tests
      Best practices
      Notes and experiments
## 📚 Resource  
- [Cypress Documentation](https://docs.cypress.io)
- [GitHub Guides](https://guides.github.com)
  
👤 Author: Abhinandan Kumar Mishra  
📅 Started: September 2026 (Learning phase)
