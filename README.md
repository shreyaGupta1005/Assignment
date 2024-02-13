# Running the tests - Headed

Open the Cypress Test Runner using the following command.

`npx cypress open`

## Running the tests - Headless

You can run cypress tests in headless mode using the following command.

`npx cypress run`

## Run your Cypress specs on a enterprise prod environment with the below command:

`npx cypress run --config-file cypress.config.js`

## To Run single test in Cypress on a enterprise prod environment with any one single test case

`npx cypress run --config-file cypress.config.ts --spec cypress\e2e\test.js`

### Resources

- https://docs.cypress.io/guides/
- https://basarat.gitbook.io/typescript/intro-1/cypress