import React from "react";

import styles from "./Message.module.css";

import ReactEmoji from "react-emoji";

const Message = ({ message: { text, user }, name, dark }) => {
  let isSentByCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();
  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className={`${styles.messageContainer} ${styles.justifyEnd}`}>
      <p
        className={`${styles.sentText} ${styles.pr}`}
        style={{ color: dark ? "#cecece" : "#828282" }}
      >
        {trimmedName}
      </p>
      <div className={`${styles.messageBox} ${styles.backgroundBlue}`}>
        <p className={`${styles.messageText} ${styles.colorWhite}`}>
          {ReactEmoji.emojify(text)}
        </p>
      </div>
    </div>
  ) : (
    <div className={`${styles.messageContainer} ${styles.justifyStart}`}>
      <div
        className={`${styles.messageBox} ${styles.backgroundLight}`}
        style={{ background: dark ? "#525151" : "#F3F3F3" }}
      >
        <p
          className={`${styles.messageText} ${styles.colorDark}`}
          style={{ color: dark ? "#F3F3F3" : "#353535" }}
        >
          {ReactEmoji.emojify(text)}
        </p>
      </div>
      <p className={`${styles.sentText} ${styles.pl}`}>{user}</p>
    </div>
  );
};

export default Message;
