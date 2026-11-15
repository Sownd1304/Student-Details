import Liststudents from "./components/liststudents";
import Favtstudents from "./components/favstudents";
import ListContextProvider from "./components/Listcontextprovider";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Addstudentlist from "./components/Addlist";

function App() {
  return (
    <>
    <BrowserRouter>
    <ListContextProvider>
    <Routes>
      <Route path="/" element={<Addstudentlist/>}></Route>
      <Route path="/listofstudents" element={<Liststudents/>}></Route>
      <Route path="/favstudents" element={<Favtstudents/>}></Route>
    </Routes>
    </ListContextProvider>
    </BrowserRouter>
   
    
     
    </>
  )
}

export default App;
