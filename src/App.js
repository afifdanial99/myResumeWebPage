import React from "react";
import "./index.css";
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import Table from './components/Table'
import Education from './components/Education'
import Work from './components/Work'
import References from "./components/References";
import ResearchProjects from "./components/ResearchProjects";
import Extra from "./components/Extra";


function App() {
  return (
    <div>
        <Header/>
        <About/>
        <Contact/>
        <Table/>
        <Education/>
        <Work/>
        <References/>
        <ResearchProjects/>
        <Extra/>

    </div>
  )
}

export default App;
