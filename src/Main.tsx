import React, { lazy, Suspense} from "react";
import Header from './sections/header';
import Loader from "./components/Loader";

const Experience = lazy(() => import("./sections/experience"));
const Education = lazy(() => import("./sections/education"));
const Skills = lazy(() => import("./sections/skills"));
const Honors = lazy(() => import("./sections/honors"));
const Contact = lazy(() => import("./sections/contact"));

import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import SectionBar from "./components/SectionBar";

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
                                <Suspense fallback={<Loader size={45} color={'#D3D3D3'}/>}>
                                    <Experience/>
                                    <Education/>
                                    <Skills/>
                                    <Honors/>
                                    <Contact/>
                                </Suspense>
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