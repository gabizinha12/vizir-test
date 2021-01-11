import styled from "styled-components";

export const Input = styled.input`
  @import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap")
    width: 100% line-height: auto;
  height: 50px;
  margin-top: 80px;
  border-radius: 24px;
  padding: 3px;
  border: #dcdcdc;
  text-align: center;
  font-size: 18px;
  font-family: "Quicksand", sans-serif;

  &::placeholder {
    color: #008080;
  }
`;
export default Input;
