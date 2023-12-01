import React, { useRef } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LogoutIcon from "@mui/icons-material/Logout";
import Box from "@mui/material/Box"; // Import the Box component
import { useDispatch, useSelector } from "react-redux";
import { setPhotoURL } from "../../../../Redux/Actions/user_action";
import { getDatabase, ref, update } from "firebase/database";
import { getAuth, signOut, updateProfile } from "firebase/auth";
import {
  getStorage,
  ref as strRef,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";

function UserPanel() {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const inputOpenImageRef = useRef();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleOpenImageRef = () => {
    inputOpenImageRef.current.click();
  };

  const handleUploadImage = async (event) => {
    const file = event.target.files[0];
    const auth = getAuth();
    const user = auth.currentUser;

    const metadata = { contentType: file.type };
    const storage = getStorage();
    // https://firebase.google.com/docs/storage/web/upload-files#full_example
    try {
      //saving file in storage
      let uploadTask = uploadBytesResumable(
        strRef(storage, `user_image/${user.uid}`),
        file,
        metadata
      );

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case "storage/unauthorized":
              // User doesn't have permission to access the object
              break;
            case "storage/canceled":
              // User canceled the upload
              break;

            // ...

            case "storage/unknown":
              // Unknown error occurred, inspect error.serverResponse
              break;
          }
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            updateProfile(user, {
              photoURL: downloadURL,
            });

            dispatch(setPhotoURL(downloadURL));

            //DB user image update
            update(ref(getDatabase(), `users/${user.uid}`), {
              image: downloadURL,
            });
          });
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div style={{ display: "flex", marginBottom: "0rem" }}>
        <Avatar
          src={user && user.photoURL}
          style={{
            marginLeft: "20px",
            marginTop: "20px",
          }}
          alt={user && user.displayName}
        />

        {/* Wrap the IconButton in a Box with a red background */}
        <Box
          bgcolor="red"
          borderRadius="4px" // Adjust the border radius as needed
          marginTop="20px"
          marginLeft="10px"
          marginBottom="10px"
          display="inline-block"
        >
          <IconButton onClick={handleClick} style={{ padding: "8px" }}>
            <LogoutIcon style={{ color: "white" }} />
          </IconButton>
        </Box>

        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {/* Wrap the MenuItem in a Box with a red background */}
          <Box bgcolor="red">
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Box>
        </Menu>
      </div>

      <input
        onChange={handleUploadImage}
        accept="image/jpeg, image/png"
        style={{ display: "none" }}
        ref={inputOpenImageRef}
        type="file"
      />
    </div>
  );
}

export default UserPanel;
