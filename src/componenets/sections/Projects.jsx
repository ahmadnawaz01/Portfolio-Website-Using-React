import React, { useState } from "react";
import styled from "styled-components";
import { useData } from "../../context/DataContext";
import ProjectCard from "../Cards/ProjectCard";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  padding: 0px 16px;
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

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
`;

const ViewAllButton = styled(Link)`
  text-decoration: none;
  display: inline-block;
  font-family: 'Nunito', sans-serif;
  font-weight: 900;
  font-size: 17px;
  color: #FFFFFF;
  background: linear-gradient(135deg, #F472B6 0%, #DB2777 100%);
  padding: 14px 32px;
  border-radius: 24px;
  margin-top: 36px;
  box-shadow: 
    8px 8px 18px #cdc6d9,
    -8px -8px 18px #ffffff,
    inset 3px 3px 6px rgba(255, 255, 255, 0.5),
    inset -3px -3px 6px rgba(219, 39, 119, 0.3);
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px) scale(1.03);
    box-shadow: 
      12px 12px 24px #cdc6d9,
      -12px -12px 24px #ffffff,
      inset 3px 3px 6px rgba(255, 255, 255, 0.6),
      inset -3px -3px 6px rgba(219, 39, 119, 0.4);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const Projects = () => {
  const { projects } = useData();
  const displayedProjects = projects.slice(0, 6);

  return (
    <Container id="Projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc
          style={{
            marginBottom: "30px",
          }}
        >
          I have worked on a wide range of projects. Here are some of my featured projects.
        </Desc>

        <CardContainer>
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id || project.title} project={project} />
          ))}
        </CardContainer>

        <ViewAllButton to="/projects">
          View All Projects ({projects.length}) →
        </ViewAllButton>
      </Wrapper>
    </Container>
  );
};

export default Projects;