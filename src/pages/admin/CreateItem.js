import React from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button } from "../../styles/styles.js";
import {
  GlobalStyle,
  StlyedFormWrappper,
  StlyedForm,
  StlyedInput,
  Title,
} from "../../styles/styles.js";

export default function CreateItem() {
  const [movie, setMovie] = useState({});
  const history = useHistory();

  const createMovie = async (e) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:5000/movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(movie),
      });
      //back to the '/adim/manage-movies page
      history.push("/adim/manage-movies");
    } catch (error) {
      console.log(error);
    }
  };

  //This method takes all changes on the input form
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
      <Title>Create Movie</Title>

      <StlyedFormWrappper>
        <StlyedForm onSubmit={createMovie}>
          <label htmlFor="title">Title</label>
          <StlyedInput
            type="text"
            name="title"
            value={movie.title}
            placeholder="Title"
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
            value={movie.image}
            placeholder="image URL"
            onChange={handleChange}
          />

          <br />
          <br />

          <Button>Create Movie Lista</Button>
          <br />
          <br />
          <Link to="/adim/manage-movies">
            <Button>&larr; Back</Button>
          </Link>
        </StlyedForm>
      </StlyedFormWrappper>
    </>
  );
}
