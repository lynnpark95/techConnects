import React, { Component } from "react";
<<<<<<< HEAD
import { FaRegSmileWink, FaPlus } from "react-icons/fa";
=======
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
>>>>>>> origin/Master
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Badge from "@mui/material/Badge";
import { connect } from "react-redux";
import {
  setCurrentChatRoom,
  setPrivateChatRoom,
} from "../../../../Redux/Actions/chatRoom_action";
import {
  getDatabase,
  ref,
  onChildAdded,
  onValue,
  push,
  child,
  update,
  off,
} from "firebase/database";

export class ChatRooms extends Component {
  state = {
    show: false,
    name: "",
    description: "",
    chatRoomsRef: ref(getDatabase(), "chatRooms"),
    messagesRef: ref(getDatabase(), "messages"),
    chatRooms: [],
    firstLoad: true,
    activeChatRoomId: "",
    notifications: [],
    userList: [],
  };

  componentDidMount() {
    this.addChatRoomsListeners();
    this.fetchUserList();
  }

  fetchUserList = () => {
    const usersRef = ref(getDatabase(), "users");

    onValue(usersRef, (snapshot) => {
<<<<<<< HEAD
      if (snapshot.exists()) {
        const userList = Object.values(snapshot.val()).map((user) => ({
          ...user,
=======
      console.log(snapshot)
      console.log(snapshot.val())
      if (snapshot.exists()) {
        const userList = Object.entries(snapshot.val()).map((obj) => ({
          uid: obj[0],
          ...obj[1],
>>>>>>> origin/Master
          selected: false,
        }));
        this.setState({ userList });
      }
    });
  };

<<<<<<< HEAD
  handleUserCheckboxChange = (user) => {
    if (!user || !user.target) {
=======
  handleUserCheckboxChange = (e, uid) => {
    if (!e || !e.target) {
>>>>>>> origin/Master
      console.error("Event or target is undefined.");
      return;
    }

<<<<<<< HEAD
    const { target } = user;
    const { value, checked } = target; // Use `checked` to determine if the checkbox is checked or unchecked
    const { userList } = this.state;

    const index = userList.findIndex((u) => u.uid === value);

    if (index !== -1) {
      // Toggle the selected property of the user in the userList
      this.setState((prevState) => {
        const updatedUserList = [...prevState.userList];
        updatedUserList[index].selected = checked;
        return { userList: updatedUserList };
      });
=======
    const { target } = e;
    const { value, checked } = target; 
    const { userList } = this.state;
    const index = userList.findIndex((u) => u.uid === uid);
    if (index !== -1) {
      const updatedUserList = [...this.state.userList];
        updatedUserList[index].selected = !updatedUserList[index].selected;
      this.setState( 
         { userList: updatedUserList }
      );
>>>>>>> origin/Master
    }
  };

  componentWillUnmount() {
    off(this.state.chatRoomsRef);
  }

  setFirstChatRoom = () => {
    const firstChatRoom = this.state.chatRooms[0];
    if (this.state.firstLoad && this.state.chatRooms.length > 0) {
      this.props.dispatch(setCurrentChatRoom(firstChatRoom));
      this.setState({ activeChatRoomId: firstChatRoom.id });
    }
    this.setState({ firstLoad: false });
  };

  addChatRoomsListeners = () => {
    let chatRoomsArray = [];

    onChildAdded(this.state.chatRoomsRef, (DataSnapshot) => {
      console.log("Received DataSnapshot:", DataSnapshot.val());

      chatRoomsArray.push(DataSnapshot.val());
      this.setState(
        {
          chatRooms: chatRoomsArray.filter((room) => {
            return room.users && room.users.includes(this.props.user.uid);
          }),
        },
        () => this.setFirstChatRoom()
      );
      this.addNotificationListener(DataSnapshot.key);
    });
  };

  addNotificationListener = (chatRoomId) => {
    let { messagesRef } = this.state;
    onValue(child(messagesRef, chatRoomId), (DataSnapshot) => {
      if (this.props.chatRoom) {
        this.handleNotification(
          chatRoomId,
          this.props.chatRoom.id,
          this.state.notifications,
          DataSnapshot
        );
      }
    });
  };

  handleNotification = (
    chatRoomId,
    currentChatRoomId,
    notifications,
    DataSnapshot
  ) => {
    let lastTotal = 0;

    let index = notifications.findIndex(
      (notification) => notification.id === chatRoomId
    );

    if (index === -1) {
      notifications.push({
        id: chatRoomId,
        total: DataSnapshot.size,
        lastKnownTotal: DataSnapshot.size,
        count: 0,
      });
    } else {
      if (chatRoomId !== currentChatRoomId) {
        lastTotal = notifications[index].lastKnownTotal;
        if (DataSnapshot.size - lastTotal > 0) {
          notifications[index].count = DataSnapshot.size - lastTotal;
        }
      }
      notifications[index].total = DataSnapshot.size;
    }
    this.setState({ notifications });
  };

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, description } = this.state;

    if (this.isFormValid(name, description)) {
      this.addChatRoom();
    }
  };

  addChatRoom = async () => {
    const key = push(this.state.chatRoomsRef).key;
<<<<<<< HEAD
    const { name, description, participants } = this.state;
    const { user } = this.props;
=======
    const { name, description } = this.state;
    const { user } = this.props;
    const selectedUsers = this.state.userList.filter((user) => user.selected);

>>>>>>> origin/Master
    const newChatRoom = {
      id: key,
      name: name,
      description: description,
      createdBy: {
        name: user.displayName,
        image: user.photoURL,
      },
<<<<<<< HEAD
      users: [user.uid, ...participants], // Include participants in the users array
=======
      users: [user.uid, ...selectedUsers.map((user) => user.uid)], 
>>>>>>> origin/Master
    };

    try {
      await update(child(this.state.chatRoomsRef, key), newChatRoom);
      this.setState({
        name: "",
        description: "",
        participants: [],
        show: false,
      });
    } catch (error) {
      alert(error);
    }
  };

  isFormValid = (name, description) => name && description;

  changeChatRoom = (room) => {
    this.props.dispatch(setCurrentChatRoom(room));
    this.props.dispatch(setPrivateChatRoom(false));
    this.setState({ activeChatRoomId: room.id });
  };

  getNotificationCount = (room) => {
    let count = 0;

    this.state.notifications.forEach((notification) => {
      if (notification.id === room.id) {
        count = notification.count;
      }
    });
    if (count > 0) return count;
  };

  //List of user rooms. Userroom array needs to be array.
  renderChatRooms = (chatRooms) => {
    const currentUser = this.props.user;
    return (
      chatRooms.length > 0 &&
      chatRooms.map((room) => (
        <li
          key={room.id}
          style={{
            backgroundColor:
              room.id === this.state.activeChatRoomId && "#ffffff45",
          }}
          onClick={() => this.changeChatRoom(room)}
        >
          # {room.name}
          <Badge
<<<<<<< HEAD
            style={{ float: "right", marginTop: "4px" }}
=======
            style={{ float: "right", marginTop: "5px" }}
>>>>>>> origin/Master
            badgeContent={this.getNotificationCount(room)}
            color="error"
          />
        </li>
      ))
    );
  };

  render() {
    console.log("Render:", this.state.userList);
    return (
      <div>
        <div
          style={{
            position: "relative",
            width: "100%",
            display: "flex",
            alignItems: "center",
<<<<<<< HEAD
          }}
        >
          <FaRegSmileWink style={{ marginRight: 3 }} />
          CHAT ROOMS ({this.state.chatRooms.length})
          <FaPlus
=======
            fontSize: "1.1em",
          }}
        >
          <ChatBubbleOutlineOutlinedIcon style={{ marginRight: 3 }} />
          USER ROOMS ({this.state.chatRooms.length})
          <AddOutlinedIcon
>>>>>>> origin/Master
            onClick={this.handleShow}
            style={{
              position: "absolute",
              right: 0,
              cursor: "pointer",
            }}
          />
        </div>

        <ul style={{ listStyleType: "none", padding: 0 }}>
          {this.renderChatRooms(this.state.chatRooms)}
        </ul>

        <Modal open={this.state.show} onClose={this.handleClose}>
          <div
            style={{ margin: "20px", backgroundColor: "#fff", padding: "15px" }}
          >
            <h2>Create a chat room</h2>
            <form onSubmit={this.handleSubmit}>
              <TextField
                label="Chat Room Name"
                variant="outlined"
                fullWidth
                onChange={(e) => this.setState({ name: e.target.value })}
                value={this.state.name}
                margin="normal"
              />

              <TextField
                label="Chat Room Description"
                variant="outlined"
                fullWidth
                onChange={(e) => this.setState({ description: e.target.value })}
                value={this.state.description}
                margin="normal"
              />

<<<<<<< HEAD
              {/* add more users to the chat room. Should be dynamic but we'll see what happens. Add the users to an array and add them to the group chat through that */}
=======
              
>>>>>>> origin/Master
              <TextField
                label="Chat Room Participants"
                variant="outlined"
                fullWidth
                onChange={(e) => this.handleUserCheckboxChange(e)}
                value={this.state.userList
                  .filter((user) => user.selected)
<<<<<<< HEAD
                  .map((user) => user.name)
=======
                  .map((user) => user.first +" " + user.last)
>>>>>>> origin/Master
                  .join(", ")}
                margin="normal"
              />

              <ul style={{ listStyleType: "none", padding: 0 }}>
                {this.state.userList.map((user) => (
                  <li key={user.uid}>
                    <input
                      type="checkbox"
<<<<<<< HEAD
                      onChange={() => this.handleUserCheckboxChange(user)}
                      checked={user.selected || false}
                    />
                    {user.firstName} {user.lastName}
=======
                      onChange={(e) => this.handleUserCheckboxChange(e, user.uid)}
                      checked={user.selected || false}
                    />
                    {user.first}, {user.last}, {user.selected}
>>>>>>> origin/Master
                  </li>
                ))}
              </ul>

              <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={this.handleSubmit}
                style={{ marginTop: "10px" }}
              >
                Create
              </Button>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.currentUser,
    chatRoom: state.chatRoom.currentChatRoom,
  };
};

<<<<<<< HEAD
export default connect(mapStateToProps)(ChatRooms);
=======
export default connect(mapStateToProps)(ChatRooms);
>>>>>>> origin/Master
