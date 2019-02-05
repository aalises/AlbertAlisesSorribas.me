import * as React from 'react'
import SectionHeader from '../../components/SectionHeader'
import HonorsItem from '../../components/HonorsItem'
import HonorsData from '../../data/honors'

export default () => (
  <React.Fragment>
    <SectionHeader title="Honors / Awards" icon="fa-award" />
    {HonorsData.map((data, idx) => (
      <HonorsItem key={`honor-item-${idx}`} {...data} />
    ))}
  </React.Fragment>
)
