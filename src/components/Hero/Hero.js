import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
          Bem-vindo,<br />
          ao meu portifólio pessoal!
      </SectionTitle>
      <SectionText>
        Meu proposito... Minhas metas... O que posso oferecer e como posso ajudar no desenvolvimento de projetos.
      </SectionText>
      <Button onClick={() => window.location='https://www.google.com'}>
        Leia Mais!
      </Button>
    </LeftSection>

  </Section>
);

export default Hero;