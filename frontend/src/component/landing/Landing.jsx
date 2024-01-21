import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactLoading from 'react-loading';
import './Landing.css'
import axios from "axios";


export default function Landing(props){
    const [load,setLoad]=useState(false)
    const [query,setQuery]=useState('');
    const [redirect,setRedirect]=useState(false);
    const [data, setData]=useState();
    const navigate = useNavigate();

    const options={
        method: 'GET',
        url: `https://api.serply.io/v1/job/search/q=${query}`,
        headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': '4CU7b8fDXwsoyhM5k4YvJePV',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Credentials': 'true'
        }
    };

    const handleOnChange=(event)=>{
        setQuery(event.target.value);
    }
    const handleOnClick=(event)=>{
        event.preventDefault();
        setLoad(true);
        fetchJobs(query)
    }
    const handleSavedJob=(event)=>{
        event.preventDefault();
        navigate('/savedJobsList')
    }
    function fetchJobs(query){
        axios.request(options).then((response) =>{
            // console.log(response.data);
            setData(response.data)
            setRedirect(true)
            })
            .catch((error) =>{
            console.error(error);
        });
    }
    useEffect(()=>{
        if(redirect){
            navigate('/joblist',
            {state:{
                data:data
            }}
            );
            setLoad(false)
        }
    },[redirect,navigate,data,load]);

    return(
        <div className="Main">
            <div className="container mx-auto px-6 py-16 pt-28 text-center">
                {
                    load ?
                    <ReactLoading type={"balls"} color={"blue"} height={667} width={375}/>
                    :
                <div className="mx-auto max-w-lg">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">Resume generator Using ChatGPT</h1>
                        <p className="mt-6 text-gray-500 dark:text-gray-300">Search for jobs and get AI generated resumes</p>
                             <input type="text" value={query} onChange={handleOnChange} placeholder="Search Job"/>
                             <button onClick={handleOnClick}> search </button>
                </div>
                }
            </div>
            <div className="savedJobList">
                <button onClick={handleSavedJob}>Saved Jobs</button>
            </div>
        </div>
    )
}