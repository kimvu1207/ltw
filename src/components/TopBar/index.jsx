import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { getUserById } from "../../api/api";
import "./styles.css";

function TopBar() {
  const location = useLocation();
  const [title, setTitle] = useState("Photo Share App");

  useEffect(() => {
    const path = location.pathname;
    if (path.startsWith("/users") || path.startsWith("/photos")) {
      const userId = path.split("/")[2];
      getUserById(userId).then((user) => {
        if (user) {
          const name = `${user.first_name} ${user.last_name}`;
          setTitle(path.startsWith("/users") ? name : `Photos of ${name}`);
        }
      });
    } else {
      setTitle("Photo Share App");
    }
  }, [location]);

  return (
    <AppBar position="static" className="app-bar">
      <Toolbar>
        <Typography variant="h6" className="app-bar-title">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
