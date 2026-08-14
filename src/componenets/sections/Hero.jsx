import React from 'react'
import { useData } from "../../context/DataContext"
import styled from 'styled-components'
import Typewriter from 'typewriter-effect';
import proimage from '../../images/profileimg.jpg'
import HeroBgAnimation from '../HeroBgAnimation'
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
} from "../../utils/motion";
import StarCanvas from "../../canvas/Stars";


const HeroContainer = styled.div`
z-index: 1;
padding: 80px 30px;
@media (max-width: 960px)
{
padding: 66px 16px;
}
@media (max-width: 640px)
{
padding: 32px 16px;
}
clip-path: polygon(0,0,100%,0,100%,100%,70%,95%,0,100%);
`;
const HeroInnerContainer = styled.div`
max-width: 1100px;
gap:17px;
@media (max-width: 960px)
{
flex-direction: column;
}
`;
const HeroLeftContainer = styled.div`
width: 100%;
order:1;
@media (max-width: 960px)
{
order:2;
display:flex;
margin-bottom: 30px;
gap: 6px;
flex-direction: column;
align-items: center;
}


`;
const HeroRightContainer = styled.div`
width: 100%;
display:flex;
justify-content:end;
order:2;
@media (max-width: 960px)
{
order:1;
display:flex;
margin-bottom: 80px;
flex-direction: column;
justify-content: center;
align-items: center;
}

@media (max-width: 640px)
{
margin-bottom: 30px;
}

`;


const Title = styled.div`
  font-family: 'Nunito', sans-serif;
  font-weight: 900;
  font-size: 54px;
  color: #332F3A;
  line-height: 64px;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

const TextLoop = styled.div`
  font-family: 'Nunito', sans-serif;
  font-weight: 800;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: #332F3A;
  line-height: 56px;

  @media (max-width: 960px) {
    text-align: center;
    justify-content: center;
  }

  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 40px;
    margin-bottom: 16px;
  }
`;

const Span = styled.div`
  cursor: pointer;
  color: #DB2777;
  font-weight: 900;
`;

const TextDescription = styled.div`
  font-family: 'DM Sans', sans-serif;
  font-size: 19px;
  font-weight: 500;
  line-height: 32px;
  margin-bottom: 42px;
  color: #635F69;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 28px;
  }
`;

const ResumeButton = styled.a`
  text-decoration: none;
  display: inline-block;
  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;
  font-family: 'Nunito', sans-serif;
  font-weight: 900;
  font-size: 19px;
  color: #FFFFFF;
  background: linear-gradient(135deg, #F472B6 0%, #DB2777 100%);
  border-radius: 24px;
  position: relative;
  overflow: hidden;
  box-shadow: 
    12px 12px 24px #cdc6d9,
    -12px -12px 24px #ffffff,
    inset 4px 4px 8px rgba(255, 255, 255, 0.6),
    inset -4px -4px 8px rgba(219, 39, 119, 0.3);
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
    transform: translateY(-4px) scale(1.02);
    box-shadow: 
      16px 16px 32px #cdc6d9,
      -16px -16px 32px #ffffff,
      inset 4px 4px 8px rgba(255, 255, 255, 0.8),
      inset -4px -4px 8px rgba(219, 39, 119, 0.4);
  }

  &:hover::after {
    left: 125%;
    opacity: 1;
  }

  &:active {
    transform: scale(0.95);
    box-shadow: inset 4px 4px 8px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 640px) {
    padding: 14px 0;
    font-size: 17px;
  }
`;

const floatAnim = `
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
`;

const Img = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  max-width: 380px;
  max-height: 380px;
  border: 8px solid #F4F1FA;
  box-shadow: 
    24px 24px 48px #cdc6d9,
    -24px -24px 48px #ffffff,
    inset 8px 8px 16px rgba(219, 39, 119, 0.15),
    inset -8px -8px 16px rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease-in-out;
  animation: float 4s ease-in-out infinite;

  &:hover {
    transform: scale(1.04);
    box-shadow: 
      30px 30px 60px #cdc6d9,
      -30px -30px 60px #ffffff,
      inset 10px 10px 20px rgba(219, 39, 119, 0.2),
      inset -10px -10px 20px rgba(255, 255, 255, 1);
  }

  @media (max-width: 640px) {
    max-width: 270px;
    max-height: 270px;
  }
`;

const HeroBg = styled.div`
 position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

const Hero = () => {
  const { Bio } = useData();
  return (
    <>
      <div id='About'>
        <HeroContainer className='flex justify-center relative  '>
          <HeroBg>
            <HeroBgAnimation />
            <StarCanvas />
          </HeroBg>
          <motion.div {...headContainerAnimation}>

            <HeroInnerContainer className='flex relative justify-between items-center w-full'>
              <HeroLeftContainer>
                <motion.div {...headTextAnimation}>

                  <Title>
                    Hi, I am <br /> {Bio.name}
                  </Title>
                  <TextLoop>
                    I am a
                    <Span>
                      <Typewriter options={
                        {
                          strings: Bio.roles,
                          autoStart: true,
                          loop: true,
                        }
                      } />
                    </Span>
                  </TextLoop>
                </motion.div>
                <motion.div {...headContentAnimation}>

                  <TextDescription>
                    {Bio.description}
                  </TextDescription>
                </motion.div>
                <ResumeButton href={Bio.resume} target='_blank'>
                  check Resume
                </ResumeButton>
              </HeroLeftContainer>
              <HeroRightContainer>
                <motion.div {...headContentAnimation}>

                  <Tilt>
                    <Img src={proimage} alt="Ahmad Nawaz" />
                  </Tilt>
                </motion.div>
              </HeroRightContainer>
            </HeroInnerContainer>
          </motion.div>
        </HeroContainer>
      </div>
    </>
  )
}

export default Hero