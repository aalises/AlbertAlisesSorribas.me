import * as React from 'react';
import Img from 'gatsby-image';

const QMENTA: ExperienceData = {
  id: 'QMENTA',
  period: 'July 2017 - Now',
  title: 'Software Developer',
  headingIcon: 'fa-brain',
  place: 'Barcelona, Spain',
  company: 'QMENTA Inc.',
  responsabilities: [
    <div key="qmenta-resp-1">
      <b>Lead Frond-End Developer</b> shaping the QMENTA product
    </div>,
    <div key="qmenta-resp-2">
      Developing <b>Continuous Deployment and Integration</b> pipelines and systems for the apps + Testing
    </div>,
    <div key="qmenta-resp-3">
      Development of <b>Virtual Reality (VR)</b> based neuroimaging interaction tools and apps
    </div>,
    <div key="qmenta-resp-4">
      <b>Neuroimaging web-based visualizers</b> using Javascript/Node.JS/Three.JS for neuroimaging data (DICOM / NIFTI /
      Fibers) or connectomics (Chord diagrams, matrices etc)
    </div>,
  ],
  technologies: [
    <div key="qmenta-tech-1">
      <b>Front-End:</b> React 16.5 (Suspense/Lazy API, Context API), Typescript, Redux/Redux-Zero, React Router v4,
      SASS, Styled Components, Parcel, Webpack, Formik...
    </div>,
    <div key="qmenta-tech-2">
      <b>CI/CD:</b> Jenkins pipelines, Docker, Docker Compose, Kubernetes{' '}
    </div>,
    <div key="qmenta-tech-3">
      <b>Testing:</b> Jest/Puppeteer (Legacy), Cypress (Current), PyTest{' '}
    </div>,
    <div key="qmenta-tech-4">
      <b>Virtual Reality:</b> Unity Engine, Oculus Rift, C#
    </div>,
    <div key="qmenta-tech-5">Git (Bitbucket), JIRA for issue tracking, Confluence</div>,
    <div key="qmenta-tech-6">
      <b>Methodologies:</b> Git flow for branching, Agile/Scrum for developing
    </div>,
  ],
  accomplishments: [
    <div key="qmenta-acc-1">
      <b>Lead developer</b> of the QMENTA Platform Front-End and NICTS (Neuro Imaging Clinical Trial Suite)
    </div>,
    <div key="qmenta-acc-2">
      Implemented a <b>CD/CI system</b> for the Front-End products of QMENTA + Testing
    </div>,
    <div key="qmenta-acc-3">
      <b>Published a novel Virtual Reality application</b> for visualizing neuroimaging data, available on the Oculus
      Rift Store,{' '}
      <a href="https://www.oculus.com/experiences/rift/1547231975368367/" target="_blank" rel="noopener noreferrer">
        here
      </a>
    </div>,
    <div key="qmenta-acc-4">
      <b>Wrote 2 articles on Medium/Dev.to</b> about{' '}
      <a
        href="https://medium.com/qmenta-tech-blog/preact-typescript-parcel-redux-zero-rebuilding-the-qmenta-front-end-focusing-on-performance-a7c879c5b288"
        target="_blank"
        rel="noopener noreferrer"
      >
        the technologies used for the Front-End
      </a>{' '}
      and{' '}
      <a
        href="https://dev.to/aalises/dealing-with-asynchrony-when-writing-end-to-end-tests-with-puppeteer--jest-n37"
        target="_blank"
        rel="noopener noreferrer"
      >
        Dealing with Asynchrony on e2e tests
      </a>
    </div>,
  ],
  additional_content: data => (
    <div className="tile is-ancestor">
      <div className="tile is-parent is-12 is-vertical">
        <div className="tile is-child is-12">
          <figure className="image">
            <Img fluid={data['QMENTA_1'].childImageSharp.fluid} />
            <figcaption>Register view of the QMENTA Platform (Front-end with React).</figcaption>
          </figure>
        </div>
        <div className="tile is-parent" style={{ padding: '3rem 0rem !important' }}>
          <div className="tile is-child is-6">
            <figure className="image">
              <Img fluid={data['QMENTA_2'].childImageSharp.fluid} />
              <figcaption>Screenshots of Brain Fibers inside the BrainVis VR application.</figcaption>
            </figure>
          </div>
          <div className="tile is-child is-6">
            <figure className="image">
              <Img fluid={data['QMENTA_3'].childImageSharp.fluid} />
            </figure>
          </div>
        </div>
        <div className="tile is-child">
          <figure className="image">
            <Img fluid={data['QMENTA_4'].childImageSharp.fluid} />
            <figcaption>Screenshot of the visualizer I developed using Javascript/Three.JS</figcaption>
          </figure>
        </div>
        <div className="tile is-child">
          <figure className="image">
            <Img fluid={data['QMENTA_5'].childImageSharp.fluid} />
            <figcaption>Screenshot of the main view of the QMENTA Platform (Front-end with React / Preact)</figcaption>
          </figure>
        </div>
      </div>
    </div>
  ),
};

