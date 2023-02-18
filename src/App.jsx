import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./component/landing/Landing";
import JobList from "./component/jobList/JobList";

export default function App(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<Landing/>}
                    />
                    <Route
                        path="/joblist"
                        element={<JobList/>}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    )
}