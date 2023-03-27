import './Portfolio.scss'
import Block1 from '../../assets/block1.png';
import Block4 from '../../assets/block4.png';
import Block5 from '../../assets/block5.png';
import Block6 from '../../assets/block6.jpg';
import Block7 from '../../assets/block7.jpg';
import { useNavigate } from 'react-router-dom';

function Portfolio() {
    const navigate = useNavigate();

    function openInfo(id: string) {
        navigate(`/info/${id}`)
    }

    return (
        <div>
            <h1 className="Portfolio__Heading">
                Hieronder is mijn werk te zien in verschillende kopjes: Illustraties, Unity, Magazines | Flyers/visitekaartjes, 3D-Artwork, Photoshop en ProCreate.
            </h1>
            <div className="Portfolio__Row">
                <button className="Portfolio__Column" onClick={() => openInfo("1")}>
                    <h2 className="Portfolio__Text">Illustraties</h2>
                    <div className="Portfolio__Picture">
                        <img className="Portfolio__Img" src={Block6} alt="" />
                    </div>
                </button>
                <button className="Portfolio__Column" onClick={() => openInfo("2")}>
                    <h2 className="Portfolio__Text">Unity</h2>
                    <div className="Portfolio__Picture">
                        {/* <img className="Portfolio__Img" src="" alt="" /> */}
                    </div>
                </button>
                <button className="Portfolio__Column" onClick={() => openInfo("3")}>
                    <h2 className="Portfolio__Text">Magazines | Flyers/visitekaartjes</h2>
                    <div className="Portfolio__Picture">
                        <img className="Portfolio__Img" src={Block4} alt="" />
                    </div>
                </button>
                <button className="Portfolio__Column" onClick={() => openInfo("4")}>
                    <h2 className="Portfolio__Text">3D-Artwork</h2>
                    <div className="Portfolio__Picture">
                        <img className="Portfolio__Img" src={Block7} alt="" />
                    </div>
                </button>
                <button className="Portfolio__Column" onClick={() => openInfo("5")}>
                    <h2 className="Portfolio__Text">Photoshop</h2>
                    <div className="Portfolio__Picture">
                        <img className="Portfolio__Img" src={Block5} alt="" />
                    </div>
                </button>
                <button className="Portfolio__Column" onClick={() => openInfo("6")}>
                    <h2 className="Portfolio__Text">ProCreate</h2>
                    <div className="Portfolio__Picture">
                        <img className="Portfolio__Img" src={Block1} alt="" />
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Portfolio