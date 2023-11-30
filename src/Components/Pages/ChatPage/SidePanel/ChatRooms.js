import React, { Component } from "react";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
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
      console.log(snapshot);
      console.log(snapshot.val());
      if (snapshot.exists()) {
        const userList = Object.entries(snapshot.val()).map((obj) => ({
          uid: obj[0],
          ...obj[1],
          selected: false,
        }));
        this.setState({ userList });
      }
    });
  };

  handleUserCheckboxChange = (e, uid) => {
    if (!e || !e.target) {
      console.error("Event or target is undefined.");
      return;
    }

    const { target } = e;
    const { value, checked } = target;
    const { userList } = this.state;
    const index = userList.findIndex((u) => u.uid === uid);
    if (index !== -1) {
      const updatedUserList = [...this.state.userList];
      updatedUserList[index].selected = !updatedUserList[index].selected;
      this.setState({ userList: updatedUserList });
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
    const { name, description } = this.state;
    const { user } = this.props;
    const selectedUsers = this.state.userList.filter((user) => user.selected);

    const newChatRoom = {
      id: key,
      name: name,
      description: description,
      createdBy: {
        name: user.displayName,
        image: user.photoURL,
      },
      users: [user.uid, ...selectedUsers.map((user) => user.uid)],
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
          {room.name}
          <Badge
            style={{ float: "right", marginTop: "5px" }}
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
            fontSize: "1.1em",
          }}
        >
          <ChatBubbleOutlineOutlinedIcon style={{ marginRight: 3 }} />
          USER ROOMS ({this.state.chatRooms.length})
          <AddOutlinedIcon
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

              <TextField
                label="Chat Room Participants"
                variant="outlined"
                fullWidth
                onChange={(e) => this.handleUserCheckboxChange(e)}
                value={this.state.userList
                  .filter((user) => user.selected)
                  .map((user) => user.first + " " + user.last)
                  .join(", ")}
                margin="normal"
              />

              <ul style={{ listStyleType: "none", padding: 0 }}>
                {this.state.userList.map((user) => (
                  <li key={user.uid}>
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        this.handleUserCheckboxChange(e, user.uid)
                      }
                      checked={user.selected || false}
                    />
                    {user.first}, {user.last}, {user.selected}
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

export default connect(mapStateToProps)(ChatRooms);
