import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "./Message/Message";
import styles from "./Messages.module.css";

const Messages = ({ dark, messages, name }) => (
  <ScrollToBottom className={styles.messages}>
    {messages.map((message, i) => (
      <div key={i}>
        <Message message={message} dark={dark} name={name} />
      </div>
    ))}
  </ScrollToBottom>
);

export default Messages;
