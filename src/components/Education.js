import React from 'react'
import "./EducationStyles.css"

const Education = () => {
  return (
    <body>
        <div>
            <h1 class= "edu">EDUCATION</h1>
            <h2 class= "deg">Bachelors Degree in Computer Software Engineering</h2>
            <h3 class= "period">March 2019 - February 2023 </h3>
            <ul class="uni">
                <li>Hanyang University, Seoul</li>
            </ul>      
            
        </div>

        <div>
            <h1 class= "deg2">Foundation of Science and Technology for Korean University</h1>
            <h2 class= "period2">June 2017 - December 2018</h2>
            <ul class="uni2">
                <li>University of Kuala Lumpur, MIIT</li>
                <li>CGPA: 3.63</li>
            </ul>      
        </div>

        <div>
            <h1 class= "deg3">Malaysian Certificate of Education</h1>
            <h2 class= "period3">January 2012 - December 2016</h2>
            <ul class="uni3">
                <li>SM Sains Kubang Pasu</li>
                <li>SPM: 9A</li>
            </ul>      
        </div>

        <div>
            <h1 class= "tech_skills">TECHNICAL SKILLS</h1>
            <ul class="tech_skills_ls">
                <li>Python</li>
                <li>Java</li>
                <li>C++</li>
                <li>HTML/CSS</li>
                <li>Angular</li>
                <li>Adobe Photoshop</li>
                <li>Adobe Lightroom</li>
                <li>Figma</li>
                <li>Machine Learning</li>
                <li>ReactJS</li>
            </ul>      
        </div>

        <div>
            <h1 class= "languages">LANGUAGES</h1>
            <ul class="languages_ls">
                <li>English (Native)</li>
                <li>Bahasa Melayu (Native)</li>
                <li>Korean (Advance)</li>
                <li>German (Basic)</li>
            </ul>
        </div>
    </body>
  )
}

export default Education