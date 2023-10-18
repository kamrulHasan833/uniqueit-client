import { useLocation } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import HeroSlider from "../sections/HeroSlider";
import Navbar from "../sections/Navbar";
function Header() {
  const { user } = useAuth();
  console.log(user);
  const { pathname } = useLocation();
  return (
    <header>
      <Navbar></Navbar>
      {pathname === "/" && <HeroSlider></HeroSlider>}
    </header>
  );
}

export default Header;
