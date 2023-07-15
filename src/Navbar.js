import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>Phone Contact</h1>
      <div classname="nav-menu">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/create">New Contact</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
