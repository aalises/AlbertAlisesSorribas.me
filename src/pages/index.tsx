import React from 'react';
import Header from './Header';
import { Helmet } from 'react-helmet';
import { FixedHeaderContainer, ContentContainer } from '../styles/custom-styled-components';

import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Honors from './Honors';
import Contact from './Contact';

import Footer from '../components/Footer';
import SectionBar from '../components/SectionBar';

import '../styles/index.sass';

const Main = () => (
  <section className="hero is-default is-bold">
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <title>Hi, I'm Albert Alises</title>
      <meta name="description" content="Personal Website of Albert Alises Sorribas" />
    </Helmet>
    <FixedHeaderContainer>
      <Header name="Albert Alises Sorribas" role="Software Developer" />
    </FixedHeaderContainer>
    <ContentContainer>
      <div className="column is-two-thirds is-offset-2">
        <SectionBar />
        <Experience />
        <Education />
        <Skills />
        <Honors />
        <Contact />
      </div>
    </ContentContainer>
    <Footer />
  </section>
);

export default Main;
