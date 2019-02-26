import * as React from 'react';
import MediaLinksData from '../data/medialinks';

const MediaLinks = () => (
  <div style={{ justifyContent: 'center' }} className="field is-grouped is-grouped-multiline">
    {MediaLinksData.map(el => (
      <a
        aria-label="Links to social media (LinkedIn, Facebook, etc...)"
        style={{ margin: '0rem 0.5rem' }}
        key={`${el.icon}-medialink`}
        href={el.link}
        target="_blank"
        rel="noopener noreferrer"
        className="icon is-medium media-link"
      >
        <i className={`${el.icon}`} />
      </a>
    ))}
  </div>
);

export default MediaLinks;
