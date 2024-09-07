import { useDispatch } from "react-redux";
import { toggleMenu } from "./Utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "./Utils/constants";

const Header =()=>{
    const dispatch = useDispatch();
    const[suggestions,setSuggestions]= useState([]);
    const [showSuggestions,setShowSuggestions]=useState(false);
    const Togglemenuhandler = ()=>{
     dispatch(toggleMenu()) ;  
    }
    const [searchtxt,setSearchtxt]=useState("");
    useEffect(()=>{
        const timer= setTimeout(
    ()=>Searchsuggestions(),200);
    return ()=>{
        clearTimeout(timer);
    };
    },[searchtxt]);
    const Searchsuggestions= async ()=>{
        const data = await fetch(YOUTUBE_SEARCH_API+searchtxt);
        const json =await  data.json();
        setSuggestions(json[1]);
    }
    return(
<div className="grid grid-flow-col p-5 m-2 shadow-lg">
    <div className="flex col-span-1">
   <img onClick={()=>Togglemenuhandler()} className="h-9 cursor-pointer" alt="hamburger" src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp&w=256"></img>
<img className="h-9 ml-1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/YouTube_Logo_%282013-2017%29.svg/1280px-YouTube_Logo_%282013-2017%29.svg.png"></img>
    </div>
    <div className="col-span-10">
     <div>
    <input  className=" w-1/2 ml-2 p-2 px-5 border-gray-600 border rounded-l-full" type="text"  value={searchtxt} onChange={(e)=>{
       setSearchtxt(e.target.value);
    }} onFocus={()=>{
setShowSuggestions(true);
    }}></input>
    <button className="p-2 px-2 py-2 border border-gray-600 rounded-r-full">🔍</button>
    </div>
    { setShowSuggestions && (<div className="absolute bg-white py-2 px-2 w-[33.5rem] rounded-lg shadow-lg">
        <ul>
            {suggestions.map(s=>(<li key={s} className="py-2 shadow-sm hover:bg-gray-200">🔍 {s}</li>))}
        </ul>
       
    </div>
    )
}
    </div>
    <div>
<img  className="h-8 col-span-1 " src="https://toppng.com/uploads/preview/user-account-management-logo-user-icon-11562867145a56rus2zwu.png"></img>
    </div>
</div>
    );

}
export default Header;