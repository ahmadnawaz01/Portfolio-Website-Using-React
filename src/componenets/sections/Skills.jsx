import React from "react";
import styled from "styled-components";
import { useData } from "../../context/DataContext";
import Tilt from "react-parallax-tilt";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-family: 'Nunito', sans-serif;
  font-size: 52px;
  text-align: center;
  font-weight: 900;
  margin-top: 20px;
  color: #332F3A;
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 36px;
  }
`;

const Desc = styled.div`
  font-family: 'DM Sans', sans-serif;
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: #635F69;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  gap: 40px;
  justify-content: center;
`;

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background: #F4F1FA;
  box-shadow: 
    20px 20px 45px #cdc6d9,
    -20px -20px 45px #ffffff,
    inset 8px 8px 16px rgba(219, 39, 119, 0.05),
    inset -8px -8px 16px rgba(255, 255, 255, 0.9);
  border-radius: 36px;
  padding: 24px 36px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 
      28px 28px 55px #cdc6d9,
      -28px -28px 55px #ffffff,
      inset 10px 10px 20px rgba(219, 39, 119, 0.08),
      inset -10px -10px 20px rgba(255, 255, 255, 1);
  }

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 18px 24px;
  }

  @media (max-width: 500px) {
    max-width: 330px;
    padding: 16px 20px;
  }
`;

const SkillTitle = styled.div`
  font-family: 'Nunito', sans-serif;
  font-size: 26px;
  font-weight: 900;
  margin-bottom: 20px;
  text-align: center;
  color: #332F3A;
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 12px;
`;

const SkillItem = styled.div`
  font-family: 'Nunito', sans-serif;
  font-size: 15px;
  font-weight: 800;
  color: #332F3A;
  background: #F4F1FA;
  box-shadow: 
    6px 6px 14px #cdc6d9,
    -6px -6px 14px #ffffff,
    inset 2px 2px 4px rgba(255, 255, 255, 0.8),
    inset -2px -2px 4px rgba(219, 39, 119, 0.15);
  border-radius: 20px;
  padding: 10px 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  transition: all 0.25s ease-in-out;

  &:hover {
    transform: translateY(-4px) scale(1.03);
    color: #DB2777;
    box-shadow: 
      8px 8px 18px #cdc6d9,
      -8px -8px 18px #ffffff,
      inset 2px 2px 4px rgba(255, 255, 255, 0.9),
      inset -2px -2px 4px rgba(219, 39, 119, 0.25);
  }

  &:hover img {
    transform: scale(1.2) rotate(6deg);
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 14px;
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  transition: transform 0.25s ease;
`;

const Skills = () => {
  const { Bio, skills } = useData();
  return (
    <Container id="Skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc
          style={{
            marginBottom: "40px",
          }}
        >
          {Bio.skilldur}
        </Desc>

        <SkillsContainer>
          {skills.map((skill, index) => (
            <Tilt key={`skill-${index}`}>
              <Skill>
                <SkillTitle>{skill.title}</SkillTitle>
                <SkillList>
                  {skill.skills.map((item, index_x) => (
                    <SkillItem key={`skill-x-${index_x}`}>
                      <SkillImage src={item.image} />
                      {item.name}
                    </SkillItem>
                  ))}
                </SkillList>
              </Skill>
            </Tilt>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;