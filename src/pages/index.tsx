import React from 'react';
import Header from './Header';
import { Helmet } from 'react-helmet';

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
    <div>
      <Header name="Albert Alises Sorribas" role="Software Developer" />
    </div>
    <div>
      <div className="column is-three-fifths is-offset-2">
        <SectionBar />
        <Experience />
        <Education />
        <Skills />
        <Honors />
        <Contact />
      </div>
    </div>
    <Footer />
  </section>
);

export default Main;
