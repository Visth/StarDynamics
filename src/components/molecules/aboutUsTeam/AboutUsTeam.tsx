import React from 'react';
import {
  StyledTeamWrapper,
  StyledRow,
  StyledImage,
  StyledTextWrapper,
  StyledName,
  StyledDescription,
  StyledTechStack,
} from './AboutUsTeam-styling';
import teammember1 from '../../../../public/assets/teammember1.jpg';
import teammember2 from '../../../../public/assets/teammember2.jpg';
import teammember3 from '../../../../public/assets/teammember3.jpg';
import teammember4 from '../../../../public/assets/teammember4.jpg';
import teammember5 from '../../../../public/assets/teammember5.jpg';
import teammember6 from '../../../../public/assets/teammember6.jpg';

export const AboutUsTeam: React.FC = () => {
  const teamMembers = [
    {
      name: 'Stanley Johnson',
      description:
        'A seasoned Project Manager with 8+ years of experience leading successful software development projects. Skilled in Agile methodologies, team coordination, and delivering results on time and within budget.',
      techStack: ['Agile', 'Scrum', 'JIRA'],
      img: teammember1,
    },
    {
      name: 'Michael Thompson',
      description:
        'Senior Frontend Developer with over a decade of experience crafting visually stunning and responsive user interfaces. Passionate about design systems and delivering seamless user experiences.',
      techStack: ['JavaScript', 'React', 'TypeScript', 'CSS/SCSS'],
      img: teammember2,
    },
    {
      name: 'Sophia Ramirez',
      description:
        'Senior Backend Developer specializing in building scalable, high-performance systems. Expert in RESTful APIs, database management, and cloud integrations with over 12 years of experience.',
      techStack: ['Node.js', 'Express', 'MongoDB', 'AWS'],
      img: teammember3,
    },
    {
      name: 'Liam Carter',
      description:
        'Senior Fullstack Developer with extensive expertise in both frontend and backend technologies. Known for delivering end-to-end solutions for complex business challenges.',
      techStack: ['Vue.js', 'Node.js', 'PostgreSQL', 'Docker'],
      img: teammember4,
    },
    {
      name: 'Filip Nguyen',
      description:
        'Senior Fullstack Developer with a strong focus on creating robust applications. Experienced in leading development teams and implementing cutting-edge solutions for clients.',
      techStack: ['Angular', 'Spring Boot', 'Java', 'GraphQL'],
      img: teammember5,
    },
    {
      name: 'Oliver Scott',
      description:
        'Regular Frontend Developer passionate about building dynamic and accessible web applications. Always eager to learn and implement the latest in UI/UX design trends.',
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'React'],
      img: teammember6,
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
