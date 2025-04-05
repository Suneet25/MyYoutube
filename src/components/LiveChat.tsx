import React, { useEffect, useState } from "react";
import { generateRandomComment, generateRandomUser } from "../utils/usableFns";
import { setLiveChats } from "../utils/slices/videoListSlice";
import { useDispatch, useSelector } from "react-redux";
import Icon from "./common/Icon";
import { SUNEET_IMAGE } from "../utils/constants";

type Props = {};

const LiveChat = (props: Props) => {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const liveChats = useSelector((state) => state.videosReducer.liveChats);
  //   const generateComment = () => {
  //     const user = generateRandomUser();
  //     const comment = generateRandomComment();
  //     comments.push({ user: user, comment: comment });
  //   };

  useEffect(() => {
    const timer = setInterval(() => {
      const user = generateRandomUser();
      const comment = generateRandomComment();
      dispatch(setLiveChats({ user, comment }));
    }, 2000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className=" border border-white ">
      <div className="text-white h-[600px] border border-white w-full overflow-y-scroll flex flex-col-reverse no-scrollbar">
        {!!liveChats &&
          liveChats?.map((chat) => (
            <div
              key={chat?.user?.id}
              className="text-white p-4 flex items-center gap-3 "
            >
              {chat?.user?.userAvatar ? (
                <img
                  src={chat?.user?.userAvatar}
                  alt="avatar"
                  className="h-5 w-5 rounded-full mt-1"
                />
              ) : (
                <div>
                  <Icon iconName="account_circle" iconClass="mt-2" />
                </div>
              )}
              <p className="text-slate-300 font-semibold">
                {chat?.user?.userName}
              </p>
              <p className="text-white line-clamp-2">{chat?.comment}</p>
            </div>
          ))}
      </div>
      <form className="w-full flex" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          className="w-full text-white py-2 px-3"
          placeholder="Enter to live chat !"
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
        <button
          className="bg-white py-2 px-3 font-semibold"
          onClick={() => {
            dispatch(
              setLiveChats({
                user: {
                  id: new Date(),
                  userName: "Suneet",
                  userAvatar: SUNEET_IMAGE,
                },
                comment: comment,
              })
            );
            setComment("");
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
