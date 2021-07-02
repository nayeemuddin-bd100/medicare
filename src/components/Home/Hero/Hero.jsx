/* eslint-disable no-undef */
import { Carousel } from 'antd';
import React from 'react';
import './Hero.css';

function Hero() {
    const contentStyle = {
        height: '550px',
        lineHeight: '160px',
    };
    return (
        <Carousel>
            <div>
                <div style={contentStyle}>
                    <div className="carousel-body-1 ">
                        <div className="container">
                            <div className="row py-5">
                                <div className=" carousel-body-item">
                                    <h4>INSPIRING BETTER HEALTH</h4>
                                    <div className="custom-divider">
                                        <span className="title-devider-half" />
                                    </div>
                                    <h1>Healthy heart, </h1>
                                    <h3>healthy family</h3>

                                    <p>
                                        Globally harness multimedia based collaboration and
                                        idea-sharing with backend products.Continually whiteboard
                                        superior opportunities via covalent scenarios.
                                    </p>
                                    <div className="hero-button mb-5 ">
                                        <button type="button" className="btn p-2 px-4">
                                            {' '}
                                            Discover More
                                        </button>
                                        <button type="button" className="btn p-2 px-4 ms-3 ">
                                            View Our Services
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div style={contentStyle}>
                    <div className="carousel-body-2">
                        <div className="container">
                            <div className="row py-5">
                                <div className=" carousel-body-item">
                                    <h4>INSPIRING BETTER HEALTH</h4>
                                    <span />
                                    <h1>Healthy heart, </h1>
                                    <h3>healthy family</h3>

                                    <p>
                                        Globally harness multimedia based collaboration and
                                        idea-sharing with backend products.Continually whiteboard
                                        superior opportunities via covalent scenarios.
                                    </p>
                                    <div className="hero-button mb-5 ">
                                        <button type="button" className="btn p-2 px-4">
                                            {' '}
                                            Discover More
                                        </button>
                                        <button type="button" className="btn p-2 px-4 ms-3 ">
                                            View Our Services
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Carousel>
    );
}

export default Hero;
