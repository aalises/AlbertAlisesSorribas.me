import styled from 'styled-components';

const breakpoints = {
  mobile: '333px',
  folding_max: '691px',
  folding_min: '389px',
};

const MarginContainer = styled.div`
  margin: ${props => props.margin || '0'};
`;

const PaddingContainer = styled.div`
  padding: ${props => props.padding || '0'};
`;

const FixedBar = styled.aside`
  position: fixed;
  top: 30%;
`;

const SpecialFontText = styled.div`
  font-size: ${props => props.fontSize || '12px'};
`;

const FixedHeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  background: #f2f2f2;
  min-width: ${breakpoints.mobile};
  padding-bottom: 3rem;
`;

const ContentContainer = styled.div`
  position: relative;
  margin-top: 30.7rem;
  @media (max-width: ${breakpoints.folding_max}) and (min-width: ${breakpoints.folding_min}) {
    margin-top: 34rem;
  }
  @media (max-width: ${breakpoints.folding_min}) {
    margin-top: 37rem;
  }
  background: white;
`;
export { MarginContainer, PaddingContainer, FixedBar, SpecialFontText, FixedHeaderContainer, ContentContainer };
