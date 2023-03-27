import Block1 from '../../../assets/block1.png';
import Block12 from '../../../assets/block12.png';
import Block13 from '../../../assets/block13.png';

function Picture1() {
    return (
        <>
            <div className="Picture">
                <img src={Block1} alt="" />
            </div>
            <div className="Picture">
                <img src={Block12} alt="" />
            </div>
            <div className="Picture">
                <img src={Block13} alt="" />
            </div>
        </>
    )
}

export default Picture1