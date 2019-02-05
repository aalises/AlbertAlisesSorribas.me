import React from "react";
import Header from '../sections/header';

import Experience from "../sections/experience";
import Education from "../sections/education";
import Skills from "../sections/skills";
import Honors from "../sections/honors";
import Contact from "../sections/contact";

import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import SectionBar from "../components/SectionBar";

import '../styles/index.sass';

export default () =>{
        return(
          <section className="hero is-default is-bold">
            <div className="hero-body" style={{paddingTop: '6rem'}}>
              <div className="container">
                <div className="columns">
                  <div className="column is-four-fifths is-offset-1">
                   <Header name="Albert Alises Sorribas" role="Software Developer"/>
                      <SectionBar/>
                       <div className="column is-full">
                          <Experience/>
                          <Education/>
                          <Skills/>
                          <Honors/>
                          <Contact/>
                        </div>
                  </div>
                </div>
                <Footer/>   
              </div>
            </div>
          </section>
        )
}
