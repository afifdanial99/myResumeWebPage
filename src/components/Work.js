import React from 'react'
import './WorkStyles.css'

const Work = () => {
  return (
    <body>
        <h1 class="work">WORK EXPERIENCES</h1> 
{/* mida internship */ }
        <div>    
            <h1 class="mida">Malaysian Investment Development Authority, MIDA</h1>
            <p class="period">
                Seoul<br></br>2021-2022
            </p> 
            <h2 class="pos">Intern</h2>
            <ul class="desc">
                <li>Assisted Korean based companies to invest in the manufacturing and services<br></br>sectors, as well as facilitated the implementation of their projects in Malaysia.</li>
                <li>Helped to to evaluate applications for manufacturing license and tax incentives<br></br> for engineering projects and software development.</li>
                <li>Provided a brief report and analysis regarding Korean engineering companies<br></br> to the director of MIDA, Seoul.</li>
                <li>Translated a documents, reports and speech during meeting which contains<br></br> Korean language. </li>
                <li>Designed poster and produced media contents for MIDA, Seoul.</li>
            </ul>
        </div>
{/* lurima travel*/ }
        <div>    
            <h1 class="lurima">Lurima Travel</h1>
            <p class="period2">
                Seoul<br></br>2022-2023
            </p> 
            <h2 class="pos2">Tour Guide</h2>
            <ul class="desc2">
                <li>Accompanied groups of visitors from  Malaysia to tourist attractions in South Korea.</li>
                <li>Assisted the visitors from Malaysia in guiding, translating, promoting, and booking<br></br> in South Korea.</li>
            </ul>
        </div>
{/*hanjin shipping*/ }
        <div>    
            <h1 class="hanjin">Hanjin Shipping</h1>
            <p class="period3">
                Seoul<br></br>2022
            </p> 
            <h2 class="pos3">Part-time</h2>
            <ul class="desc3">
                <li>Focus on the distribution, and storage of goods and materials while keeping the <br>
                </br>supply chain of goods efficient and capable of meeting business goals and ensures<br></br>
                production quotas are met.</li>
            </ul>
        </div>

{/*restaurant*/ }
        <div>    
            <h1 class="restaurant">Agak-Agak Malaysian Restaurant & Ganghes Restaurant</h1>
            <p class="period4">
                Seoul<br></br>2020-2022
            </p> 
            <h2 class="pos4">Part-time</h2>
            <ul class="desc4">
                <li>Planned, prepared, and cooked food items to ensure the highest quality service and<br></br>
                experience for customers and help keep the restaurant organized and running<br></br>efficiently.</li>
            </ul>
        </div>

    </body>
  )
}

export default Work