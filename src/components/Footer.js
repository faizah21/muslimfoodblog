import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { Link } from "react-scroll";
import { Button } from "./style.js/Button";
import { scrollToTop, scrollToBottom } from "./Scrolling";
import {
  Section,
  Container,
  FooterTop,
  Quote,
  FooterInfo,
  FooterBottom,
  SocialIcons,
  Youtube,
  Github,
  LinkedIn,
  Facebook,
  Contact,
} from "./style.js/FooterElement";

const Footer = () => {
  return (
    <Section>
      <Container>
        <FooterTop>
          <Quote>
            <h3>
              Discover A New Love <br /> For Cooking Today{" "}
            </h3>
          </Quote>
          <FooterInfo>
            <h4>Resources</h4>
            <Link
              to={"SignUp"}
              spy={true}
              exact={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              FAQ
            </Link>
            <Link onClick={scrollToTop}>Support</Link>
            <Link onClick={scrollToTop}>Recipe Directory</Link>
            <Link onClick={scrollToTop}>Privacy Terms</Link>
          </FooterInfo>
          <FooterInfo>
            <h4>Account</h4>
            <Link onClick={scrollToBottom}>Create account</Link>
            <Link onClick={scrollToBottom}>Sign in</Link>
            <Link onClick={scrollToBottom}>iOS app</Link>
          </FooterInfo>
        </FooterTop>
        <FooterBottom>
          <SocialIcons>
            <a
              href="//www.google.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Youtube />
            </a>
            <a
              href="//github.com/faizah21"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Github />
            </a>
            <a
              href="//www.google.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Facebook />
            </a>
            <a
              href="//www.linkedin.com/in/faizah-ansar-378243174"
              rel="noopener noreferrer"
              target="_blank"
            >
              <LinkedIn />
            </a>
          </SocialIcons>
          <Contact>
            <Button onClick={scrollToBottom}>
              Let's Chat <IoMdArrowRoundForward />
            </Button>
          </Contact>
        </FooterBottom>
      </Container>
    </Section>
  );
};

export default Footer;
