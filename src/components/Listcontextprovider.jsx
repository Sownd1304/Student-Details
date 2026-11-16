import { createContext } from "react"
import { useState } from "react"
const Listcontext=createContext()
function ListContextProvider(data){
    const[list,addlist]=useState([{name:"Sownd",rollnum:"22"}])
     const[isfav,setfav]=useState([])
    function addfav(index){
        list.forEach(function(addid,i){
            if(index===i){
                 setfav([...isfav,index])
                
            }
        })
    
    }
     function removefav(index)
     {
        const updatefav=isfav.filter(function(item){
            return item!==index
        })
        setfav(updatefav)
     }
    return(
       <Listcontext.Provider value={{list,addlist,addfav,isfav,removefav}}>{data.children}</Listcontext.Provider>
    )
}
export default ListContextProvider
export {Listcontext}