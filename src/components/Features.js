import React from "react";
import { Button } from "./style.js/Button";
import ImageOne from "../images/Cookbook.jpg";
import { scrollToBottom } from "./Scrolling";
import {
  Section,
  Container,
  Wrap,
  ColumnLeft,
  ColumnRight,
  Content,
  Image,
} from "./style.js/FeaturesElement";

const Features = () => {
  return (
    <Section>
      <Container>
        <Wrap>
          <ColumnLeft>
            <Content
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="300"
              data-aos-once="true"
              data-aos-anchor-placement="center bottom"
            >
              <h1>Free Cookbook When You Sign Up!</h1>
              <p>
                Sign up now and recieve a free cookbook with access to all
                recipes on the blog. Whether you need a hard copy or prefer
                online recipes, signing up today will grant you access to both!
              </p>
              <Button primary="true" round="true" onClick={scrollToBottom}>
                Sign Up
              </Button>
            </Content>
          </ColumnLeft>
          <ColumnRight>
            <Image
              src={ImageOne}
              data-aos="fade-left"
              data-aos-duration="1200"
              data-aos-once="true"
              data-aos-anchor-placement="center  bottom"
            />
          </ColumnRight>
        </Wrap>
      </Container>
    </Section>
  );
};

export default Features;
