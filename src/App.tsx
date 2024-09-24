import "./App.css";
import Layout from "./components/layout/layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateGraphPage from "./pages/createGraph";
import { RunJobs } from "./pages/RunJobs";
import { JobMonitoring } from "./pages/JobMonitoring";
import { Home } from "./pages/home";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-graph" element={<CreateGraphPage />} />
          <Route path="/run-jobs" element={<RunJobs />} />
          <Route path="/job-monitoring" element={<JobMonitoring />} />
          {/* Add more routes here */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
