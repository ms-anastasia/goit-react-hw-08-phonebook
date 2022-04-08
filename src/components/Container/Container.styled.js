import styled from "styled-components";
import img from './background4.jpg';

export const ContainerBox = styled.div`
    margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  color: #212121;
  background-color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;