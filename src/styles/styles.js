import styled, { createGlobalStyle } from "styled-components";
// #F9F5C8 btn hover ,  #3A1F03 nav color
export const ActionDiv = styled.ul`
  list-style-type: none;
  display: flex;
  float: right;
  justify-content: space-around;
  justify-items: center;
  width: 30%;
  font-weight: 700;

  a:link,
  a:visited {
    background-color: #3a1f03;
    color: #ffffff;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
  }

  a:hover,
  a:active {
    background-color: #a5d2df;
    color: #000000;
  }
`;
export const Button = styled.button`
background: ${(props) => (props.primary ? "#AB3428" : "#3B8EA5")};
color: ${(props) => (props.primary ? "white" : "white")};
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
transition-duration: 0.4s;
border: none;  
&:hover {
   {
    background-color: #3A1F03;
    color: white;
    }
`;

export const WrapperPage = styled.div`
  padding: 4em;
`;

export const Title = styled.h2`
  text-align: center;
  color: #3b8ea5;
  font-weight: 900;
`;
export const GlobalStyle = createGlobalStyle`
    html{
       height: 100%
    }
    body{
       
    font-family: Arial, Helvetica, sans-serif;
    background: linear-gradient(0.25turn, #020412, #ebf8e1, black);
       
   
}

`;

export const StlyedFormWrappper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
`;
export const StlyedForm = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background-color: #ffff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;
export const StlyedInput = styled.input`
  display: block;
  width: 100%;
  background-color: #eee;
  border-radius: 5px;
  border: 1px solid #ddd;
  padding: 5px;
`;
