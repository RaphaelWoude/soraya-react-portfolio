import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.png'
import './Header.scss'

function Header() {
  return (
    <div className="Header">
      <div className="Header__Heading">
        <img className="Header__Logo" src={Logo} alt="Logo" />
      </div>
      <div className="Header__Links">
        <ul className="Header__List">
          <li className="Header__Item"><Link className="Header__Anchor" to="">Home</Link></li>
          <li className="Header__Item"><Link className="Header__Anchor" to="about">About me</Link></li>
          <li className="Header__Item"><Link className="Header__Anchor" to="portfolio">Portfolio</Link></li>
          {/* <li className="Header__Item"><Link className="Header__Anchor" to="contact">Contact</Link></li> */}
        </ul>
      </div>
    </div>
  )
}

export default Header
