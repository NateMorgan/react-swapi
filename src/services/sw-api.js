const baseUrl = 'https://swapi.dev/api'

export async function getStarshipList(recursive){
  const res = await fetch(`${baseUrl}/starships/${recursive}`)
  return res.json()
}