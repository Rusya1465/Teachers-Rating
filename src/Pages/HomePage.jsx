import React from 'react';
import '../styles/HomePage.css'
import wback_1 from '../assets/welcomeBack-1.svg'
import wback_2 from '../assets/welcomeBack-2.svg'
import wback_3 from '../assets/welcomeBack-3.svg'
import TestComponent from '../Components/TestComponent';


function HomePage() {
    return (
        <>
            <main className="main">
                <h1 className="main--heading">Rate My Teachers</h1>
            </main>
            <div className="welcomeBack">
                <h1 className="welcomeBack--heading">
                    Welcome Back!
                </h1>
                <div className="welcomeBack--images-wrapper">
                    <div className="welcomeBack--con">
                        <img src={wback_1} alt="" />
                        <h3 className="welcomeBack--con-heading">Manage and edit your ratings</h3>
                    </div>
                    <div className="welcomeBack--con">
                        <img src={wback_2} alt="" />
                        <h3 className="welcomeBack--con-heading">Your ratings are always anonymous</h3>

                    </div>
                    <div className="welcomeBack--con">
                        <img src={wback_3} alt="" />
                        <h3 className="welcomeBack--con-heading">Like or dislike ratings</h3>

                    </div>
                </div>
            </div>
            <TestComponent/>
        </>
    );
}

export default HomePage;