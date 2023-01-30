import './Sidebar.scss'
import soraya from '../../assets/soraya.jpg';

function Sidebar() {
  return (
    <div className="Sidebar">
        <div className="Sidebar__Container">
            <img className="Sidebar__Img" src={soraya} alt="Soraya" />
        </div>
    </div>
  )
}

export default Sidebar
