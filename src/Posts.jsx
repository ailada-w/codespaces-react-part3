import React from "react";
import { BrowserRouter,useLocation, useParams } from "react-router-dom";

export default function Posts(){
    const {id}=useParams();
    const urlstring=new URLSearchParams(useLocation().search);
    const fname=urlstring.get("fname");
    const lname=urlstring.get("lname");
    return(<h1>This is posts page {fname}{lname}</h1>)
    
}
// const Posts=(props)=>{
//     const {id}=useParams();
//     const urlstring=new URLSearchParams(useLocation().search);
//     const fname=urlstring.get("fname");
//     const lname=urlstring.get("lname");
//     // return (
//     //     <div>
//     //         {id}
//     //         {fname}{lname}
            
//     //     </div>
//     // )
// }