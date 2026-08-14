import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styled from "styled-components";
import { useData } from "../../context/DataContext";
import EducationCard from "../Cards/EducationCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-contnet: center;
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

const Education = () => {
  const { Bio, education } = useData();
  return (
    <Container id="Education">
      <Wrapper>
        <Title>Education</Title>
        <Desc
          style={{
            marginBottom: "40px",
          }}
        >
          {Bio.education || Bio.edjucation}
        </Desc>

        <VerticalTimeline>
          {education.map((education, index) => (
            <EducationCard key={`education-${index}`} education={education} />
          ))}
        </VerticalTimeline>
      </Wrapper>
    </Container>
  );
};

export default Education;