import React from "react";
import { useSelector } from "react-redux";
import UserForm from "../components/UserForm";
import UserList from "../components/UserList";
import { Box, Typography, Button } from "@mui/material";

const UserManagement = () => {
  const users = useSelector((state) => state.users.users);

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant='h4' gutterBottom>
        User Management
      </Typography>

      {/* Conditional Rendering */}
      {users.length === 0 ? (
        <Box>
          <Typography variant='h6' color='textSecondary'>
            No users available. Please add a user.
          </Typography>
          <UserForm />
        </Box>
      ) : (
        <Box>
          <UserForm />
          <UserList />
        </Box>
      )}
    </Box>
  );
};

export default UserManagement;
