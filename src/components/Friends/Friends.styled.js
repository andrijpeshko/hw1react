import styled from 'styled-components';

export const FriendListStyle = styled.ul`
  align-items: center;
  justify-content: space-around;
  padding: 0;
`;

export const FriendItemStyle = styled.li`
  display: flex;
  justify-content: space-around;
  border: ${props => props.theme.borders.heading};
  margin-top: ${props => props.theme.space[3]}px;
  margin-bottom: ${props => props.theme.space[3]}px;
  border-radius: ${props => props.theme.radii.heading};
  box-shadow: ${props => props.theme.shadows.boxShadow};
  width: 600px;
`;

export const FriendTextName = styled.p`
  font-family: ${props => props.theme.fonts.body};
  font-weight: ${props => props.theme.fonts.body};
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSizes[5]}px;
`;

export const FriendIsOnline = styled.span`
  width: 40px;
  height: 40px;
  margin-top: 25px;
  margin-bottom: 25px;
  justify-content: center;
  border: 1px solid black;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;
