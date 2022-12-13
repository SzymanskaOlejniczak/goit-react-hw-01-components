import PropTypes from 'prop-types';
import styles from './Friends.module.css';
import { FriendListItem } from './FriendListItem';
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
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};