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
const School = styled.div`
  font-family: 'Nunito', sans-serif;
  font-size: 20px;
  font-weight: 900;
  color: #332F3A;
  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
const Degree = styled.div`
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

const Grade = styled.div`
  font-family: 'Nunito', sans-serif;
  font-size: 14px;
  font-weight: 800;
  color: #DB2777;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
const Span = styled.div`
  display: -webkit-box;
  max-width: 100%;
`;

const EducationCard = ({ education }) => {
  return (
    <VerticalTimelineElement
      icon={
        <img
          width="100%"
          height="100%"
          alt={education?.school}
          style={{ borderRadius: "50%", objectFit: "cover", boxShadow: "4px 4px 10px #cdc6d9, -4px -4px 10px #ffffff" }}
          src={education?.img}
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
      date={education?.date}
    >
      <Top>
        <Image src={education?.img} />
        <Body>
          <School>{education?.school}</School>
          <Degree>{education?.degree}</Degree>
          <Date>{education?.date}</Date>
        </Body>
      </Top>
      {education?.grade && (
        <Grade>
          <b>Grade: </b>
          {education.grade}
        </Grade>
      )}
      <Description>
        {education?.desc && <Span>{education.desc}</Span>}
      </Description>
    </VerticalTimelineElement>
  );
};

export default EducationCard;