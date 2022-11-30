import './App.css'
import StarshipList from './pages/StarshipList/StarshipList'
import StarshipPage from './pages/StarshipPage/StarshipPage'
import NavBar from './components/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'

function App() {
  const [query, setQuery] = useState("")

  function handleSearch(searchText) {
    setQuery(searchText)
  }

  return (
    <>
      <NavBar 
        query={query} 
        handleSearch={handleSearch}
      />
      <Routes>
        <Route 
          path='/' 
          element={<StarshipList query={query}/>}
        />
        <Route path='/starship' element={<StarshipPage/>}/>
      </Routes>
      
    </>
  );
}

export default App;
