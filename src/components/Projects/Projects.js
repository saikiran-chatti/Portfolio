import React from 'react'
import './Projects.css'
import ReactIcon from '../../assets/images/react.svg'
import AndroidIcon from '../../assets/images/android.svg'
import FigmaIcon from '../../assets/images/figma.png'

const Projects = () => {
    return (
        <div className="projectsContainer">
            <p className="poppins-normal-15 color-grey">👇 My projects</p>
            <div className="projects">
                <div className="projectCard">
                    <p className="poppins-normal-12 color-blue projectTitle">No Wires</p>
                    <p className="poppins-bold-16 color-black projectDesc">Access phone files from laptop</p>
                    <p className="poppins-normal-14 color-grey projectDomain">Web & Android app</p>
                    <div className="domainIcons">
                        <img src={ReactIcon} alt="react" width="28px" height="28px" />
                        <img src={AndroidIcon} alt="android" width="28px" height="28px" />
                    </div>
                </div>
                <div className="projectCard">
                    <p className="poppins-normal-12 color-blue projectTitle">Gitam Feed</p>
                    <p className="poppins-bold-16 color-black projectDesc">College feed and community</p>
                    <p className="poppins-normal-14 color-grey projectDomain">Android Application</p>
                    <div className="domainIcons">
                        <img src={AndroidIcon} alt="android" width="28px" height="28px" />
                    </div>
                </div>
                <div className="projectCard opacity">
                    <div className="comingsoon poppins-normal-12 color-white">
                        In progress
                    </div>
                    <div style={{ opacity: 0.4 }}>
                        <p className="poppins-normal-12 color-blue projectTitle">Tesla UI</p>
                        <p className="poppins-bold-16 color-black projectDesc">Replica of Tesla  dashboard. </p>
                        <p className="poppins-normal-14 color-grey projectDomain">Web App</p>
                        <div className="domainIcons">
                            <img alt="figma" src={FigmaIcon} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
