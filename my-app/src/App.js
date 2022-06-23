import logo from "./logo.svg";
import "./App.css";
import SideBar from "./SideBar";
import Content from "./Content";

function App() {
  return (
    <section className="main-container">
      <SideBar />
      <Content />
    </section>
  );
}

export default App;
