/** @format */

import React from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseApp from "../../firebase/firebase";
import { useDispatch } from "react-redux";
import { deauthenticate } from "../../slices/authenticate.slice";
import { Button } from "react-bootstrap";

const SignoutButton = (props) => {
  const dispatch = useDispatch();
  const { signOut } = props;
  return (
    <Button
      onClick={() => {
        signOut();
        dispatch(deauthenticate());
      }}
      variant="outline-secondary"
    >
      Sign Out
    </Button>
  );
};

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(SignoutButton);
