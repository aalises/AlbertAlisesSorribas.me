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
      <meta charSet="utf-8" />
      <title>Hi, I'm Albert Alises</title>
      <meta name="description" content="Personal Website of Albert Alises Sorribas" />
    </Helmet>
    <div className="hero-body" style={{ paddingTop: '6rem' }}>
      <div className="container">
        <div className="columns">
          <div className="column is-four-fifths is-offset-1">
            <Header name="Albert Alises Sorribas" role="Software Developer" />
            <SectionBar />
            <div className="column is-full">
              <Experience />
              <Education />
              <Skills />
              <Honors />
              <Contact />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  </section>
);

export default Main;
