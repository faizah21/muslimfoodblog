import React from "react";
import FoodOne from "../images/LatestOne.jpg";
import FoodTwo from "../images/LatestTwo.jpg";
import { scrollToBottom } from "./Scrolling";
import {
  Section,
  Container,
  Heading,
  InfoRow,
  InfoWrap,
  Image,
  InfoLink,
  Arrow,
} from "./style.js/RecentRecipesElement";

const RecentRecipes = () => (
  <Section id={"Meals"}>
    <Container>
      <Heading>
        <h1
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-once="true"
          data-aos-anchor-placement="center bottom"
        >
          View Latest Recipes
        </h1>
      </Heading>
      <InfoRow>
        <InfoWrap
          data-aos="zoom-out-up"
          data-aos-duration="1400"
          data-aos-once="true"
          data-aos-anchor-placement="center bottom"
        >
          <Image src={FoodOne} alt="home" />
          <h2>Ramadan Dinner</h2>
          <InfoLink onClick={scrollToBottom}>
            <p>View Details</p>
            <Arrow />
          </InfoLink>
        </InfoWrap>
        <InfoWrap
          data-aos="zoom-out-down"
          data-aos-duration="1400"
          data-aos-once="true"
          data-aos-anchor-placement="center bottom"
        >
          <Image
            src={FoodTwo}
            alt="home"
            css={`
              margin-top: 120px;
              @media screen and (max-width: 768px) {
                margin-top: 0px;
              }
            `}
          />
          <h2>Fruit Charcuterie Board</h2>
          <InfoLink onClick={scrollToBottom}>
            <p>View Details</p>
            <Arrow />
          </InfoLink>
        </InfoWrap>
      </InfoRow>
    </Container>
  </Section>
);

export default RecentRecipes;
