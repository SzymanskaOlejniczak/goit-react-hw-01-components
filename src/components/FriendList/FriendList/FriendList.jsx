import PropTypes from 'prop-types';
import styles from './FriendList.module.css';
import FriendListItem from '../FrientListItem/FriendListItem';
const FriendList = ({ friends }) => (
  <ul className={styles.friendListUl}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <FriendListItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline} />
    ))}
  </ul>
)

FriendList.propTypes = {
  friends: PropTypes.array,
};
export default FriendList;