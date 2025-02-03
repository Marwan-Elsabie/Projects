import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  // Custom styles for circular progress bars
  const circleStyles = {
    path: {
      stroke: 'url(#gradient)',
      strokeLinecap: 'round',
      transition: 'stroke-dashoffset 0.5s ease 0s',
    },
    trail: {
      stroke: '#d6d6d6',
      strokeLinecap: 'round',
    },
  };
  

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Here you can find skills that I developed during my career.<br /> And still working on them.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                <CircularProgressbar value={85} text={`${85}%`} styles={circleStyles} 
  style={{ width: 80, height: 80 }} />

                  <h5>Front-End</h5>
                </div>
                <div className="item">
                <CircularProgressbar value={60} text={`${60}%`} styles={circleStyles} 
                     style={{ width: 80, height: 80 }} />

                  <h5>Back-End</h5>
                </div>
                <div className="item">
                <CircularProgressbar value={90} text={`${90}%`} styles={circleStyles} 
                    style={{ width: 80, height: 80 }} />

                  <h5>Data Scince</h5>
                </div>
                <div className="item">
                <CircularProgressbar value={80} text={`${80}%`} styles={circleStyles} 
                    style={{ width: 80, height: 80 }} />

                  <h5>Software Development</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
      <svg width="0" height="0">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'purple', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'pink', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
};
