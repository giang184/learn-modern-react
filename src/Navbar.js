import {Link} from 'react-router-dom'

const Navbar = () => {
  return ( 
    <nav className="navbar">
      <h1>The Dummy Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Entry</Link>
      </div>
    </nav>
  );
}
export default Navbar;