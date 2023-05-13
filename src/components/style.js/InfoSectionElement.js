import styled from "styled-components";

export const Section = styled.section`
  padding: 3rem calc((100vw - 1300px) / 2);

  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
  font-family: "Rubik", sans-serif;
  color: #555;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.2;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "2" : "1")};

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
    letter-spacing: -0.5px;
    font-size: 3rem;
    font-weight: 700;
    color: #333;
  }

  p {
    margin-bottom: 2rem;
    color: #6f6f6f;
    padding-right: 7rem;
  }
`;


export const ColumnRight = styled.div`
  order: ${({ reverse }) => (reverse ? "1" : "2")};
  padding: 4rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "2" : "1")};
  }
`;
export const GalleryItem = styled.figure`
  overflow: hidden;
  
  }
  img {
    display: block;
    width: 100%;
    transition: all 0.4s;
    &:hover {
      transform: scale(1.1);

    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
    }
  }
`;