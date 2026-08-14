import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import styled from "styled-components";

const Top = styled.div`
  width: 100%;
  display: flex;
  max-width: 100%;
  gap: 12px;
`;
const Image = styled.img`
  height: 50px;
  border-radius: 10px;
  margin-top: 4px;
  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`;
const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Role = styled.div`
  font-family: 'Nunito', sans-serif;
  font-size: 20px;
  font-weight: 900;
  color: #332F3A;
  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
const Company = styled.div`
  font-family: 'Nunito', sans-serif;
  font-size: 15px;
  font-weight: 800;
  color: #DB2777;
  @media only screen and (max-width: 768px) {
    font-size: 13px;
  }
`;
const Date = styled.div`
  font-family: 'DM Sans', sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: #635F69;

  @media only screen and (max-width: 768px) {
    font-size: 11px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: #332F3A;
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 13px;
  }
`;
const Skills = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 10px;
`;
const Span = styled.div`
  display: -webkit-box;
  max-width: 100%;
`;

const Skill = styled.div`
  font-family: 'Nunito', sans-serif;
  font-size: 13px;
  font-weight: 800;
  color: #332F3A;
  background: #F4F1FA;
  box-shadow: 4px 4px 10px #cdc6d9, -4px -4px 10px #ffffff;
  border-radius: 16px;
  padding: 6px 14px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      icon={
        <img
          width="100%"
          height="100%"
          alt={experience?.company}
          style={{ borderRadius: "50%", objectFit: "cover", boxShadow: "4px 4px 10px #cdc6d9, -4px -4px 10px #ffffff" }}
          src={experience?.img}
        />
      }
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        background: "#F4F1FA",
        color: "#332F3A",
        boxShadow: "16px 16px 36px #cdc6d9, -16px -16px 36px #ffffff, inset 4px 4px 8px rgba(219, 39, 119, 0.05), inset -4px -4px 8px rgba(255, 255, 255, 0.9)",
        borderRadius: "32px",
        padding: "28px",
      }}
      contentArrowStyle={{
        borderRight: "10px solid #F4F1FA",
      }}
      date={experience?.date}
    >
      <Top>
        <Image src={experience?.img} />
        <Body>
          <Role>{experience?.role}</Role>
          <Company>{experience?.company}</Company>
          <Date>{experience?.date}</Date>
        </Body>
      </Top>
      <Description>
        {experience?.desc && <Span>{experience.desc}</Span>}
        {experience?.skills && (
          <>
            <br />
            <Skills>
              <b>Skills</b>
              <ItemWrapper>
                {experience?.skills?.map((skill, index) => (
                  <Skill key={`exp-skill-${index}`}>• {skill}</Skill>
                ))}
              </ItemWrapper>
            </Skills>
          </>
        )}
      </Description>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;