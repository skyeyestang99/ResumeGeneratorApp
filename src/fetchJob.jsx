import axios from "axios"

// const options={
//     method: 'GET',
//     url: `https://api.serply.io/v1/job/search/q=${query}`,
//     headers: {
//         'Content-Type': 'application/json',
//         'X-Api-Key': '4CU7b8fDXwsoyhM5k4YvJePV'}
// };

export default function fetchJob(query) {
    const options = {
    method: 'GET',
    url: `https://api.serply.io/v1/job/search/q=${query}`,
    headers: {
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin':'*',
        // 'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS',
        'X-Api-Key': '4CU7b8fDXwsoyhM5k4YvJePV'}
    };
    axios.request(options).then((response) =>{
    console.log(response.data);
    })
    // .then( function(res){
    //     res = response.data.json();
    // })
    .catch((error) =>{
    console.error(error);
    });
  }
  