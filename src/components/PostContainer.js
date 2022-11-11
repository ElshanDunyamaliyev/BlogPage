import React from "react";
import { Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";

const PostContainer = (props) => {
  return (
    <Card className="mt-3">
      <Card.Title>Post Number: {props.post.id}</Card.Title>
      <CardHeader>Post Title: {props.post.title}</CardHeader>
      <Card.Footer>Post Body: {props.post.body}</Card.Footer>
    </Card>
  );
};

export default PostContainer;
