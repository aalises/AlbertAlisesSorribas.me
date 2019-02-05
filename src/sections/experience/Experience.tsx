import * as React from 'react'
import SectionHeader from '../../components/SectionHeader'
import Timeline from '../../components/Timeline'
import ExperienceData from '../../data/experience'

export default () => (
  <React.Fragment>
    <SectionHeader title="Experience" icon="fa-briefcase" />
    <Timeline itemType="experience" data={ExperienceData} />
  </React.Fragment>
)
