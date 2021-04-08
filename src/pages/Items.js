import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Button, GlobalStyle } from "../styles/styles";

export default function Items() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch("http://localhost:5000/movies");
      if (!response.ok) {
        throw new Error("HTTP Error! status: " + response.status);
      }
      const data = await response.json();
      setMovies(data);
      //console.log(data)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <GlobalStyle />
      <Container>
        {
          //check movies isn't null/undefined before rendering:
          movies &&
            movies.map((movie) => (
              <MainDIv>
                <motion.div
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <strong>Title:</strong>
                  <span>
                    {movie.title}
                    <br />
                  </span>
                  <strong>Description:</strong> {movie.description}
                  <br />
                  <strong>Genre: </strong> {movie.genre}
                  <br />
                  <strong>Year:</strong> {movie.year}
                  <br />
                  <br />
                  <img src={movie.image} alt="movies" />
                  <br />
                  <Link to={`/movies/${movie["_id"]}`}>
                    <Button>Show This Movie</Button>
                  </Link>
                </motion.div>
              </MainDIv>
            ))
        }
      </Container>

      <Footer />
    </>
  );
}
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const MainDIv = styled.div`
  padding: 40px 20px;
  color: black;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 100px;
  margin-right: 30px;
  margin-left: 20px;
  background-color: white;

  img {
    width: 60%;
  }
  img {
    width: 60%;
  }
`;
