import "./Job.css";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router";

const {Configuration,OpenAIApi} = require("openai");
const configuration = new Configuration({
    apiKey: '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'
});
const openai = new OpenAIApi(configuration);

export default function Job({ position, employer, description, location, link }) {
      const [data,setData] = useState()
      const navigate = useNavigate();
      async function GenerateResume(){
      const response = await openai.createCompletion({
          model: "text-davinci-003",
          prompt : `Generate a resume for Skyeyes Tang who is 21 years old studying at Harvard University based on the following job description:\n\nPosition: ${position}\nEmployer: ${employer}\nLocation: ${location}\nDescription: ${description} return the resume in formated way`,
          max_tokens: 2048,
          n: 1,
          temperature: 0.7,
      });
      setData(response.data.choices[0].text)
      }
      useEffect(() => {
        if(data!== undefined) {
          console.log(data, "data");
          navigate('/joblist/resume',
            { state: {
              data:data
            }}
          );
        }
      }, [data]);      
      
    return (
      <div className="job-item">
        <h3 className="job-item-position">{position}</h3>
        <p className="job-item-employer">{employer}</p>
        <p className="job-item-location">{location}</p>
        <p className="job-item-description">{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
            <button>Apply here</button>
        </a>
        <button onClick={GenerateResume}> Generate Resume</button>
      </div>
    );
}
