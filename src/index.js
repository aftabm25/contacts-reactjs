import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import  RootReducer from './Reducers/RootReducer';
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import {useSelector} from 'react-redux'
import {isLoaded} from 'react-redux-firebase'
import {
  reduxFirestore,
  getFirestore,
  createFirestoreInstance
} from "redux-firestore";
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import firebaseConfig from "./config/firebaseConfig";
import firebase from "firebase/app";


const store = createStore(
  RootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
    reduxFirestore(firebaseConfig)
  )
);

const profileSpecificProps = {
  userProfile:'users',
  useFirestoreForProfile: true,
  enableRedirectHandling: false,
  resetBeforeLogin: false
  }
const rrfProps = {
  firebase,
  config: firebaseConfig,
  dispatch: store.dispatch,
  confgi : profileSpecificProps,
  createFirestoreInstance
};
function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div className="center"></div>;
   return children
}

ReactDOM.render(
  <Provider store={store}>
  <ReactReduxFirebaseProvider {...rrfProps}>
    <AuthIsLoaded>
        <App />
    </AuthIsLoaded>
  </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
  );
  serviceWorker.unregister();