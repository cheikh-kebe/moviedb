import styled from "styled-components";
import { IMAGE_BASE_URL, HEROBANNER_SIZE } from "../../config";

export const Wrapper = styled.div`
  background: ${({ backdrop }) =>
    backdrop ? `url(${IMAGE_BASE_URL}${HEROBANNER_SIZE}${backdrop})` : "#000"};
  background-size: cover;
  background-position: center;
  height: 55rem;
  padding: 40px 20px;
  animation: animateMovieInfo 1s;

  @keyframes animateMovieInfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 20px;
  width: 100%;
  

  @media screen and (max-width: 500px) {
    display: block;

    img{ 
      width: 90%;
      height: 350px;
      margin: 12px;
    }
  }
`;

export const Text = styled.div`
  width: 100%;
  padding: 20px 40px;
  color: var(--white);
  overflow: hidden;

  .rating-directors {
    display: flex;
    justify-content: flex-start;
  }
  .score {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    background: #fff;
    color: #000;
    font-weight: 800;
    border-radius: 50%;
    margin: 0;
    @media screen and (max-width: 780px) {
      font-size: 20px;
      margin: 0;
    }
  }
  h1 {
    @media screen and (max-width: 780px) {
      font-size: var(--fontBig);
      margin: 0;
    }
    @media screen and (max-width: 480px) {
      font-size: 12px;
    }
  }
  h2 {
    @media screen and (max-width: 780px) {
      font-size: var(--fontBig);
      margin: 0;
    }
    @media screen and (max-width: 480px) {
      font-size: 12px;
    }
  }
  h3 {
    @media screen and (max-width: 780px) {
      font-size: 10px;
      margin: 0;
    }
    @media screen and (max-width: 480px) {
      font-size: 12px;
    }
  }
  p {
    font-weight: 600;
    color: white;
    @media screen and (max-width: 500px) {
      margin: 0;
      font-size: 11px;
    }
  }
  @media screen and (max-width: 500px) {
    padding: 2px;
  }
`;
