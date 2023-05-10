# HeartbreakerzWeb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.9.
Official Website for DJ Heartbreakerz [Instagram](https://www.instagram.com/dj_heartbreakerz.official/)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.




## Docker

Run application on docker: 

First build Project:

`ng build`

Build Docker-Image:

`docker build -t heatbreakerzweb .`

Check if Image build successfully: 

`docker image ls`

Run the docker-Image: 

`docker run --name heatbreakerzweb-container -d -p 80:80 heatbreakerzweb`

Check if Container runs: 

`docker container ls`

Now the Angular application is available at localhost:80 



