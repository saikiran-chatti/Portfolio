import React from 'react'
import './FigmaSkill.css'
import Figma from '../../../assets/images/figma.png'

const JavaSkill = () => {
    return (
        <div className="figmaSkill">
            <img src={Figma} alt="Figma" className="figmaImage" />
            <p className="poppins-normal-16 color-grey figmaName">Figma</p>
        </div>
    )
}

export default JavaSkill