import React from 'react'
import Close from '../../assets/images/close.jpg'
import JavaSkill from '../skills/Java/JavaSkill'
import FigmaSkill from '../skills/Figma/FigmaSkill'
import './PersonCard.css'
import ReactSkill from '../skills/React/ReactSkill'
import AndroidSkill from '../skills/Android/AndroidSkill'
import NodejsSkill from '../skills/Nodejs/NodejsSkill'

const PersonCard = () => {
    return (
        <div className="personCard">
            <div className="portifolio_card">
                <img src={Close} alt="me" className="imageCover" />
                <div className="name-location">
                    <p className="poppins-bold-16 title color-blackShade">
                        Jayanth Saikiran
                    </p>
                    <p className="poppins-bold-14 location color-gray50">
                        Hyderabad
                    </p>
                </div>
                <JavaSkill />
                <FigmaSkill />
                <ReactSkill />
                <AndroidSkill />
                <NodejsSkill />
            </div>

        </div>
    )
}

export default PersonCard
