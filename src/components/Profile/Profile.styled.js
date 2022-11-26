import styled from 'styled-components';

export const ProfileWrap = styled.div`
  border: ${props => props.theme.borders.heading};
  border-radius: ${props => props.theme.radii.heading};
  box-shadow: ${props => props.theme.shadows.boxShadow};
  width: 600px;
`;

export const ProfileNameWrap = styled.div`
  font-weight: ${props => props.theme.fonts.bold};
`;

export const ProfileImg = styled.img`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

export const ProfileText = styled.p`
  text-align: center;
  justify-content: center;
  font-size: ${props => props.theme.fontSizes[6]}px;
  margin-top: ${props => props.theme.space[3]}px;
  margin-bottom: ${props => props.theme.space[3]}px;
`;

export const ProfileListStat = styled.ul`
  text-align: center;
  display: flex;
  justify-content: space-around;
  padding: ${props => props.theme.space[0]}px;
  margin: 0;
`;

export const ProfileItems = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: ${props => props.theme.fonts.body};
  margin-top: ${props => props.theme.space[3]}px;
  margin-bottom: ${props => props.theme.space[3]}px;
`;

export const StatName = styled.span`
  font-family: ${props => props.theme.fonts.body};
  font-weight: ${props => props.theme.fontWeights.body};
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSizes[5]}px;
`;

export const StatQuantity = styled.span`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSizes[5]}px;
`;
