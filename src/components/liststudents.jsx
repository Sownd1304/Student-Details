import Header from "./Header"
import { useContext } from "react"
import { Listcontext } from "./Listcontextprovider"
function Liststudents(){
   
     const{list,addfav,isfav}=useContext(Listcontext)
    
    
    return(
        <>
        <Header></Header>
        {
            list.map(function(item,index){
                return(
                
               <div className="flex gap-9 p-2 bg-white mt-5 mx-auto justify-center items-center rounded-md shadow-md" style={{width:"400px"}}>
                <p className="px-10 py-1 font-semibold">{index+1}.{item.name}</p>
                <button  onClick={()=>{addfav(index)}} style={{backgroundColor:isfav.includes(index)?"#5C6BC0":"#084E97",width:"250px"}} 
                className="border border-blue-900  py-1 rounded-md">
                    {isfav.includes(index)?"Added":"Add to Favourites"}</button>

               </div>
                )
            })
        }

        </>
    )
}
export default Liststudents