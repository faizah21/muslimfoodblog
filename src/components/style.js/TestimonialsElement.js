import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  font-family: "Rubik", sans-serif;
  line-height: 1;
  font-weight: 400;
  padding: 9rem;
  @media screen and (max-width: 1300px) {
    height: auto;
    padding: 4rem;
  }
  @media screen and (max-width: 768px) {
    padding: 4rem;
  }
`;
export const ServicesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  column-gap: 6.4rem;
  row-gap: 9.6rem;
  max-width: 120rem;
  margin: 0 auto;
  @media screen and (max-width: 1200px) {
    gap: 3rem;
  }
  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr;
    row-gap: 3rem;
  }
`;
export const ServicesCard = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.075);
  border-radius: 11px;
  overflow: hidden;
  transition: all 0.4s;

  &:hover {
    transform: translateY(-1.2rem);
    box-shadow: 0 3.2rem 6.4rem rgba(0, 0, 0, 0.06);
    cursor: pointer;
  }
`;
export const ServicesIcon = styled.img`
  height: 120px;
  width: 120px;
  margin-bottom: 10px;
`;
export const ServicesH1 = styled.h1`
  max-width: 120rem;
  margin: 0 auto;
  text-align: revert;
  font-size: 2.5rem;
  color: #45260a;
  margin-bottom: 64px;
  @media screen and max-width(480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  color: #333;
  font-weight: 600;
`;
export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
  padding: 3.2rem 3.2rem 1rem;
  line-height: 1.6;
  color: #444;
`;
export const TestimonialName = styled.p`
  font-size: 1rem;
  color: #6f6f6f;
  padding-bottom: 2rem;
`;