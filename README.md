# Angular, NgRx and Angular Material Starter 
by [@tomastrajan](https://twitter.com/tomastrajan)

[![license](https://img.shields.io/github/license/tomastrajan/angular-ngrx-material-starter.svg)](https://github.com/tomastrajan/angular-ngrx-material-starter/blob/master/LICENSE) [![All Contributors](https://img.shields.io/badge/all_contributors-32-orange.svg?style=flat-square)](#contributors) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier) [![Build Status](https://travis-ci.org/tomastrajan/angular-ngrx-material-starter.svg?branch=master)](https://travis-ci.org/tomastrajan/angular-ngrx-material-starter) 
[![Codecov](https://img.shields.io/codecov/c/github/tomastrajan/angular-ngrx-material-starter.svg)](https://codecov.io/gh/tomastrajan/angular-ngrx-material-starter)
 [![Twitter Follow](https://img.shields.io/twitter/follow/tomastrajan.svg?style=social&label=Follow)](https://twitter.com/tomastrajan)


![intro](https://raw.githubusercontent.com/tomastrajan/angular-ngrx-material-starter/master/meta-assets/intro.png)
![themes](https://raw.githubusercontent.com/tomastrajan/angular-ngrx-material-starter/master/meta-assets/themes.png)

## Table of Content

  * [Live Demo](https://tomastrajan.github.io/angular-ngrx-material-starter)
  * [Getting Started](#getting-started)
  * [Useful Commands](#useful-commands)
  * [Make It Your Own](#make-it-your-own)
  * [Goals](#goals)
  * [Learning Materials](#learning-materials)
  * [List of Projects Built Using This Starter](https://github.com/tomastrajan/angular-ngrx-material-starter/blob/master/BUILT_WITH.md)
  * [Features](#features)
  * [Stack](#stack)
  * [Code of Conduct](https://github.com/tomastrajan/angular-ngrx-material-starter/blob/master/CODE_OF_CONDUCT.md)
  * [Contributors Guide](https://github.com/tomastrajan/angular-ngrx-material-starter/blob/master/CONTRIBUTING.md)
  * [Changelog](https://github.com/tomastrajan/angular-ngrx-material-starter/blob/master/CHANGELOG.md) ( get notified about the newest releases, [follow Release Butler](https://twitter.com/releasebutler) on Twitter )


## Getting started
```bash
git clone https://github.com/tomastrajan/angular-ngrx-material-starter.git new-project
cd new-project
npm install
npm start
```

## Useful Commands
  * `npm start` - starts a dev server and opens browser with running app
  * `npm run test` - runs lint and tests
  * `npm run watch` - runs tests in watch mode
  * `npm run cy:open` - opens the Cypress Test Runner in interactive mode
  * `npm run cy:run` - runs Cypress tests via the cli
  * `npm run prod` - runs full prod build and serves prod bundle
  * `npm run prettier` - runs prettier to format whole code base (`.ts` and `.scss`) 
  * `npm run analyze` - runs full prod build and `webpack-bundle-analyzer` to visualize how much code is shipped (dependencies & application) 
  * `npm run compodoc` - runs [Compodoc](https://compodoc.app) to generate a static documentation of the application 

![analzye](https://raw.githubusercontent.com/tomastrajan/angular-ngrx-material-starter/master/meta-assets/analyze.png)
## Run Inside Docker Container
  * `docker build -t material-starter .` - builds docker image with name `material-starter`
  * `docker run -it \
   -v ${PWD}:/usr/src/app \
   -v /usr/src/app/node_modules \
   -p 4200:4200 \
   --rm \
   material-starter` - starts `material-starter` container (you can access running application browsing http://localhost:4200) 

### Serving a Docker image
When you are ready to serve your application the process has been made simple through the use of `Production.Dockerfile` and `Production.docker-compose.yml`.

From the root directory of the project simply run `docker-compose -f Production.docker-compose.yml build`. After this has run you can test your image locally by running `docker-compose -f Production.docker-compose.yml up`. Run `docker-compose -f Production.docker-compose.yml down` once you are done looking over the website so that docker cleans up all the resources related to it.

Npm scripts are also available to save having to write such a long command.

#### Npm Scripts

The following npm scripts correspond to the docker-compose commands.

| Npm Script       | Docker Compose       |
|------------------|----------------------|
| docker:prod      | docker-compose build |
| docker:prod-up   | docker-compose up    |
| docker:prod-down | docker-compose down  |

## Make It Your Own
When using this starter project to build your own app you might consider some of the following steps:
  
  * use `search and replace` functionality of your favourite IDE to replace `raj` with `<your-app-prefix>`
  * rename project in `package.json` `name` property and set appropriate version (eg `0.0.0` or `1.0.0`)
  * remove / rename context path config ` -- --deploy-url /angular-ngrx-material-starter/ --base-href /angular-ngrx-material-starter` in `package.json`, this is used to configure url (context path) on which the application will be available (eg. `https://www.something.com/<context-path>/`)
  * rename app in `src/environments/` files (will be shown in browser tab)
  * delete pre-existing `CHANGELOG.md` (you will generate your own with future releases of your features)
  * delete `CODE_OF_CONDUCT.md`, `CONTRIBUTING.md` and `BUILT_WITH.md` files as they are relevant only if project is open sourced on Github
  * edit the title and Open Graph metadata properties in `index.html`
  * remove or adjust links in the [footer](https://github.com/tomastrajan/angular-ngrx-material-starter/blob/master/src/app/app.component.html#L79)
  * replace logo in `src/assets` folder ( currently 128 x 128 pixel `png` file )
  * adjust colors in `src/themes/default-theme.scss`
  * create a pull request in the [original repository](https://github.com/tomastrajan/angular-ngrx-material-starter/) to update `BUILT_WITH.md` [file](https://github.com/tomastrajan/angular-ngrx-material-starter/blob/master/BUILT_WITH.md) with a link and short description of your project
  
#### Continuous Integration
Starter project is using [Travis CI](https://travis-ci.org/) for running linters and tests on every commit.
Based on your preferences and needs you can either:

  * not use / use other CI server and delete both `.travis.yml` and `.travis-deploy.sh`
  * create Travis CI account and link it to your projects Github repo and [configure build](https://medium.com/@tomastrajan/continuous-deployment-of-client-side-apps-with-github-pages-travis-ci-10e9d641a889) 
    with `GH_REF` and `GH_TOKEN` environment variables for automatic deployment of releases to Github Pages
  

## Goals
The main goal of this repository is to provide an up to date example of Angular application following all recent best practices in various areas like:
  * `@ngrx/store` - including reducers, actions, selectors
  * `@ngrx/effects` - for implementation of side effects like `http` requests, logging, notifications,...
  * `@ngrx/entity` - for CRUD operations
  * `@ngrx/router-store` - to connect the Angular Router to @ngrx/store
  * `@ngrx/store-devtools` - to enable a powerful time-travelling debugger.
  * `@angular/material` - material design component library, theming, ...
  * routing
  * testing of all the above mentioned concepts
  * Angular CLI configuration (prod build, budgets, ...)
  * end to end tests - a comparison between Protractor and Cypress

This repository will also strive to always stay in sync with releases of Angular and the related libraries.
The nature of the repository is also a great match for first time open source contributors who can add
simple features and enhance test coverage, all contributors are more than welcome!
  

## Learning Materials
Articles with content that explains various approaches used to build this starter project.

  * [Blog post about Best subscribing to RxJS Observable data by Components](https://medium.com/@tomastrajan/angular-question-rxjs-subscribe-vs-async-pipe-in-component-templates-c956c8c0c794): subscribe() vs | async pipe
  * [Blog post about Best Practices for Angular CLI](https://medium.com/@tomastrajan/6-best-practices-pro-tips-for-angular-cli-better-developer-experience-7b328bc9db81) used in this starter project
  * [Blog post about Typescript tips for Ngrx reducer code](https://medium.com/@tomastrajan/object-assign-vs-object-spread-in-angular-ngrx-reducers-3d62ecb4a4b0)
  * [Blog post about building responsive layouts with Bootstrap 4 in Angular apps](https://medium.com/@tomastrajan/how-to-build-responsive-layouts-with-bootstrap-4-and-angular-6-cfbb108d797b)
  * [Blog post about configuration of animations during runtime](https://medium.com/tomastrajan/total-guide-to-dynamic-angular-animations-that-can-be-toggled-at-runtime-be5bb6778a0a)
  * [Blog post about unit testing of components with NgRx TestStore](https://medium.com/@tomastrajan/how-to-unit-test-angular-components-with-fake-ngrx-teststore-f0500cc5fc26)
  * [Blog post about Angular CLI budgets](https://medium.com/@tomastrajan/how-did-angular-cli-budgets-save-my-day-and-how-they-can-save-yours-300d534aae7a)
  * [Blog post about the best way to unsubscribe RxJs streams](https://medium.com/@tomastrajan/the-best-way-to-unsubscribe-rxjs-observable-in-the-angular-applications-d8f9aa42f6a0)
  * [Blog post about Angular 6+ DI with providedIn](https://medium.com/@tomastrajan/total-guide-to-angular-6-dependency-injection-providedin-vs-providers-85b7a347b59f)

#### Theming 

  * [Blog post](https://medium.com/@tomastrajan/the-complete-guide-to-angular-material-themes-4d165a9d24d1)
  * [Presentation (Slides)](http://slides.com/tomastrajan/angular-material-themes-guide#/)
  * [Live coding Video Tutorial](https://www.youtube.com/watch?v=PsgZjFTAleI)
  * [Meetup Presentation & Live coding Video](https://www.youtube.com/watch?v=7auj9RfCNrE)

 
## Features

* custom themes support (4 themes included)
* lazy-loading of feature modules
* lazy reducers
* localStorage ui state persistence
* `@ngrx/effects` for API requests
* fully responsive design
* angular-material and custom components in `SharedModule`
* Cypress for end to end tests
* `Production.Dockerfile` for quick and easy serving of your app
 
## Stack

* Angular
* ngrx (or try [ngx-model](https://github.com/tomastrajan/ngx-model) if you prefer less boilerplate)
* Angular Material
* Bootstrap 4 (only reset, utils and grids)

## Troubleshooting

* **Blocking at emitting LicenseWebpackPlugin when npm start** - try using [cnpm](https://github.com/cnpm/cnpm) instead of npm

## Contributors
Want to start contributing to open source with Angular?

Leave your mark and join the growing team of contributors!

Get started by checking out list of open [issues](https://github.com/tomastrajan/angular-ngrx-material-starter/issues) and reading [Contributor Guide](https://github.com/tomastrajan/angular-ngrx-material-starter/blob/master/CONTRIBUTING.md)

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
