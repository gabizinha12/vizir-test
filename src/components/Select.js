import styled from "styled-components";

export const Select = styled.select`
  width: 22%;
  height: 50px;
  background: white;
  padding: 3px;
  font-size: 18px;
  border-radius: 30px;
  margin-top: 80px;
  margin-left: 10px;
  padding-left: 50px;
  border: #dcdcdc;
  color: #008080;
  text-align: center;

  option {
    color: #008080;
    background: white;
    display: flex;
    white-space: pre;
    padding: 10px;
    padding-right: 3px;
    font-family: "Quicksand", sans-serif;
    text-align: center;
  }
`;
export default Select;
