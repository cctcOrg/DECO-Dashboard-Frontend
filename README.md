# CCTC Digital Evidence Collection Dashboard Frontend
This is documentation for the CCTC Digital Evidence Collection (DECO) Dashboard, explaining the frontend development aspect ranging from setting up the development environment to developing the frontend interface for the forensic dashboard California Cyber Training Complex project. This is California’s first collaborative forensic data display that will allow investigators to track cases digitally.

# 1.0 Setup
1. Clone the repository and cd into it.
2. Install [npm](https://www.npmjs.com/package/npm) through [node](https://nodejs.org/en/).
3. [Install angular-cli](https://cli.angular.io/). `sudo npm install -g @angular/cli`
4. Install required dependencies
       `sudo npm install` (in main repo folder)
5. Launch with `ng serve`. Server will run at localhost:4200 by default.

# 2.0 Enivronment and Technologies
## 2.1 Framework: Angular 4
There’s a steep learning curve but it’s important to learn the architecture and the features of Angular that make it a powerful JavaScript framework. This documentation will not go into the technical details of Angular 4 so we suggest to learning Angular 4 through tutorials:
   * This [tutorial](https://www.youtube.com/watch?v=htPYk6QxacQ&t=) was the most popular (But any works).
   * [Maximilian Schwarzmüller’s Udemy course](https://www.udemy.com/user/maximilian-schwarzmuller/) was very useful, especially his Routing, HTTP, and Observables modules.
   * [Angular’s Tour of Heroes](https://angular.io/tutorial) is good as well but not as extensive as Max’s.

It’s important to note that Angular 1 is AngularJS; It is NOT Angular 2/4. Angular 2/4 is referred to as just Angular. Treat AngularJS and Angular as two different frameworks.
Angular 4 is the updated version of Angular 2. Angular 3 does not exist because there were some modules in Angular 2 in the 3rd version so they made the jump to 4 so that all modules’ version number was consistent. The important thing to take away is when googling for Angular help, look for Angular 2/4 but not AngularJS because that would be irrelevant.

## 2.2 IDE
Recommended IDEs:
* Visual Studio Code, it’s lightweight and the extensions makes development easier.
* Brackets, an open source text editor by Adobe specifically for web development, is another great option.

Because of the large amount of files creating an Angular project generates, we do not recommend working in a terminal text editor.

# Design Libraries Used
* [MaterializeCSS](http://materializecss.com/)
* [ng2-materialize](https://sherweb.github.io/ng2-materialize/button/)



