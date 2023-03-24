import './Portfolio.scss'
import Block1 from '../../assets/block1.png';

function Portfolio() {
    return (
        <div>
            <h1 className="Portfolio__Heading">
                Hieronder is mijn werk te zien in verschillende kopjes: Illustraties, Unity, Magazines | Flyers/visitekaartjes, 3D-Artwork, Photoshop en ProCreate.
            </h1>
            <div className="Portfolio__Row">
                <div className="Portfolio__Column">
                    <h2 className="Portfolio__Text">Illustraties</h2>
                    <div className="Portfolio__Picture">
                        {/* <img className="Portfolio__Img" src="" alt="" /> */}
                    </div>
                </div>
                <div className="Portfolio__Column">
                    <h2 className="Portfolio__Text">Unity</h2>
                    <div className="Portfolio__Picture">
                        {/* <img className="Portfolio__Img" src="" alt="" /> */}
                    </div>
                </div>
                <div className="Portfolio__Column">
                    <h2 className="Portfolio__Text">Magazines | Flyers/visitekaartjes</h2>
                    <div className="Portfolio__Picture">
                        {/* <img className="Portfolio__Img" src="" alt="" /> */}
                    </div>
                </div>
                <div className="Portfolio__Column">
                    <h2 className="Portfolio__Text">3D-Artwork</h2>
                    <div className="Portfolio__Picture">
                        {/* <img className="Portfolio__Img" src="" alt="" /> */}
                    </div>
                </div>
                <div className="Portfolio__Column">
                    <h2 className="Portfolio__Text">Photoshop</h2>
                    <div className="Portfolio__Picture">
                        {/* <img className="Portfolio__Img" src="" alt="" /> */}
                    </div>
                </div>
                <div className="Portfolio__Column">
                    <h2 className="Portfolio__Text Portfolio__Text--White">ProCreate</h2>
                    <div className="Portfolio__Picture">
                        <img className="Portfolio__Img" src={Block1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio