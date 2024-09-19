import "../components/css/Projects.css";
// import img1 from "../components/assets/weatherweek.png";



function Projects() {
    return (
        <>
            <div>
                <h1 className="center">Projects</h1>
            </div>
            <div className="page-wrapper">
            <section className="">
                <div className="flex-container">
                    <a className="flex-item proj1" id="project1" aria-label="HTML/CSS Project image"
                        href="https://github.com/bungin/WeatherWeek-api">
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