import styled from "styled-components";

export const Morcego = styled.div`
    width: 50px;
    height: 20px;

    position: absolute;
    border-radius: 10px;
    transform: rotate(-20deg);
    animation: fly 4s linear infinite;

    background-image: url("../assets/bat.webp");

    @keyframes fly {
        0% {
            left: -50px;
            top: 50px;
            transform: rotate(-20deg);
        }
        50% {
            left: 100%;
            top: 10px;
            transform: rotate(20deg);
        }
        100% {
            left: -50px;
            top: 50px;
            transform: rotate(-20deg);
        }
    }
`;
