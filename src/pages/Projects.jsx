import React, { useEffect } from "react";
import "../components/css/Projects.css";
import img1 from "./assets/weatherweek-api.png";
import img2 from "./assets/vehicularInquirer.png";
import img3 from "./assets/CMSSQL.png";
import img4 from "./assets/blogger.png";
import img5 from "./assets/READMEGEN.png";

const imgArray = [img1, img2, img3, img4, img5];

function imgGen() {
    imgArray.forEach((img, index) => {
        const projectElement = document.getElementById(`project${index + 1}`);
        if (projectElement) {
            projectElement.style.backgroundImage = `url(${img})`;
        }
    });
}



function Projects() {
    useEffect(() => {
        imgGen();
    }, []);

    return (
        <>
            <div>
                <h1 className="center">Projects</h1>
            </div>
            <div className="page-wrapper">
                <section>
                    <div className="flex-container">
                        <a className="flex-item proj1" id="project1" href="https://github.com/bungin/WeatherWeek-api">
                            <div>
                                <h3>Weather Week-API</h3>
                                <h4>TypeScript/OpenWeatherAPI</h4>
                            </div>
                        </a>

                        <a className="flex-item proj2" id="project2" aria-label=""
                            href="https://github.com/bungin/Vehicular-inquirer">
                            <div>
                                <h3>Vehicular Inquirer</h3>
                                <h4>Node.js/Inquirer</h4>
                            </div>
                        </a>

                        <a className="flex-item" id="project3" aria-label=""
                            href="https://github.com/bungin/CMS-SQL">
                            <div>
                                <h3>CMS SQL</h3>
                                <h4>TypeScript Node.js PostGres Inquirer</h4>
                            </div>
                        </a>

                        <a className="flex-item" id="project4" aria-label=""
                            href="https://github.com/bungin/Blogger">
                            <div>
                                <h3>Blogger</h3>
                                <h4>Javascript HTML CSS</h4>
                            </div>
                        </a>

                        <a className="flex-item" id="project5" aria-label=""
                            href="https://github.com/bungin/README-generator">
                            <div>
                                <h3>README Gen</h3>
                                <h4>Javascript Node.js Inquirer</h4>
                            </div>
                        </a>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Projects;


