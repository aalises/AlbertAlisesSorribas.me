import * as React from 'react';
import { useSpring, animated } from 'react-spring';
import { PaddingContainer, MarginContainer } from '../styles/custom-styled-components';

interface SectionHeaderProps {
  icon: string;
  title: string;
}

export default ({ icon, title }: SectionHeaderProps) => {
  const animation = useSpring({
    to: { opacity: 1, marginLeft: '0rem' },
    from: { opacity: 0, marginLeft: '1.5rem' },
  });

  return (
    <PaddingContainer padding="2rem 0 0 0" id={`section-${title}`}>
      <animated.span style={animation} className="title is-4 has-text-grey-dark">
        <i style={{ paddingRight: '1rem' }} className={`fas ${icon}`} />
        {title}
      </animated.span>
      <MarginContainer margin="1rem 0" className="is-divider" />
    </PaddingContainer>
  );
};
