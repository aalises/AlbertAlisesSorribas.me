import * as React from 'react';
import TimelineItem from './timelineItems/TimelineItem';

export default ({ itemType, data, images }: TimelineProps) => {
  return (
    <div className="timeline">
      {data.map((el, idx) => {
        if (el.id === 'item') {
          return (
            <TimelineItem
              key={`timeline-item-${itemType}-${idx}`}
              type={itemType}
              images={images ? images : null}
              {...el.data}
            />
          );
        }
        if (el.id === 'header') {
          return (
            <header key={`timeline-header-${itemType}-${idx}`} className="timeline-header">
              <span className={`tag ${el.medium ? 'is-medium' : ''} has-background-grey-dark has-text-white`}>
                {el.data}
              </span>
            </header>
          );
        }
      })}
    </div>
  );
};
