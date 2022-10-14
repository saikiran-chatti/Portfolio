import React from 'react'
import './Intro.css'
import RenderEmoji from '../RenderEmoji/RenderEmoji'

const Intro = () => {
    return (
        <div className="intro">
            <div className="intro_heading">
                <RenderEmoji htmlEntity="&#128075" />
                <span className="poppins-bold-48 jayanth color-blackShade">&nbsp;Hi, I’m Jayanth</span>
            </div>
            <span className="poppins-normal-15 intro_para">I’m a <span className="bold">Web Developer</span> with a passion for participate
                in every stage of digital product, from <span className="bold">discovery</span> to delivery.
                Helping to focus the business goals on users.</span>

            <div className="currentcompany_email">
                <p className="poppins-normal-15 color-grey">
                    I’m looking for new opportunities <br /> I am currently pursuing my master's In computer science at <span className="bold blue">University of Florida</span></p>
                <div>
                    <p className="poppins-normal-15 color-grey">Email</p>
                    <a href="mailto:jayanthsaikiran@gmail.com"><p className="poppins-normal-15 color-grey bold blue">jayanthsaikiran@gmail.com</p></a>
                </div>
            </div>
        </div>
    )
}

export default Intro
