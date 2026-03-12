import React from 'react'
import styled, { useTheme } from 'styled-components'
import { Link } from 'react-router-dom';
import { Bio } from "../data/constants"
import { MenuRounded } from "@mui/icons-material"
import { useState } from 'react';


const Nav = styled.div`
background-color: ${({ theme }) => theme.bg};
display: flex;
height: 80px;
align-items: center;
justify-content: center;
font-size: 1rem;
padding:20px;
position: sticky;
top:0;
z-index:10;
color: white;
`;

const NavbarContainer = styled.div`
width: 100%;
max-width: 1200px;
display: flex;
height: 80px;
align-items: center;
justify-content: space-between;
font-size: 1rem;
`;
const Navlogo = styled(Link)`
padding: 0 6px;
text-decoration:none;
font-weight: 500;
font-size: 18px;
color: inherit;
`;
const NavItems = styled.ul`
width: 100%;
display: flex;
padding: 0 6px;
@media screen and (max-width: 768px)
{
display: none;
}
`;

const NavLink = styled.a`
color:${({ theme }) => theme.text_primary};
font-weight: 500;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
&:hover{
color:${({ theme }) => theme.primary};
`;

const ButtonContainer = styled.div`
padding: 0 6px;
@media screen and (max-width: 768px)
{
display: none;
}
`;
const GithubButton = styled.a`
border: 1px solid ${({ theme }) => theme.primary};
padding: 10px 20px;
transition: all 0.2s ease-in-out;
font-weight: 500;
color: ${({ theme }) => theme.primary};
text-decoration: none;
&:hover{
background: ${({ theme }) => theme.primary};
color: ${({ theme }) => theme.text_primary};
}
`;
const MobileIcon = styled.div`
color: ${({ theme }) => theme.text_primary};
height: 100%;
display: flex;
align-items:center;
display: none;
@media screen and (max-width: 768px)
{
display: flex;
}
`;
const MobileMenu = styled.ul`
width: 100%;
display: flex;
justify-content: center;
align-items: start;
flex-direction: column;
gap: 16px;
padding: 0 6px;
list-style: none;
width: 100%;
padding: 12px 40px 24px 40px;
background: ${({ theme }) => theme.card_light + 99};
position: absolute;
top: 80px;
right: 0px;
transition: all 0.6s ease-in-out;
transform: ${({isOpen})=>(
    isOpen? "translateY(0)" : "translateY(-20px)")
};
border-radius:0 0 20px 20px;
box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
opacity: ${({isOpen})=>(isOpen ? "1" : "0")};
z-index: ${({isOpen})=>(isOpen ? "1000" : "-1000")};

`;

const Navbar = () => {
    const [isOpen, setisOpen] = useState(false);
    const theme=useTheme();

    return <Nav>
        <NavbarContainer>
            <Navlogo className='w-[80%]' to="/">AN</Navlogo>

            <MobileIcon className='cursor-pointer' onClick={() => setisOpen(!isOpen)}>
                <MenuRounded style={{ color: "inherit" }} />
            </MobileIcon>


            <NavItems className='flex items-center list-none justify-center gap-8'>
                <NavLink href="#About">About</NavLink>
                <NavLink href="#Skills">Skills</NavLink>
                <NavLink href="#Experience">Experience</NavLink>
                <NavLink href="#Projects">Projects</NavLink>
                <NavLink href="#Education">Education</NavLink>
            </NavItems>
            {
                isOpen && <MobileMenu isOpen={isOpen}>
                    <NavLink onClick={()=>setisOpen(!isOpen)} href="#About">About</NavLink>
                    <NavLink onClick={()=>setisOpen(!isOpen)} href="#Skills">Skills</NavLink>
                    <NavLink onClick={()=>setisOpen(!isOpen)} href="#Experience">Experience</NavLink>
                    <NavLink onClick={()=>setisOpen(!isOpen)} href="#Projects">Projects</NavLink>
                    <NavLink onClick={()=>setisOpen(!isOpen)} href="#Education">Education</NavLink>
                    <GithubButton href={Bio.github} style={{
                        background: theme.primary,
                        color: theme.text_primary
                    }} target='_Blank' className='flex justify-center items-center rounded-[20px] text-[16px] cursor-pointer'>Github Profile</GithubButton>
                </MobileMenu>
            }

            <ButtonContainer className='w-[80%] h-full flex justify-end items-center'>
                <GithubButton href={Bio.github} target='_Blank' className='flex justify-center items-center rounded-[20px] text-[16px] cursor-pointer'>Github Profile</GithubButton>
            </ButtonContainer>
        </NavbarContainer>
    </Nav>
}

export default Navbar