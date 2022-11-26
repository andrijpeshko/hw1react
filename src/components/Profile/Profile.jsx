import PropTypes from 'prop-types';
import {
  ProfileWrap,
  ProfileNameWrap,
  ProfileText,
  ProfileListStat,
  ProfileItems,
  StatName,
  StatQuantity,
  ProfileImg,
} from './Profile.styled';

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <ProfileWrap>
      <ProfileNameWrap>
        <ProfileImg src={avatar} alt={username} />
        <ProfileText>{username}</ProfileText>
        <ProfileText>@{tag}</ProfileText>
        <ProfileText>{location}</ProfileText>
      </ProfileNameWrap>

      <ProfileListStat>
        <ProfileItems>
          <StatName>Followers</StatName>
          <StatQuantity>{stats.followers}</StatQuantity>
        </ProfileItems>
        <ProfileItems>
          <StatName>Views</StatName>
          <StatQuantity>{stats.views}</StatQuantity>
        </ProfileItems>
        <ProfileItems>
          <StatName>Likes</StatName>
          <StatQuantity>{stats.likes}</StatQuantity>
        </ProfileItems>
      </ProfileListStat>
    </ProfileWrap>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
