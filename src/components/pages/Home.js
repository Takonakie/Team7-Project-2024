import React from 'react';
import '../../App.css'
import HeroSection from '../HeroSection'
import CardItem from '../CardItem';
import Definition from '../Definition';
import Footer from '../Footer';

function Home() {
    return (
        <>
        <HeroSection />
        <Definition />
        <CardItem />
        <Footer />
        </>
       

    )
}

export default Home;