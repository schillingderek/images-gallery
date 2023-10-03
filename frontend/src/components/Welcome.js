import React from "react";
import { Button } from "react-bootstrap";

const Welcome = () => {
  return (
    <div class="bg-light p-5 rounded-lg m-3">
      <h1>Images Gallery</h1>
      <p>
        This is a simple application that retrieves photos using the Unsplash API.
        <br />
        In order to start, enter any search term in the input field!
      </p>
      <p>
        <Button bsStyle="primary" href="https://unsplash.com" target="_blank">
          Learn more
        </Button>
      </p>
    </div>
  );
};

export default Welcome;
