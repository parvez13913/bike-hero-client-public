import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from "../../../../images/banner/banner-1.png"
import banner2 from "../../../../images/banner/banner-2.png"
import banner3 from "../../../../images/banner/banner-3.png"

const Banner = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First banner"
                />
                <Carousel.Caption>
                    <h3>Your One-Stop Motorcycle Aftermarket Parts Supplier </h3>
                    <p>See how our line of excellently-crafted custom motorcycle parts can match your various market needs</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second banner"
                />

                <Carousel.Caption>
                    <h3>Your One-Stop Motorcycle Aftermarket Parts Supplier </h3>
                    <p>See how our line of excellently-crafted custom motorcycle parts can match your various market needs</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third banner"
                />

                <Carousel.Caption>
                    <h3>Your One-Stop Motorcycle Aftermarket Parts Supplier </h3>
                    <p>See how our line of excellently-crafted custom motorcycle parts can match your various market needs</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;