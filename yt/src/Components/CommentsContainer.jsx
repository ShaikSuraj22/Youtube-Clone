import React from "react";

const commentsData = [
  {
    id: 1,
    username: "JohnDoe",
    comment: "This video is amazing! Learned a lot.",
    replies: [
      {
        id: 2,
        username: "JaneSmith",
        comment: "Totally agree! The explanation was on point.",
        replies: [
          {
            id: 3,
            username: "TechGuru",
            comment: "Yes, I loved how clearly the concepts were explained.",
            replies: [],
          },
        ],
      },
      {
        id: 4,
        username: "MarkLee",
        comment: "Do you think this method works for all use cases?",
        replies: [],
      },
    ],
  },
  {
    id: 5,
    username: "Alice",
    comment: "Can someone clarify the second part of the video?",
    replies: [
      {
        id: 6,
        username: "Bob",
        comment: "Sure! The key point was about using recursion effectively.",
        replies: [],
      },
    ],
  },
  {
    id: 7,
    username: "Charlie",
    comment: "Great explanation! Thanks for the effort.",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { username, comment, replies } = data;
  return (
    <div className="flex space-x-3">
      {/* Profile Picture */}
      <img
        className="w-10 h-10 rounded-full"
        src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
        alt="profile"
      />
      {/* Comment Content */}
      <div className="flex-1">
        <div className="bg-gray-100 p-3 rounded-lg">
          <p className="text-sm font-semibold text-gray-800">{username}</p>
          <p className="text-sm text-gray-700 mt-1">{comment}</p>
        </div>
        {/* Reply Button */}
        <div className="mt-2 flex items-center space-x-3">
          <button className="text-sm text-gray-500 hover:text-gray-700">
            Reply
          </button>
          <button className="text-sm text-gray-500 hover:text-gray-700">
            Like
          </button>
        </div>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return (
    <div className="space-y-4">
      {comments.map((comm) => (
        <div key={comm.id}>
          <Comment data={comm} />
          {/* Nested Replies */}
          {comm.replies.length > 0 && (
            <div className="pl-8 mt-4 border-l-2 border-gray-200">
              <CommentList comments={comm.replies} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h1 className="text-lg font-semibold text-gray-800 mb-4">Comments</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;