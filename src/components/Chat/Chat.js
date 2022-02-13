import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import Messages from "../Messages/Messages";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";
import UserInfos from "../UserInfos/UserInfos";
import Snackbars from "../SnackBar";
import style from "./Chat.module.css";
import {
  messages as messageAtom,
  dark as darkAtom,
  hasError as hasErrorAtom,
  errorInfo as errorInfoAtom,
} from "../../store/atoms";
import { useRecoilState } from "recoil";

const ENDPOINT = "https://jeff-react-chat.herokuapp.com/";

let socket;

const Chat = ({ location }) => {
  const [messages, setMessages] = useRecoilState(messageAtom);
  const [dark] = useRecoilState(darkAtom);
  const [, setHasError] = useRecoilState(hasErrorAtom);
  const [, setErrorInfo] = useRecoilState(errorInfoAtom);
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = io("https://jeff-react-chat.herokuapp.com/");
    setRoom(room);
    setName(name);
    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
        setHasError(true);
        setErrorInfo(error);
      }
    });
  }, [location.search, setHasError, setErrorInfo]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, [setMessages]);

  useEffect(() => {
    console.log(messages);
  }, [messages]);
  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className={style.outerContainer}>
      <Snackbars />
      <UserInfos users={users} />
      <div
        className={style.container}
        style={{ backgroundColor: dark ? "#292929" : "#c3c3c3" }}
      >
        <InfoBar room={room} />
        <Messages dark={dark} messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
};

export default Chat;
