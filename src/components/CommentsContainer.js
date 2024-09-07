const CommentsContainer =()=>{
    const CommentData= [
        {
            name:"Archit Raj",
            Text:"please recall me!",
            replies:[
                {
                    name:"Archit Raj",
                    Text:"please recall me!",
                    replies:[
                        {
                            name:"Archit Raj",
                            Text:"please recall me!",
                            replies:[
                                
                            ]
                        },
                    ]
                },
            ]
        },
        {
            name:"Archit Raj",
            Text:"please recall me!",
            replies:[
                {
                    name:"Archit Raj",
                    Text:"please recall me!",
                    replies:[
                        {
                            name:"Archit Raj",
                            Text:"please recall me!",
                            replies:[
                                
                            ]
                        },
                    ]
                },
            ]
        },
        {
            name:"Archit Raj",
            Text:"please recall me!",
            replies:[
                {
                    name:"Archit Raj",
                    Text:"please recall me!",
                    replies:[
                        {
                            name:"Archit Raj",
                            Text:"please recall me!",
                            replies:[
                                
                            ]
                        },
                    ]
                },
            ]
        },
        {
            name:"Archit Raj",
            Text:"please recall me!",
            replies:[
                {
                    name:"Archit Raj",
                    Text:"please recall me!",
                    replies:[
                        {
                            name:"Archit Raj",
                            Text:"please recall me!",
                            replies:[
                                
                            ]
                        },
                    ]
                },
            ]
        },
       
    ]
    const Comment = ({data})=>{
        const {name,Text,replies}=data;
        return(
            <div className="w-full bg-gray-200 rounded-lg flex mt-2">
           <img  className="h-8  rounded-lg object-fill" src="https://toppng.com/uploads/preview/user-account-management-logo-user-icon-11562867145a56rus2zwu.png"></img>
       <div className="px-2">
        <p className="font-bold">{name}</p>
        <p>{Text}</p>
        </div>
        </div>
        );
    }
    const CommentList = ({comments})=>{
        return comments.map((comment)=>
        (
            <div>
                <Comment data={comment}/>
                <div className="pl-5 border border-l-black ml-5">
           <CommentList comments={comment.replies}/>
            </div>
            </div>
        )
        )
    };
    return(
        <div className="m-5 p-2">
            <h1 className="text-2xl font-bold mt-1 "> Comments:</h1>
            <CommentList comments={CommentData}/>
           
        </div>
    );
}
export default CommentsContainer;