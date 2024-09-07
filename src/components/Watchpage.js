import { useEffect,useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "./Utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
const Watchpage = ()=>{
   

    const [searchParam]=useSearchParams(); 
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch( closeMenu());
        
    },[])
    return(
        <div className="flex flex-col  m-5 p-3">
<div className="p-10  m-2 border border-black">
    <iframe width="960" height="515" src={"https://www.youtube.com/embed/"+searchParam.get("v")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    <CommentsContainer/>
    </div>
    )
}
export default Watchpage;