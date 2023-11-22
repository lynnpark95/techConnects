import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  getDatabase,
  ref,
  get,
} from "firebase/database";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardActions,
  Divider,
  Typography,
  Button,
} from "@mui/material";

export const AccountProfile = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
  
    useEffect(() => {
      const auth = getAuth();
      const db = getDatabase();
  
      const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
        if (authUser) {
            try {
                const userRef = ref(db, `users/${authUser.uid}`);
                const userData = await getUserData(userRef);
    
                if (userData) {
                    setUser({
                        avatar: userData.image,
                        first: userData.first,
                        last: userData.last,
                        email: userData.email,
                        phone: userData.phone,
                        role: userData.role
                    });
                } else {
                    // Handle if user info not found
                }
            } catch (error) {
                console.error("Error fetching user data: ", error.message);
            }
        } else {
            navigate("/signin");
        }
    });
    
    const getUserData = async (userRef) => {
        const snapshot = await get(userRef);
        return snapshot.exists() ? snapshot.val() : null;
    };
    
  
      return () => unsubscribe();
    }, [navigate]);
  
    if (!user) {
      return <div>Loading....</div>;
    }
  
    return (
      <Card sx={{ boxShadow: 'none' }}>
        <CardContent>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Avatar
              src={user.avatar || 'https://example.com/default-avatar.png'}
              sx={{
                height: 80,
                mb: 2,
                width: 80,
                borderRadius: '50%', // Make it circular
              }}
            />
            <Typography gutterBottom variant="h5">
              {user.first} {user.last}
            </Typography>
            <Typography color="text.secondary" variant="body2">
              {user.email}
            </Typography>
            <Typography color="text.secondary" variant="body2">
              {user.phone || "No phone number"}
            </Typography>
            <Typography color="text.secondary" variant="body2">
              {user.role || "No role given"}
            </Typography>
          </Box>
        </CardContent>
        <Divider />
        {/* ... (CardActions or other components) */}
      </Card>
    );
  };
  
