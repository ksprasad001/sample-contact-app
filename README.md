# sample-contact-app - developed on AngularJS platform
This is a minimalistic UI application using AngularJs and IBM's StrongLoop for Node.js based server implmentation. It demostrates framework capabilities and MVC design pattern implementation.

Application configured to install the Angular framework, StrongLoop, and a bunch of development and testing tools for running the application using Node.js and Bower capabilities.

Sample application got few screens and with navigation.

## Getting Started
Clone the sample-contact-appp from repository and install the dependencies:

### Install Dependencies
Application uses two kinds of dependencies: 
a. tools 
b. angular and libraries. 
b. Strong loop and MySQL db. 

`npm` is preconfigured (package.json) to automatically run bower so you can install all required library dependencies (bower.json) with following command from root folder: 
```
npm install
```

Install all application libraries using Bower:
```
bower install
```

Install all server dependencies:
```
cd Backend
npm install
```

### Run the Application
Preconfigured a simple dev web server, start application using Grunt:
```
grunt serve
```
Now browse to the app at `http://localhost:9000`.
