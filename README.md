# Movies

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.1.

## Overview

This project is designed with performance, accessibility, and user experience in mind. It leverages modern frontend and backend technologies to deliver a robust and scalable application.


## Account To Test
    - email : test@gmail.com
    - password: Test1!11


## Features

1. **Module Structure and Lazy Loading**
    - Used modular structure to organize the codebase.
    - Implemented lazy loading to enhance performance by loading components only when needed.

2. **Accessibility (a11y)**
    - Ensured the application is accessible for all users, focusing on ease of use.

3. **Backend Server**
    - Created a backend server using Node.js and Express to handle auth and challenges to create account and login .

4. **Guard for Favorite List**
    - Implemented a guard to restrict access to the favorite list.
    - Users must be logged in to access the favorite list.

5. **Not Found Page**
    - Created a custom 404 Not Found page to handle invalid routes.

6. **Hosting**
    - Hosted the application on Vercel for easy deployment and scalability.

7. **User Authentication**
    - Provided a pre-registered account for direct login.

8. **Local Storage**
    - Implemented local storage for saving favorites and comments.

## Usage

1. Navigate to the application in your browser.
2. Use the pre-registered account to log in directly.
3. Explore the features like adding items to the favorite list, adding comments, etc.
4. If you encounter a not found page, it indicates an invalid route.


## Hosting

The application is hosted on Vercel. You can access it [here](https://task-et.vercel.app/).

## Contributing

If you wish to contribute to this project, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.


## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.
