import React from "react";
import { Gallery } from "../components/Gallery";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import Header from "../components/Header";
import CommentList from "../components/Comment";
import About from "../components/About";

export const Website = () => {
  return (
    <div>
      <Header />
      <About />
      <Gallery />
      <CommentList />
      <Contact />
      <Footer />
    </div>
  );
};
