import './Sidebar.scss'
import soraya from '../../assets/soraya.jpg';

function Sidebar() {
  return (
    <div className="Sidebar">
        <div className="Sidebar__Top">
          <div className="Sidebar__Oval"></div>
          <div className="Sidebar__Container">
              <img className="Sidebar__Img" src={soraya} alt="Soraya" />
          </div>
          <div className="Sidebar__Block">
            <h2 className="Sidebar__Text">Soraya van der Woude</h2>
          </div>
        </div>
    </div>
  )
}

export default Sidebar
