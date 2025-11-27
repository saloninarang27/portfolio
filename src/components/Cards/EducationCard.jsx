import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 650px;
  border-radius: 16px;
  padding: 20px;
  background: linear-gradient(145deg, #ffffff, #fafaff);
  border: 1px solid rgba(148, 107, 245, 0.15);
  box-shadow: 0 4px 20px rgba(100, 100, 111, 0.1);
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 12px 28px rgba(148, 107, 245, 0.25);
    border-color: rgba(249, 105, 208, 0.4);
  }

  /* 👇 expand description on hover */
  &:hover ${'' /* we will reference Span below */} span {
    -webkit-line-clamp: unset;
    overflow: visible;
  }

  @media only screen and (max-width: 768px) {
    padding: 14px;
    gap: 8px;
    width: 300px;
  }
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  align-items: center;
`;

const ImageWrapper = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    145deg,
    rgba(148, 107, 245, 0.1),
    rgba(249, 105, 208, 0.1)
  );
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);

  @media only screen and (max-width: 768px) {
    height: 50px;
    width: 50px;
  }
`;

const Image = styled.img`
  height: 40px;
  border-radius: 8px;
  object-fit: contain;
  @media only screen and (max-width: 768px) {
    height: 32px;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: 700;
  background: linear-gradient(90deg, #946bf5, #f969d0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Degree = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const GradeBadge = styled.div`
  display: inline-block;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  background: rgba(148, 107, 245, 0.1);
  color: #946bf5;
  align-self: flex-start;
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  line-height: 1.5;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Span = styled.span`
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const EducationCard = ({ education }) => {
  return (
    <Card>
      <Top>
        <ImageWrapper>
          <Image src={education.img} alt="school logo" />
        </ImageWrapper>
        <Body>
          <Name>{education.school}</Name>
          <Degree>{education.degree}</Degree>
          <Date>{education.date}</Date>
        </Body>
      </Top>

      {education.grade && <GradeBadge>🎓 Grade: {education.grade}</GradeBadge>}

      <Description>
        <Span>{education.desc}</Span>
      </Description>
    </Card>
  );
};

export default EducationCard;
