import { useEffect, useState } from "react"
import { getStarshipList } from "../../services/sw-api"
import './Starship.css';
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
          <div className="card m-5 text-bg-dark text-center">
            <div className="card-body">
              <p> {ship.name} </p>
            </div>
          </div>
        )}
      </div>
        :
        <>
          <p>Loading Starships...</p>
        </>
      }
    </>
  )
}

export default StarshipList