import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import heroimg from '../../images/hero.png'
import './Home.css'

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />

            <main className="container">
                <Cta />
            </main>
        </>
    )
}

const Hero = () => {
    return (
        <>
            <div className="container">
                <div className="header-content">
                    <div className="text-content">
                        <h1>Mern profile manager collaborative app</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, minus. Itaque, rerum atque nesciunt ut maxime sit asperiores accusantium labore.</p>
                        <div className="right-menu">
                            

                        </div>
                    </div>
                    <div className="img-content">
                        <img src={heroimg} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

const Cta = () => {
    return (
        <h1>home page</h1>
    )
}

export default Home