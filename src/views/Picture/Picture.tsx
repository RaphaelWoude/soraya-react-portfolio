import { useParams } from 'react-router-dom';
import './Picture.scss'
import Picture1 from './Picture1/Picture1';
import Picture2 from './Picture2/Picture2';
import Picture3 from './Picture3/Picture3';
import Picture4 from './Picture4/Picture4';

function Picture() {
    const { id } = useParams();

    switch (id) {
        case "1":
            return <Picture1 />
        case "2":
            return <Picture2 />
        case "3":
            return <Picture3 />
        case "4":
            return <Picture4 />
        default:
            return <h1>404</h1>
    }
}

export default Picture