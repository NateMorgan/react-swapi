import "./NavBar.css"

const NavBar = () => {
  return ( 
  <nav className="navbar" style={{backgroundColor:"black",color:"white"}}>
    <div className="container-fluid">
      <h3>Star Wars Starships</h3>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit" style={{color:"white",borderColor:"white"}}>Search</button>
      </form>
    </div>
  </nav>
  );
}
 
export default NavBar;