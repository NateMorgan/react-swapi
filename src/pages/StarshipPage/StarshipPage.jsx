import { Link, useLocation } from "react-router-dom";


const StarshipPage = (props) => {
  
  const location = useLocation()

  return ( 
    <div style={{margin:"100px 0 0 0",display:"flex",justifyContent:"center",alignItems:"center"}}>
      <div className="card m-5 text-center w-50" style={{backgroundColor: "black", color:"white"}}>
        <div className="card-body">
          <h3> NAME: {location.state.ship.name}</h3>
          <br />
          <h3> MODEL: {location.state.ship.model} </h3>
          <br />
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