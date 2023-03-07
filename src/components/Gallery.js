import React from "react";

export const Gallery = () => {
  const images = [
    {
      before:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png",
      after:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png",
    },
    {
      before:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png",
      after:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png",
    },
    {
      before:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png",
      after:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png",
    },
    {
      before:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png",
      after:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png",
    },
    // add more objects as needed
  ];
  return (
    <div className="container my-5" id="work">
      <h1 className="text-center mb-5 fw-bold text-success fs-">Our Work</h1>
      {images.map((image, index) => (
        <div className="row mb-4" key={index}>
          <div className="col-md-6">
            <p className="fw-bold text-danger">Before</p>
            <img src={image.before} className="img-fluid" alt="Before" />
          </div>
          <div className="col-md-6">
            <p className="fw-bold text-danger">After</p>
            <img src={image.after} className="img-fluid" alt="After" />
          </div>
          <hr className="my-4 w-100" />
        </div>
      ))}
    </div>
  );
};
