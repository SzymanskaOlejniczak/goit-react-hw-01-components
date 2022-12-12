import PropTypes from 'prop-types';
import styles from '../FriendList/FriendList.module.css';
export function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={styles.item}>
      <span className={styles.status} style={{backgroundColor:isOnline ?`green`:`red`}}></span>
      <img className="avatar" src={avatar} alt={name} width="70" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};