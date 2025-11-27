import React, { useState } from 'react';
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constants';

const categories = [
  { key: 'all', label: 'All' },
  { key: 'web app', label: "WEB APP'S" },
  { key: 'android app', label: "ANDROID APP'S" },
  { key: 'machine learning', label: 'MACHINE LEARNING' },
];

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');

  // Filter projects based on toggle
  const filteredProjects =
    toggle === 'all'
      ? projects
      : projects.filter((project) => project.category === toggle);

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I’ve worked across technologies to solve real-world problems. Here’s a look at some of my standout projects.
        </Desc>

        <ToggleButtonGroup>
          {categories.map((cat, index) => (
            <React.Fragment key={cat.key}>
              <ToggleButton
                active={toggle === cat.key}
                onClick={() => setToggle(cat.key)}
              >
                {cat.label}
              </ToggleButton>
              {index < categories.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </ToggleButtonGroup>

        <CardContainer>
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={idx}
              project={project}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