const BCN_MEDTECH: ExperienceData = {
  id: 'BCN_MEDTECH',
  period: 'June 2016 - July 2017',
  title: 'Software Developer',
  place: 'Barcelona, Spain',
  headingIcon: 'fa-vr-cardboard',
  company: 'BCN-MedTech, SimBioSys group (Simulation, Imaging and Modelling for Biomedical Systems)',
  iconURL: 'bcn_medtech.jpg',
  responsabilities: [
    <div key="medtech-resp-1">
      <b>Lead Developer</b> on the SimBioSys group on two native applications for helping doctors on the surgery
      planning of fetal and brain diseases
    </div>,
    <div key="medtech-resp-2">
      The applications were supervised and tested by the medical staff of <i>La Maternitat Hospital</i> and IDIBAPS
      group
    </div>,
    <div key="medtech-resp-3">
      <b>Integrating Augmented Reality solutions</b> for surgery planning into the applications
    </div>,
    <div key="medtech-resp-4">
      Developing minimal <b>Continuous Deployment and Integration</b> pipelines and systems for the apps
    </div>,
    <div key="medtech-resp-5">
      Performing accuracy tests, reports and statistics/plots of the system for scientific purposes
    </div>,
  ],
  technologies: [
    <div key="medtech-tech-1">
      <b>Native Application:</b> Qt Framework, C++, MITK (Medical Interaction ToolKit), ITK, VTK, OpenCV, ArUco (AR),
      SOFA (Modeling and Physics){' '}
    </div>,
    <div key="medtech-tech-2">
      <b>CI/CD:</b> Jenkins pipelines for continuous deploying, Docker
    </div>,
    <div key="medtech-tech-3">
      <b>Testing:</b> QTest (Unit testing Framework for Qt){' '}
    </div>,
    <div key="medtech-tech-4">Git (Bitbucket) for version control</div>,
    <div key="medtech-tech-5">
      <b>Documentation and accuracy tests:</b> LaTeX, Python (statistics, Bland Altman plots)
    </div>,
  ],
  accomplishments: [
    <div key="medtech-acc-1">
      <b>Lead developer</b> of an application that helps doctors come to a better diagnosis on Twin-to-Twin Transfussion
      Syndrome
    </div>,
    <div key="medtech-acc-2">Delivered a functional prototype at IDIBAPS meeting the goals of the project</div>,
    <div key="medtech-acc-3">
      Presented a poster at the CARS (Computer Assisted Radiology and Surgery) conference about Deep Brain Stimulation
    </div>,
  ],
  additional_content: data => (
    <div className="tile is-ancestor">
      <div className="tile is-5 is-vertical is-parent">
        <div className="tile is-child">
          <figure className="image">
            <Img fluid={data['BCN_MEDTECH_1'].childImageSharp.fluid} />
            <figcaption>Testing the application on a Clinical Environment at la Maternitat Hospital.</figcaption>
          </figure>
        </div>
        <div className="tile is-child">
          <figure className="image">
            <Img fluid={data['BCN_MEDTECH_2'].childImageSharp.fluid} />
            <figcaption>Model of the placenta with the fetoscopes.</figcaption>
          </figure>
        </div>
      </div>
      <div className="tile is-parent">
        <div className="tile is-child">
          <figure className="image">
            <Img fluid={data['BCN_MEDTECH_3'].childImageSharp.fluid} />
            <figcaption>Testing the Qt/MITK C++ Application with the Aurora EM Tracker</figcaption>
          </figure>
        </div>
      </div>
    </div>
  ),
};

const KCL: ExperienceData = {
  id: 'KCL',
  period: 'June 2015 - October 2015',
  title: 'Research Assistant / Trainee',
  headingIcon: 'fa-heart',
  place: 'London, UK',
  company: "King's College London (Biomedical Engineering department, Medical Image Computing group).",
  iconURL: 'KCL.jpg',
  responsabilities: [
    <div key="kcl-resp-1">
      <b>Developing a Virtual Reality application</b> on <i>visualisation of 3D moving cardiac sequences</i> to help
      with the surgery planning of the <i>Hypoplastic Left Heart Syndrome</i> condition on children, together with the
      Evelina London Hospital of Children.
    </div>,
    <div key="kcl-resp-2">
      <b>Continous feedback and testing</b> of the application by the cardiologists on the hospital.
    </div>,
    <div key="kcl-resp-3">
      Being involved in all the phases of the application, from design to implementation to algorithms of processing to
      integration with a VR environment to documentation
    </div>,
  ],
  technologies: [
    <div key="kcl-tech-1">
      <b>Application:</b> Unity Engine with ZSpace, C#, Javascript
    </div>,
    <div key="kcl-tech-2">
      <b>Documentation:</b> LaTeX
    </div>,
    <div key="kcl-tech-3">
      <b>Version control:</b> Git (Github)
    </div>,
  ],
  accomplishments: [
    <div key="kcl-acc-1">
      <b>Developed</b> a fully functional prototype for Hypoplastic Left Heart Syndrome surgery planning delivered on
      time
    </div>,
    <div key="kcl-acc-2">
      With this prototype, we managed to secure a grant on 2016, of the NHS (National Health Institute), for continuing
      the project up to 2 years
    </div>,
    <div key="kcl-acc-3">
      Wrote my Bachelor's thesis on the results of the project and received major distinction and honors for it
    </div>,
  ],
  additional_content: data => (
    <div className="columns">
      <div className="column is-two-thirds no-padding">
        <figure className="image">
          <Img fluid={data['KCL_1'].childImageSharp.fluid} />
          <figcaption>Clinical staff from the Evelina London Hospital of Children testing the Application.</figcaption>
        </figure>
      </div>
      <div className="column no-padding">
        <figure className="image">
          <Img fluid={data['KCL_2'].childImageSharp.fluid} />
          <figcaption>Render of ultrasound Heart Data in VR.</figcaption>
        </figure>
      </div>
    </div>
  ),
};

const dataObject: TimelineDataObject[] = [
  { id: 'header', medium: true, data: 'Now' },
  { id: 'item', data: QMENTA },
  { id: 'item', data: BCN_MEDTECH },
  { id: 'header', medium: false, data: '2016' },
  { id: 'item', data: KCL },
  { id: 'header', medium: true, data: '2015' },
];

// Data object
export default dataObject;
