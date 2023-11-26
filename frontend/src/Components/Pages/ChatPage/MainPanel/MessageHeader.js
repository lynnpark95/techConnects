import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from 'react-redux';
import { getDatabase, ref, onValue, remove, child, update } from 'firebase/database';

function MessageHeader({ handleSearchChange }) {
  const chatRoom = useSelector(state => state.chatRoom.currentChatRoom);
  const isPrivateChatRoom = useSelector(state => state.chatRoom.isPrivateChatRoom);
  const [isFavorited, setIsFavorited] = useState(false);
  const usersRef = ref(getDatabase(), 'users');
  const user = useSelector(state => state.user.currentUser);
  const userPosts = useSelector(state => state.chatRoom.userPosts);

  useEffect(() => {
    if (chatRoom && user) {
      addFavoriteListener(chatRoom.id, user.uid);
    }
  }, []);

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
          description: chatRoom.description,
          createdBy: {
            name: chatRoom.createdBy.name,
            image: chatRoom.createdBy.image,
          },
        },
      });
    }
  };

  const renderUserPosts = userPosts =>
    Object.entries(userPosts)
      .sort((a, b) => b[1].count - a[1].count)
      .map(([key, val], i) => (
        <div key={i} style={{ display: 'flex' }}>
          <Avatar
            style={{ borderRadius: '25px' }}
            src={val.image}
            alt={val.name}
          />
          <div>
            <Typography variant="subtitle2">{key}</Typography>
            <Typography variant="body2">{val.count} 개</Typography>
          </div>
        </div>
      ));

  return (
    <div
      style={{
        width: '100%',
        height: '190px',
        border: '.2rem solid #ececec',
        borderRadius: '4px',
        padding: '1rem',
        marginBottom: '1rem',
      }}
    >
      <Container>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={8}>
            <Typography variant="h5">
              {isPrivateChatRoom ? <LockIcon /> : <LockOpenIcon />}
              {chatRoom && chatRoom.name}
              {!isPrivateChatRoom && (
                <IconButton onClick={handleFavorite}>
                  {isFavorited ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>
              )}
            </Typography>
          </Grid>
          <Grid item xs={4}>
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
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Typography>
              <Avatar
                src={chatRoom && chatRoom.createdBy.image}
                alt={chatRoom && chatRoom.createdBy.name}
                sx={{ width: '30px', height: '30px', mr: 1 }}
              />
              {chatRoom && chatRoom.createdBy.name}
            </Typography>
          </div>
        )}
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Accordion>
              <AccordionSummary>
                <Typography>Description</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{chatRoom && chatRoom.description}</Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={6}>
            <Accordion>
              <AccordionSummary>
                <Typography>Posts Count</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{userPosts && renderUserPosts(userPosts)}</Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default MessageHeader;
