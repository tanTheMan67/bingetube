import { useEffect, useState } from "react";
import { YOUTUBE_API } from "./Utils/constants";
import Videocard from "./Videocard";
import { Link } from "react-router-dom";
const Videocontainer = ()=>{
    const [videos,setVideos]=useState([]);
    useEffect(()=>{
        Getvideos();
    },[]);
    const Getvideos = async()=>{
    
        const data = await fetch(YOUTUBE_API);
        const json=  await data.json();
        console.log(json);
        setVideos(json.items);
          }

    return(
        <div className="flex flex-wrap">
            {videos.map(video=><Link to={"/Watch?v="+video.id}> <Videocard key={video.id} info={video}/></Link>

            )}
           
        </div>
    )
}
export default Videocontainer;