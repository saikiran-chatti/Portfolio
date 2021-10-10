import React from 'react'
import './Footer.css'
import twitter from '../../assets/images/twitter.svg'
import linkedIn from '../../assets/images/linkedin.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <a href="mailto:jayanthsaikiran@gmail.com">
                <p className="poppins-normal-14 bold color-grey footerEmail">jayanthsaikiran @gmail.com</p>
            </a>
            <div className="footerSocialIcons">
                <a href="https://twitter.com/jayanthsaikiran" rel="noreferrer" target="_blank">
                    <img src={twitter} alt="twitter" width="20px" height="20px" />
                </a>
                <a href="https://www.linkedin.com/in/jayanthsaikiran/" rel="noreferrer" target="_blank">
                    <img src={linkedIn} alt="linkedIn" width="20px" height="20px" />
                </a>
            </div>
        </footer>
    )
}

export default Footer
