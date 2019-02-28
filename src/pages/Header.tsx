import * as React from 'react';
import MediaLinks from './MediaLinks';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { useSpring, animated } from 'react-spring';
import { MarginContainer } from '../styles/custom-styled-components';

const dataQuery = graphql`
  query {
    file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        fixed(width: 180, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const Header = ({ name, role }: any) => {
  const animation = useSpring({
    to: { opacity: 1, marginTop: '0rem' },
    from: { opacity: 0, marginTop: '1.3rem' },
  });
  return (
    <StaticQuery
      query={dataQuery}
      render={data => (
        <div id="section-Header" className="container has-text-centered">
          <MarginContainer margin="4rem 5% 0 0" className="column">
            <div className="columns is-vcentered reverse-column-order">
              <div className="column">
                <animated.h1 className="title is-size-1 title-background" style={animation}>
                  <span style={{ fontWeight: '300' }}>Hi! I'm </span>
                  {name}
                </animated.h1>
                <animated.h2 style={animation} className="subtitle-background subtitle is-size-4 has-text-grey-dark">
                  {role}
                </animated.h2>
                <MediaLinks />
              </div>
              <div className="column">
                <figure className="image is-180x180">
                  <Img style={{ borderRadius: '290486px' }} fixed={data.file.childImageSharp.fixed} />
                </figure>
              </div>
            </div>
          </MarginContainer>
        </div>
      )}
    />
  );
};

export default Header;
