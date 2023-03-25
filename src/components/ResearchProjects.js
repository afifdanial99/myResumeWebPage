import React from 'react'
import "./RProjectStyles.css"

const ResearchProjects = () => {
  return (
    <body>

        <div>
            <h1 class="r_proj">RESEARCH PROJECTS</h1>
        </div>

        <div>
            <h1 class="fyp">MakeItTalk: Speaker Aware Talking Head Animation</h1>
            <h2 class="caption">Final Year Project</h2>
            <ul class="expl">
                <li>Improved a method that generates expressive talking heads from a single<br></br>facial image with audio as the only input for researched project.</li>
                <li>Introduced a new deep-learning based architecture to predict facial landmark,<br></br> capturing lips, jaw, eye brows, nose and head pose from only speech signals.</li>
                <li>Proposed a new dataset based on Korean language for numerical evaluation<br></br>of head animation methods.</li>
            </ul>
        </div>

        <div>
            <h1 class="app">‘Divisionly’ – Shared Bills and Expenses Tracker Web Application</h1>
            <h2 class="caption2">Project Collaboration</h2>
            <ul class="expl2">
                <li>Developed expense tracker web application using JavaScript and Angular that<br></br> allows user to track and calculate shared expenses.</li>
            </ul>
        </div>

    </body>

  )
}

export default ResearchProjects