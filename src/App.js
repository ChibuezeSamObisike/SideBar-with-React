import React, { useState } from "react";
import "./App.css";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";

function App() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen((prevState) => {
      return !prevState;
    });
  };

  let sideDrawer;
  let backdrop;

  if (sideDrawerOpen) {
    backdrop = <Backdrop click={drawerToggleClickHandler} />;
  }
  if (!sideDrawerOpen) {
    backdrop = null;
  }

  return (
    <div style={{ height: "100%" }}>
      <Toolbar drawerClick={drawerToggleClickHandler} />
      <SideDrawer show={sideDrawerOpen} />
      {backdrop}
      <main style={{ marginTop: "60px" }}>
        <p>This is the page Content</p>
      </main>
    </div>
  );
}

export default App;
