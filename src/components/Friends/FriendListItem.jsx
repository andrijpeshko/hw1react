import PropTypes from 'prop-types';
import {
  FriendItemStyle,
  FriendTextName,
  FriendIsOnline,
} from './Friends.styled';

export default function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <FriendItemStyle key={id}>
      <FriendIsOnline isOnline={isOnline}>{isOnline}</FriendIsOnline>
      <img src={avatar} alt="User avatar" width="100" />
      <FriendTextName>{name}</FriendTextName>
    </FriendItemStyle>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};
