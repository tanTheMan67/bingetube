const Videocard = ({info})=>{
    console.log(info);
    const{statistics,snippet} = info;
    const{channelTitle,title,thumbnails}=snippet;
    return(   
<div className="p-2 m-2 w-64 hover:scale-x-110 hover:scale-y-110 overflow-hidden border h-80 rounded shadow-lg  bg-slate-100  border-blue-950">
<img src={thumbnails.medium.url}></img>
<ul>
    <li className="font-bold py-2">{title}</li>
    <li>{channelTitle}</li>
    <li>{statistics.viewCount} Views</li>
    <li></li>
</ul>
</div>
    )
}
export default Videocard;