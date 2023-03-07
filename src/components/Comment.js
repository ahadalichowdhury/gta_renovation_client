import React from "react";
import Card from "react-bootstrap/Card";
import "./Header.css";

const CommentList = () => {
  const comments = [
    {
      id: 1,
      text: "This is a great article!This is a great article!This is a great article!This is a great article!This is a great article!This is a great article!This is a great article!This is a great article!This is a great article!This is a great article!This is a great article!This is a great article!",
      author: "John Doe",
    },
    {
      id: 2,
      text: "I really enjoyed reading this.I really enjoyed reading this.I really enjoyed reading this.I really enjoyed reading this.I really enjoyed reading this.I really enjoyed reading this.I really enjoyed reading this.I really enjoyed reading this.I really enjoyed reading this.I really ",
      author: "Jane Smith",
    },
    {
      id: 3,
      text: "Thanks for sharing your thoughts.Thanks for sharing your thoughts.Thanks for sharing your thoughts.Thanks for sharing your thoughts.Thanks for sharing your thoughts.Thanks for sharing your thoughts.Thanks for sharing your thoughts.",
      author: "Bob Johnson",
    },
  ];
  return (
    <>
      <h1 className="text-center text-success pt-5 pb-5 fw-bold" id="review">
        Comments From User
      </h1>
      <div className="container d-flex align-items-center flex-sm-row flex-column justify-content-between">
        {comments.map((comment) => (
          <Card style={{ width: "18rem" }} className="pt-3">
            <Card.Body className="cardStyle text-white">
              <Card.Text>{comment.text}</Card.Text>
              <Card.Subtitle className="mb-2 text-white">
                {comment.author}
              </Card.Subtitle>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

export default CommentList;
