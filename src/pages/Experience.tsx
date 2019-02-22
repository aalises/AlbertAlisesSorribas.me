import * as React from 'react';
import SectionHeader from '../components/SectionHeader';
import Timeline from '../components/Timeline';
import ExperienceData from '../data/experience';
import { useStaticQuery, graphql } from 'gatsby';

//GraphQL Data
export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const fixedImage = graphql`
  fragment fixedImage on File {
    childImageSharp {
      fixed(width: 96, quality: 100) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`;

const imageDataExperience = graphql`
  query {
    QMENTA_logo: file(relativePath: { eq: "isologo_color.png" }) {
      ...fixedImage
    }

    QMENTA_1: file(relativePath: { eq: "QMENTA1.png" }) {
      ...fluidImage
    }

    QMENTA_2: file(relativePath: { eq: "VR1.png" }) {
      ...fluidImage
    }

    QMENTA_3: file(relativePath: { eq: "VR2.png" }) {
      ...fluidImage
    }

    QMENTA_4: file(relativePath: { eq: "AMIScreenFE.png" }) {
      ...fluidImage
    }

    QMENTA_5: file(relativePath: { eq: "QMENTA2.png" }) {
      ...fluidImage
    }

    KCL_logo: file(relativePath: { eq: "KCL.jpg" }) {
      ...fixedImage
    }

    KCL_1: file(relativePath: { eq: "usingapp.jpg" }) {
      ...fluidImage
    }

    KCL_2: file(relativePath: { eq: "screnshot_KCL.png" }) {
      ...fluidImage
    }

    BCN_MEDTECH_logo: file(relativePath: { eq: "bcn_medtech.jpg" }) {
      ...fixedImage
    }

    BCN_MEDTECH_1: file(relativePath: { eq: "testsclinical.jpg" }) {
      ...fluidImage
    }

    BCN_MEDTECH_2: file(relativePath: { eq: "ThreeFetoscopes.png" }) {
      ...fluidImage
    }

    BCN_MEDTECH_3: file(relativePath: { eq: "testtracker.jpg" }) {
      ...fluidImage
    }
  }
`;

const Experience = () => {
  const data = useStaticQuery(imageDataExperience);
  return (
    <React.Fragment>
      <SectionHeader title="Experience" icon="fa-briefcase" />
      <Timeline itemType="experience" data={ExperienceData} images={data} />
    </React.Fragment>
  );
};

export default Experience;
