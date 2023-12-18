import React from "react";
import { Card, Button } from "react-bootstrap";
import { Nav } from "react-bootstrap";

const ImageCard = ({ image, deleteImage, saveImage }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image.urls.small} />
      <Card.Body>
        <Card.Title>{image.title?.toUpperCase()}</Card.Title>
        <Card.Text>{image.description || image.alt_description}</Card.Text>
        <Button variant="primary" onClick={() => deleteImage(image.id)}>
          Delete
        </Button>{" "}
        {!image.saved && (
          <Button variant="secondary" onClick={() => saveImage(image.id)}>
            Save
          </Button>
        )}
      </Card.Body>
      <Card.Footer className="text-center text-muted">
        {image.user?.portfolio_url ? (
          <Nav.Link target="_blank" href={image.user.portfolio_url}>
            {image.user?.name}
          </Nav.Link>
        ) : (
          image.user?.name || "No author name"
        )}
      </Card.Footer>
    </Card>
  );
};

export default ImageCard;
