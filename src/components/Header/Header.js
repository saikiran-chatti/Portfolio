import React from 'react'
import onlineLogo from '../../assets/images/online.svg'
import linkedIn from '../../assets/images/Logo Linkedin.svg'
import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <div className="titleblock">
                <p className="headerTitle">Jayanth Saikiran</p>
                <img src={onlineLogo} className="onlyLogo"/>
                <div className="onlineStatus">
                    <img src={onlineLogo} className="onlineStatusImage" />
                    <p className="onlineStatusValue poppins-normal-12">Now Available</p>
                </div>
            </div>
            <div className="socialIcons">
            <img src={linkedIn} width="25px" height="25px" />
            </div>
        </header>
    )
}

export default Header
