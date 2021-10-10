import React from 'react'
import onlineLogo from '../../assets/images/online.svg'
import linkedIn from '../../assets/images/linkedin.svg'
import twitter from '../../assets/images/twitter.svg'
import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <div className="titleblock">
                <a href="/" className="headerTitle color-darkBlackShade">Jayanth Saikiran</a>
                <img src={onlineLogo} alt="onlineStatus" className="onlyLogo" />
                <div className="onlineStatus">
                    <img src={onlineLogo} alt="onlineStatus" className="onlineStatusImage" />
                    <p className="onlineStatusValue poppins-normal-12">Now Available</p>
                </div>
            </div>
            <div className="socialIcons">
                <a href="https://twitter.com/jayanthsaikiran" rel="noreferrer" target="_blank">
                    <img src={twitter} alt="twitter" width="20px" height="20px" />
                </a>
                <a href="https://www.linkedin.com/in/jayanthsaikiran/" rel="noreferrer" target="_blank">
                    <img src={linkedIn} alt="linkedIn" width="20px" height="20px" />
                </a>
            </div>
        </header>
    )
}

export default Header
