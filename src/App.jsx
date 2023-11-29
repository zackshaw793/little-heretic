import Navagation from './Components/Navbar'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home  from './Components/Home'
import Work from './Components/Work'
import Contact from './Components/Contact'
import Upcoming from './Components/Upcoming'
import PDFDisplay from './Components/SilverSlips';





function App() {
  

  return (
    <>
     <Navagation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/pdf' element={<PDFDisplay />} />  
      </Routes>
    </>
  )
}

export default App
