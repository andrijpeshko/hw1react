import styled from 'styled-components';

export const StatSection = styled.section`
  border: ${props => props.theme.borders.heading};
  border-radius: ${props => props.theme.radii.heading};
  box-shadow: ${props => props.theme.shadows.boxShadow};
  width: 500px;
  text-align: center;
  justify-content: center;
  font-size: ${props => props.theme.fontSizes[6]}px;
  margin-top: ${props => props.theme.space[3]}px;
  margin-bottom: ${props => props.theme.space[3]}px;
  width: 600px;
`;

export const StatList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: ${props => props.theme.space[0]}px;
`;

const getRandom = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${props => props.theme.space[1]}px;
  &:hover {
    background-color: ${getRandom};
  }
`;

export const StatLabel = styled.span`
  color: ${props => props.theme.colors.text};
`;

export const StatPercents = styled.span`
  color: ${props => props.theme.colors.primary};
`;
