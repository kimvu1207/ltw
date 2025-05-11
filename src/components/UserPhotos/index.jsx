import React, { useEffect, useState } from "react";
import { Typography, Divider, Box, Paper } from "@mui/material";
import { useParams, Link } from "react-router-dom";
import { getPhotosByUser, getUserById } from "../../api/api";
import "./styles.css";

function UserPhotos() {
  const { userId } = useParams();
  const [photos, setPhotos] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserById(userId).then(setUser);
    getPhotosByUser(userId).then(setPhotos);
  }, [userId]);

  if (!user) return <Typography>Loading...</Typography>;

  return (
    <Box p={2}>
      <Typography variant="h5" gutterBottom>
        Photos of {user.first_name} {user.last_name}
      </Typography>

      {photos.map((photo) => (
        <Paper key={photo._id} elevation={3} className="photo-card">
          <img
            src={`/images/${photo.file_name}`}
            alt="user-upload"
            className="photo-img"
          />
          <Typography
            variant="caption"
            display="block"
            align="center"
            color="textSecondary"
            mt={1}
          >
            {new Date(photo.date_time).toLocaleString()}
          </Typography>

          {photo.comments?.length > 0 && (
            <Box mt={2} px={2}>
              <Typography variant="subtitle2">Comments:</Typography>
              {photo.comments.map((comment) => (
                <Box key={comment._id} className="comment-box">
                  <Typography variant="body2">
                    <Link to={`/users/${comment.user._id}`} className="comment-author">
                      {comment.user.first_name} {comment.user.last_name}
                    </Link>
                    : {comment.comment}
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    {new Date(comment.date_time).toLocaleString()}
                  </Typography>
                </Box>
              ))}
            </Box>
          )}
          <Divider style={{ marginTop: 16, marginBottom: 16 }} />
        </Paper>
      ))}
    </Box>
  );
}

export default UserPhotos;
