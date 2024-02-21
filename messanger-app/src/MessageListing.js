import React from 'react';
import PropTypes from 'prop-types';


const MessageListing =(props)=> {
    const { messages, user } = props;

    return (
        <ul className="message-list">
            {messages.map((message, index) => (
                <li
                    key={index}
                    className={
                        message.username === user.username ? 'message sender' : 'message recipient'
                    }
                >
                    <div className='user'>
                        {message.username}
                    </div>
                    <div className='text'>
                        {message.text}
                    </div>
                    {/* <p>{`${message.username}`} </p> <br/> */}
                    {/* <p> {`${message.text}`}</p> */}
                </li>
            ))}
        </ul>
    );
};

MessageListing.propTypes = {
    messages: PropTypes.array.isRequired,
    user: PropTypes.object.isRequired,
};

export default MessageListing;