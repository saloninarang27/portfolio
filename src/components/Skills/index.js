// Skills.jsx
import React from 'react';
import styled from 'styled-components';
import { skills } from '../../data/constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 16px;
  background: ${({ theme }) => theme.bg};
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const Title = styled.h2`
  font-size: 42px;
  text-align: center;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
`;

const Desc = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 700px;
  text-align: center;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
`;

const SkillCard = styled.div`
  background: linear-gradient(145deg,rgb(195, 156, 247),rgb(231, 166, 228));
  border: 1px solidrgb(176, 135, 242);
  box-shadow: 0 8px 20px rgba(233, 48, 239, 0.15);
  border-radius: 16px;
  padding: 24px;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-6px);
  }
`;
const SkillTitle = styled.h3`
  font-size: 120%;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 16px;
  display: inline-block;       /* allow wrapping */
  text-align: center;          /* center content */
  line-height: 1.3;
  word-break: break-word;      /* wrap words properly */
`;


const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
`;

const SkillItem = styled.div`
  background: white;
  border: 1px solid #d3cce3;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 10px 14px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;

  &:hover {
    background: #f1e9ff;
    transform: scale(1.05);
  }
`;

const SkillIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>A snapshot of the skills I’ve been honing through continuous learning and real-world application</Desc>
        <SkillsContainer>
          {skills.map((skill, index) => (
            <SkillCard key={index}>
              <SkillTitle>
                {skill.icon} {skill.title}
              </SkillTitle>
              <SkillList>
                {skill.skills.map((item, idx) => (
                  <SkillItem key={idx}>
                    <SkillIcon src={item.image} alt={item.name} />
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </SkillCard>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
