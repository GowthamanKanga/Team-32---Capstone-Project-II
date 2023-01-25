import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import React, { useState } from "react";

const Settings = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const [profilePicture, setProfilePicture] = useState(null);

  const handleProfilePicture = (event) => {
    setProfilePicture(event.target.files[0]);
  };

  const [emailNotification, setEmailNotification] = useState(false);

  const handleEmailNotification = (event) => {
    setEmailNotification(event.target.checked);
  };

  const [clientRequestNotification, setClientRequestNotification] =
    useState(false);

  const handleClientRequestNotification = (event) => {
    setClientRequestNotification(event.target.checked);
  };

  return (
    <Box m="20px">
      <Header
        title="Settings"
        subtitle="General Personal Information
"
      />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contact Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 1"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 2"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="address2"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
              />

              <Header subtitle="General Account Information" />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Username"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.currUsername}
                name="currUsername"
                error={!!touched.currUsername && !!errors.currUsername}
                helperText={touched.currUsername && errors.currUsername}
                sx={{ gridColumn: "span 4" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="New Username"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.newUsername}
                name="newUsername"
                error={!!touched.newUsername && !!errors.newUsername}
                helperText={touched.newUsername && errors.newUsername}
                sx={{ gridColumn: "span 4" }}
              />

              <Header subtitle="Password Update" />

              <TextField
                fullWidth
                variant="filled"
                type="password"
                label="Current Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.currPassword}
                name="currPassword"
                error={!!touched.currPassword && !!errors.currPassword}
                helperText={touched.currPassword && errors.currPassword}
                sx={{ gridColumn: "span 4" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="password"
                label="New Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.newPassword}
                name="newPassword"
                error={!!touched.newPassword && !!errors.newPassword}
                helperText={touched.newPassword && errors.newPassword}
                sx={{ gridColumn: "span 4" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="password"
                label="Confirm Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.confirmPassword}
                name="currPassword"
                error={!!touched.confirmPassword && !!errors.confirmPassword}
                helperText={touched.confirmPassword && errors.confirmPassword}
                sx={{ gridColumn: "span 4" }}
              />

<div style={{ display: "flex", flexDirection: "column"}}>
  <Header subtitle="Notification Settings " />
  <div style={{ display: "flex", alignItems: "center" }}>
    <input
      style={{ transform: "scale(1.5)", marginRight: "10px" }}
      type="checkbox"
      checked={emailNotification}
      onChange={handleEmailNotification}
    />
    <label style={{ fontSize: "20px" }}>Email Notification</label>
  </div>
  <div style={{ display: "flex", alignItems: "center" }}>
    <input
      type="checkbox"
      checked={clientRequestNotification}
      onChange={handleClientRequestNotification}
      style={{ transform: "scale(1.5)", marginRight: "10px" }}
    />
    <label style={{ fontSize: "20px" }}>
      Client Request Notification
    </label>
  </div>
  <Header subtitle="Update Profile " />
  <div>
    <input type="file" onChange={handleProfilePicture} />
    {profilePicture && (
      <img
        src={URL.createObjectURL(profilePicture)}
        alt="profile"
      />
    )}
  </div>
</div>

            </Box>
            <Box display="flex" justifyContent="center" mt="30px" margin="20px">
              <Button type="submit" color="secondary" variant="contained">
                Save
              </Button>
              <Button type="submit" color="secondary" variant="contained">
                Cancel
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
  currPassword: "",
  newPassword: "",
  confirmPassword: "",
  currUsername: "",
  newUsername: "",
};

export default Settings;
