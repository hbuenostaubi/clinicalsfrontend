import './App.css';
import React from 'react';
import { Route, Routes} from 'react-router-dom'
import Home from "./Components/Home";
import AddPatient from "./Components/AddPatient";
import CollectClinicals from "./Components/CollectClinicals";
import AnalyzeData from "./Components/AnalyzeData";
import ChartGenerator from "./Components/ChartGenerator";

function App() {
    return (
        <div className="App">
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route exact path="/patientDetails/:patientId" element={<CollectClinicals />}></Route>
                    <Route exact path="/addPatient" element={<AddPatient />}></Route>
                    <Route exact path="/analyze/:patientId" element={<AnalyzeData />}></Route>
                    <Route exact path="/chart/:componentName/:patientId" element={<ChartGenerator />}></Route>
                </Routes>
        </div>
    );
}

export default App;
