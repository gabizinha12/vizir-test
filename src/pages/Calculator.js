import React from "react";
import styled from "styled-components";
import Input from "../components/Input";
import Container from "../components/Container";
import Select from "../components/Select";
import Utils from "../utils/Utils";

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
  }
  handleSubmit(e) {
    e.preventDefault();
    const pricePerMinute = Utils.CalculateMinutePrice(
      this.state.origem,
      this.state.destino
    );
    const totalPrice = Utils.CalculateTotalPrice(
      pricePerMinute,
      this.state.minuto,
      this.state.plano
    );
    console.log(totalPrice);
  }
  handleOriginChange(e) {
    this.setState(
      {
        origem: e.target.value,
      },
      () => {
        console.log(this.state);
      }
    );
  }
  handleDestinationChange(e) {
    this.setState(
      {
        destino: e.target.value,
      },
      () => {
        console.log(this.state);
      }
    );
  }
  handlePlanChange(e) {
    this.setState(
      {
        plano: e.target.value,
      },
      () => {
        console.log(this.state);
      }
    );
  }
  handleMinuteChange(e) {
    this.setState(
      {
        minuto: e.target.value,
      },
      () => {
        console.log(this.state);
      }
    );
  }
  render() {
    return (
      <form onSubmit={() => this.handleSubmit.bind(this)}>
        <Container>
          <Title>Calculadora de Planos</Title>
          <div>
            <Input
              placeholder="Insira um DDD"
              type="number"
              style={{ marginLeft: "90px" }}
              onChange={this.handleOriginChange.bind(this)}
              value={this.state.origem}
              name="origem"
            ></Input>
            <Input
              placeholder="Para"
              style={{ marginLeft: "20px" }}
              type="number"
              name="destino"
              onChange={this.handleDestinationChange.bind(this)}
              value={this.state.destino}
            ></Input>
            <Select onChange={this.handlePlanChange.bind(this)}>
              <option value={this.state.plano} hidden>
                Selecione um plano
              </option>
              <option value="falemais30">FaleMais30</option>
              <option value="falemais60">FaleMais60</option>
              <option value="falemais120">FaleMais120</option>
            </Select>
            <Input
              placeholder="Minuto"
              name="minuto"
              style={{
                marginBottom: "120px",
                marginLeft: "20px",
                marginRight: "30px",
              }}
              value={this.state.minuto}
              onChange={this.handleMinuteChange.bind(this)}
              type="number"
            ></Input>
            <Button type="submit">Enviar</Button>
          </div>
          {this.state.totalPrice}
        </Container>
      </form>
    );
  }
}
export default Calculator;
