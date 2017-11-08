# CCTC Digital Evidence Collection Dashboard Frontend
This is documentation for the CCTC Digital Evidence Collection (DECO) Dashboard, explaining the frontend development aspect ranging from setting up the development environment to developing the frontend interface for the forensic dashboard California Cyber Training Complex project. This is California’s first collaborative forensic data display that will allow investigators to track cases digitally.

# 1.0 Setup
1. Clone the repository and cd into it.
2. Install [npm](https://www.npmjs.com/package/npm) through [node](https://nodejs.org/en/).
3. [Install angular-cli](https://cli.angular.io/). `sudo npm install -g @angular/cli`.
4. Install required dependencies
       `sudo npm install` (in main repo folder).
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
* Visual Studio Code, it’s lightweight and the extensions makes development easier. This is the IDE we (summer interns 2017) used.
* Brackets, an open source text editor by Adobe specifically for web development, is another great option.

Because of the large amount of files creating an Angular project generates, we do not recommend working in a terminal text editor.

## 2.3 Material Design
The overall design of the website is loosely following Google’s Material design language. Material Design follows some very specific guidelines that we suggest following to keep the look of the website consistent. Read more about it [here](https://material.io/guidelines/material-design/introduction.html). It’s a good idea to not combine this with other front end frameworks like Bootstrap (Bootstrap is based off a separate design language, we do not want to mix two design languages).

## 2.4 Libraries and External Modules
* [MaterializeCSS](http://materializecss.com/)
* [ng2-materialize](https://sherweb.github.io/ng2-materialize/home)

# 3.0 High-Level View of the Code
This web app follows the [MVC architecture pattern](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller).

## 3.1 Model
* The class files in the `/app` folder
  * `case.ts`
  * `device.ts`
  * `digital-media.ts`
  * `file.ts`
  * `filemd.ts`
  * `image.ts`
  * `user.ts`

## 3.2 View
* The HTML file of each object (i.e. `cases/case`, `devices/device`)
  * i.e. `files.component.html`
  
## 3.3 Controller
* The Typescript file of each object
  * i.e. `files.component.ts`
* Services that we inject into the components
  * i.e. `server.service.ts`, `collapsible.service.ts`, `auth-guard.service.ts`
  
# 4.0 Flow of the Components Together
## 4.1 Login
1. The Login component is routed.
2. When the login is successful, the LoginService navigates the router to the Dashboard component.

## 4.2 Dashboard
1. The Dashboard contains 3 components: Toolbar, Collapsible, Cases
  * Toolbar: Contains the code for the sidenav bar, using ng2-materialize.
  * Collapsible: 4 Collapsibles for the objects above files (cases, devices, digital medias, and images). Each collapsible  * displays the metadata related objects.
  * Cases: Contains the setup to create a case in a modal.
  
## 4.3 Cases
1. When a case is selected, the router will route to cases in the same router-outlet.
   1. Since the breadcrumbs and collapsibles is set-up and programmed by a brute-force approach, the breadcrumb service will        display the Cases breadcrumb.
   2. All cases pertaining to the user is loaded.
   3. Right now, the object-mapping is brute-forced.
      1. We manually set each variable to the attribute from the JSON.
         * It would be nice to elegantly map each case to the list of cases, but at the time, we didn’t have the time to do. so.
   4. It’s important to note that the devices’ path is component-less and will load its child with a component, the devices component.
      1. This is done so that the front-end reflects what the back-end is built like where you can’t get to the files without getting through all its ancestors (cases, devices, etc).
      2. See the appRoutes constant in `/app/app-routing.module.ts`.
2. When a case is posted, you use the server-service to make a POST request to the back-end.
   1. A success returns a 200 and you would reloaded all the cases (that the back-end).
   2. An error would show a toast saying “ERROR: Case not added” for 4 seconds.
3. When a case is selected, the router routes to device and essentially appends the URL with /devices.

## 4.4 Devices, Digital Medias, Images, Files
1. Repeat the same for selecting devices, digital medias, images.
   * For files, when a file is selected, the url to the image is opened in a new tab.
*  A note when working with files, making GET requests for file and file meta-data require two separate urls. See the back-end documentation for more information.

# 5.0 Current Bugs
## 5.1 Style Bugs
* Centering the “Forensic Dashboard” title on login page doesn’t work on small window sizes (ng2 materialize has a setting that automatically centers the title when window width is less than 992 pixels).
  * Temporarily fixed by adding 7% padding to the left of the title.
* Two arrows appear next to the Dropdown menus in the “Add Case/Device/etc.” forms instead of just one.

## 5.2 Logic Bugs
* If you refresh after you login, it will take you back to the login page (Routing bug due to AuthGuard).
  * Previously, when you refresh, all IDs will be undefined disabling the use of breadcrumbs (bug that may resurface).
* Collapsibles cannot be programmatically open or closed due to limited functionality of ng2-materialize this may be better handled by refactoring the code to Materalize-CSS.
* Downloading files doesn’t work don’t know the details on this.

# 6.0 Features to Implement
## 6.1 User
* Users should be eventually be able to upload their profile picture so other investigators can recognize them.
* Users should be able to view their account information in the Account Information tab in the side navigation bar.
* Users should be able to edit account information and perform password changing functions in the settings tab.
* Tagging active cases so they show up at the top as an investigator’s priority.
* Sharing cases with different users. A host investigator looking to collaborate on a case with another investigator should be able to give permission to the other person they wish to investigate with based on their case. Cases should be able to be shared with multiple people and support edit/read/access control as well.

## 6.2 Backend Interaction
* Add enums to back-end for adding device (Device Status) and adding image (Write-Block Method, Imaging Tool, Format, Post-Collection). 
* Add dropdowns in “Add Image” forms for said enums.

## 6.3 Security
* Make website more secure; front end currently uses Materialize.css/ng2-materialize defaults as input validation list what backend uses here as well.
* Verification that people are associated with an agency/company/or are independent workers.

## 6.4 Testing
* Implement unit and UI testing.
  * There were problems where someone’s commit would break the build or produce errors.
    * Testing would have prevented those commits from happening.
    
## 6.5 Version Control
* Not a feature to implement but more of a note. Merging conflicts before pushing anything should be a must. If you don't deal with merge conflicts, you'd be pushing non-working, unresolved code that would break the build.
