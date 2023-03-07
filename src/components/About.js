import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Header.css";
import electrical from "../assets/image/electrical.jpg";
import hammer from "../assets/image/hammer.jpg";
import drywall from "../assets/image/drywall.jpg";
import plaster from "../assets/image/plaster.jpg";
import paintbrush from "../assets/image/paintbrush.jpg";
import kicthen from "../assets/image/kitchen.png";
import Typewriter from "typewriter-effect";

const About = () => {
  return (
    <div id="about">
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={kicthen}
            width={100}
            height={100}
            alt="First slide"
          />
          <Carousel.Caption>
            <p className="text-white fw-bold fs-1">
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={kicthen} alt="Second slide" />
          <Carousel.Caption>
            <p className="text-white fw-bold fs-1">
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={kicthen} alt="Third slide" />
          <Carousel.Caption>
            <p className="text-white fw-bold fs-1">
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="d-flex flex-sm-row flex-column justify-content-center image align-items-center pt-5 pb-5">
        <div className="d-flex gap-4 gap-sm-1 gap-md-1 px-3">
          <div>
            <img className="electrical p-2" src={electrical} alt="" />
            <p>ELECTRICAL</p>
          </div>
          <div>
            <img className="hammer p-2" src={hammer} alt="" />
            <p>FRAMING</p>
          </div>
          <div>
            <img className="drywall p-2" src={drywall} alt="" />
            <p>DRYWALL</p>
          </div>
        </div>
        <div className="d-flex gap-4 gap-sm-1 gap-md-1">
          <div>
            <img className="plaster p-2" src={plaster} alt="" />
            <p>PLASTER</p>
          </div>
          <div>
            <img className="paintbrush p-2" src={paintbrush} alt="" />
            <p>PAINTING</p>
          </div>
          <div>
            <img className="plaster p-2" src={plaster} alt="" />
            <p>FLOORING</p>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-400">
        <h1 className="text-red-900 text-success fw-bold pb-3">OUR VALUES</h1>
        <p>
          General Services & Renovations is a company with more than 20 years
          experience in construction and renovation services in Canada, the US,
          and South America. Our vast experience and reach allows us to have a
          deep understanding of our clients and immense vision and direction for
          their renovation projects. We are happy and committed to serve you
        </p>
      </div>

      <div className="about-details p-5 text-gray-400 d-flex flex-sm-row flex-column justify-content-center image align-items-center pt-5 pb-5">
        <div className="details1">
          <h2 className="fw-semibold">
            <Typewriter
              options={{
                strings: ["TO BE HONEST AND TRUSTWORTHY"],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          {/* <h3>TO BE HONEST AND TRUSTWORTHY</h3> */}
          <p>
            Our promise to you is complete honesty. We are dedicated to
            completing your project with integrety and commitment, regardless of
            the scope of the project.
          </p>
        </div>

        <div className="details1">
          <h2 className="fw-semibold">
            <Typewriter
              options={{
                strings: ["TO BE HONEST AND TRUSTWORTHY"],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <p>
            Our promise to you is complete honesty. We are dedicated to
            completing your project with integrety and commitment, regardless of
            the scope of the project.
          </p>
        </div>

        <div className="details1">
          <h2 className="fw-semibold">
            <Typewriter
              options={{
                strings: ["TO BE HONEST AND TRUSTWORTHY"],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <p>
            Our promise to you is complete honesty. We are dedicated to
            completing your project with integrety and commitment, regardless of
            the scope of the project.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
