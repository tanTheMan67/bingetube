import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = ()=>{
    const isMenuOpen= useSelector(store=>store.app.isMenuOpen);
    if(!isMenuOpen)return null;

    return(
        <div className="p-5 shadow-lg w-48">
            <ul>
                <Link to={"/"}><li className="hover hover:font-bold">Home</li></Link>
                <li>Shorts</li>
                <li>Videos</li>
                <li>Live</li>
            </ul>
            <h1 className="font-bold mt-2">Subscriptions</h1>
            <ul>
                <li>Movies</li>
                <li>Sports</li>
                <li>Music</li>
                <li>Gaming</li>
            </ul>
            <h1 className="font-bold mt-2">Watch Later</h1>
            <ul>
                <li>Your Videos</li>
                <li>watch Later</li>
                <li>Liked</li>
                <li>Trending</li>
            </ul>
        </div>
    );
}
export default Sidebar;