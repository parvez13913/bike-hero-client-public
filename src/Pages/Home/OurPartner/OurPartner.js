import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import partner1 from '../../../images/partners/partner-1.png';
import partner2 from '../../../images/partners/partner-2.png';
import partner3 from '../../../images/partners/partner-3.png';
import './OurPartner.css';

export default class AutoPlay extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear"
        };
        return (
            <div className="container my-5">
                <h2 className="text-center my-3">Our Partners</h2>
                <Slider {...settings}>
                    <div className="slider-image">
                        <img src={partner1} alt="" />
                    </div>
                    <div className="slider-image">
                        <img src={partner2} alt="" />
                    </div>
                    <div className="slider-image">
                        <img src={partner3} alt="" />
                    </div>
                    <div className="slider-image">
                        <img src={partner1} alt="" />
                    </div>
                    <div className="slider-image">
                        <img src={partner2} alt="" />
                    </div>
                    <div className="slider-image">
                        <img src={partner3} alt="" />
                    </div>
                </Slider>
            </div>
        );
    }
}