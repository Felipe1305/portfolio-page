import React from 'react';
import { DiFirebase, DiReact, DiGoogleAnalytics } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id="tech">
   <SectionDivider />
     <SectionTitle>Tecnologias</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web develpment world. From Back-end To Design
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Experiência with <br />
          React.js
        </ListParagraph>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Experiência with <br />
          Node and Databases
        </ListParagraph>
      </ListItem>
      <ListItem>
        <DiGoogleAnalytics size="3rem" />
        <ListTitle>BI</ListTitle>
        <ListParagraph>
          Experiência with <br />
          Power BI
        </ListParagraph>
      </ListItem>
    </List>

 </Section>
);

export default Technologies;