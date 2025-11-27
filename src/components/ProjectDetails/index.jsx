import { CloseRounded, GitHub, LinkedIn } from '@mui/icons-material';
import { Modal } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow-y: auto;
  background: linear-gradient(135deg, rgba(255, 192, 203, 0.7), rgba(186, 85, 211, 0.7));
  padding: 40px 20px;
`;

const Wrapper = styled.div`
  max-width: 750px;
  width: 100%;
  background-color: ${({ theme }) => theme.card};
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 16px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.3);
`;

const CloseButton = styled(CloseRounded)`
  position: absolute !important;
  top: 12px;
  right: 20px;
  cursor: pointer;
  color: ${({ theme }) => theme.text_secondary} !important;
  &:hover {
    color: ${({ theme }) => theme.primary} !important;
  }
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 600;
  margin: 0;
  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

const Date = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
`;

const ScrollableContent = styled.div`
  max-height: 500px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Desc = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.5;
  word-wrap: break-word;
`;

const Image = styled.img`
  width: 100%;
  max-height: 350px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(233, 153, 249, 0.2);
`;

const Label = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-top: 12px;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const Tag = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary + "22"};
  padding: 2px 8px;
  border-radius: 8px;
`;

const Members = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Member = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const MemberImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 0 6px rgba(239, 16, 16, 0.2);
`;

const MemberName = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 8px;
  a {
    color: ${({ theme }) => theme.text_primary};
    transition: all 0.3s;
    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  flex-wrap: wrap;
`;

const Button = styled.a`
  padding: 10px 16px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme, dull }) => dull ? theme.text_secondary : theme.white};
  background-color: ${({ theme, dull }) => dull ? theme.bgLight : theme.primary};
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme, dull }) => dull ? theme.bg + "99" : theme.primary + "cc"};
  }
`;

const ProjectModal = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;
  if (!project) return null;

  return (
    <Modal open={true} onClose={() => setOpenModal({ state: false, project: null })}>
      <Container>
        <Wrapper>
          <CloseButton onClick={() => setOpenModal({ state: false, project: null })} />
          <ScrollableContent>
            {project.image && <Image src={project.image} alt={project.title} />}
            <Title>{project.title}</Title>
            <Date>{project.date}</Date>
            {project.tags && (
              <Tags>
                {project.tags.map((tag, idx) => <Tag key={idx}>{tag}</Tag>)}
              </Tags>
            )}
            <Desc>{project.description}</Desc>
            {project.member && (
              <>
                <Label>Members</Label>
                <Members>
                  {project.member.map((member, idx) => (
                    <Member key={idx}>
                      <MemberImage src={member.img} alt={member.name || "member"} />
                      <MemberName>{member.name}</MemberName>
                      <SocialLinks>
                        {member.github && <a href={member.github} target="_blank" rel="noopener noreferrer"><GitHub /></a>}
                        {member.linkedin && <a href={member.linkedin} target="_blank" rel="noopener noreferrer"><LinkedIn /></a>}
                      </SocialLinks>
                    </Member>
                  ))}
                </Members>
              </>
            )}
          </ScrollableContent>
          <ButtonGroup>
            {project.github && <Button dull href={project.github} target="_blank" rel="noopener noreferrer">View Code</Button>}
            {project.webapp && <Button href={project.webapp} target="_blank" rel="noopener noreferrer">View Live App</Button>}
          </ButtonGroup>
        </Wrapper>
      </Container>
    </Modal>
  );
};

export default ProjectModal;
