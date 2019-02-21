import * as React from 'react';
import SectionHeader from '../components/SectionHeader';
import Timeline from '../components/Timeline';
import EducationData from '../data/education';
import { StaticQuery } from 'gatsby';
import { graphql } from 'gatsby';

const imageDataEducation = graphql`
  query {
    UPF_DEGREE_logo: file(relativePath: { eq: "UPF_LOGO.png" }) {
      ...fixedImage
    }
    UPF_DEGREE_1: file(relativePath: { eq: "graduated.jpg" }) {
      ...fluidImage
    }
    RMIT_DEGREE_logo: file(relativePath: { eq: "RMIT_LOGO.jpg" }) {
      ...fixedImage
    }
    RMIT_DEGREE_1: file(relativePath: { eq: "easternpoint.jpg" }) {
      ...fluidImage
    }
    UPF_MASTER_logo: file(relativePath: { eq: "UPF_LOGO.png" }) {
      ...fixedImage
    }
    UPF_MASTER_1: file(relativePath: { eq: "paperpresentation.jpg" }) {
      ...fluidImage
    }
    UPF_MASTER_2: file(relativePath: { eq: "StaticSetup3.jpg" }) {
      ...fluidImage
    }
    UPF_MASTER_3: file(relativePath: { eq: "brain_simulation.png" }) {
      ...fluidImage
    }
  }
`;

const Education = () => {
  return (
    <StaticQuery
      query={imageDataEducation}
      render={data => {
        return (
          <React.Fragment>
            <SectionHeader title="Education" icon="fa-book" />
            <Timeline itemType="education" data={EducationData} images={data} />
          </React.Fragment>
        );
      }}
    />
  );
};

export default Education;
