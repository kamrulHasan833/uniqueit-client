import { BiLogOutCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import useIsUser from "../../hooks/useIsUser";
import { useAuth } from "../contexts/authContext";
import SectionWrapper from "../layout/SectionWrapper";
import NavItem from "../shared/NavItem";

function Navbar() {
  const { logout, user } = useAuth();
  const { displayName, photoURL } = user;

  const currentUser = useIsUser();
  const items = (
    <>
      <NavItem path="/">Home</NavItem>
      <NavItem path="/about">About</NavItem>
      <NavItem path="/blogs">Blog</NavItem>
    </>
  );

  return (
    <div className="shadow-xl bg-white " data-aos="fade-down">
      <SectionWrapper>
        <div className="navbar bg-base-100   py-5 md:py-7 px-0">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-md w-80 gap-1"
              >
                {items}
              </ul>
            </div>
            <Link
              to="/"
              className="btn btn-ghost normal-case text-xl p-0 hover:bg-transparent"
            >
              <img
                src="https://i.ibb.co/WfRcMh1/log.png"
                alt="Logo"
                className="w-24 lg:w-28"
              />
            </Link>
          </div>
          <div className="navbar-center hidden md:flex">
            <ul id="nav-menu" className="menu menu-horizontal px-1 gap-2">
              {items}
            </ul>
          </div>
          <div className="navbar-end">
            {currentUser && (
              <div className="flex flex-col   items-center gap-1">
                <div className="w-10  rounded-full border ">
                  <img
                    src={
                      photoURL
                        ? photoURL
                        : "https://i.ibb.co/vV9hYVf/no-avater.jpg"
                    }
                    alt=""
                    className=" rounded-full "
                  />
                </div>
                {displayName && (
                  <div>
                    <h3 className=" text-xs md:text-sm text-title-color font-medium text-center hover:bg-transparent">
                      {displayName && displayName}
                    </h3>
                  </div>
                )}
              </div>
            )}

            {currentUser ? (
              <button
                onClick={logout}
                className="btn text-primary bg-transparent border-none hover:bg-primary bg-opacity-5 hover:text-white capitalize"
              >
                <span className=" text-lg  sm:text-xl -mr-1">
                  <BiLogOutCircle></BiLogOutCircle>
                </span>{" "}
                logout
              </button>
            ) : (
              <Link
                to="/login"
                className="btn text-primary bg-transparent border-none hover:bg-primary bg-opacity-5 text-base font-medium hover:text-white capitalize "
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}

export default Navbar;
