import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Home() {
  return (
    <Navegation>
      <Link to="/">Movies</Link>
      <Link to="/adim/manage-movies">Admin</Link>
    </Navegation>
  );
}

const Navegation = styled.nav`
  list-style-type: none;
  overflow: hidden;
  margin: 0;
  padding: 0;
  background-color: #060c37;
  a {
    float: left;
    width: 200px;
    display: inline;
    font-weight: bold;
    color: white;
    padding: 14px 16px;
    text-decoration: none;
  }

  a:hover {
    background-color: #a5d2df;
    color: black;
  }
`;
