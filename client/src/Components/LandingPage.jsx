import React from 'react'
import "./LandingPage.css";
import lp1 from "../Img/lp1.png"

function LandingPage() {
    return (
        <div className='bg-image'>
            <div className="about-clients">
                <div className="about-us">
                    <div className='about-us-title'>
                        <h1>It's a Big World Out There, Go ExpFlore.</h1>
                    </div>
                    <div className="about-us-description">
                        <hr className="hr"></hr>
                        <img className="about-us-description-img" src={lp1} alt="" />
                        <p>
                            Welcome to your personal vacation matchmaker.
                            <br /> <br />
                            Easily find flights with no change fees.
                            <br /> <br />
                            Countries helps you find the perfect destination to suit your style. Categorizing vacations by climate, budget, and types of activities, this website is your next vacation revelation.</p>
                        <hr className="hr"></hr>
                    </div>
                </div>
                <div className="clients">
                    <div className="clients-cards">
                        <a href="https://google.com" className="card">
                            <div className="inner">
                                <div className='profile'>
                                    <div className='profile-picture'></div>
                                    <div className='profile-name'>Himari </div>
                                </div>
                                <div className='card-description'>
                                    彼氏と一緒にビーチでとても楽しかったです。すべてがとても素敵でした！#beach #boyfriend</div>
                            </div>
                        </a>
                        <a href="https://google.com" className="card2">
                            <div className="inner">
                                <div className='profile'>
                                    <div className='profile-picture3'></div>
                                    <div className='profile-name'>Marcelo</div>
                                </div>
                                <div className='card-description'>
                                    A Flórida foi um lugar tão divertido para se visitar que irei novamente quando puder #Disney #Funny
                                </div>
                            </div>
                        </a>
                        <a href="https://google.com" className="card3">
                            <div className="inner">
                                <div className='profile'>
                                    <div className='profile-picture2'></div>
                                    <div className='profile-name'>Agustin</div>
                                </div>
                                <div className='card-description'>Nada mas lindo que desconectar un rato visitando un buen paisaje #JustChilling #Mountains</div>
                            </div>
                        </a>
                    </div>
                    <h3>OUR CLIENTS</h3>
                </div>
            </div>
            <div className="social-media">
            </div>
        </div>
    )
}

export default LandingPage