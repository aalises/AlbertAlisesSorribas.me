import * as React from 'react';
import Img from 'gatsby-image';

export default ({
  id,
  period,
  headingIcon,
  place,
  title,
  company,
  responsabilities,
  technologies,
  accomplishments,
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
          {images ? (
            <figure className="image is-96x96">
              <Img fixed={images[`${id}_logo`].childImageSharp.fixed} />
            </figure>
          ) : null}
        </div>
        <div className="column is-four-fifths">
          <p className="heading">{period}</p>
          <h1 className="title is-size-5">{title}</h1>
          <h6 className="subtitle is-size-6">{company}</h6>
          <h6 className="subtitle is-size-6">
            <i>{place}</i>
          </h6>
          <div className="content" style={{ fontSize: '14px' }}>
            <h2 className="title is-size-6 has-text-grey-dark">Responsabilities</h2>
            <ul>
              {responsabilities.map((el, idx) => (
                <li key={`resp-${idx}`}>{el}</li>
              ))}
            </ul>
            <h2 className="title is-size-6 has-text-grey-dark">Technologies</h2>
            <ul>
              {technologies.map((el, idx) => (
                <li key={`tech-${idx}`}>{el}</li>
              ))}
            </ul>
            <h2 className="title is-size-6 has-text-grey-dark">Accomplishments</h2>
            <ul>
              {accomplishments.map((el, idx) => (
                <li key={`acc-${idx}`}>{el}</li>
              ))}
            </ul>
            <div className="box" style={{ paddingTop: '3rem' }}>
              {additional_content(images)}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);