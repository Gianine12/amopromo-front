import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  text-align: center;
  border-collapse: collapse ;

  
  th {
    background-color: #71C6D9;
    color: #fff;
    font-weight: bolder;
    font-size: 20px;
  }

  td, th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  
  tr:hover {
    background-color: #ddd;
  }

  td>a {
    cursor: pointer;
    color: #3F8EBF;
  }

`
