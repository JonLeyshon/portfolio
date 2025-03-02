import Main from "./components/MainContent";
import Nav from "./components/navigation/Nav";
import Theme from "./components/navigation/Theme";

function App() {
  return (
    <div className="md:grid grid-cols-5">
      <Nav className="md:col-span-1" />
      <Main />
      {/* <Theme /> */}
    </div>
  );
}

export default App;
