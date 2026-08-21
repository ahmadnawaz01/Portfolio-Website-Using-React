import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useData } from "../context/DataContext";
import { MenuRounded, CloseRounded } from "@mui/icons-material";

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  padding: 16px 24px;
  position: sticky;
  top: 0;
  z-index: 50;
  background-color: transparent;
`;

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1150px;
  display: flex;
  height: 64px;
  align-items: center;
  justify-content: space-between;
  padding: 0 28px;
  background: #F4F1FA;
  border-radius: 9999px;
  box-shadow: 
    16px 16px 36px #cdc6d9,
    -16px -16px 36px #ffffff,
    inset 4px 4px 8px rgba(219, 39, 119, 0.05),
    inset -4px -4px 8px rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease-in-out;
`;

const Navlogo = styled(Link)`
  text-decoration: none;
  font-family: 'Nunito', sans-serif;
  font-weight: 900;
  font-size: 24px;
  color: #332F3A;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.04);
  }
`;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  list-style: none;
  @media screen and (max-width: 840px) {
    display: none;
  }
`;

const NavLink = styled.a`
  font-family: 'Nunito', sans-serif;
  color: #635F69;
  font-weight: 800;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  padding: 6px 12px;
  border-radius: 14px;
  
  &:hover {
    color: #DB2777;
    background: #EAE4F5;
    box-shadow: inset 3px 3px 6px #cdc6d9, inset -3px -3px 6px #ffffff;
  }
  
  &:active {
    transform: scale(0.95);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 840px) {
    display: none;
  }
`;

const GithubButton = styled.a`
  text-decoration: none;
  font-family: 'Nunito', sans-serif;
  font-weight: 800;
  font-size: 15px;
  color: #FFFFFF;
  background: linear-gradient(135deg, #F472B6 0%, #DB2777 100%);
  padding: 10px 22px;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  box-shadow: 
    8px 8px 16px #cdc6d9,
    -8px -8px 16px #ffffff,
    inset 3px 3px 6px rgba(255, 255, 255, 0.5),
    inset -3px -3px 6px rgba(219, 39, 119, 0.3);
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -75%;
    width: 50%;
    height: 200%;
    background: rgba(255, 255, 255, 0.35);
    transform: rotate(25deg);
    transition: all 0.6s ease;
    opacity: 0;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 
      12px 12px 24px #cdc6d9,
      -12px -12px 24px #ffffff,
      inset 3px 3px 6px rgba(255, 255, 255, 0.6),
      inset -3px -3px 6px rgba(219, 39, 119, 0.4);
  }

  &:hover::after {
    left: 125%;
    opacity: 1;
  }

  &:active {
    transform: scale(0.94);
    box-shadow: inset 4px 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const MobileIcon = styled.div`
  color: #332F3A;
  display: none;
  align-items: center;
  cursor: pointer;
  padding: 8px;
  border-radius: 14px;
  background: #F4F1FA;
  box-shadow: 6px 6px 12px #cdc6d9, -6px -6px 12px #ffffff;
  transition: transform 0.2s ease;
  
  &:active {
    transform: scale(0.9);
  }

  @media screen and (max-width: 840px) {
    display: flex;
  }
`;

const MobileMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 24px;
  list-style: none;
  width: calc(100% - 48px);
  max-width: 400px;
  background: #F4F1FA;
  position: absolute;
  top: 80px;
  right: 24px;
  border-radius: 32px;
  box-shadow: 
    20px 20px 40px #cdc6d9,
    -20px -20px 40px #ffffff,
    inset 4px 4px 8px rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease-in-out;
  transform: ${({ $isOpen }) => ($isOpen ? "translateY(0)" : "translateY(-20px)")};
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  z-index: ${({ $isOpen }) => ($isOpen ? "1000" : "-1000")};
  pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};
`;

const Navbar = () => {
  const { Bio } = useData();
  const [isOpen, setisOpen] = useState(false);

  return (
    <Nav>
      <NavbarContainer>
        <Navlogo to="/">
          <span>@{Bio?.name?.split(" ")[0] || "Ahmad"}</span>
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#DB2777', display: 'inline-block' }} />
        </Navlogo>

        <MobileIcon onClick={() => setisOpen(!isOpen)}>
          {isOpen ? <CloseRounded /> : <MenuRounded />}
        </MobileIcon>

        <NavItems>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="/Projects">Projects</NavLink>
          <NavLink href="#Education">Education</NavLink>
          <NavLink href="#Contact">Contact</NavLink>
        </NavItems>

        <ButtonContainer>
          <GithubButton href={Bio.github} target="_blank" rel="noopener noreferrer">
            Github Profile
          </GithubButton>
        </ButtonContainer>

        <MobileMenu $isOpen={isOpen}>
          <NavLink onClick={() => setisOpen(false)} href="#About">About</NavLink>
          <NavLink onClick={() => setisOpen(false)} href="#Skills">Skills</NavLink>
          <NavLink onClick={() => setisOpen(false)} href="#Projects">Projects</NavLink>
          <NavLink onClick={() => setisOpen(false)} href="#Education">Education</NavLink>
          <NavLink onClick={() => setisOpen(false)} href="#Contact">Contact</NavLink>
          <GithubButton href={Bio.github} target="_blank" rel="noopener noreferrer" style={{ width: '100%', textAlign: 'center', marginTop: '8px' }}>
            Github Profile
          </GithubButton>
        </MobileMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;