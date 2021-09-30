import React from 'react'
import onlineLogo from '../../assets/images/online.png'
import linkedIn from '../../assets/images/Logo Linkedin.svg'
import './Header.css'

const Header = () => {
    return (
        <header className="blueGradientTop">
            <div className="titleblock">
                <p className="headerTitle">Jayanth Saikiran</p>
                <div className="onlineStatus">
                    <img src={onlineLogo} className="onlineStatusImage" />
                    <p className="onlineStatusValue poppins-normal-12">Now Available</p>
                </div>
            </div>
            <img src={linkedIn} width="25px" height="25px" />
        </header>
    )
}

export default Header
