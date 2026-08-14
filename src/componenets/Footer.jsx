import React from "react";
import styled from "styled-components";
import { useData } from "../context/DataContext";
import {
  FacebookRounded,
  Instagram,
  LinkedIn,
  Twitter,
  GitHub,
} from "@mui/icons-material";

const FooterContainer = styled.div`
  width: 100%;
  padding: 3rem 0;
  display: flex;
  justify-content: center;
  z-index: 10;
  position: relative;
`;

const FooterWrapper = styled.div`
  width: 90%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: center;
  padding: 32px;
  background: #F4F1FA;
  box-shadow: 
    20px 20px 45px #cdc6d9,
    -20px -20px 45px #ffffff,
    inset 6px 6px 12px rgba(139, 92, 246, 0.05),
    inset -6px -6px 12px rgba(255, 255, 255, 0.9);
  border-radius: 40px;
`;

const Logo = styled.div`
  font-family: 'Nunito', sans-serif;
  font-weight: 900;
  font-size: 24px;
  color: #332F3A;
`;

const Nav = styled.ul`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  list-style: none;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
  }
`;

const NavLink = styled.a`
  font-family: 'Nunito', sans-serif;
  font-weight: 800;
  font-size: 16px;
  color: #635F69;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  padding: 6px 14px;
  border-radius: 14px;

  &:hover {
    color: #DB2777;
    background: #F4F1FA;
    box-shadow: 4px 4px 10px #d2cbdf, -4px -4px 10px #ffffff;
  }

  &:active {
    transform: scale(0.96);
    box-shadow: inset 2px 2px 5px #d2cbdf, inset -2px -2px 5px #ffffff;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 0.5rem;
`;

const SocialMediaIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #F4F1FA;
  box-shadow: 
    6px 6px 14px #d2cbdf,
    -6px -6px 14px #ffffff;
  color: #4E485B;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-3px) scale(1.05);
    color: #DB2777;
    background: #F8F6FC;
    box-shadow: 
      8px 8px 18px #c8c0d9,
      -8px -8px 18px #ffffff;
  }

  &:active {
    transform: scale(0.92);
    box-shadow: inset 3px 3px 6px #d2cbdf, inset -3px -3px 6px #ffffff;
  }
`;

const Copyright = styled.p`
  margin-top: 0.5rem;
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #635F69;
  text-align: center;
`;

const Footer = () => {
  const { Bio } = useData();
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Ahmad Nawaz</Logo>
        <Nav>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Experience">Experience</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
          <NavLink href="#Education">Education</NavLink>
        </Nav>
        <SocialMediaIcons>
          {Bio.github && (
            <SocialMediaIcon href={Bio.github} target="_blank" rel="noopener noreferrer">
              <GitHub />
            </SocialMediaIcon>
          )}
          {Bio.linkedin && (
            <SocialMediaIcon href={Bio.linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedIn />
            </SocialMediaIcon>
          )}
          {Bio.insta && (
            <SocialMediaIcon href={Bio.insta} target="_blank" rel="noopener noreferrer">
              <Instagram />
            </SocialMediaIcon>
          )}
          {Bio.facebook && (
            <SocialMediaIcon href={Bio.facebook} target="_blank" rel="noopener noreferrer">
              <FacebookRounded />
            </SocialMediaIcon>
          )}
          {Bio.twitter && (
            <SocialMediaIcon href={Bio.twitter} target="_blank" rel="noopener noreferrer">
              <Twitter />
            </SocialMediaIcon>
          )}
        </SocialMediaIcons>
        <Copyright>&copy; 2026 Ahmad Nawaz. All rights reserved.</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;