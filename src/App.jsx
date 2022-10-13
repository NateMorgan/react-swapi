import logo from './logo.svg'
import './App.css'
import StarshipList from './pages/Starship/Starship'
import NavBar from './components/NavBar/NavBar'
import SearchRes from './pages/SearchRes/SearchRes'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path=''        element={<StarshipList/>}/>
        <Route path='/search' element={<SearchRes/>}/>
      </Routes>
      
    </>
  );
}

export default App;
