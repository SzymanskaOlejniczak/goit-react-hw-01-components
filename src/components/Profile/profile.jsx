import PropTypes from 'prop-types';
import {
  ProfileDiv,
  Description,
  NameUser,
  TagUser,
  LocationUser,
  Stats,
  ItemsStats,
  SpanLabel,
  SpanQuantity,
  PhotoAvatar,
} from './profile.styled';
export function Profile({
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  }){
    console.log({
        username,
        tag,
        location,
        avatar,
        stats: { followers, views, likes },
      })
    return (
        <ProfileDiv>
            <Description>
                <PhotoAvatar src={avatar} alt={username}/>
                <NameUser>{username}</NameUser>
                <TagUser>@{tag}</TagUser>
                <LocationUser>{location}</LocationUser>
                <Stats>
                    <ItemsStats>
                        <SpanLabel>Followers</SpanLabel>
                        <SpanQuantity>{followers}</SpanQuantity>
                    </ItemsStats>
                    <ItemsStats>
                        <SpanLabel>Views</SpanLabel>
                        <SpanQuantity>{views}</SpanQuantity>
                    </ItemsStats>
                    <ItemsStats>
                        <SpanLabel>Likes</SpanLabel>
                        <SpanQuantity>{likes}</SpanQuantity>
                    </ItemsStats>
                </Stats>
            </Description>
        </ProfileDiv>
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
    }).isRequired,
  };