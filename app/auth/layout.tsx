import Navbar from "../component/navbar";

export default function Authlayout({children}){
    return <div>
        <Navbar/>
        {children}
    </div>
}