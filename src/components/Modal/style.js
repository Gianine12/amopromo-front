import styled from "styled-components";

export const DivPrincipal = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;

    div {
        width: 100%;
        margin: 5px 10px 10px 10px;
    }

    div>h2 {
        font-size: 40px;
        margin: 10px;
    }

    div>button {
        position: relative;
        left: 49%;
        top: -20px;
        font-size: 20px;
        border: none;
        background-color: #ffffff;
        cursor: pointer;
    }

`
