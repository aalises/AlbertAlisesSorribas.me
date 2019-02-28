import * as React from 'react';
import Img from 'gatsby-image';
import { PaddingContainer, SpecialFontText } from '../../styles/custom-styled-components';

export default ({
  id,
  headingIcon,
  period,
  place,
  university,
  GPA,
  degree,
  specialization,
  courses,
  additional_content,
  images,
}: any) => (
  <div className="timeline-item">
    <div className="timeline-marker is-icon is-48x48">
      <i className={`fa ${headingIcon}`} />
    </div>
    <div className="timeline-content">
      <div className="columns">
        <div className="column">
          <figure className="image is-96x96">
            <Img fixed={images[`${id}_logo`].childImageSharp.fixed} />
          </figure>
        </div>
        <div className="column is-four-fifths">
          <p className="heading">{period}</p>
          <h1 className="title is-size-5">{degree}</h1>
          <h2 className="subtitle is-size-6">
            {university} , <i>{place}</i>{' '}
          </h2>
          <div className="tags has-addons">
            <span className="tag has-background-grey-dark has-text-white">GPA</span>
            <span className="tag has-background-grey-lighter">{GPA}</span>
          </div>
          <SpecialFontText fontSize="14px" className="content">
            <h2 className="title is-size-6 has-text-grey-dark">Specialization</h2>
            <ul>
              {specialization.map((el, idx) => (
                <li key={`spec-${idx}`}>{el}</li>
              ))}
            </ul>
            <h2 className="title is-size-6 has-text-grey-dark">Courses</h2>
            <ul>
              {courses.map((el, idx) => (
                <li key={`course-${idx}`}>{el}</li>
              ))}
            </ul>
            <PaddingContainer padding="3rem 0 0 0" className="box">
              {additional_content(images)}
            </PaddingContainer>
          </SpecialFontText>
        </div>
      </div>
    </div>
  </div>
);
