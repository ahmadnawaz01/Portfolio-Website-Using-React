import React, { useState } from "react";
import styled from "styled-components";
import { useData } from "../../context/DataContext";
import ProjectCard from "../Cards/ProjectCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-contnet: center;
  margin-top: 50px;
  padding: 0px 16px;
  position: rlative;
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

const ToggleButtonGroup = styled.div`
  display: flex;
  background: #F4F1FA;
  box-shadow: inset 6px 6px 12px #cdc6d9, inset -6px -6px 12px #ffffff;
  padding: 6px;
  border-radius: 24px;
  margin: 28px 0;
  gap: 4px;
  @media (max-width: 768px){
    font-size: 12px;
  }
`;

const ToggleButton = styled.div`
  font-family: 'Nunito', sans-serif;
  font-weight: 800;
  font-size: 14px;
  padding: 10px 22px;
  border-radius: 18px;
  cursor: pointer;
  color: #635F69;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    color: #DB2777;
  }
  
  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 12px;
  }
  
  ${({ active }) =>
    active &&
    `
    color: #FFFFFF !important;
    background: linear-gradient(135deg, #F472B6 0%, #DB2777 100%);
    box-shadow: 
      6px 6px 14px #cdc6d9,
      -6px -6px 14px #ffffff,
      inset 2px 2px 4px rgba(255, 255, 255, 0.6),
      inset -2px -2px 4px rgba(219, 39, 119, 0.3);
  `}
`;
const Divider = styled.div`
  width: 1.5px;
  background: ${({ theme }) => theme.primary};
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
`;

const Projects = () => {
  const { projects } = useData();
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="Projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc
          style={{
            marginBottom: "40px",
          }}
        >
          I have worked on a wide range of projects. Here are some of my projects.
        </Desc>

        <ToggleButtonGroup>
          <ToggleButton
            $active={toggle === "all"}
            onClick={() => setToggle("all")}
          >
            Projects
          </ToggleButton>
        </ToggleButtonGroup>

        <CardContainer>
          {toggle === "all" &&
            projects.map((project) => <ProjectCard key={project.id} project={project} />)}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;