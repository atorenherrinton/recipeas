/** @format */

import React, { useEffect } from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseApp from "./firebase/firebase";
import { useDispatch } from "react-redux";
import { loadRecipes } from "./slices/recipe.slice";
import { setUserId } from "./slices/authenticate.slice";
import Header from "./components/header/header";
import Body from "./components/body/body";

const App = (props) => {
  const { user } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    // Update the document title using the browser API
    if (user) {
      dispatch(setUserId(user.uid));
      const itemsRef = firebaseApp
        .database()
        .ref("users")
        .child(user.uid)
        .child("items");
      itemsRef.on("value", (snapshot) => {
        let items = snapshot.val();
        let newState = [];

        for (let item in items) {
          newState.push({
            id: item,
            title: items[item].title,
            imageUrl: items[item].imageUrl,
            description: items[item].description,
            ingredients: items[item].ingredients,
            directions: items[item].directions,
          });
        }
        dispatch(loadRecipes(newState));
      });
    }
  });
  return (
    <div style={{ overflowX: "hidden" }}>
      <Header />
      <Body />
    </div>
  );
};

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
