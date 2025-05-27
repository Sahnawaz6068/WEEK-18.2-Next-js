import axios from "axios";

const getBlogs=async function(){
    const response=await axios.get("https://jsonplaceholder.typicode.com/todos");

    return response.data;
}

export default async  function Signin() {
    const blogs=await getBlogs();
    return <div>
       {blogs.map(blog=><Todo title={blog.title} completed={blog.completed}></Todo>)}
    </div>
}

interface Itodo{
    title:String,
    completed:Boolean
}

function Todo({title,completed}:Itodo){
    return <div>
        {title} {completed?"Done":"Not done"}
    </div>
}