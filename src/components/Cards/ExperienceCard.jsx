import React from 'react';
import styled from 'styled-components';

const Document = styled.img`
  display: none;
  height: 70px;
  width: fit-content;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: #555;
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 13px;
  }
`;

const Span = styled.span`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Card = styled.div`
  width: 650px;
  border-radius: 16px;
  padding: 20px 24px;
  background: linear-gradient(135deg, #f5f7ff, #f0e6ff);
  border: 1px solid #dcd7ff;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 16px;
  }

  &:hover ${Document} {
    display: flex;
  }

  &:hover ${Span} {
    overflow: visible;
    -webkit-line-clamp: unset;
  }
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
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
  font-size: 18px;
  font-weight: 600;
  color: #222;
  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const Company = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #666;
  @media only screen and (max-width: 768px) {
    font-size: 13px;
  }
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #999;
  @media only screen and (max-width: 768px) {
    font-size: 11px;
  }
`;

const Skills = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  margin-top: -10px;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Skill = styled.div`
  font-size: 14px;
  font-weight: 500;
  background:rgba(237, 183, 244, 0.8);
  padding: 6px 12px;
  border-radius: 20px;
  color: #333;
  box-shadow: 0 2px 6px rgba(216, 97, 206, 0.05);
  transition: all 0.2s ease-in-out;

  &:hover {
    background:rgb(225, 123, 234);
    color:rgb(73, 3, 81);
  }

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const ExperienceCard = ({ experience }) => {
  return (
    <Card>
      <Top>
        <Image src={experience.img} alt="Company logo" />
        <Body>
          <Role>{experience.role}</Role>
          <Company>{experience.company}</Company>
          <Date>{experience.date}</Date>
        </Body>
      </Top>
      <Description>
        {experience?.desc && <Span>{experience?.desc}</Span>}
        {experience?.skills && (
          <>
            <br />
            <Skills>
              <b>🛠 Skills:</b>
              <ItemWrapper>
                {experience?.skills?.map((skill, index) => (
                  <Skill key={index}>• {skill}</Skill>
                ))}
              </ItemWrapper>
            </Skills>
          </>
        )}
      </Description>
      {experience.doc && (
        <a href={experience.doc} target="_blank" rel="noopener noreferrer">
          <Document src={experience.doc} alt="Document preview" />
        </a>
      )}
    </Card>
  );
};

export default ExperienceCard;
