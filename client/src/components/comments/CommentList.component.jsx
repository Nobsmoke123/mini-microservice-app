import React from "react";

const CommentListComponent = ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    let content;

    if (comment.status === "approved") {
      content = comment.content;
    }
    if (comment.status === "pending") {
      content = "This comment is awaiting moderation";
    }
    if (comment.status === "rejected") {
      content = "This comment has been rejected";
    }
    return <li key={comment.id}>{content}</li>;
  });

  return (
    <div>
      <h5>Comment List</h5>
      <ul>{renderedComments}</ul>
    </div>
  );
};

export default CommentListComponent;
