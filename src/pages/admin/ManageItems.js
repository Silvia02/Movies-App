import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";
import { ActionDiv, WrapperPage, Button, Title } from "../../styles/styles.js";

export default function ManageItems() {
  const [movies, setMovies] = useState([]);
  const history = useHistory();

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
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteMovie = (movieId) => {
    if (window.confirm("are you sure?")) {
      fetch("http://localhost:5000/movies/" + movieId, {
        method: "DELETE",
        headers: {
          Acept: "application/json",
          "Content-Type": "application/json",
        },
      });
      history.push("/adim/manage-movies");
    }
    fetchMovies();
  };

  const editeMovie = (id) => {
    history.push("/update-movie/" + id);
  };

  //function to pass the movies paramenters to the table
  const moviesTable = (movie, id) => {
    //two arguments

    return (
      <tr key={id}>
        <td>{movie.title}</td>
        <td>{movie.description}</td>
        <td>{movie.genre}</td>
        <td>{movie.year}</td>
        <td>
          <Button primary onClick={() => deleteMovie(movie["_id"])}>
            Delete
          </Button>
          <Button onClick={() => editeMovie(movie["_id"])}>Edit</Button>
        </td>
      </tr>
    );
  };

  return (
    <WrapperPage>
      <Title>Manage Movies</Title>
      {/* className="main-nav-manage" */}

      <ActionDiv>
        <Link to="/">Return to List</Link>
        <Link to="/adim/manage-create">Create Favorite</Link>
      </ActionDiv>

      <ReactBootStrap.Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Genre</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {/* loop through the table */}
          {movies.map(moviesTable)}
        </tbody>
      </ReactBootStrap.Table>
    </WrapperPage>
  );
}
