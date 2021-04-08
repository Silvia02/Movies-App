import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../styles/styles.js";
import { motion } from "framer-motion";
import styled from "styled-components";

// det är en sida
export default function Item({ match }) {
  const [movie, setMovie] = useState({});

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

  return (
    <article class="wrapper">
      <motion.section
        layout
        transition={{
          layoutX: { duration: 0.3 },
          layoutY: { delay: 0.2, duration: 0.3 },
        }}
      >
        <DivSection>
          <strong>Title: </strong>
          {movie.title} <br />
          <strong>Description: </strong>
          {movie.description} <br />
          <strong>Genre: </strong>
          {movie.genre}
          <br />
          <strong>Year: </strong>
          {movie.year} <br />
          <img src={movie.image} alt="movies" />
        </DivSection>
      </motion.section>

      <Link to="/">
        <Button>Return to Movies</Button>
      </Link>
    </article>
  );
}

const DivSection = styled(motion.section)`
  margin: auto;
`;
