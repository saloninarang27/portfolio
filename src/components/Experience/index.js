import React from 'react';
import styled from 'styled-components';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from '../Cards/ExperienceCard';
import { experiences } from '../../data/constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 16px 80px 16px;
  background: linear-gradient(180deg,rgb(244, 229, 248),rgb(247, 187, 240));
  
  @media (max-width: 768px) {
    padding: 30px 12px 60px 12px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: left;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 60px 0;
  gap: 16px;
  
  @media (max-width: 768px) {
    padding: 40px 0;
    gap: 12px;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary || "#1d1d1f"};
  background: linear-gradient(90deg,rgb(208, 45, 226),rgb(134, 0, 224));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
  
  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  max-width: 100vw;
  color: ${({ theme }) => theme.text_secondary || "#4d4d4d"};
  padding-left: 25px;
  @media (max-width: 768px) {
    font-size: 16px;
    padding: 0 16px;
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
    padding: 0 12px;
  }
`;

const TimelineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  
  @media (max-width: 768px) {
    margin-top: 20px;
    padding: 0 16px;
  }
  
  @media (max-width: 480px) {
    padding: 0 12px;
  }
`;

const StyledTimeline = styled(Timeline)`
  width: 100%;
  
  @media (max-width: 768px) {
    padding: 0;
    
    .MuiTimelineContent-root {
      padding: 8px 16px;
    }
  }
  
  @media (max-width: 480px) {
    .MuiTimelineContent-root {
      padding: 4px 12px;
    }
  }
`;

const StyledTimelineItem = styled(TimelineItem)`
  @media (max-width: 768px) {
    &:before {
      display: none;
    }
  }
`;

const TimelineDotWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (max-width: 768px) {
    transform: scale(0.9);
  }
  
  @media (max-width: 480px) {
    transform: scale(0.8);
  }
`;

const ExperienceTimeline = () => {
  return (
    <Container id="experience">
      <Wrapper>
        <Title>Experience</Title>
        <Desc style={{ textAlign: 'center' }}>
  Professional training and hands-on development experience across organizations.
</Desc>

        <TimelineSection>
          <StyledTimeline>
            {experiences.map((experience, index) => (
              <StyledTimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDotWrapper>
                    <TimelineDot
                      variant="outlined"
                      sx={{
                        borderColor: '#8e2de2',
                        background: '#f0e7ff',
                      }}
                    />
                  </TimelineDotWrapper>
                  {index !== experiences.length - 1 && (
                    <TimelineConnector
                      sx={{
                        background: 'linear-gradient(90deg, #8e2de2, #4a00e0)',
                        height: '40px',
                        '@media (max-width: 768px)': {
                          height: '30px',
                        },
                        '@media (max-width: 480px)': {
                          height: '25px',
                        },
                      }}
                    />
                  )}
                </TimelineSeparator>
                <TimelineContent sx={{ 
                  py: '12px', 
                  px: 2,
                  '@media (max-width: 768px)': {
                    py: '8px',
                    px: 1,
                  },
                  '@media (max-width: 480px)': {
                    py: '6px',
                    px: 0.5,
                  }
                }}>
                  <ExperienceCard experience={experience} />
                </TimelineContent>
              </StyledTimelineItem>
            ))}
          </StyledTimeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  );
};

export default ExperienceTimeline;