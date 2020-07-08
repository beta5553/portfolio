import React from 'react'
import HeroImageCSS from './HeroImage.css'
import image from '../images/photographer.jpg'

const bg = {
    backgroundImage: `linear-gradient(to bottom, rgba(205, 169, 157, 0.7), rgba(205, 169, 157, 0.7)),
  url(${image})`
};

function HeroImage(props) {
    return (
        <div>
            <div className="hero-image">
                <div className="hero-text">
                    <h1>I am John Doe</h1>
                    <p>And I'm a Photographer</p>
                    <button>Hire me</button>
                    {/*<img src={image} />*/}
                </div>
            </div>
        </div>
    )
}

export default HeroImage
