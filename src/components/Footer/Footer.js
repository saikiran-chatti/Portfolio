import React from 'react'
import './Footer.css'
import twitter from '../../assets/images/twitter.svg'
import linkedIn from '../../assets/images/linkedin.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <p className="poppins-normal-14 bold color-grey footerEmail">jayanthsaikiran@gmail.com</p>
            <div className="footerSocialIcons">
                <img src={twitter} onClick={() => window.open("https://twitter.com/jayanthsaikiran", "_blank")} alt="twitter" width="20px" height="20px" />
                <img src={linkedIn} onClick={() => window.open("https://www.linkedin.com/in/jayanthsaikiran/", "_blank")} alt="linkedIn" width="20px" height="20px" />
            </div>
        </footer>
    )
}

export default Footer
