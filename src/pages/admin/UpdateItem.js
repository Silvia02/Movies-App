// VG del
import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  GlobalStyle,
  StlyedFormWrappper,
  StlyedForm,
  StlyedInput,
  Button,
  Title,
} from "../../styles/styles.js";

export default function UpdateItem({ match }) {
  // console.log(match);
  // console.log('PunId:', match.params.id);
  const [movie, setMovie] = useState({});
  const history = useHistory();

  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/movies/" + match.params.id
      );
      if (!response.ok) {
        throw new Error("HTTP Error! status: " + response.status);
      }
      const data = await response.json();
      setMovie(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateMovie = async (e) => {
    e.preventDefault();

    try {
      await fetch("http://localhost:5000/movies/" + movie["_id"], {
        method: "PATCH", // GET, POST, PATCH, DELETE
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(movie), // body data type must match "Content-Type" header
      });
    } catch (error) {
      console.log(error);
    }
    history.push("/adim/manage-movies");
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setMovie({
      ...movie,
      [name]: value,
    });
  };

  return (
    <>
      <GlobalStyle />
      <Title>Update Movies</Title>
      <StlyedFormWrappper>
        <StlyedForm onSubmit={updateMovie}>
          <label htmlFor="title">Title</label>
          <StlyedInput
            type="text"
            name="title"
            value={movie.title}
            onChange={handleChange}
          />
          <label htmlFor="description">Description</label>
          <StlyedInput
            type="text"
            name="description"
            value={movie.description}
            placeholder="description"
            onChange={handleChange}
          />
          <label htmlFor="genre">Genre</label>
          <StlyedInput
            type="text"
            name="genre"
            value={movie.genre}
            placeholder="genre"
            onChange={handleChange}
          />

          <label htmlFor="year">Year</label>
          <StlyedInput
            type="number"
            name="year"
            value={movie.year}
            placeholder="year"
            onChange={handleChange}
          />
          <label htmlFor="image">Image</label>
          <StlyedInput
            type="text"
            name="image"
            value={movie.iamge}
            placeholder="image URL"
            onChange={handleChange}
          />

          <Button>Update Lista</Button>
        </StlyedForm>
      </StlyedFormWrappper>
    </>
  );
}
