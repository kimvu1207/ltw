import React, { useEffect, useState } from "react";
import { Typography, Button } from "@mui/material";
import { useParams, Link } from "react-router-dom";
import { getUserById } from "../../api/api";
import "./styles.css";

function UserDetail() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserById(userId).then(setUser);
  }, [userId]);

  if (!user) return <Typography>Loading...</Typography>;

  return (
    <div className="user-detail-container">
      <Typography variant="h5">
        {user.first_name} {user.last_name}
      </Typography>
      <Typography variant="body1">Location: {user.location}</Typography>
      <Typography variant="body1">Occupation: {user.occupation}</Typography>
      <Typography variant="body2" paragraph>
        {user.description}
      </Typography>

      <Button
        variant="contained"
        color="primary"
        component={Link}
        to={`/photos/${userId}`}
        className="user-detail-button"
      >
        View Photos
      </Button>
    </div>
  );
}

export default UserDetail;
