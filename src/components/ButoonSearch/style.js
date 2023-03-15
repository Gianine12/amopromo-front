import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size: 20px;
  padding: 10px;
  width: 100px;
  height: 37px;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 18px;
  font-weight: 900;
  background-color: #f00000;
  color: #ffffff;
  border: none;
  box-shadow: 3px 3px 5px #DBD8D8;

  svg {
    width: 25px;
    height: 25px;
  }

  :hover{
    background-color: #6AB05A;
    color: #ffffff
  }

  :disabled {
    background-color: #B0B4AF;
    cursor: default;
  }
`
