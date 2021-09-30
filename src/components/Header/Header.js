import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <header className="blueGradientTop">
            <div>
                <p>Jayanth Saikiran</p>
                <div className="onlineStatus">
                    <img src={onlineLogo} className="onlineStatusImage" />
                    <p className="onlineStatusValue">Now Available</p>
                </div>
            </div>
            <img src={linkedIn} />
        </header>
    )
}

export default Header
