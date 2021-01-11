import React from "react";
import styled from "styled-components";
import Input from "../components/Input";
import Container from "../components/Container";
import Select from "../components/Select";

const Title = styled.h1`
  font-weight: 55;
  color: black;
  margin-bottom: 0;
  font-size: 25px;
  line-height: 10px;
`;

const Button = styled.button``;

class Calculator extends React.Component {
  render() {
    return (
      <form action="">
        <Container>
          <Title>Calculadora de Planos</Title>
          <Input placeholder="Insira um DDD" type="number"></Input>
          <Input
            placeholder="Para"
            style={{ marginLeft: "20px" }}
            type="number"
          ></Input>
          <Select>
            <option value="" hidden>
              Selecione um plano
            </option>
            <option value="1">FaleMais30</option>
            <option value="2">FaleMais60</option>
            <option value="3">FaleMais120</option>
            <option value="4">FaleMais130</option>
          </Select>
          <Input
            placeholder="Minuto"
            style={{
              marginBottom: "120px",
              marginLeft: "20px",
              marginRight: "30px",
            }}
            type="number"
          ></Input>
        </Container>
      </form>
    );
  }
}
export default Calculator;
