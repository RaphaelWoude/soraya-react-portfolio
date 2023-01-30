import './Portfolio.scss'

function Portfolio() {
    return (
        <div>
            <h1 className="Portfolio__Heading">
                Hey! Wat leuk dat je mijn werk komt bekijken. Natuurlijk hoop ik dat je met plezier en nieuwsgierige ogen naar mijn grafisch werk kan kijken.
                Mocht je het leuk vinden kan je altijd een reactie achter laten of vragen stellen.
            </h1>
            <div className="Portfolio__Row">
                <div className="Portfolio__Column">
                    <h2 className="Portfolio__Text">Illustraties</h2>
                    <div className="Portfolio__Picture">
                        {/* <img className="Portfolio__Img" src="" alt="" /> */}
                    </div>
                </div>
                <div className="Portfolio__Column">
                    <h2 className="Portfolio__Text">Fotografie</h2>
                    <div className="Portfolio__Picture">
                        {/* <img className="Portfolio__Img" src="" alt="" /> */}
                    </div>
                </div>
                <div className="Portfolio__Column">
                    <h2 className="Portfolio__Text">Magazines</h2>
                    <div className="Portfolio__Picture">
                        {/* <img className="Portfolio__Img" src="" alt="" /> */}
                    </div>
                </div>
                <div className="Portfolio__Column">
                    <h2 className="Portfolio__Text">Flyers/visitekaartjes</h2>
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
                    <div className="Portfolio__Picture">
                        {/* <img className="Portfolio__Img" src="" alt="" /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio