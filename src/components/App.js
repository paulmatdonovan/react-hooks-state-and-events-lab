import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [appDark, setApp] = useState(appDark)

  function handleMode() {
    const appClass = appDark ? "App dark" : "App light"
    setApp((appDark) => !appDark)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleMode}>{appDark ? "Dark Mode" : "Light Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
