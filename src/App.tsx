import './App.scss'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Home from './views/Home/Home'
import About from './views/About/About'
import Portfolio from './views/Portfolio/Portfolio'
import Contact from './views/Contact/Contact'

import { Routes, Route } from "react-router-dom"
import Footer from './components/Footer/Footer'
import Picture from './views/Picture/Picture'

function App() {
  return (
    <div>
      <div className="App">
        <div className="App__Left">
          <Sidebar />
        </div>
        <div className="App__Right">
          <Header />
          <div className="App__Content">
            <Routes>
              <Route path="/" element={ <Home/> } />
              <Route path="about" element={ <About/> } />
              <Route path="contact" element={ <Contact/> } />
              <Route path="portfolio" element={ <Portfolio/> } />
              <Route path="picture/:id" element={ <Picture/> } />
            </Routes>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
