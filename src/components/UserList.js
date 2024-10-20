import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../features/users/usersSlice";
import { List, ListItem, ListItemText, IconButton, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import UserForm from "./UserForm";

const UserList = () => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const [editingUser, setEditingUser] = useState(null);

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleEditComplete = () => {
    setEditingUser(null);
  };

  return (
    <Box>
      <List>
        {users.map((user) => (
          <ListItem key={user.id}>
            <ListItemText
              primary={user.name}
              secondary={`Email: ${user.email}, Phone: ${user.phone}`}
            />
            <IconButton
              edge='end'
              aria-label='edit'
              onClick={() => handleEdit(user)}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              edge='end'
              aria-label='delete'
              onClick={() => handleDelete(user.id)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>

      {/* Show the UserForm for editing */}
      {editingUser && (
        <UserForm
          user={editingUser}
          isEdit={true}
          onEditComplete={handleEditComplete}
        />
      )}
    </Box>
  );
};

export default UserList;
