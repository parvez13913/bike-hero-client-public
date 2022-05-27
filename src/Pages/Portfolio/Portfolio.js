import { Button } from 'bootstrap';
import React from 'react';
import { Carousel, ProgressBar } from 'react-bootstrap';
import developerPhoto from '../../images/developerPhoto.jpg';
import project1 from '../../images/projects-photo/photography.PNG';
import project2 from '../../images/projects-photo/perfume.PNG';
import project3 from '../../images/projects-photo/bike.PNG';
import './Portfolio.css';

const Portfolio = () => {
    return (
        <div className='container'>
            <div className='about-section'>
                <div className='developer-photo'>
                    <img className='rounded-pill mt-5' src={developerPhoto} alt="" />
                </div>
                <div>
                    <h1>Parvez Rahman</h1>
                    <p>Hi I am Parvez Rahman. I am an honors first year student of Chemistry Department of Jhenaidah K.C. College. My weakness over programming since I was in school. I have decided to learn web development by thinking a lot and I am learning well. I want to be a good person and a good web developer.I want to develop my skills more in the next 5 months and get a good Jobs. I will do whatever it takes to develop my own skills.</p>
                    <div className='text-color'>
                        <h5>Frontend Developer, React JS.</h5>
                        <h6>AGE: 21 </h6>
                        <h6>PHONE: (+880) 1977328607</h6>
                        <h6>EMAIL: parvezz13913@gmail.com</h6>
                        <h6>ADDRESS: jhenaidah, Khulna,Bangladesh</h6>
                    </div>
                </div>
            </div>
            <div className='text-center container my-5'>
                <h3 className='my-3'>My Skill</h3>
                <div className='border'>
                    <div className='w-50 mx-auto my-3'>
                        <h4>HTML</h4>
                        <ProgressBar animated now={90} />
                    </div>
                    <div className='w-50 mx-auto my-3'>
                        <h4>CSS</h4>
                        <ProgressBar animated now={85} />
                    </div>
                    <div className='w-50 mx-auto my-3'>
                        <h4>BOOTSTRAP</h4>
                        <ProgressBar animated now={75} />
                    </div>
                    <div className='w-50 mx-auto my-3'>
                        <h4>TAILWIND</h4>
                        <ProgressBar animated now={50} />
                    </div>
                    <div className='w-50 mx-auto my-3'>
                        <h4>JAVASCRIPT</h4>
                        <ProgressBar animated now={70} />
                    </div>
                    <div className='w-50 mx-auto mt-3'>
                        <h4>REACT</h4>
                        <ProgressBar animated now={64} />
                    </div>
                    <div className='w-50 mx-auto my-3'>
                        <h4>Node Js</h4>
                        <ProgressBar animated now={20} />
                    </div>
                    <div className='w-50 mx-auto my-3'>
                        <h4>Express</h4>
                        <ProgressBar animated now={30} />
                    </div>
                    <div className='w-50 mx-auto my-3'>
                        <h4>MongoDb</h4>
                        <ProgressBar animated now={40} />
                    </div>
                </div>
            </div>

            <div className='my-5 container'>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={project1}
                            alt="First banner"
                        />
                        <Carousel.Caption>
                            <button className='btn bg-dark'>
                                <a className='text-decoration-none' href="https://basic-photography.web.app/" target="_blank" rel="noopener noreferrer">View My Projects</a>
                            </button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={project2}
                            alt=""
                        />

                        <Carousel.Caption>
                            <button className='btn bg-dark'>
                                <a className='text-decoration-none' href="https://perfume-hero.web.app/" target="_blank" rel="noopener noreferrer">View My Projects</a>
                            </button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={project3}
                            alt=""
                        />

                        <Carousel.Caption>
                            <button className='btn bg-dark'>
                                <a className='text-decoration-none' href="https://perfume-hero.web.app/" target="_blank" rel="noopener noreferrer">View My Projects</a>
                            </button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Portfolio;