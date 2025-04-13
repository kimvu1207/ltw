import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import models from "../../modelData/models";
import "./styles.css";

function TopBar() {
  const location = useLocation();

  let title = "Photo Share App";
  if (location.pathname.startsWith("/users")) {
    const userId = location.pathname.split("/")[2];
    const user = models.userModel(userId);
    title = `${user.first_name} ${user.last_name}`;
  } else if (location.pathname.startsWith("/photos")) {
    const userId = location.pathname.split("/")[2];
    const user = models.userModel(userId);
    title = `Photos of ${user.first_name} ${user.last_name}`;
  }

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
