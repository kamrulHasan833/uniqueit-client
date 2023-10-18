import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";

function App() {
  return (
    <div className=" font-inter">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
