import { useEffect, useState } from "react"
import { getStarshipList } from "../../services/sw-api"
import { Link } from "react-router-dom"

const StarshipList = () => {
  const [starships, setStarships] = useState([])
  
  useEffect(() => {
    const fetchStarshipList = async (recursive)=> {
      const starshipData = await getStarshipList(recursive ? recursive: '')
      setStarships(starships => [...starships, ...starshipData.results])
      if(starshipData.next !== null){
        fetchStarshipList(starshipData.next.split('/starships/')[1])
      }
    }
    fetchStarshipList()
  } , [])

  return(
    <>
      {starships.length ?
      <div id="ship-container">
        {starships.map(ship =>
          <div className="card m-5 text-center" style={{backgroundColor: "black"}}>
            <Link to='/starship' state={{ship}} key={ship.name} style={{textDecoration:"none", color:"white"}}>
              <div className="card-body">
                <p> {ship.name} </p>
              </div>
            </Link>
          </div>
        )}
      </div>
        :
        <>
          <p style={{margin:"60px 0 0 10px"}}>Loading Starships...</p>
        </>
      }
    </>
  )
}

export default StarshipList