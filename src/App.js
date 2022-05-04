import Footer from "./components/Footer";
import LeftSideBar from "./components/LeftSideBar";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import CategoryState from "./context/CategoryState";

function App() {
  return (
    <>
      <CategoryState>
        <div className="container-fluid">
          <div className="App">
            <Navbar />
          </div>
          <div className="Main row">
            <LeftSideBar />
            <Main />
          </div>
          <Footer />
        </div>
      </CategoryState>
    </>
  );
}

export default App;
