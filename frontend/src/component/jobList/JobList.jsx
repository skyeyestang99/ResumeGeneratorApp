import './JobList.css';
import Job from "../job/Job";
import { useLocation } from "react-router-dom";

export default function JobList(){
    const location = useLocation();
    const data = location.state.data.jobs;  
    console.log(data)  
    return(
        <div className="list">
        {data.map((data,index) => (
          <Job
            key={index}
            position={data.position}
            employer={data.employer}
            description={data.description.summary}
            location={data.location}
            link={data.link}
          />
        ))}
      </div>
    )
}