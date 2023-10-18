import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function NavItem({ children, path }) {
  return (
    <li>
      <NavLink
        className={({ isActive }) => {
          return isActive
            ? " text-base  border-b  border-secondary rounded-sm text-secondary hover:text-secondary bg-white hover:bg-white"
            : " text-base text-title-color  border-b border-transparent hover:border-secondary rounded-sm hover:text-secondary hover:bg-white";
        }}
        to={path}
      >
        {children}
      </NavLink>
    </li>
  );
}
NavItem.propTypes = {
  children: PropTypes.node,
  path: PropTypes.node,
};
export default NavItem;
