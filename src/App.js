import "./App.css";
import Basket from "./components/Basket";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <>
      <Header />
      <div className="px-[15%]">
        <div>
          <Main />
          {/* <Basket /> */}
        </div>
      </div>
    </>
  );
}

export default App;
