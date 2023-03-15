import styled from "styled-components";

export const DivInput = styled.div`
  display: flex;
  flex-direction: column;
  
  label{
    font-size: 15px;
    color: #C8C5C5;
    margin: 10px 0 5px 0;
  }
`;

export const InputDate = styled.input`
  border-radius: 10px;
  font-size: 15px;
  padding: 18px;
  height: 20px;
  border: none;
  background-color: #E7E5E5;
  color: #837d7b;
  box-shadow: 3px 3px 5px #DBD8D8;

  .icon{
    color: red;
  }

  :focus {
    outline: none;
  }
`