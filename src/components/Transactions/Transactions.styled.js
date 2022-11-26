import styled from 'styled-components';

export const TransactionWrap = styled.table`
  border: ${props => props.theme.borders.heading};
  border-radius: ${props => props.theme.radii.heading};
  box-shadow: ${props => props.theme.shadows.boxShadow};
  width: 600px;
  text-align: center;
  font-family: ${props => props.theme.fonts.body};
  font-weight: ${props => props.theme.fontWeights.body};
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSizes[5]}px;

  & tr:nth-child(2n) {
    background-color: ${props => props.theme.colors.secondChild};
  }
`;
