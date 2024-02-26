import React, { useEffect, useState } from "react";
import userlogo from "../../assets/userlogo.jpg";
import Layouts from "../../Layouts/Layouts";
import { IoMdSend } from "react-icons/io";
import io from "socket.io-client";
import {
  getUserChatMessages,
  getUserDetails,
  getUsersChat,
} from "../../Apis/apicalls";
let socket;

function StudentChat() {
  const [userData, setUserData] = useState({});
  const [allusers, setAllUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(allusers[0]);
  console.log(allusers, "allusers");
  const getUser = async () => {
    const userdetails = await getUserDetails();
    setUserData(userdetails.user);
  };

  const getChatUsers = async () => {
    const res = await getUsersChat();
    setAllUsers(res.slots);
    setSelectedUser(res.slots[0].owner);
  };

  const getChatMessagesForUser = async () => {
    console.log(selectedUser, "fld");
    const res = await getUserChatMessages({
      from: userData.id,
      from_role: "user",
      to: selectedUser.id,
      to_role: "owner",
    });
    setMessages(res.messages);
  };

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getChatMessagesForUser();
    socket = io("http://localhost:5000", { transports: ["websocket"] });
    socket.on("chat message", (msg) => {
      console.log(
        msg.to,
        userData.id,
        msg.to_role,
        "sdlkgj",
        msg.to == userData.id && msg.to_role == "user"
      );
      if (msg.to == userData.id && msg.to_role == "user") {
        setMessages((prevMessages) => [...prevMessages, msg]);
      }
    });

    return () => {
      socket.off("chat message");
    };
  }, [selectedUser, userData]);
  useEffect(() => {
    getChatUsers();
    getUser();
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    const msgPayload = {
      body: message,
      from: userData.id,
      to: selectedUser.id,
      from_role: "user",
      to_role: "owner",
    };
    socket.emit("chat message", msgPayload, (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });
    setMessage("");
  };
  console.log(messages, "l;d");
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  return (
    <Layouts>
      <div className="hidden md:flex mx-2  text-bgblue border-gray-900 h-[80vh] overflow-auto ">
        <div className="w-1/3  lg:w-1/4 border-r-2 bg-white overflow-y-auto ">
          <div className="border-b-2 pl-2 items-center flex gap-5 py-2">
            <img
              src={userData.profile_image}
              className="w-10 h-10 border-gray-300 border-2 rounded-full"
            ></img>
            <p className="text-md">{userData.name}</p>
          </div>
          {allusers?.map((user) => {
            return (
              <div
                className="flex  items-start py-3 border-b-2 gap-3  font-body pl-2"
                onClick={(e) => {
                  setSelectedUser(user.owner);
                }}
              >
                <img
                  src={user.owner.profile_image}
                  className="w-10 h-10  mt-1 border-gray-300 border-2 rounded-full"
                ></img>
                <div className="">
                  <p className="font-bold md:text-[14px] lg:text-[16px]">
                    {user.room.name} - {user.owner?.name}
                  </p>
                  <p className="mt-1 md:text-[10px] lg:text-[12px]">
                    Last message
                  </p>
                </div>
                <p className="ml-auto mt-1 mr-5 font-semibold md:text-[10px] lg:text-[12px]">
                  Time
                </p>
              </div>
            );
          })}

          {/* duplicate */}

          {/* duplicate */}
        </div>
        <div className="w-full flex flex-col  h-[screen]">
          <div className="flex items-center border-b-2 pl-3 gap-5 py-2">
            <img
              src={selectedUser?.profile_image}
              className="w-10 h-10 border-gray-300 border-2 rounded-full"
            />
            <div className="font-body">
              <p className="text-md">{selectedUser?.name}</p>
              <p className="text-[10px]">Last seen</p>
            </div>
          </div>

          <div className="flex flex-col h-screen">
            <div className="flex-1 overflow-y-auto px-4 py-2 bg-gray-100">
              {/* Chat messages go here */}
              {/* Example message: */}
              {messages?.map((msg) => {
                return (
                  <div
                    className="msg_container"
                    style={{
                      display: "flex",
                      flexDirection: `${
                        msg.from === userData.id ? "row-reverse" : "row"
                      }`,
                    }}
                  >
                    <div
                      className="bg-gray-300 text-bgblue p-2 rounded-md mb-2 max-w-xs"
                      style={{ minWidth: "400px" }}
                    >
                      {msg.body}
                      {/* <div className="time">{msg.sent_at}</div> */}
                    </div>
                  </div>
                );
              })}
            </div>
            <form
              onSubmit={sendMessage}
              className="flex justify-between items-center px-4 py-2 bg-gray-200"
            >
              <input
                type="text"
                value={message}
                onChange={handleMessageChange}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
              <IoMdSend
                onClick={sendMessage}
                className="ml-2 w-8 h-8   cursor-pointer "
              />
            </form>
          </div>
        </div>
      </div>
      <div className="md:hidden h-[80vh]  border-x-2 mx-2 border-gray-300">
        <div className="">
          <div className="border-b-2 pl-2 justify-center items-center flex gap-5 py-2">
            <img
              src={userlogo}
              className="w-10 h-10 border-gray-300 border-2 rounded-full"
            ></img>
            <p className="text-md">Student Name</p>
          </div>
          <div className="flex  items-start py-3 border-b-2 gap-3  font-body pl-2">
            <img
              src={userlogo}
              className="w-10 h-10  mt-1 border-gray-300 border-2 rounded-full"
            ></img>
            <div className="">
              <p className="font-bold text-[16px]">Room title - username</p>
              <p className="mt-1 text-[14px] ">Last message</p>
            </div>
            <p className="ml-auto mt-1 mr-5 font-semibold text-[12px]">Time</p>
          </div>
        </div>
      </div>
    </Layouts>
  );
}

export default StudentChat;
