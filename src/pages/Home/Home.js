import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Intro from '../../components/intro/Intro'
import PersonCard from '../../components/PersonCard/PersonCard'

const Home = () => {
    return (
        <div>
            <div className="blueGradientTop">
                <Header />
                <div className="portifolioContainer">
                    <Intro />
                    <PersonCard />
                </div>
                
            </div>
        </div>
    )
}

export default Home
