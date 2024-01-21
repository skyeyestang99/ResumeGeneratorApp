import './JobList.css';
import Job from "../job/Job";
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function JobList(){
    const location = useLocation();
    const data = location.state.data.jobs;  
    const navigate = useNavigate();
    console.log(data)  
    const handleSavedJob=(event)=>{
      event.preventDefault();
      navigate('/savedJobsList')
    }
    return(
        <div className="list">
        {data.map((data,index) => (
          <Job
            key={index}
            postedDate={data}
            position={data.position}
            employer={data.employer}
            description={data.description.summary}
            location={data.location}
            link={data.link}
          />
        ))}
        <div className="savedJobList">
                <button onClick={handleSavedJob}>Saved Jobs</button>
        </div>
      </div>
    )
}