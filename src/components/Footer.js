import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <div>
      <FooterPage>
        <Title>Copyright © 2021 Movie app.</Title>
      </FooterPage>
    </div>
  );
}

const FooterPage = styled.div`
  list-style-type: none;
  background-color: #060c37;
  position: fixed;
  left: 0;
  bottom: 0;

  width: 100%;
  color: white;
  text-align: center;
`;
const Title = styled.h1`
  text-align: center;
  font-weight: bold;
  color: white;
  padding: 15px 16px;
  font-size: 1em;
`;
