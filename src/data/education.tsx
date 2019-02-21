import * as React from 'react';
import Img from 'gatsby-image';

const UPF_DEGREE: EducationData = {
  id: 'UPF_DEGREE',
  headingIcon: 'fa-university',
  period: 'June 2012 - December 2015',
  place: 'Barcelona, Spain',
  university: 'Universitat Pompeu Fabra (UPF)',
  GPA: '8.22 / 10 (2nd of promotion)',
  degree: 'Telecommunication Engineering, Computer Sciences',
  specialization: [
    <div key="spec-degree-1">Image Processing and Machine Learning</div>,
    <div key="spec-degree-2">Sound and Signal Processing</div>,
    <div key="spec-degree-3">Developing Full Stack applications</div>,
  ],
  courses: [
    <div key="spec-course-1">Computer Sciences Courses on Fundamentals</div>,
    <div key="spec-course-2">Sound and Image Processing courses, with emphasis on Machine Learning</div>,
    <div key="spec-course-3">Fundamental Courses on Mathemathics and Physics</div>,
  ],
  additional_content: data => (
    <div className="column is-three-quarters">
      <figure className="image">
        <Img fluid={data['UPF_DEGREE_1'].childImageSharp.fluid} />
        <figcaption>We were pretty happy when graduating.</figcaption>
      </figure>
    </div>
  ),
};

const RMIT_DEGREE: EducationData = {
  id: 'RMIT_DEGREE',
  headingIcon: 'fa-robot',
  period: 'December 2015 - July 2016',
  place: 'Melbourne, Australia',
  university: 'Royal Melbourne Institute of Technology (RMIT)',
  GPA: '9.12 / 10',
  degree: 'Computer Sciences',
  specialization: [
    <div key="spec-rmit-1">Artificial Intelligence and algorithm programming in C, ProLog</div>,
    <div key="spec-rmit-2">Computer Graphics using Javascript / Three.JS</div>,
    <div key="spec-rmit-3">Virtual/Augmented Reality project using Unity3D and Vuforia + Google Cardboard</div>,
  ],
  courses: [
    <div key="course-rmit-1">Courses on Artificial Intelligence, Computer Graphics</div>,
    <div key="course-rmit-2">A project on VR/AR using Unity3D, structured with Git</div>,
  ],
  additional_content: data => (
    <div className="column is-full">
      <figure className="image">
        <Img fluid={data['RMIT_DEGREE_1'].childImageSharp.fluid} />
        <figcaption>We also had some time to travel around the land down under</figcaption>
      </figure>
    </div>
  ),
};

const UPF_MASTER: EducationData = {
  id: 'UPF_MASTER',
  headingIcon: 'fa-briefcase-medical',
  period: 'September 2016 - July 2017',
  university: 'Universitat Pompeu Fabra (UPF)',
  place: 'Barcelona, Spain',
  GPA: '9.15 / 10',
  degree: 'Msc. in Computational Biomedical Engineering',
  specialization: [
    <div key="spec-master-1">Algorithm programming in Python</div>,
    <div key="spec-master-2">Application programming and Computer Graphics for Medical Data</div>,
  ],
  courses: [
    <div key="course-master-1">
      Courses on Machine Learning, Complexity Science, Advanced Signal Analysis, Surgery Planning
    </div>,
    <div key="course-master-2">
      Academic Seminars on Machine Learning on Medicine and other topics organized by BCN MedTech
    </div>,
    <div key="course-master-3">Python and MATLAB Programming for Biomedical sciences</div>,
  ],
  additional_content: data => (
    <div className="tile is-ancestor">
      <div className="tile is-parent is-12">
        <div className="tile is-child is-7">
          <figure className="image">
            <Img fluid={data['UPF_MASTER_1'].childImageSharp.fluid} />
            <figcaption>
              Presenting a paper on my results from the work and master thesis at the CARS 2017 conference.
            </figcaption>
          </figure>
        </div>
        <div className="tile is-parent is-vertical">
          <div className="tile">
            <figure className="image">
              <Img fluid={data['UPF_MASTER_2'].childImageSharp.fluid} />
              <figcaption>Project on Augmented Reality Tracking for fetal interventions.</figcaption>
            </figure>
          </div>
          <div className="tile">
            <figure className="image">
              <Img fluid={data['UPF_MASTER_3'].childImageSharp.fluid} />
              <figcaption>Simulation of Deep Brain Stimulation Electrode insertion using C++.</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  ),
};
const dataObject: TimelineDataObject[] = [
  { id: 'header', medium: true, data: 'Now' },
  { id: 'item', data: UPF_MASTER },
  { id: 'item', data: RMIT_DEGREE },
  { id: 'item', data: UPF_DEGREE },
  { id: 'header', medium: true, data: '2012' },
];

// Data object
export default dataObject;
