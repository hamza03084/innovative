// src/components/UserForm.js
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { addUser, updateUser } from "../features/users/usersSlice";
import { Button, TextField, Box } from "@mui/material";

// Define a schema using yup for validation
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Must be a valid email")
    .required("Email is required"),
  phone: yup
    .string()
    .matches(/^[0-9]+$/, "Phone number must be digits only")
    .min(10, "Phone number must be at least 10 digits")
    .required("Phone number is required"),
});

const UserForm = ({ user = {}, isEdit = false, onEditComplete }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
      phone: user?.phone || "",
    },
  });

  const onSubmit = (data) => {
    if (isEdit) {
      dispatch(updateUser({ id: user.id, updatedFields: data }));
      if (onEditComplete) onEditComplete();
    } else {
      dispatch(addUser(data));
    }
    reset();
  };

  return (
    <Box
      component='form'
      onSubmit={handleSubmit(onSubmit)}
      sx={{ display: "flex", gap: 2 }}
    >
      <TextField
        label='Name'
        {...register("name")}
        error={!!errors.name}
        helperText={errors.name?.message}
        fullWidth
      />
      <TextField
        label='Email'
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message}
        fullWidth
      />
      <TextField
        label='Phone'
        {...register("phone")}
        error={!!errors.phone}
        helperText={errors.phone?.message}
        fullWidth
      />
      <Button type='submit' variant='contained'>
        {isEdit ? "Update" : "Add"}
      </Button>
    </Box>
  );
};

export default UserForm;
