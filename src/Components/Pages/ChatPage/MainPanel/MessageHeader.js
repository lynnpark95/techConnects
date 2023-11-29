import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from 'react-redux';
import { getDatabase, ref, onValue, remove, child, update } from 'firebase/database';
import Typography from '@mui/material/Typography';
import Header from '../../../Header';

function MessageHeader({ handleSearchChange }) {
  const chatRoom = useSelector(state => state.chatRoom.currentChatRoom);
  const isPrivateChatRoom = useSelector(state => state.chatRoom.isPrivateChatRoom);
  const [isFavorited, setIsFavorited] = useState(false);
  const usersRef = ref(getDatabase(), 'users');
  const user = useSelector(state => state.user.currentUser);

  useEffect(() => {
    if (chatRoom && user) {
      addFavoriteListener(chatRoom.id, user.uid);
    }
  }, [chatRoom, user]); // Add dependencies to the useEffect dependency array

  const addFavoriteListener = (chatRoomId, userId) => {
    onValue(child(usersRef, `${userId}/favorited`), data => {
      if (data.val() !== null) {
        const chatRoomIds = Object.keys(data.val());
        const isAlreadyFavorited = chatRoomIds.includes(chatRoomId);
        setIsFavorited(isAlreadyFavorited);
      }
    });
  };

  const handleFavorite = () => {
    if (isFavorited) {
      setIsFavorited(prev => !prev);
      remove(child(usersRef, `${user.uid}/favorited/${chatRoom.id}`));
    } else {
      setIsFavorited(prev => !prev);
      update(child(usersRef, `${user.uid}/favorited`), {
        [chatRoom.id]: {
          name: chatRoom.name,
          createdBy: {
            name: chatRoom.createdBy.name,
            image: chatRoom.createdBy.image,
          },
        },
      });
    }
  };
  const renderUserPosts = (userPosts) =>
        Object.entries(userPosts)
            .sort((a, b) => b[1].count - a[1].count)
            .map(([key, val], i) => (
                <div key={i} style={{ display: 'flex' }}>
                    <img
                        style={{ borderRadius: 25 }}
                        width={48}
                        height={48}
                        className="mr-3"
                        src={val.image}
                        alt={val.name}
                    />
                    <div>
                        <h6>{key}</h6>
                        <p>
                            {val.count} 개
                        </p>
                    </div>
                </div>
            ))

  return (
    <div>
      <div
        style={{
          width: '100%',
          height: '190px',
          border: '.2rem solid #ececec',
          borderRadius: '4px',
          padding: '1rem',
          marginTop: '3rem',
        }}
      >
        <Container>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12}>
              <TextField
                onChange={handleSearchChange}
                placeholder="Search Messages"
                variant="outlined"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
          {!isPrivateChatRoom && (
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
              <IconButton onClick={handleFavorite}>
                {isFavorited ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </IconButton>
              <Avatar
                src={chatRoom && chatRoom.createdBy.image}
                alt={chatRoom && chatRoom.createdBy.name}
                sx={{ width: '30px', height: '30px', mr: 1 }}
              />
              <Typography>{chatRoom && chatRoom.createdBy.name}</Typography>
            </div>
          )}
        </Container>
      </div>
    </div>
  );
}

export default MessageHeader;
