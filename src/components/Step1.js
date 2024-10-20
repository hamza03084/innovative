import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TextField, Button } from "@mui/material";

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
});

const Step1 = ({ onNext, data }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: data,
  });

  const onSubmit = (data) => {
    onNext(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label='First Name'
        {...register("firstName")}
        error={!!errors.firstName}
        helperText={errors.firstName?.message}
        fullWidth
        margin='normal'
      />
      <TextField
        label='Last Name'
        {...register("lastName")}
        error={!!errors.lastName}
        helperText={errors.lastName?.message}
        fullWidth
        margin='normal'
      />
      <Button type='submit' variant='contained'>
        Next
      </Button>
    </form>
  );
};

export default Step1;
