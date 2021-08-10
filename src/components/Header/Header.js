import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiGitCommit } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
<Container>
  <Div1>
    <Link href="/">
      <a style={{display: "flex", alignItems: 'center', color:'white'}}>
        <DiGitCommit size="6rem"/><Span>Portfolio</Span>
      </a>
    </Link>
  </Div1>
  <Div2>
    <li>
      <Link href="#projects">
        <NavLink>Projetos</NavLink>
      </Link>
    </li>
    <li>
      <Link href="#tech">
        <NavLink>Tecnologias</NavLink>
      </Link>
    </li>
    <li>
      <Link href="#about">
        <NavLink>Sobre mim</NavLink>
      </Link>
    </li>
  </Div2>
  <Div3>
  <SocialIcons href="https://github.com/Felipe1305">
    <AiFillGithub size="3rem" />
  </SocialIcons>
  <SocialIcons href="https://www.linkedin.com/in/felipe-almeida-b28218213/">
    <AiFillLinkedin size="3rem" />
  </SocialIcons>
  <SocialIcons href="https://www.instagram.com/fsilva.1305/">
    <AiFillInstagram size="3rem" />
  </SocialIcons>
  </Div3>
</Container>
);

export default Header;