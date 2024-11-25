import React from "react";
import styled from "styled-components";
import CommentListItem from "./CommentListItem"; // Assuming CommentListItem is correctly exported

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

function CommentList(props) {
  const { comments } = props;

  return (
    <Wrapper>
      {comments.map((comment) => (
        <CommentListItem key={comment.id} comment={comment} />
      ))}
    </Wrapper>
  );
}

export default CommentList;
