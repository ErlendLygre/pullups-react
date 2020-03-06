import styled from "styled-components";

const Button = styled.button`
    width: 100%;
    max-width: 540px;
    background-color: #fa5333;
    font-family: 'Changa One';
    border: none;
    color: snow;
    font-size: 1.3rem;
    text-transform: uppercase;
    padding: 10px;
    cursor: pointer;
    &:hover {
        opacity: .9;
        transform: scale(1.02);
        transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
    }
`

export default Button