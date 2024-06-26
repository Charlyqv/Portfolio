import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'
import { Navbar } from './components/Navbar'
import { About } from './pages/about/About'
import { Contact } from './pages/contact/Contact'
import { Home } from './pages/home/Home'
import { Portfolio } from './pages/portfolio/Portfolio'
import { Themes } from './components/Themes';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Themes/>
      <Routes>
        <Route index element={<Home />}/>
        <Route path='about' element={<About />}/>
        <Route path='portfolio' element={<Portfolio />}/>
        <Route path="/*" element={ <Home /> } />
        <Route path='contact' element={<Contact />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
