import React from 'react'
import './JavaSkill.css'
import Java from '../../../assets/images/java.svg'

const JavaSkill = () => {
    return (
        <div className="javaSkill">
            <img src={Java} alt="Java" className="javaImage" />
            <p className="poppins-normal-16 color-grey javaName">Java</p>
        </div>
    )
}

export default JavaSkill
