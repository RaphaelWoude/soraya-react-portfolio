import './Home.scss'
import Block1 from '../../assets/block1.png';
import Block2 from '../../assets/block2.png';
import Block3 from '../../assets/block3.jpg';
import Block8 from '../../assets/block8.png';
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    function openPicture(id: string) {
        navigate(`/picture/${id}`)
    }

    return (
        <div>
            <h1 className="Home__Heading">
                Hey! Wat leuk dat je mijn werk komt bekijken. Natuurlijk hoop ik dat je met plezier en nieuwsgierige ogen naar mijn grafisch werk kan kijken.
                Mocht je het leuk vinden kan je altijd een reactie achter laten of vragen stellen.
            </h1>
            <div className="Home__Row">
                <div className="Home__Column">
                    <button className="Home__Picture" onClick={() => openPicture("1")}>
                        <img className="Home__Img" src={Block1} alt="" />
                    </button>
                </div>
                <div className="Home__Column">
                    <button className="Home__Picture" onClick={() => openPicture("2")}>
                        <img className="Home__Img" src={Block2} alt="" />
                    </button>
                </div>
                <div className="Home__Column">
                    <button className="Home__Picture" onClick={() => openPicture("3")}>
                        <img className="Home__Img Home__Img--Contain" src={Block3} alt="" />
                    </button>
                </div>
                <div className="Home__Column">
                    <button className="Home__Picture" onClick={() => openPicture("4")}>
                        <img className="Home__Img Home__Img--Contain" src={Block8} alt="" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home