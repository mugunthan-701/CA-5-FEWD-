import { useState ,useEffect} from 'react'
import './App.css'
import NavBar from './NavBar'
import { Route, Routes } from 'react-router-dom'
import List from './List'
import Registration from './Registration'

function App() {
  const [query, setQuery] = useState('')


  return (
    <>
     <NavBar setQuery={setQuery}></NavBar>
     <Routes>
      <Route path='/' element={<List query={query} />}></Route>
      <Route path='/Registration' element={<Registration />}></Route>
     </Routes>
    </>
  )
}

export default App
