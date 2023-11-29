import React from 'react';
import moment from 'moment';

function Message({ message, user }) {
    const timeFromNow = timestamp => moment(timestamp).fromNow();

    const isImage = message => {
        return message.hasOwnProperty("image") && !message.hasOwnProperty("content");
    };

    const isMessageMine = (message, user) => {
        if (user) {
            return message.user.id === user.uid;
        }
    };

    const messageContainerStyle = {
        marginBottom: '3px',
        display: 'flex',
        flexDirection: isMessageMine(message, user) ? 'row-reverse' : 'row',
    };

    const userImageStyle = {
        borderRadius: '10px',
        marginLeft: isMessageMine(message, user) ? '0' : '10px',
        marginRight: isMessageMine(message, user) ? '10px' : '0',
    };

    const messageContentStyle = {
        backgroundColor: isMessageMine(message, user) ? "#ADD8E6" : "#ECECEC",
        textAlign: isMessageMine(message, user) ? 'right' : 'left',
        padding: '10px',
        borderRadius: '10px',
    };

    return (
        <div style={messageContainerStyle}>
            <img
                style={userImageStyle}
                width={48}
                height={48}
                className="mr-3"
                src={message.user.image}
                alt={message.user.name}
            />
            <div style={messageContentStyle}>
                <h6>{message.user.name}{" "}
                    <span style={{ fontSize: '10px', color: 'gray' }}>
                        {timeFromNow(message.timestamp)}
                    </span>
                </h6>
                {isImage(message) ?
                    <img style={{ maxWidth: '300px' }} alt="이미지" src={message.image} />
                    :
                    <p>
                        {message.content}
                    </p>
                }
            </div>
        </div>
    );
}

export default Message;
