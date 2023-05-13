import styled from "styled-components";

export const SectionContainer = styled.section`
  padding: 4.8rem 0;
  margin: 3rem 5rem;
`;
export const Container = styled.div`
  max-width: 100rem;
  padding: 0 3.2rem;
  margin: 0 auto;
  @media screen and (max-width: 1000px) {
    max-width: 60rem;
    padding: 0;
  }
`;
export const FormWrapper = styled.div`
  grid-template-columns: 2fr 1fr;
  box-shadow: 0 2rem 3rem rgba(0, 0, 0, 0.1);
  border-radius: 11px;
  background-image: linear-gradient(to right bottom, #eb984e, #e67e22);
  overflow: hidden;
  margin-bottom: 3.2rem;
  padding: 2rem 3rem;
  
cta
`;
export const FormText = styled.div`
  color: #45260a;
 
  cta-text-box 
`;
export const FormH2 = styled.h2`
margin-bottom: 2.2rem;
font-size: 3.4rem;
font-family: "Rubik", sans-serif;
text-align: center;
  heading-secondary
`;
export const FormP = styled.p`
font-size: 1.2rem;
line-height: 1.8;
margin-bottom: 3.6rem;
padding: 0 12.3rem;
@media screen and (max-width: 1060px) {
  line-height: 1.4;
  padding: 0 2rem; 
      }

cta-text
`;
export const SuForm = styled.form`
display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 3.2rem;
  row-gap: 2.4rem;
  padding-left: 5rem;
  @media screen and (max-width: 1000px) {
    display: flex; 
    flex-direction: column; 
    padding: 1.5rem; 
  }
cta-form
`;
export const FormLabel = styled.label`
  display: block;
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 1.2rem;
`;
export const FormInput = styled.input`
  width: 75%;
  padding: 1rem;
  font-size: 1rem;
  font-family: inherit;
  color: inherit;
  border: none;
  background-color: #fdf2e9;
  border-radius: 9px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;
export const FormSelect = styled.select`
  width: 75%;
  padding: 1.2rem;
  font-size: 1.2rem;
  font-family: inherit;
  color: inherit;
  border: none;
  background-color: #fdf2e9;
  border-radius: 9px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;
export const ButtonForm = styled.button`
  width: 75%;
  background-color: #45260a;
  color: #fdf2e9;
  align-self: end;
  display: inline-block;

  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 1.6rem 3.2rem;
  border-radius: 9px;
  border: none;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.3s;
  @media screen and (max-width: 1000px) {
    padding: 1rem;
    align-self: start;
  }
  @media screen and (max-width: 513px) {
    padding: 0.6rem;
    align-self: start;
  }
`;