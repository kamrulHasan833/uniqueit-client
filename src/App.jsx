import { Outlet } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./App.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
function App() {
  return (
    <div className=" font-inter">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default App;
