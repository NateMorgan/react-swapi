import { Link } from "react-router-dom";

const NavBar = (props) => {

  function onChange(e){
    props.handleSearch(e.target.value)
  }

  return ( 
  <nav className="navbar fixed-top" style={{backgroundColor:"black",color:"white"}}>
    <div className="container-fluid">
      <Link to='' style={{textDecoration:"none", color:"white"}}>
        <h3>Star Wars Starships</h3>
      </Link>
      <form className="d-flex" role="search">
        <input className="form-control me-2" value={props.query} onChange={onChange} type="search" placeholder="Search" aria-label="Search"/>
      </form>
    </div>
  </nav>
  );
}
 
export default NavBar;