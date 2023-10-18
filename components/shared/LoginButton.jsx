import PropTypes from "prop-types";
import { FcGoogle } from "react-icons/fc";

function LoginButton({ googleLogin, children }) {
  return (
    <div className="mt-10  sm:mt-14 text-center flex justify-center">
      <button
        onClick={googleLogin}
        className="bg-primary bg-opacity-20 text-gray-600 text-base md:text-xl font-medium rounded-md  px-4 md:px-7  py-2 md:py-2 hover:bg-primary  hover:text-white border-none flex items-center gap-2"
      >
        <span>
          <FcGoogle className="text-2xl"></FcGoogle>
        </span>
        {children}{" "}
      </button>
    </div>
  );
}

LoginButton.propTypes = {
  googleLogin: PropTypes.func,
  children: PropTypes.string,
};

export default LoginButton;
