import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";
import ImageCard from "./components/ImageCard";
import Welcome from "./components/Welcome";
import Spinner from "./components/Spinner";
import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_URL = process.env.REACT_APP_API_URL || "http://127.0.0.1:5050";

const App = () => {
  const [word, setWord] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const savedImagesDownloaded = () => toast.success("Saved Images Downloaded!");
  const newImageFound = () => toast.info(`New image ${word.toUpperCase()} was found`);
  const imageSaved = (image) => toast.info(`Image ${image.title.toUpperCase()} was saved`);
  const imageDeleted = (image) =>
    toast.warn(`Image ${image.title.toUpperCase()} was deleted`);
  const toastError = (e) => toast.error(`An error occurred: ${e.message}`);

  const getSavedImages = async () => {
    try {
      const res = await axios.get(`${API_URL}/images`);
      setImages(res.data || []);
      setLoading(false);
      savedImagesDownloaded();
    } catch (error) {
      toastError(error);
    }
  };

  useEffect(() => {
    if (loading) {
      getSavedImages();
    }
  }, []);

  const handleImageDelete = async (id) => {
    const imageToBeDeleted = images.find((image) => image.id === id);
    try {
      const res = await axios.delete(`${API_URL}/images/${id}`);
      if (res.data?.deleted_id) {
        setImages(images.filter((image) => image.id !== id));
        imageDeleted(imageToBeDeleted);
      }
    } catch (error) {
      toastError(error);
    }
  };

  const handleSaveImage = async (id) => {
    const imageToBeSaved = images.find((image) => image.id === id);
    imageToBeSaved.saved = true;
    try {
      const res = await axios.post(`${API_URL}/images`, imageToBeSaved);
      if (res.data?.inserted_id) {
        setImages(
          images.map((image) =>
            image.id === id ? { ...image, saved: true } : image
          )
        );
        console.log(imageToBeSaved);
        imageSaved(imageToBeSaved);
      }
    } catch (error) {
      toastError(error);
    }
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`${API_URL}/new-image?query=${word}`);
      setImages([{ ...res.data, title: word }, ...images]);
      newImageFound();
    } catch (error) {
      toastError(error);
    }
    setWord("");
  };

  return (
    <div>
      <Header title="Images Gallery" />
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Search
            word={word}
            setWord={setWord}
            handleSubmit={handleSearchSubmit}
          />
          <Container className="mt-4">
            {images.length ? (
              <Row xs={1} md={2} lg={3}>
                {images.map((image, i) => (
                  <Col key={i} className="pb-3">
                    <ImageCard
                      image={image}
                      deleteImage={handleImageDelete}
                      saveImage={handleSaveImage}
                    />
                  </Col>
                ))}
              </Row>
            ) : (
              <Welcome />
            )}
          </Container>
        </>
      )}
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default App;
