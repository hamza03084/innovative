import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TextField, Button, Box } from "@mui/material";

const schema = yup.object().shape({
  address: yup.string().required("Address is required"),
  city: yup.string().required("City is required"),
});

const Step3 = ({ onNext, onBack, data }) => {
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
        label='Address'
        {...register("address")}
        error={!!errors.address}
        helperText={errors.address?.message}
        fullWidth
        margin='normal'
      />
      <TextField
        label='City'
        {...register("city")}
        error={!!errors.city}
        helperText={errors.city?.message}
        fullWidth
        margin='normal'
      />

      <Box display={"flex"} gap={3}>
        <Button onClick={onBack} variant='contained'>
          Back
        </Button>
        <Button type='submit' variant='contained'>
          Submit
        </Button>
      </Box>
    </form>
  );
};

export default Step3;
