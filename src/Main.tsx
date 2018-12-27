import * as React from "react";
import Header from './sections/header';

import Experience from "./sections/experience";
import Education from "./sections/education";
import Skills from "./sections/skills";
import Honors from "./sections/honors";

import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer";

export default () =>{

        return(
            <section className="hero is-default is-bold">
                <div className="hero-body" style={{paddingTop: '6rem'}}>
                    <div className="container">
                        <div className="columns">
                            <div className="column is-2">
                                <Sidebar/>
                            </div>
                            <div className="is-divider-vertical is-hidden-touch" />
                            <div className="column is-three-quarters">
                                <Header name="Albert Alises Sorribas" role="Software Developer"/>
                                <div className="column is-full">
                                    <Experience/>
                                    <Education/>
                                    <Skills/>
                                    <Honors/>
                                </div>
                            </div>
                        </div>
                    <Footer/>   
                    </div>
                </div>
            </section>
        )
    }
}