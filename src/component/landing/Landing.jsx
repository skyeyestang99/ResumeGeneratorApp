import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Landing(props){
    const [query,setQuery]=useState('');
    const [redirect,setRedirect]=useState('');
    const navigate = useNavigate();

    const handleOnChange=(event)=>{
        setQuery(event.target.value);
    }
    const handleOnClick=(event)=>{
        console.log("searching")
        event.preventDefault();
        setRedirect(true)
        console.log("redirect")
    }
    useEffect(()=>{
        if(redirect){
            navigate('/jobs');
        }
    },[redirect]);

    return(
        <div>
         <input type="text" value={query} onChange={handleOnChange} placeholder="Search Job"/>
         <button onClick={handleOnClick}> search </button>
        </div>
    )
}