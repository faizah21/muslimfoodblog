import React from "react";
import { InfoData } from "../data/InfoData";
import {
  Section,
  Container,
  ColumnLeft,
  ColumnRight,
  GalleryItem,
} from "./style.js/InfoSectionElement";

const InfoSection = ({
  heading,
  paragraphOne,
  paragraphTwo,
  reverse,
  delay,
}) => {
  return (
    <Section id={"About"}>
      <Container>
        <ColumnLeft
          reverse={reverse}
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
          data-aos-delay={delay}
          data-aos-anchor-placement="center bottom"
        >
          <h1>{heading}</h1>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
        </ColumnLeft>
        <ColumnRight
          reverse={reverse}
          data-aos="zoom-out"
          data-aos-duration="1000"
          data-aos-once="true"
          data-aos-delay={delay}
          data-aos-anchor-placement="center bottom"
        >
          {InfoData.image.map((item, index) => (
            <GalleryItem key={index}>
              {" "}
              <img src={item} alt="home" />
            </GalleryItem>
          ))}
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default InfoSection;
