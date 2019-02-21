import * as React from 'react';
import SectionHeader from '../components/SectionHeader';
import HonorsItem from '../components/HonorsItem';
import HonorsData from '../data/honors';

const Honors = () => (
  <React.Fragment>
    <SectionHeader title="Honors / Awards" icon="fa-award" />
    {HonorsData.map(data => (
      <HonorsItem key={`honor-item-${data.id}`} {...data} />
    ))}
  </React.Fragment>
);

export default Honors;
