const SearchRes = (props) => {
  return ( 
    <div id="ship-container">
      {/*Repeat for every ship that matches the search*/}
      <div className="card m-5 text-center" style={{backgroundColor: "black", color:"white"}}>
        <div className="card-body">
          <p> Ship Name </p>
        </div>
      </div>
  </div>
   );
}
 
export default SearchRes;