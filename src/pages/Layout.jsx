import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav className="navbar-div">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>
      </nav>

        <Outlet />
    </>
  );
}

export default Layout;
