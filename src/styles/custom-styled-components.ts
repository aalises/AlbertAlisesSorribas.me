import styled from 'styled-components';

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
  background: aliceblue;
  min-width: 333px;
  section {
    padding-bottom: 3rem;
  }
`;

const ContentContainer = styled.div`
  position: relative;
  margin-top: 30.7rem;
  @media (max-width: 727px) and (min-width: 385px) {
    margin-top: 34rem;
  }
  @media (max-width: 384px) {
    margin-top: 37rem;
  }
  background: white;
`;
export { MarginContainer, PaddingContainer, FixedBar, SpecialFontText, FixedHeaderContainer, ContentContainer };
