import "./NavBar.css"
import { Link } from "react-router-dom";

const NavBar = () => {
  return ( 
  <nav className="navbar fixed-top" style={{backgroundColor:"black",color:"white"}}>
    <div className="container-fluid">
      <Link to='' style={{textDecoration:"none", color:"white"}}>
        <h3>Star Wars Starships</h3>
      </Link>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <Link to='/search'>
          <button class="btn btn-outline-success" type="submit" style={{color:"white",borderColor:"white"}}>Search</button>
        </Link>
      </form>
    </div>
  </nav>
  );
}
 
export default NavBar;