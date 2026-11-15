import { useState } from "react"
import Header from "./Header"
import { useContext } from "react"
import { Listcontext } from "./Listcontextprovider"

function Addstudentlist(){
    const{list,addlist}=useContext(Listcontext)
  const [ename,setname]=useState("")
  const[erollnum,setrollnum]=useState("")
  function handleName(e){
    setname(e.target.value)
  }
  function handleRollnum(e){
    setrollnum(e.target.value)
  }
  function add(){
    if(ename.trim()==="" || erollnum.trim()===""){
        return
    }
       addlist([...list,{name:ename,rollnum:erollnum}])
       setname("")
       setrollnum("")
  }
  return(
    <>
    <Header></Header>
    <div className="flex justify-center items-center">
    <div className=" bg-white mt-5 rounded-md shadow-md" style={{width:"500px",height:"300px" }}>
    <h1 className="text-3xl font-semibold py-5 text-center">STUDENT DETAILS</h1>
    <div className="flex flex-col gap-4 justify-center items-center">
    
    <input value={ename} onChange={handleName} type="text" placeholder="Name" style={{backgroundColor:"#ffffff"}} className="border border-black text-center px-7 py-1 rounded-sm outline-none"/>
    <input value={erollnum} onChange={handleRollnum} type="text" placeholder="Roll Number" style={{backgroundColor:"#ffffff"}} className="border border-black outline-none text-center px-7 py-1 rounded-sm"/>
    <button onClick={add} style={{backgroundColor:"#5C6BC0",width:"250px"}} className="border border-blue-900 px-10 py-1 rounded-md">Add</button>
    </div>
    </div>
    </div>
    </>
  )
}
export default Addstudentlist