import React, { useEffect, useState } from "react";
import { Divider, List, ListItem, ListItemText, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { getUserList } from "../../api/api";
import "./styles.css";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUserList().then(setUsers);
  }, []);

  return (
    <div className="user-list-container">
      <Typography variant="h6">User List</Typography>
      <List component="nav">
        {users.map((item) => (
          <div key={item._id}>
            <ListItem
              button
              component={Link}
              to={`/users/${item._id}`}
              className="user-list-item"
            >
              <ListItemText primary={`${item.first_name} ${item.last_name}`} />
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </div>
  );
}

export default UserList;
