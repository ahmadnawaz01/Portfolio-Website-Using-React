import React, { useState } from 'react';
import styled from 'styled-components';
import { useData } from '../context/DataContext';
import ProjectCard from '../componenets/Cards/ProjectCard';
import Footer from '../componenets/Footer';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
  padding: 0px 16px;
  position: relative;
  z-index: 1;
  align-items: center;
  min-height: 80vh;
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
  flex-wrap: wrap;
  justify-content: center;
  background: #F4F1FA;
  box-shadow: inset 6px 6px 12px #cdc6d9, inset -6px -6px 12px #ffffff;
  padding: 6px;
  border-radius: 24px;
  margin: 28px 0;
  gap: 6px;
  @media (max-width: 768px){
    font-size: 12px;
  }
`;

const ToggleButton = styled.div`
  font-family: 'Nunito', sans-serif;
  font-weight: 800;
  font-size: 14px;
  padding: 10px 20px;
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

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
  margin-bottom: 40px;
`;

const BackButton = styled(Link)`
  text-decoration: none;
  font-family: 'Nunito', sans-serif;
  font-weight: 800;
  font-size: 15px;
  color: #635F69;
  background: #F4F1FA;
  box-shadow: 6px 6px 14px #cdc6d9, -6px -6px 14px #ffffff;
  padding: 10px 22px;
  border-radius: 20px;
  align-self: flex-start;
  margin-bottom: 10px;
  transition: all 0.2s ease;

  &:hover {
    color: #DB2777;
    transform: translateY(-2px);
  }
`;

const ProjectsPage = () => {
  const { projects } = useData();
  const [toggle, setToggle] = useState("all");

  const categories = ["all", ...Array.from(new Set(projects.map((p) => p.category).filter(Boolean)))];

  const filteredProjects =
    toggle.toLowerCase() === "all"
      ? projects
      : projects.filter((item) => item.category?.toLowerCase() === toggle.toLowerCase());

  return (
    <>
      <Container>
        <Wrapper>
          <BackButton to="/">← Back to Home</BackButton>
          <Title>All Projects ({projects.length})</Title>
          <Desc>
            Explore all my projects across Machine Learning, Generative AI, Web Apps, and Mobile Applications.
          </Desc>

          <ToggleButtonGroup>
            {categories.map((cat, index) => (
              <ToggleButton
                key={index}
                active={toggle.toLowerCase() === cat.toLowerCase()}
                onClick={() => setToggle(cat)}
              >
                {cat === "all" ? "All Projects" : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>

          <CardContainer>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id || project.title} project={project} />
            ))}
          </CardContainer>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default ProjectsPage;
