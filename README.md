# Example FinTs Client Application for Sap Cloud Foundry NodeJs with ES6 and SAPUI5 with ES6

[App Example](https://cf-banking-fints-example.cfapps.eu10.hana.ondemand.com)

## FinTs Application Features

- List bank accounts
- view all transactions from your bank accounts with date range
- show in chart all transactions from your bank accounts with date range
- show a list from all available banks from the service


## FinTs Application Middleware Features

- Authentication with your bank account data
- GET a JSON List from all available banks from the service
- GET/POST all bank accounts, Post is with Auth. data
- GET all transactions from your bank accounts with date range
- GET all transactions and Accounts withe demo data (HEADER Parameter 'demo-mode'='true')

## Getting Started with Cloud Foundry on SAP Cloud Platform

In this Example, you will view more about Cloud Foundry. In particular, you will get familiar with:
 - the official CF CLI (cf-*.sh files)
 - Login on Sap Cloud Foundry (cf-login.sh)
 - Push App to Sap Cloud Foundry (cf-push.sh)
 - create a ui5 app with es6
 - create your own online banking (finTs Api) app with Sapui5 and nodeJs 

## Installation
```sh
$ yarn install
```

## Build with Gulp (Recommended)
```sh
yarn build:app
yarn build:server
```
`gulp clean` and `gulp build` are supported, and module-based building command `gulp build:example` is also supported


## Run
```sh
yarn start:server
```
Open [http://localhost:4000/](http://localhost:4000/) in your browser.

## Debug / Develop
```sh
yarn watch:app
yarn watch:app:Login
yarn watch:server
yarn start:server
```


### Step 1 For Push Sap Cloud Foundry

setup [Config File](/cf.conf) for Sap Cloud Foundry Deployment

* USER = SAP User 
* PASS = SAp USer Password
* ORG = Sap cloud Foundry Subaccount Organization
* API = Sap cloud Foundry Subaccount API Endpoint
* SPACE = Sap cloud Foundry Subaccount selected Space


### Step 2 For Push Sap Cloud Foundry

Deploy Application to Sap Cloud Foundry

```bash
bash cf-push.sh
```