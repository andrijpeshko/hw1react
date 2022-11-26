import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import { FriendListStyle } from './Friends.styled';

export default function FriendList({ friends }) {
  return (
    <FriendListStyle>
      {friends.map(friend => (
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          key={friend.id}
        />
      ))}
    </FriendListStyle>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool,
    })
  ),
};
