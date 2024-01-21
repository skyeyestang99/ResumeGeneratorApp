import React, { useState, useEffect } from 'react';
import './SavedJobList.css'
import SavedJob from './SavedJob';
import axios from 'axios';
import { useNavigate } from 'react-router';

const SavedJobList = () => {
    const [jobs, setJobs] = useState([]);
    const navigate=useNavigate()

    const handleDelete=(id)=>{
        console.log(id)
        axios.delete(`http://localhost:5555/savedJobs/${id}`,{
            params:{id:id},
        })
        .then(response=>{
            console.log(response.data);
        })
        .catch(error=>{
            console.log(error.response.data)
        })
    }
    const handleBack=()=>{
        navigate('/')
    }

    useEffect(() => {
        fetchSavedJobs();
    }, [jobs]);

    const fetchSavedJobs = async () => {
        const response = await axios.get('http://localhost:5555/savedJobs')
        const data=response.data.data
        console.log(data)
        setJobs(data);
    };

    return (
        <div className="saved-jobs-list">
            <h1>Saved Jobs</h1>
            <ul>
                {jobs.map((job) => (
                <SavedJob    
                    key={job._id}
                    id={job._id}
                    company={job.company}
                    title={job.title}
                    postedDate={job.postedDate}

                    onDeleteJob={handleDelete}
                />
                ))}
            </ul>
            <button onClick={handleBack}>back</button>
        </div>
    );
};

export default SavedJobList;
