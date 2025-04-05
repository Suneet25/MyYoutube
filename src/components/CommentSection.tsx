import React from "react";
import Icon from "./common/Icon";

type Props = {};

const commentData = [
  {
    id: 1,
    userName: "Suneet",
    comment: "Hi, it's a nice video!",
    userAvatar: "",
    replies: [
      {
        id: 2,
        userName: "Swagat",
        comment: "Yes, totally agree!",
        userAvatar: "",
        replies: [
          {
            id: 3,
            userName: "Priya",
            comment: "I loved the cinematography!",
            userAvatar: "",
            replies: [],
          },
        ],
      },
      {
        id: 4,
        userName: "Ravi",
        comment: "Could've been a bit shorter, though.",
        userAvatar: "",
        replies: [],
      },
    ],
  },
  {
    id: 5,
    userName: "Shubham",
    comment: "It should come to OTT soon!",
    userAvatar: "",
    replies: [
      {
        id: 6,
        userName: "Nikhil",
        comment: "Yeahh..🚀",
        userAvatar: "",
        replies: [
          {
            id: 7,
            userName: "Rohit",
            comment: "Netflix should grab it!",
            userAvatar: "",
            replies: [],
          },
          {
            id: 8,
            userName: "Kiran",
            comment: "Or maybe Amazon Prime?",
            userAvatar: "",
            replies: [
              {
                id: 9,
                userName: "Aisha",
                comment: "Prime has better regional content anyway.",
                userAvatar: "",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 10,
    userName: "Anjali",
    comment: "The background score was 🔥🔥🔥",
    userAvatar: "",
    replies: [],
  },
];

const CommentList = ({ comment }) => {
  return (
    <div className="relative ml-4  pl-4 pb-4">
      <div className="flex gap-3 items-start ">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700">
          <Icon iconName="account_circle" iconClass="text-white text-2xl" />
        </div>

        <div className="flex flex-col">
          <p className="text-white font-semibold">{comment.userName}</p>
          <p className="text-gray-300">{comment.comment}</p>
        </div>
      </div>

      <div className="mt-3 border-l border-gray-700">
        {comment?.replies?.map((nestedComment) => (
          <CommentList key={nestedComment.id} comment={nestedComment} />
        ))}
      </div>
    </div>
  );
};

const CommentSection = () => {
  return (
    <>
      <div className="flex flex-col items-start justify-center gap-10">
        <p className="font-semibold text-xl text-white mt-10">
          {commentData?.length} Comments
        </p>
        <div className="flex items-center justify-between gap-5">
          <Icon
            iconName="account_circle"
            iconClass="text-white text-2xl mt-2"
          />

          <input
            type="text"
            placeholder="Add comment"
            className="border border-white text-white placeholder:text-white px-4 py-1 w-[900px]"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-10">
        {commentData?.map((comment) => (
          <CommentList comment={comment} />
        ))}
      </div>
    </>
  );
};

export default CommentSection;
