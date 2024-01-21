import React from "react"
import axios from "axios";

const SavedJob=({id,company,title,postedDate,onDeleteJob})=>{
    const handleDelete=(event)=>{
        event.preventDefault();
        onDeleteJob(id)
    }
    return(
        <div>
            <li>
                <h2>{company}</h2>
                <h3>{title}</h3>
                <p>{postedDate}</p>
                <button onClick={handleDelete}> Delete</button>
            </li>
        </div>
    )
}
export default SavedJob;