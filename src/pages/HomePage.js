import React from "react";
import styled from "styled-components";

const Home = styled.div`
  background-color: #d3d3d3;
  height: 100vh;
  display: flex;
  padding: 0rem 1rem;
  flex-direction: column;
`;
const Title = styled.h1`
  font-weight: bold;
  color: black;
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-size: 70px;
  font-family: "Assistant", sans-serif;
  line-height: 50px;
`;

class HomePage extends React.Component {
  render() {
    return (
      <Home>
        <Title>Telzir</Title>
      </Home>
    );
  }
}

export default HomePage;
