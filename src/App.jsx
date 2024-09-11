import Footer from "./components/Footer";
import Main from "./components/Main";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="md:grid grid-cols-5">
      <Nav className="md:col-span-1" />
      <Main />
    </div>
  );
}

export default App;
