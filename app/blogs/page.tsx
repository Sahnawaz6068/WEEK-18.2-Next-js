import axios from "axios";

const getBlogs=async function(){
    const response=await axios.get("https://jsonplaceholder.typicode.com/todos");
    return response.data;
}

export default async  function Signin() {
    const blogs=await getBlogs();
    return <div>
       {blogs.map(blogs=><Todo title={blogs.title} completed={blogs.completed}></Todo>)}
       
        <h1>lallala</h1>
    </div>
}

//______________Todo Components____________
interface Itodo{
    title:String,
    completed:Boolean
}

function Todo({title,completed}:Itodo){
    return <div>
        {title} {completed?"Done":"Not done"}
    </div>
}