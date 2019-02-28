import * as React from 'react';
import MediaLinks from './MediaLinks';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { useSpring, animated } from 'react-spring';

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
          <div className="column" style={{ marginRight: '11.5%', marginTop: '6rem' }}>
            <div className="columns is-vcentered reverse-column-order">
              <div className="column">
                <animated.h1 className="title is-size-1" style={animation}>
                  {name}
                </animated.h1>
                <animated.h2 style={animation} className="subtitle is-size-4 has-text-grey">
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
          </div>
        </div>
      )}
    />
  );
};

export default Header;
