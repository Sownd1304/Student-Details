import { Link } from "react-router-dom"

function Header(){
    return(
        <>
        <nav  className="flex gap-5 underline bg-white px-20 py-5 ">
            <Link style={{color:"#263238"}} 
            className="font-bold cursor-pointer list-none" to="/">Home</Link>
            <Link  style={{color:"#263238"}} 
            className="font-bold cursor-pointer list-none" to="/listofstudents">List of Students</Link>
            <Link  style={{color:"#263238"}}
             className=" font-bold cursor-pointer list-none" to="/favstudents">Favorite Students</Link>
            
        </nav>
        
        
        </>
    )
}
export default Header