import React from 'react'
import './Intro.css'
const Intro = () => {
    return (
        <div className="intro">
            <span className="poppins-bold-48 jayanth color-blackShade">👋 Hi, I’m Jayanth</span>
            <span className="poppins-normal-15 intro_para">I’m a <span className="bold">Web Developer</span> with a passion for participate
                in every stage of digital product, from <span className="bold">discovery</span> to delivery.
                Helping to focus the business goals on users.</span>

            <div className="currentcompany_email">
                <p className="poppins-normal-15 color-grey">
                    I’m looking for new opportunities <br /> I am currently working as a <span className="bold blue">WebDeveloper</span></p>
                <div>
                    <p className="poppins-normal-15 color-grey">Email</p>
                    <p className="poppins-normal-15 color-grey bold blue">jayanthsaikiran@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default Intro
