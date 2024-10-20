import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { Box, Typography, Stepper, Step, StepLabel } from "@mui/material";

const steps = ["Personal Information", "Contact Details", "Address"];

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
  });
  const [completed, setCompleted] = useState([false, false, false]);

  const handleNext = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    const updatedCompleted = [...completed];
    updatedCompleted[currentStep] = true; // Mark the current step as complete
    setCompleted(updatedCompleted);
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = (data) => {
    const finalData = { ...formData, ...data };
    console.log("Submitted Data:", finalData);
  };

  const handleStepClick = (step) => {
    // Allow navigation to the step only if it is completed or it's the next step to be filled
    if (completed[step] || step === currentStep) {
      setCurrentStep(step);
    }
  };

  return (
    <Box mt={5}>
      <Typography variant='h4' gutterBottom>
        Multi-Step Form
      </Typography>
      {/* Stepper */}
      <Stepper activeStep={currentStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label} onClick={() => handleStepClick(index)}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {/* Step Content */}
      {currentStep === 0 && <Step1 onNext={handleNext} data={formData} />}
      {currentStep === 1 && (
        <Step2 onNext={handleNext} onBack={handleBack} data={formData} />
      )}
      {currentStep === 2 && (
        <Step3 onNext={handleSubmit} onBack={handleBack} data={formData} />
      )}
    </Box>
  );
};

export default MultiStepForm;
