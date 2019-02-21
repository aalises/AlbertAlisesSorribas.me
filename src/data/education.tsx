import * as React from 'react';
import Img from 'gatsby-image';
import { withPrefix } from 'gatsby';

const UPF_DEGREE: EducationData = {
  id: 'UPF_DEGREE',
  headingIcon: 'fa-university',
  period: 'June 2012 - December 2015',
  place: 'Barcelona, Spain',
  university: 'Universitat Pompeu Fabra (UPF)',
  GPA: '8.22 / 10 (2nd of promotion)',
  degree: 'Telecommunication Engineering, Computer Sciences',
  specialization: [
    <div>Image Processing and Machine Learning</div>,
    <div>Sound and Signal Processing</div>,
    <div>Developing Full Stack applications</div>,
  ],
  courses: [
    <div>Computer Sciences Courses on Fundamentals</div>,
    <div>Sound and Image Processing courses, with emphasis on Machine Learning</div>,
    <div>Fundamental Courses on Mathemathics and Physics</div>,
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
    <div>Artificial Intelligence and algorithm programming in C, ProLog</div>,
    <div>Computer Graphics using Javascript / Three.JS</div>,
    <div>Virtual/Augmented Reality project using Unity3D and Vuforia + Google Cardboard</div>,
  ],
  courses: [
    <div>Courses on Artificial Intelligence, Computer Graphics</div>,
    <div>A project on VR/AR using Unity3D, structured with Git</div>,
  ],
  additional_content: data => (
    <div className="column is-full">
      <figure className="image">
        <Img fluid={data['RMIT_DEGREE_1'].childImageSharp.fluid} />
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
    <div>Algorithm programming in Python</div>,
    <div>Application programming and Computer Graphics for Medical Data</div>,
  ],
  courses: [
    <div>Courses on Machine Learning, Complexity Science, Advanced Signal Analysis, Surgery Planning</div>,
    <div>Academic Seminars on Machine Learning on Medicine and other topics organized by BCN MedTech</div>,
    <div>Python and MATLAB Programming for Biomedical sciences</div>,
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
