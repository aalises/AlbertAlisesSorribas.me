import * as React from 'react';

interface SectionHeaderProps {
  icon: string;
  title: string;
}

export default ({ icon, title }: SectionHeaderProps) => (
  <div id={`section-${title}`} style={{ paddingTop: '2rem' }}>
    <span className="title is-4 has-text-grey-dark">
      <i style={{ paddingRight: '1rem' }} className={`fas ${icon}`} />
      {title}
    </span>
    <div style={{ margin: '1rem 0' }} className="is-divider" />
  </div>
);
