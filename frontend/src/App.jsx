import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./component/landing/Landing";
import JobList from "./component/jobList/JobList";
import Resume from "./component/Resume/Resume";
import SavedJobList from "./component/savedJobList/SavedJobList";

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
                    <Route
                        path="/joblist/resume"
                        element={<Resume/>}
                    />
                    <Route
                        path="/savedJobsList"
                        element={<SavedJobList/>}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    )
}