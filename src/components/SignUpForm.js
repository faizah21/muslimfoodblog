import React from "react";
import {
  SectionContainer,
  Container,
  FormWrapper,
  FormText,
  FormH2,
  FormP,
  SuForm,
  FormLabel,
  FormInput,
  ButtonForm,
  FormSelect,
} from "./style.js/SignUpFormElement";
const SignUpForm = () => {
  return (
    <SectionContainer
      id={"SignUp"}
      data-aos="fade-left"
      data-aos-duration="1200"
      data-aos-once="true"
      data-aos-anchor-placement="center  bottom"
      data-aos-delay="400"
    >
      <Container>
        <FormWrapper>
          <FormText>
            <FormH2>Get your first meal for free!</FormH2>
            <FormP>
              Healthy, tasty and hassle-free meals are waiting for you. Start
              eating well today. You can cancel or pause anytime. And the first
              meal is on us!
            </FormP>
            <SuForm name="sign-up">
              <div>
                <FormLabel for="full-name">Full Name</FormLabel>
                <FormInput
                  id="full-name"
                  type="text"
                  placeholder="John Smith"
                  name="full-name"
                  required
                />
              </div>
              <div>
                <FormLabel for="email">Email address</FormLabel>
                <FormInput
                  id="email"
                  type="email"
                  placeholder="me@example.com"
                  name="email"
                  required
                />
              </div>

              <div>
                <FormLabel for="select-where">
                  Where did you hear from us?
                </FormLabel>
                <FormSelect id="select-where" name="select-where" required>
                  <option value="">Please choose one option:</option>
                  <option value="friends">Friends and family</option>
                  <option value="youtube">YouTube video</option>
                  <option value="podcast">Podcast</option>
                  <option value="ad">Facebook ad</option>
                  <option value="others">Others</option>
                </FormSelect>
              </div>

              <ButtonForm>Sign up now</ButtonForm>
            </SuForm>
          </FormText>
        </FormWrapper>
      </Container>
    </SectionContainer>
  );
};

export default SignUpForm;
