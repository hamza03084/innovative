import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TextField, Button, Box } from "@mui/material";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup
    .string()
    .matches(/^[0-9]+$/, "Phone number must be digits only")
    .min(10, "Phone number must be at least 10 digits")
    .required("Phone number is required"),
});

const Step2 = ({ onNext, onBack, data }) => {
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
        label='Email'
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message}
        fullWidth
        margin='normal'
      />
      <TextField
        label='Phone'
        {...register("phone")}
        error={!!errors.phone}
        helperText={errors.phone?.message}
        fullWidth
        margin='normal'
      />
      <Box display={"flex"} gap={3}>
        <Button onClick={onBack} variant='contained'>
          Back
        </Button>
        <Button type='submit' variant='contained'>
          Next
        </Button>
      </Box>
    </form>
  );
};

export default Step2;
