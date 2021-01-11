import React from "react";
import styled from "styled-components";
import Input from "../components/Input";
import Container from "../components/Container";
import Select from "../components/Select";

const Title = styled.h1`
  font-weight: bold;
  color: black;
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-size: 25px;
  font-family: "Quicksand", sans-serif;
  line-height: 10px;
`;

const Button = styled.button`
  background-color: #008080;
  border: none;
  font-family: "Quicksand", sans-serif;
  height: 40px;
  padding-left: 30px;
  padding-right: 30px;
  margin-bottom: 500px;
  margin-left: 100px;
  border-radius: 50px;
  font-weight: bold;
`;

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      origem: "",
      destino: "",
      plano: "",
      minuto: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
  }
  handleChange(e) {
    this.setState({
      origem: e.target.value,
      destino: e.target.value,
      plano: e.target.value,
      minuto: e.target.value,
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Container>
          <Title>Calculadora de Planos</Title>
          <div>
            <Input
              placeholder="Insira um DDD"
              type="number"
              style={{ marginLeft: "90px" }}
              onChange={this.handleChange}
              value={this.origem}
            ></Input>
            <Input
              placeholder="Para"
              style={{ marginLeft: "20px" }}
              type="number"
              onChange={this.handleChange}
              value={this.destino}
            ></Input>
            <Select onChange={this.handleChange}>
              <option value="" hidden>
                Selecione um plano
              </option>
              <option value="falemais30">FaleMais30</option>
              <option value="falemais60">FaleMais60</option>
              <option value="falemais120">FaleMais120</option>
            </Select>
            <Input
              placeholder="Minuto"
              style={{
                marginBottom: "120px",
                marginLeft: "20px",
                marginRight: "30px",
              }}
              value={this.minuto}
              type="number"
            ></Input>
            <Button type="submit">Enviar</Button>
          </div>
        </Container>
      </form>
    );
  }
}
export default Calculator;
