import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import loginImage from "../image/loginimage.png";
const LoginComp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
    console.log("email", user.email);
    console.log("pass", user.password);
  };
  //const postdata = { email: 'eve.holt@reqres.in', password : 'cityslicka' };
  const handleSubmit = (e) => {
    e.preventDefault();
    const postdata = { email: user.email, password: user.password };
    axios
      .post("https://reqres.in/api/login", postdata)
      // .then((response) => console.log("melike", response.data.token));
      .then((a) => (a.data.token ? navigate("/home") : navigate("/")));
  };
  return (
    <>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{
          backgroundColor: "#F9FAFB",
          minHeight: "100vh",
        }}
      >
        <Grid item xs={4} style={{ margin: "0px" }}>
          <Box
            style={{
              background: "#ffffff",
              borderRadius: "10px",
              minHeight: "100vh",
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px ",
              display: "flex",
              flexDirection: "column",
              display: "flex",
              width: "100%",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
              justifyContent: "center",
            }}
          >
            <RouterLink to="/home">
              <HomeIcon
                style={{
                  color: "#619EE9",
                  fontSize: "38px",
                  position: "absolute",
                  top: "30px",
                  left: "25px",
                }}
              />
            </RouterLink>

            <Typography component="h1" variant="h4">
              Hi, Welcome Back
            </Typography>
            <img style={{ marginTop: "50px" }} src={loginImage} />
          </Box>
        </Grid>
        <Grid
          item
          xs={8}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "50%" }}>
            <Typography component="h1" variant="h5">
              Sign in to Minimal
            </Typography>
            <Typography component="h6" variant="subtitle1">
              Enter your details below.
            </Typography>
            <Box
              rowSpacing={1}
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
                margin: "20px 0px",
              }}
            >
              <Link
                style={{
                  border: "1px solid lightGray",
                  padding: "5px 60px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                <GoogleIcon style={{ color: "#DF3E30" }} />
              </Link>
              <Link
                style={{
                  border: "1px solid lightGray",
                  padding: "5px 60px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                <FacebookIcon />
              </Link>
              <Link
                style={{
                  border: "1px solid lightGray",
                  padding: "5px 60px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                <TwitterIcon />
              </Link>
            </Box>
            <Divider style={{ margin: "30px 0px" }}>OR</Divider>
            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                margin="normal"
                required
                fullWidth
                name="email"
                label="Email"
                type="email"
                id="email"
                onChange={handleChange}
                autoComplete="email"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={handleChange}
                autoComplete="current-password"
              />
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Link
                  href="#"
                  variant="body2"
                  style={{ textDecoration: "none" }}
                >
                  Forgot password?
                </Link>
              </Box>
              <Button
                type="submit"
                style={{ width: "100%", margin: "20px 0px" }}
                variant="contained"
              >
                Login
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginComp;
