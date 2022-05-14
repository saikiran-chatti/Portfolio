import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Intro from '../../components/intro/Intro'
import PersonCard from '../../components/PersonCard/PersonCard'
import Projects from '../../components/Projects/Projects'
import Footer from '../../components/Footer/Footer'

const Home = () => {

    return (
        <div className="home">
            <div className="blueGradientTop">
                <Header />
                <div className="portifolioContainer">
                    <Intro />
                    <PersonCard />
                </div>
                <Projects />
                <Footer />
            </div>
        </div>
    )
}

export default Home
