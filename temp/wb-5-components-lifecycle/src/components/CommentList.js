import React from "react";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  margin-top: 24px;
`;

const ListItem = styled.li`
  padding: 8px;
  margin-bottom: 8px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

const CommentList = ({ items = [] }) =>
  items.length > 0 && (
    <List>
      {items.map(item => (
        <ListItem key={item.id}>
          <p>{item.text}</p>
          <p>
            Posted at: <b>{new Date(item.createdAt).toLocaleString()}</b>
          </p>
        </ListItem>
      ))}
    </List>
  );

export default CommentList;
