import './Home.scss'
import Block1 from '../../assets/block1.png';
import Block2 from '../../assets/block2.png';
import Block3 from '../../assets/block3.jpg';
import Logo from '../../assets/logo.png';

function Home() {
    return (
        <div>
            <h1 className="Home__Heading">
                Hey! Wat leuk dat je mijn werk komt bekijken. Natuurlijk hoop ik dat je met plezier en nieuwsgierige ogen naar mijn grafisch werk kan kijken.
                Mocht je het leuk vinden kan je altijd een reactie achter laten of vragen stellen.
            </h1>
            <div className="Home__Row">
                <div className="Home__Column">
                    <div className="Home__Picture">
                        <img className="Home__Img" src={Block1} alt="" />
                    </div>
                </div>
                <div className="Home__Column">
                    <div className="Home__Picture">
                        <img className="Home__Img" src={Block2} alt="" />
                    </div>
                </div>
                <div className="Home__Column">
                    <div className="Home__Picture">
                        <img className="Home__Img Home__Img--Contain" src={Block3} alt="" />
                    </div>
                </div>
                <div className="Home__Column">
                    <div className="Home__Picture">
                        <img className="Home__Img Home__Img--Contain" src={Logo} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home