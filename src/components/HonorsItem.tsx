import * as React from 'react';
import { SpecialFontText } from '../styles/custom-styled-components';
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
      <SpecialFontText fontSize="14px" className="content">
        {description}
      </SpecialFontText>
    </div>
  </div>
);

export default HonorsItem;
