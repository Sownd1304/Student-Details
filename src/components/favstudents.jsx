import Header from "./Header"
import { Listcontext } from "./Listcontextprovider"
import { useContext} from "react"
function Favstudents(){
    const{list,isfav,removefav}=useContext(Listcontext)
    return(
        <>
        <Header></Header>
        {
            isfav.length===0?(<p className="mt-5 text-red-500 text-center">No favorite Students added yet</p>):(
                list.map(function(item,index){
                    if(!isfav.includes(index)){
                        return null
                    }
                return(
                    <div  className="flex gap-9 p-2 bg-white mt-5 mx-auto justify-center items-center rounded-md shadow-md" style={{width:"400px"}}>
                        <p className="px-10 py-1 font-semibold">Name:{item.name} Rollnumber:{item.rollnum}</p>
                        <button onClick={()=>{removefav(index)}} style={{backgroundColor:"#5C6BC0",width:"250px"}} 
                className="border border-blue-900 px-10 py-1 rounded-md">Remove</button>
                    </div>
                )
            })
            )
            
        }
        </>
        
        
       
        
)
    
}
export default Favstudents