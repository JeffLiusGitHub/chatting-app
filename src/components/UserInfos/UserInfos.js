import React from "react";
import userIcon from "../../icons/avatar.jpg";
import Avatar from "@mui/material/Avatar";
import styles from "./UserInfos.module.css";
import { teal } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
const UserInfos = ({ users }) => {
  return (
    <div className={styles.userInfoContainer}>
      {users ? (
        <div>
          <h2 className={styles.title}>Chatting List</h2>
          <div className={styles.nameContainer}>
            <h2>
              {users.map(({ name }) => (
                <div key={name} className={styles.nameItem}>
                  <Avatar
                    sx={{
                      bgcolor: teal[600],
                      height: "30px",
                      width: "30px",
                      ml: "10px",
                      mr: "10px",
                    }}
                    alt="Jeff, cool designer"
                    src={userIcon}
                    overlap="circular"
                  ></Avatar>
                  <Typography variant="h8">User: {name}</Typography>
                </div>
              ))}
            </h2>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default UserInfos;
