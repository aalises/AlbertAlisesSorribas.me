
import * as React from "react";
import { TimelineDataObject, ExperienceData } from "@/types";

const QMENTA : ExperienceData = {
    period: 'July 2017 - Now',
    title: 'Software Developer',
    headingIcon: 'fa-brain',
    place: 'Barcelona, Spain',
    company: 'QMENTA Inc.',
    iconURL: 'isologo_color.png',
    responsabilities: [
    <div><b>Lead Frond-End Developer</b> shaping the QMENTA product</div>,
    <div>Developing <b>Continuous Deployment and Integration</b> pipelines and systems for the apps + Testing</div>,
    <div>Development of <b>Virtual Reality (VR)</b> based neuroimaging interaction tools and apps</div>,
    <div><b>Neuroimaging web-based visualizers</b> using Javascript/Node.JS/Three.JS for neuroimaging 
data (DICOM / NIFTI / Fibers) or connectomics (Chord diagrams, matrices etc)</div>
    ],
    technologies: [
        <div><b>Front-End:</b> React 16.5 (Suspense/Lazy API, Context API), Typescript, Redux/Redux-Zero, React Router v4, SASS, Styled Components, Parcel, Webpack, Formik...</div>,
        <div><b>CI/CD:</b> Jenkins pipelines, Docker, Docker Compose, Kubernetes </div>,
        <div><b>Testing:</b> Jest/Puppeteer (Legacy), Cypress (Current), PyTest </div>,
        <div><b>Virtual Reality:</b> Unity Engine, Oculus Rift, C#</div>,
        <div>Git (Bitbucket), JIRA for issue tracking, Confluence</div>,
        <div><b>Methodologies:</b> Git flow for branching, Agile/Scrum for developing</div>
    ],
    accomplishments: [
        <div><b>Lead developer</b> of the QMENTA Platform Front-End and NICTS (Neuro Imaging Clinical Trial Suite)</div>,
        <div>Implemented a <b>CD/CI system</b> for the Front-End products of QMENTA + Testing</div>,
        <div><b>Published a novel Virtual Reality application</b> for visualizing neuroimaging data, available <a href="https://www.oculus.com/experiences/rift/1547231975368367/" target="_blank">here</a></div>,
        <div><b>Wrote 2 articles on Medium/Dev.to</b> about <a href="https://medium.com/qmenta-tech-blog/preact-typescript-parcel-redux-zero-rebuilding-the-qmenta-front-end-focusing-on-performance-a7c879c5b288" target="_blank">the technologies used for the Front-End</a> and <a href="https://dev.to/aalises/dealing-with-asynchrony-when-writing-end-to-end-tests-with-puppeteer--jest-n37" target="_blank">Dealing with Asynchrony on e2e tests</a></div>,
    ]
}

const BCN_MEDTECH : ExperienceData = {
    period: 'June 2016 - July 2017',
    title: 'Software Developer',
    place: 'Barcelona, Spain',
    headingIcon: 'fa-vr-cardboard',
    company: 'BCN-MedTech, SimBioSys group (Simulation, Imaging and Modelling for Biomedical Systems)',
    iconURL: 'bcn_medtech.jpg',
    responsabilities: [
    <div><b>Lead Developer</b> on the SimBioSys group on two native applications for helping doctors on the surgery planning of fetal and brain diseases</div>,
    <div>The applications were supervised and tested by the medical staff of <i>La Maternitat Hospital</i> and IDIBAPS group</div>,
    <div><b>Integrating Augmented Reality solutions</b> for surgery planning into the applications</div>,
    <div>Developing minimal <b>Continuous Deployment and Integration</b> pipelines and systems for the apps</div>,
    <div>Performing accuracy tests, reports and statistics/plots of the system for scientific purposes</div>,
    ],
    technologies: [
        <div><b>Native Application:</b> Qt Framework, C++, MITK (Medical Interaction ToolKit), ITK, VTK, OpenCV, ArUco (AR), SOFA (Modeling and Physics) </div>,
        <div><b>CI/CD:</b> Jenkins pipelines for continuous deploying, Docker</div>,
        <div><b>Testing:</b> QTest (Unit testing Framework for Qt) </div>,
        <div>Git (Bitbucket) for version control</div>,
        <div><b>Documentation and accuracy tests:</b> LaTeX, Python (statistics, Bland Altman plots)</div>
    ],
    accomplishments: [
        <div><b>Lead developer</b> of an application that helps doctors come to a better diagnosis on Twin-to-Twin Transfussion Syndrome</div>,
        <div>Delivered a functional prototype at IDIBAPS meeting the goals of the project</div>,
        <div>Presented a poster at the CARS (Computer Assisted Radiology and Surgery) conference about Deep Brain Stimulation</div>,
    ]
}

const KCL: ExperienceData = {
    period: 'June 2015 - October 2015',
    title: 'Research Assistant / Trainee',
    headingIcon: 'fa-heart',
    place: 'London, UK',
    company: "King's College London (Biomedical Engineering department, Medical Image Computing group).",
    iconURL: 'KCL.jpg',
    responsabilities: [
    <div><b>Developing a Virtual Reality application</b> on <i>visualisation of 3D moving cardiac sequences</i> to help with the surgery planning of the <i>Hypoplastic Left Heart Syndrome</i> condition on children, together with the Evelina London Hospital of Children.</div>,
    <div><b>Continous feedback and testing</b> of the application by the cardiologists on the hospital.</div>,
    <div>Being involved in all the phases of the application, from design to implementation to algorithms of processing to integration with a VR environment to documentation</div>,
    ],
    technologies: [
        <div><b>Application:</b> Unity Engine with ZSpace, C#, Javascript</div>,
        <div><b>Documentation:</b> LaTeX</div>,
        <div><b>Version control:</b> Git (Github)</div>,
    ],
    accomplishments: [
        <div><b>Developed</b> a fully functional prototype for Hypoplastic Left Heart Syndrome surgery planning delivered on time</div>,
        <div>With this prototype, we managed to secure a grant on 2016, of the NHS (National Health Institute), for continuing the project up to 2 years</div>,
        <div>Wrote my Bachelor's thesis on the results of the project and received major distinction and honors for it</div>
    ]
}

const dataObject : TimelineDataObject[] = [
    {id: 'header', medium: true, data: 'Now'},
    {id: 'item', data: QMENTA},
    {id: 'item', data: BCN_MEDTECH},
    {id: 'header', medium: false, data: '2016'},
    {id: 'item', data: KCL},
    {id: 'header', medium: true, data: '2015'}
];

//Data object
export default dataObject