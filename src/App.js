import { useState } from "react";
import "./App.css";
import Header from "./components/header/header";
import Main from "./components/main/main";
import OverlayMenu  from "./components/overlay-menu/overlay-menu";

function App() {

  const [overlay, setOverlay] = useState(false)

  const toggleOverlay = () => {
    setOverlay((prevState) => !prevState)
  }




  return (
    <>
      <header>
        <Header toggleOverlay = {toggleOverlay} overlay = {overlay}/>
      </header>
      <div className="content-body">
        <div className="content-wrapper">
          <Main />
        </div>
      </div>
      {overlay ? <OverlayMenu/> : null}
    </>
  );
}

export default App;
