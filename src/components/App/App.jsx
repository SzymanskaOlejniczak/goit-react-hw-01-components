import user from '../../data/user.json';
import data from '../../data/data.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions.json';
import { Statistics } from '../Statistics/Statistics';
import { Profile } from '../Profile/profile';
import styles from './App.module.css';
import { FriendList } from 'components/FriendList/FriendList';
import {TransactionHistory} from '../TransactionHistory/TransactionHistory';
export const App = () => {
  return (
<div className={styles.container}>
  <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
<Statistics stats={data} />
<FriendList friends={friends} />
<TransactionHistory items={transactions} />
</div>
  );
};
