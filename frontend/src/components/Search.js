import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Search = ({ word, setWord, handleSubmit }) => {
  return (
    <Container className="mt-4">
      <Form onSubmit={handleSubmit}>
        <Row className="justify-content-center">
          <Col xs={9}>
            <Form.Control 
              type="text"
              value={word}
              onChange={(e) => setWord(e.target.value)}
              placeholder="Search for new image..." 
            />
          </Col>
          <Col>
            <Button variant="outline-primary" type="submit">Search</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Search;
