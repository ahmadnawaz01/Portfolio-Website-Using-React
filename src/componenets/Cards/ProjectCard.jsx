import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 330px;
  height: 510px;
  background: #F4F1FA;
  box-shadow: 
    20px 20px 45px #cdc6d9,
    -20px -20px 45px #ffffff,
    inset 8px 8px 16px rgba(219, 39, 119, 0.05),
    inset -8px -8px 16px rgba(255, 255, 255, 0.9);
  cursor: pointer;
  border-radius: 36px;
  overflow: hidden;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  transition: all 0.3s ease-in-out;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 
      28px 28px 55px #cdc6d9,
      -28px -28px 55px #ffffff,
      inset 10px 10px 20px rgba(219, 39, 119, 0.08),
      inset -10px -10px 20px rgba(255, 255, 255, 1);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 170px;
  border-radius: 24px;
  padding: 4px;
  background: #F4F1FA;
  box-shadow: inset 4px 4px 8px #cdc6d9, inset -4px -4px 8px #ffffff;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  transition: transform 0.4s ease-in-out;
  ${Card}:hover & {
    transform: scale(1.06);
  }
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 4px;
  max-height: 52px;
  overflow: hidden;
`;

const Tag = styled.span`
  font-family: 'Nunito', sans-serif;
  font-size: 11px;
  font-weight: 800;
  color: #DB2777;
  background: #F4F1FA;
  box-shadow: 4px 4px 8px #cdc6d9, -4px -4px 8px #ffffff;
  padding: 4px 10px;
  border-radius: 14px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px) scale(1.06);
    box-shadow: inset 2px 2px 4px #cdc6d9, inset -2px -2px 4px #ffffff;
  }
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Title = styled.div`
  font-family: 'Nunito', sans-serif;
  font-size: 18px;
  font-weight: 900;
  color: #332F3A;
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Date = styled.div`
  font-family: 'DM Sans', sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: #635F69;
  margin-top: 2px;
`;

const Description = styled.div`
  font-family: 'DM Sans', sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: #332F3A;
  overflow: hidden;
  margin-top: 6px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  line-height: 18px;
`;

const Button = styled.a`
  text-decoration: none;
  font-family: 'Nunito', sans-serif;
  font-weight: 900;
  font-size: 14px;
  color: #FFFFFF;
  background: linear-gradient(135deg, #F472B6 0%, #DB2777 100%);
  padding: 10px 0;
  border-radius: 18px;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 
    6px 6px 14px #cdc6d9,
    -6px -6px 14px #ffffff,
    inset 2px 2px 4px rgba(255, 255, 255, 0.5),
    inset -2px -2px 4px rgba(219, 39, 119, 0.3);
  transition: all 0.3s ease-in-out;
  margin-top: auto;
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
      8px 8px 18px #cdc6d9,
      -8px -8px 18px #ffffff,
      inset 2px 2px 4px rgba(255, 255, 255, 0.6),
      inset -2px -2px 4px rgba(219, 39, 119, 0.4);
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

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <ImageWrapper>
        <a href={project.webapp || project.github} target="_blank" rel="noopener noreferrer">
          <Image src={project.image} alt={project.title} />
        </a>
      </ImageWrapper>

      <Tags>
        {project.tags?.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </Tags>

      <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description>{project.description}</Description>
      </Details>

      <Button href={project.github} target="_blank" rel="noopener noreferrer">
        View Code
      </Button>
    </Card>
  );
};

export default ProjectCard;