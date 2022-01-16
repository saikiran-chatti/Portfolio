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
                {/* <a href="https://www.linkedin.com/feed/update/urn:li:activity:6840869073828630528/"
                    rel="noreferrer" target="_blank"> */}
                <div className="projectCard" onClick={() => window.open("https://nowires.netlify.app/", "_blank")}>
                    <p className="color-blue projectTitle">No Wires</p>
                    <p className=" color-black projectDesc">Access phone files from laptop</p>
                    <p className="color-grey projectDomain">Web & Android app</p>
                    <div className="domainIcons">
                        <img src={ReactIcon} alt="react" width="28px" height="28px" />
                        <img src={AndroidIcon} alt="android" width="28px" height="28px" />
                    </div>
                </div>
                {/* </a> */}
                {/* <a href="https://play.google.com/store/apps/details?id=com.gfeed.sudhaseshu.gitamfeed"
                    rel="noreferrer" target="_blank"> */}
                <div className="projectCard" onClick={() => window.open("https://play.google.com/store/apps/details?id=com.gfeed.sudhaseshu.gitamfeed", "_blank")}>
                    <p className="color-blue projectTitle">Gitam Feed</p>
                    <p className="color-black projectDesc">College feed and community</p>
                    <p className="color-grey projectDomain">Android Application</p>
                    <div className="domainIcons">
                        <img src={AndroidIcon} alt="android" width="28px" height="28px" />
                    </div>
                </div>
                {/* </a> */}
                <div className="projectCard relativeCard">
                    <div className="comingsoon poppins-normal-12 color-white">
                        In progress
                    </div>
                    <div style={{ opacity: 0.4 }}>
                        <p className="color-blue projectTitle">Tesla UI</p>
                        <p className="color-black projectDesc">Replica of Tesla  dashboard. </p>
                        <p className=" color-grey projectDomain">Web App</p>
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
