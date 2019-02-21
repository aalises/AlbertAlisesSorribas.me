import * as React from 'react';

interface HonorsItemProps {
  title: string;
  issued: string;
  description: string;
}

const HonorsItem = ({ title, issued, description }: HonorsItemProps) => (
  <div className="box">
    <div className="column is-full">
      <h1 className="title is-size-5">{title}</h1>
      <h2 className="subtitle is-size-6">{issued}</h2>
      <div className="content" style={{ fontSize: '14px' }}>
        {description}
      </div>
    </div>
  </div>
);

export default HonorsItem;
