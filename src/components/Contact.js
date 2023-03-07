import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/fontawesome-free-solid";
import facebookLogo from "../assets/image/facebookLogo.png";
import map from "../assets/image/map.jpeg";
export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hh2r4bi",
        "template_07odaif",
        form.current,
        "PLOAoBhJ4OFMp7-Y2"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="hire_us">
      <div>
        <h1 className="text-center text-success fw-bold pt-5 pb-5">
          Contact Us
        </h1>
      </div>
      <div className="container-fluid d-flex flex-sm-row flex-column justify-content-between">
        <div className="p-4 col-md-4">
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-3">
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <input
                className="form-control"
                type="text"
                id="name"
                required
                name="user_name"
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                className="form-control"
                type="email"
                id="email"
                required
                name="user_email"
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="message">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                required
                name="message"
              />
            </div>
            <button className="btn btn-danger" type="submit" value="Send">
              submit
            </button>
          </form>
        </div>

        <div className="p-4 col-md-4 col-sm-12">
          <p className="fs-2 fw-semibold">
            General Services & Renovations Washington Aellen, Owner
          </p>
          <div>
            <p>
              <FontAwesomeIcon icon={faPhone} /> 01728704205{" "}
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> washington@gtarenovation.com
            </p>
          </div>
          <div className="d-flex pt-4 p-5 justify-content-evenly">
            <a href="https://www.facebook.com">
              <img
                src={facebookLogo}
                height={"50"}
                width={"50"}
                alt="facebook logo"
              />
            </a>

            <a href="https://www.facebook.com">
              <img
                src={facebookLogo}
                height={"50"}
                width={"50"}
                alt="company logo"
              />
            </a>
          </div>
        </div>
        <div className="p-4 col-md-4 col-sm-12">
          <p className="fs-2 fw-semibold">
            We service Toronto and the GTA! Contact us for a free quote.
          </p>

          <img
            src={map}
            alt="our services area"
            height={"300"}
            width={"300"}
            className="square border border-success "
          />
        </div>
      </div>
    </div>
  );
};
