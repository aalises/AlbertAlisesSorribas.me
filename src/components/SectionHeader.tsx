import * as React from 'react';
import { useSpring, animated } from 'react-spring';

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
    <div id={`section-${title}`} style={{ paddingTop: '2rem' }}>
      <animated.span style={animation} className="title is-4 has-text-grey-dark">
        <i style={{ paddingRight: '1rem' }} className={`fas ${icon}`} />
        {title}
      </animated.span>
      <div style={{ margin: '1rem 0' }} className="is-divider" />
    </div>
  );
};
