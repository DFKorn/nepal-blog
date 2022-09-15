import "./App.css";
import Header from "./components/header/header";
import Main from "./components/main/main";

function App() {






  return (
    <>
      <header>
        <Header />
      </header>
      <div className="content-wrapper">
        <main>
          <Main />
        </main>
      </div>
      <OverlayMenu/>
    </>
  );
}

export default App;
