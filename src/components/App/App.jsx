import user from '../../data/user.json';
import data from '../../data/data.json';
import { Statistics } from '../Statistics/Statistics';
import { Profile } from '../Profile/profile.jsx';
import { Container } from './App.styled';
export const App = () => {
  return (
<Container>
  <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
<Statistics stats={data} />
</Container>
  );
};
