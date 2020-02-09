import React, { Component } from 'react';
import { Link } from 'react-router-dom';


/* Credit - https://codepen.io/salehriaz/pen/erJrZM */
export default class Default extends Component {
    render() {
        return (
            <div className="bg-purple">
                <div className="stars">
                    <div className="custom-navbar">

                    </div>
                    <div className="central-body">
                        <img className="image-404" alt="404" src="/img/404.svg" width="300px" />
                        <Link to="/" className="btn-go-home">GO BACK HOME</Link>
                    </div>
                    <div className="objects">
                        <img className="object_rocket" alt="rocket" src="/img/rocket.svg" width="40px" />
                        <div className="earth-moon">
                            <img className="object_earth" alt="earth" src="/img/earth.svg" width="100px" />
                            <img className="object_moon" alt="moon" src="/img/moon.svg" width="80px" />
                        </div>
                        <div className="box_astronaut">
                            <img className="object_astronaut" alt="astronaut" src="/img/astronaut.svg" width="140px" />
                        </div>
                    </div>
                    <div className="glowing_stars">
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                    </div>
                </div>
            </div>
        );
    }
}