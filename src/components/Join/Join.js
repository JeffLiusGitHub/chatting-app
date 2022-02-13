import React, { useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../icons/Chat_animation";
import styles from "./Join.module.css";

const SignIn = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  return (
    <div className={styles.joinOuterContainer}>
      <div className={styles.joinInnerContainer}>
        <Loading />
        <div className={styles.heading} aria-label="accessible-emoji">
          Jeff's Chat
        </div>
        <div>
          <input
            placeholder="Name"
            className={styles.joinInput}
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Room"
            className={styles.joinInput}
            type="text"
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className={styles.button} type="submit">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
