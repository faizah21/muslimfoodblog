import styled from "styled-components";

export const Section = styled.section`
  background: #fae5d3;
  padding: 8rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Container = styled.div`
background: #fff; 
padding; 3rem 2rem; 
position: relative; 
`;
export const Wrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
export const ColumnLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0px -15px;
  justify-content: flex-start;
  padding: 1rem;
`;
export const Content = styled.div`
  flex: 0 0 50%;

  @media screen and (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: 250px;
  }
  h1 {
    margin-bottom: 2rem;
    font-size: 2.1rem;
    color: rgb(51, 51, 51);
    letter-spacing: 0.8px;
    font-family: "Rubik", sans-serif;
    font-weight: 600;
  }
  p {
    margin-bottom: 1rem;
    font-family: "Rubik", sans-serif;
    color: #555;
    color: rgb(85, 85, 85);
    font-size: 1rem;
    margin-bottom: 4rem;
    padding-right: 1rem;
    line-height: 1.4rem;
  }
`;
export const ColumnRight = styled.div`
  position: absolute;
  top: -80px;
  right: 0;
  max-width: 850px;
  height: 140%;
  width: 45%;
  padding-left: 1rem;
  @media screen and (max-width: 768px) {
    height: 320px;
    top: -65px;
    width: 80%;
    margin: 0 auto;
    left: 0;
  }
`;
export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;