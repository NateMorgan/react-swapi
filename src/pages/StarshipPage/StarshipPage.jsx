import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getStarshipList } from "../../services/sw-api";

const StarshipPage = (props) => {
  
  const location = useLocation()

  return ( 
    <div id="ship-container">
      <div className="card m-5 text-center w-100" style={{backgroundColor: "black", color:"white"}}>
        <div className="card-body">
          <h3> NAME: {location.state.ship.name}</h3>
          <h3> MODEL: {location.state.ship.model} </h3>
          <Link to='../' style={{
                textDecoration:"none", 
                color: "white"}}>
            <h4> RETURN </h4>
          </Link>
        </div>
      </div>
  </div>
   );
}
 
export default StarshipPage;