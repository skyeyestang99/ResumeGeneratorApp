import "./Job.css";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router";
import ReactLoading from 'react-loading';
import axios from "axios";


const {Configuration,OpenAIApi} = require("openai");
const configuration = new Configuration({
    apiKey: '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'
});
const openai = new OpenAIApi(configuration);

export default function Job({ position, postedDate, employer, description, location, link }) {
      const [load,setLoad]=useState(false)
      const [data,setData] = useState()
      const navigate = useNavigate();
      async function GenerateResume(){
        setLoad(true)
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt : `Generate a resume for Skyeyes Tang who is 21 years old studying 
            at Harvard University based on the following job description:\n\nPosition: 
            ${position}\nEmployer: ${employer}\nLocation: ${location}\nDescription: 
            {description} return the resume in formated way`,
            max_tokens: 2048,
            n: 1,
            temperature: 0.7,
        });
        setData(response.data.choices[0].text)
      }
      useEffect(() => {
        if(data!== undefined) {
          setLoad(false)
          console.log(data, "data");
          navigate('/joblist/resume',
            { state: {
              data:data
            }}
          );
        }
      }, [data,navigate,load]);      
      const handleSave=()=>{
        axios.post('http://localhost:5555/savedJobs',{
          company:employer,
          title:position,
          postedDate:2024
        }).then((response)=>{
          console.log(response.data)
        }).catch((error)=>{
          console.log(error.response.data);
        })
      }
      
    return (
      <div>
        {
                    load ?
                    <ReactLoading type={"bubbles"} color={"blue"} height={300} width={300}/>
                    :
        <div className="job-item">
          <h3 className="job-item-position">{position}</h3>
          <p className="job-item-employer">{employer}</p>
          <p className="job-item-location">{location}</p>
          <p className="job-item-description">{description}</p>
          <a href={link} target="_blank" rel="noopener noreferrer">
              <button>Apply here</button>
          </a>
          <button onClick={GenerateResume}> Generate Resume</button>
          <div className="saveButton">
                <button onClick={handleSave}>Save</button>
          </div>
        </div>
}
      </div>
    );
}
