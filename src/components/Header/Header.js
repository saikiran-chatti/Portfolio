import React from 'react'
import onlineLogo from '../../assets/images/online.svg'
import linkedIn from '../../assets/images/linkedin.svg'
import twitter from '../../assets/images/twitter.svg'
import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <div className="titleblock">
                <p className="headerTitle color-darkBlackShade">Jayanth Saikiran</p>
                <img src={onlineLogo} alt="onlineStatus" className="onlyLogo" />
                <div className="onlineStatus">
                    <img src={onlineLogo} alt="onlineStatus" className="onlineStatusImage" />
                    <p className="onlineStatusValue poppins-normal-12">Now Available</p>
                </div>
            </div>
            <div className="socialIcons">
                <img src={twitter} onClick={() => window.open("https://twitter.com/jayanthsaikiran", "_blank")} alt="twitter" width="20px" height="20px" />
                <img src={linkedIn} onClick={() => window.open("https://instagram.com/jayanthsaikiran", "_blank")} alt="linkedIn" width="20px" height="20px" />
            </div>
        </header>
    )
}

export default Header
