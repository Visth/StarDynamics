import React from 'react';
import { StyledTeamWrapper, StyledRow, StyledImage, StyledTextWrapper, StyledName, StyledDescription, StyledTechStack } from './AboutUsTeam-styling';

export const AboutUsTeam: React.FC = () => {
  
  const teamMembers = [
    {
      name: 'Stanley Johnson',
      description: 'A seasoned Project Manager with 8+ years of experience leading successful software development projects. Skilled in Agile methodologies, team coordination, and delivering results on time and within budget.',
      techStack: ['Agile', 'Scrum', 'JIRA'],
      img: '../../assets/teammember1.jpg'
    },
    {
      name: 'Michael Thompson',
      description: 'Senior Frontend Developer with over a decade of experience crafting visually stunning and responsive user interfaces. Passionate about design systems and delivering seamless user experiences.',
      techStack: ['JavaScript', 'React', 'TypeScript', 'CSS/SCSS'],
      img: '/assets/teammember2.jpg'
    },
    {
      name: 'Sophia Ramirez',
      description: 'Senior Backend Developer specializing in building scalable, high-performance systems. Expert in RESTful APIs, database management, and cloud integrations with over 12 years of experience.',
      techStack: ['Node.js', 'Express', 'MongoDB', 'AWS'],
      img: '/assets/teammember3.jpg'
    },
    {
      name: 'Liam Carter',
      description: 'Senior Fullstack Developer with extensive expertise in both frontend and backend technologies. Known for delivering end-to-end solutions for complex business challenges.',
      techStack: ['Vue.js', 'Node.js', 'PostgreSQL', 'Docker'],
      img: '../../assets/teammember4.jpg'
    },
    {
      name: 'Filip Nguyen',
      description: 'Senior Fullstack Developer with a strong focus on creating robust applications. Experienced in leading development teams and implementing cutting-edge solutions for clients.',
      techStack: ['Angular', 'Spring Boot', 'Java', 'GraphQL'],
      img: '../../assets/teammember5.jpg'
    },
    {
      name: 'Oliver Scott',
      description: 'Regular Frontend Developer passionate about building dynamic and accessible web applications. Always eager to learn and implement the latest in UI/UX design trends.',
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'React'],
      img: '../../assets/teammember6.jpg'
    },
  ];
  

  return (
    <StyledTeamWrapper>
      {teamMembers.map((member, index) => (
        <StyledRow key={index} isReversed={index % 2 !== 0} isEven={index % 2 === 0}>
          <StyledImage src={member.img} />
          <StyledTextWrapper isEven={index % 2 === 0}>
            <StyledName isEven={index % 2 === 0}>{member.name}</StyledName>
            <StyledDescription>{member.description}</StyledDescription>
            <StyledTechStack>
              <strong>Tech stack:</strong> {member.techStack.join(', ')}
            </StyledTechStack>
          </StyledTextWrapper>
        </StyledRow>
      ))}
    </StyledTeamWrapper>
  );
};
