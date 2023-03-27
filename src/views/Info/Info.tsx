import { useParams } from 'react-router-dom';
import './Info.scss'
import Info1 from './Info1/Info1';
import Info3 from './Info3/Info3';
import Info4 from './Info4/Info4';
import Info5 from './Info5/Info5';
import Info6 from './Info6/Info6';

function Info() {
    const { id } = useParams();

    switch (id) {
        case "1":
            return <Info1 />
        case "3":
            return <Info3 />
        case "4":
            return <Info4 />
        case "5":
            return <Info5 />
        case "6":
            return <Info6 />
        default:
            return <h1>404</h1>
    }
}

export default Info