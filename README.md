# Games Shop Project

This repository contains my solution to the technical test for the Junior Front end Developer position. The objective is to demonstrate my skills with front end tools.

## Description

Games Shop is an ecommerce web page created with React that displays products that can be added or removed from a cart, you can log in and registrate with a selected email.

## How to use

1. Open your terminal.
2. git clone https://github.com/Camiloop/GamesShop-Project
3. cd GamesShop-Project.
4. npm i (To install the necessary modules).
5. npm run dev.
6. Open the local host port in your browser of preference.

## Key Features

### Feature 1:

The app displays a list of videogames in a grid, you can sort items by names or price asc or desc when clicking on the Sort buttons, the products also have a button to add it to a Shopping Cart.

##**You can also DRAG AND DROP the products to the opened cart to add them!!!**

![image](https://github.com/Camiloop/GamesShop-Project/assets/109489683/2600b419-a8ba-423b-a6b3-054b189800b5)

### Feature 2: 

This project includes a Shopping cart where you can see the products you have added, the quantity of them and the total price to pay, to open the cart click on the top right button that says cart, you can add items by clicking on add to cart button or by drag and dropping the items.

![image](https://github.com/Camiloop/GamesShop-Project/assets/109489683/d6040871-daee-4fb6-8743-cb465d690342)

### Feature 3: 

Login and registration feature, this was implemented using the https://reqres.in/ API, to properly log in you need to click on the Sign In button on the top of the page, you will see a form to log in and registration button.

![image](https://github.com/Camiloop/GamesShop-Project/assets/109489683/88c7b4a2-2a51-4898-a4d1-a6b4118cc571)

**To Log in or Register you need to use a verified Email from the API you can use one of the following emails**

rachel.howell@reqres.in, <br>
george.edwards@reqres.in, <br>
byron.fields@reqres.in, <br>
tobias.funke@reqres.in, <br>
lindsay.ferguson@reqres.in, <br>
michael.lawson@reqres.in, <br>
tracey.ramos@reqres.in, <br>
charles.morris@reqres.in, <br>
eve.holt@reqres.in, <br>
emma.wong@reqres.in, <br>
janet.weaver@reqres.in, <br>
george.bluth@reqres.in,

## Technologies Used

Vite to set up a development environment in React. <br>
HTML and CSS. <br>
TypeScript. <br>
React. <br> 
Redux Toolkit to manage a Global state. <br>
React-Router-Dom for Routing. <br> 
Styled Components to give styles to the page. <br>
https://reqres.in/ API used for users, Login and registration feature.

## Files

The app is organized on the following folders:

**Assets:** Contains the images and the data for the products in a Typescript object.

**Components:** This folder include all the components used on the application aswell as a css file to manage their style, it is organized by navbar, cart, the products on the cart, and the product cards.

**Pages:** This folder contains the pages used with react-router-dom, it includes the Home page, Login page and the Register form.

**Redux:** This folder contains all the logic for the reduxjs toolkit and helps managing a global state, it includes 4 different slices that handle the cart logic, the registration form, the login form and the sort logic for the items. Also cntains the hooks required by redux and the stiore.

## Features to add

1: Favorite page. <br>
2: Testing and handling error messages. <br>
3: Improve UI. <br>
4: Responsive design for mobile and tablets. <br>
5: Store token information to maintain session open.
