import { useEffect, useState } from "react"
import { getStarshipList } from "../../services/sw-api"

const StarshipList = () => {
  const [starships, setStarships] = useState([])
  
  useEffect(() => {
    const fetchStarshipList = async (recursive)=> {
      const starshipData = await getStarshipList(recursive ? recursive: '')
      console.log(starshipData)
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
        <>
          {starships.map(ship =>
            <li> {ship.name} </li>
          )}
        </>
        :
        <>
          <p>Loading Starships</p>
        </>
      }
    </>
  )
}

export default StarshipList