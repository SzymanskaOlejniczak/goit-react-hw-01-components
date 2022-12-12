import PropTypes from 'prop-types';
import styles from './FriendList.module.css';
import { FriendListItem } from '../FriendListItem/FriendListItem';
export function FriendList({ friends }) {
  return (
    <ul className={styles.friendListUl}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};