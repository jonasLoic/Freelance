import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/";
import Survey from "./pages/Survey/";
import Header from './components/Header'
// import ClientForm from './components/ClientForm'
// import FreelanceForm from './components/FreelanceForm'
import Freelance from './pages/Survey';
import Results from "./pages/Results";
import Error from './components/Error'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey/:questionNumber" element={<Survey />} />
        {/* <Route path="client" element={<ClientForm/>}/>
        <Route path="freelance" element={<FreelanceForm/>}/> */}
        <Route path="freelance" element={<Freelance/>}/>
        <Route path="results" element={<Results/>}/>
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
