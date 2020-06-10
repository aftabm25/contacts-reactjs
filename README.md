###  https://contacts-9ae48.firebaseapp.com or https://contacts-9ae48.web.app

Login Credentials :- Email- test@gmail.com   Password - test123


### About the application :
-> This application is a React web app that uses Redux to store state and firebase for authentication and database. I have used firebase since it is free, and comfortably bundles with React and Redux.

-> It is a simple contact storing web app that lets you add a new contact, delete an existing contact, and even edit an existing contact.

-> It has a search bar on the top where you can search for a specific contact. (It will search for substrings in the First name, Last Name, Email and Phone.)

-> The Navigation bar displays links based on whether you are logged in or not. The Create Contact link lets you create a new contact and the sign out link lets you sign out of the application.

-> The Main page displays all the contact information, with a search bar on top. The contacts are displayed in a card format which makes them easier to read. At any point in the application, if you want to go back to the Main Page, just click on the '.ContactList' on the Navigation Bar.

-> Every Contact card has the details pertaining to the contact and also buttons to delete and edit the contact.

-> The delete button will completely erase your contact from the firebase database.

-> The edit button takes you to an edit form where the existing information is already loaded in. You can just edit the information you like and press edit. The contact will update in real time.

-> We can add a SignUp component so that users can signUp for the app and can thus share contacts with each other.

-> The app is made with a dark theme so that it is comfortable to the eyes.

### Organization and Folder Structure -

This project is bootstrapped with Create-react-app. 
All of our major code is inside the src folder.

src/Actions : Contains the actions required in the project. 
              Actions/AuthActions.js : Contains actions related to authentication -> SignIn and SignOut
              Actions/ContactActions.js : Contains actions related to contacts -> CreateContact and DeleteContact
             
src/Components : Contains all the react components in the project.
                 Components/SignIn.js : The signIn page component.
                 Components/NavBar.js : The navigation bar component visible on the top.
                 Components/MainPage.js : The main page component where all the contacts are shown.
                 Components/CreateContact.js : The create contact page component.
                 Components/EditContact.js : The edit contact page component.
                 Components/ContactList.js : The list of contacts that are to be shown.
                 Components/ContactDetails.js : The individual contact with all the information.
                 
src/Config : Contains the firebaseconfig required to connect the project to firebase.

src/fonts : Contains the fonts required for the project.

src/Reducers : Contains the reducers required for the project.
               Reducers/AuthReducer.js : Deals with all actions related to authentication.
               Reducers/ContactReducer.js : Deals with all actions related to contacts (Adding and deleting)
               Reducers/RootReducer.js : The rootreducer interacts with the redux store. It nests both AuthReducer and ContactReducer            inside it.

App.js : The main component which gets rendered.

index.css : Contains all css styling for the project.

index.js : The main file that specifies which file to render and how to render it.


### How to run the application :

You can check out the application at : https://contacts-9ae48.firebaseapp.com or https://contacts-9ae48.web.app

To run the application locally :

1. Make sure you have npm installed.

2. Clone this repository on your local system and store it in a folder. cd into this folder from your terminal for the remaining steps.

3. Install react, redux, and react-redux from npm in the correct folder. (npm install react redux react-redux)

4. Install redux thunk (npm install redux-thunk)

5. Install firebase , react redux firebase, redux-firestore (npm install firebase react-redux-firebase redux-firestore)

6. To run the project write npm start in your terminal. (npm start)






















This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
