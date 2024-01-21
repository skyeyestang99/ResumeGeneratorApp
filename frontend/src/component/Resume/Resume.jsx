import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router";



export default function Resume(){
    const location = useLocation();
    const data = location.state.data;
    const navigate = useNavigate();
    useEffect(() => {
      console.log(data)
    })
    // const handleOnClick=()=>{
    //     navigate('/joblist')
    //     console.log("clicked")
    // }
    return(
        <div>
            <pre>{data}</pre>
            {/* <button onClick={handleOnClick}>Go Back</button> */}
        </div>
    )
}