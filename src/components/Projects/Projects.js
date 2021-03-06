import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';


const Projects = () => (
 <Section nopadding id="projects">
   <SectionDivider />
   <SectionTitle main>Projetos</SectionTitle>
   <GridContainer>
     {projects.map((projects) =>(
      <BlogCard key={projects.id}>
        <Img src={projects.image} />
        <TitleContent>
          <HeaderThree title>{projects.title}</HeaderThree>
          <Hr />
        </TitleContent>
        <CardInfo>{projects.description}</CardInfo>
        <div>
          <TitleContent>Stack</TitleContent>
          <TagList>
            {projects.tags.map((tag, i) => (
              <Tag key={i}>{tag}</Tag>
            ))}
          </TagList>
        </div>
        <UtilityList>
          <ExternalLinks href={projects.visit}>Code</ExternalLinks>
        </UtilityList>
      </BlogCard>

     ))}
   </GridContainer>
 </Section>
);

export default Projects;