/** @format */

import Header from "./components/header/header.component";
import Body from "./components/body/body.component";
import { useEffect } from "react";
import firebase from "./firebase/firebase";
import { loadRecipes } from "./slices/form.slice";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch(loadRecipes);
  useEffect(() => {
    // Update the document title using the browser API
    const itemsRef = firebase.database().ref("items");
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
  });
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

export default App;
