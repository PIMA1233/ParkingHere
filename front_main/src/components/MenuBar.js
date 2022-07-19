import "../css/MenuBar.css";
import {Link} from "react-router-dom";


export default function MenuBar() {
    return (
        <div>
            <div className="menuBar">
            <button className="search">
                <Link to={`/Search`}>Search</Link>
            </button>
            <button className="home">
                <Link to={`/`}>Home</Link>
            </button>
            <button className="Parking" onClick={() => alert('선택한 주차장이 없습니다.')}>
                <Link to={`/Search`}>Parking</Link>
            </button>
            </div>
        </div>
    )
};