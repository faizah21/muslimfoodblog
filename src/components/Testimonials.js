import React from "react";
import icon1 from "../images/IconOne.jpg";
import icon2 from "../images/PicTwo.jpg";
import icon3 from "../images/PicThree.jpg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  TestimonialName,
} from "./style.js/TestimonialsElement";

const Testimonials = () => {
  return (
    <ServicesContainer id={"Testimonials"}>
      <ServicesH1
        data-aos="zoom-out"
        data-aos-duration="1000"
        data-aos-once="true"
        data-aos-anchor-placement="center bottom"
        data-aos-delay="100"
      >
        Customer Reviews
      </ServicesH1>
      <ServicesWrapper
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
        data-aos-anchor-placement="center bottom"
        data-aos-delay="300"
      >
        <ServicesCard>
          <ServicesIcon src={icon1} />
          <ServicesH2>Amazing Recipes</ServicesH2>
          <ServicesP>
            {" "}
            I love food but hated wasting money on takeout. Signing up for
            Faizah's blog has made cooking fun and easy for me! I don't mind
            buying as many ingredients as I need to for her recipes!
          </ServicesP>
          <TestimonialName>-Tayyab Iqbal</TestimonialName>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={icon2} />
          <ServicesH2>So Much Variety!</ServicesH2>
          <ServicesP>
            {" "}
            This blog offers so many different cusines to try. I've made food
            from different cultures now and it's refreshing to try something new
            everyday. Favorite recipes are the cookies!
          </ServicesP>
          <TestimonialName>-Tahir Iqbal</TestimonialName>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={icon3} />
          <ServicesH2>Delicious!</ServicesH2>
          <ServicesP>
            {" "}
            I love how good every recipe tastes! I prefer healthy alternatives
            but always struggled to find good recipes. This blog offers a huge
            section dedicated to nutritious food that still tastes amazing!
          </ServicesP>
          <TestimonialName>-Hafsah Ansar</TestimonialName>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Testimonials;
