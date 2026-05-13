import { LoadingButton } from "@mui/lab";

import {
  Container,
  CssBaseline,
  Box,
  Avatar,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Paper,
} from "@mui/material";

import { Link, useLocation, useNavigate } from "react-router-dom";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { store, useAppDispatch } from "../../app/store/configureStore";

import { FieldValues, useForm } from "react-hook-form";

import { toast } from "react-toastify";

import { signInUser } from "./accountSlice";

export default function SignInPage() {
  const navigate = useNavigate();

  const location = useLocation();

  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors, isValid },
  } = useForm({
    mode: "onTouched",
  });

  async function submitForm(data: FieldValues) {
    try {
      await dispatch(signInUser(data));

      const { user } = store.getState().account;

      if (user) {
        toast.success("Login Successful!");

        navigate(location.state?.from || "/store");
      } else {
        toast.error("Invalid username or password");
      }
    } catch (error) {
      console.log("Error signing in:", error);

      toast.error("Sign in failed. Please try again");
    }
  }

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />

      <Paper
        elevation={6}
        sx={{
          mt: 10,
          p: 5,
          borderRadius: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{
              m: 1,
              bgcolor: "secondary.main",
              width: 56,
              height: 56,
            }}
          >
            <LockOutlinedIcon />
          </Avatar>

          <Typography
            component="h1"
            variant="h4"
            fontWeight="bold"
            gutterBottom
          >
            Welcome Back
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 2 }}
          >
            Sign in to continue shopping
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit(submitForm)}
            noValidate
            sx={{ mt: 1, width: "100%" }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              autoFocus
              {...register("username", {
                required: "Username is required",
              })}
              error={!!errors.username}
              helperText={errors?.username?.message as string}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              id="password"
              {...register("password", {
                required: "Password is required",
              })}
              error={!!errors.password}
              helperText={errors?.password?.message as string}
            />

            <FormControlLabel
              control={
                <Checkbox
                  value="remember"
                  color="primary"
                />
              }
              label="Remember me"
            />

            <LoadingButton
              loading={isSubmitting}
              disabled={!isValid}
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              sx={{
                mt: 3,
                mb: 2,
                py: 1.5,
                borderRadius: 3,
                fontWeight: "bold",
              }}
            >
              Sign In
            </LoadingButton>

            <Grid container justifyContent="space-between">
              <Grid item>
                <Typography variant="body2">
                  <Link
                    to="#"
                    style={{
                      textDecoration: "none",
                      color: "#9c27b0",
                    }}
                  >
                    Forgot password?
                  </Link>
                </Typography>
              </Grid>

              <Grid item>
                <Typography variant="body2">
                  <Link
                    to="/register"
                    style={{
                      textDecoration: "none",
                      fontWeight: "bold",
                      color: "#9c27b0",
                    }}
                  >
                    Don't have an account? Sign Up
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}