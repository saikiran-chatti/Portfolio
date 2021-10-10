import React, { useCallback, useEffect } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Intro from '../../components/intro/Intro'
import PersonCard from '../../components/PersonCard/PersonCard'
import Projects from '../../components/Projects/Projects'
import Footer from '../../components/Footer/Footer'

const Home = () => {

    const handleContextMenu = useCallback(
        (e) => {
            e.preventDefault();
        }, []
    );

    useEffect(() => {
        document.addEventListener("contextmenu", handleContextMenu);

        document.addEventListener('keydown', function (e) {
            console.log(e.key);
            if (e.key === 123) {
                e.preventDefault();
                return false;
            }
            if (e.ctrlKey && e.shiftKey && e.key === 'I') {
                e.preventDefault();
                return false;
            }
            if (e.ctrlKey && e.shiftKey && e.key === 'C') {
                e.preventDefault();
                return false;
            }
            if (e.ctrlKey && e.shiftKey && e.key === 'J') {
                e.preventDefault();
                return false;
            }
            if (e.ctrlKey && e.key === 'U') {
                e.preventDefault();
                return false;
            }
        });

        return () => {
            document.removeEventListener("contextmenu", handleContextMenu);
        };
    });

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
