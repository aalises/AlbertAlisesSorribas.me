import * as React from 'react';
import SectionHeader from '../components/SectionHeader';
import SkillsItem from '../components/SkillsItem';
import SkillsData from '../data/skills';

export default () => (
  <React.Fragment>
    <SectionHeader title="Skills" icon="fa-laptop-code" />
    <div className="columns is-multiline">
      {SkillsData.map((data, idx) => (
        <SkillsItem key={`${data.title}-${idx}`} {...data} />
      ))}
    </div>
  </React.Fragment>
);
