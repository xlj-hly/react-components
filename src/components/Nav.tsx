import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="nav-logo">
        <Link to="/">Silhouette</Link>
      </div>
      <div className="nav-links">
        <Link to="/">Index</Link>
        <Link to="/archive">Archive</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Nav;

