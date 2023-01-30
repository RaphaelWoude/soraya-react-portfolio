import './Home.scss'

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
                        {/* <img className="Home__Img" src="" alt="" /> */}
                    </div>
                </div>
                <div className="Home__Column">
                    <div className="Home__Picture">
                        {/* <img className="Home__Img" src="" alt="" /> */}
                    </div>
                </div>
                <div className="Home__Column">
                    <div className="Home__Picture">
                        {/* <img className="Home__Img" src="" alt="" /> */}
                    </div>
                </div>
                <div className="Home__Column">
                    <div className="Home__Picture">
                        {/* <img className="Home__Img" src="" alt="" /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home