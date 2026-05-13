import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function ContactPage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 15 }}>
      <Typography
        variant="h2"
        fontWeight="bold"
        gutterBottom
        sx={{ color: "#16235c" }}
      >
        Contact NexSport
      </Typography>

      <Typography variant="h6" color="text.secondary" mb={5}>
        We'd love to hear from you. Reach out for support,
        collaborations, or product inquiries.
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Paper elevation={4} sx={{ p: 4, borderRadius: 4 }}>
            <EmailIcon sx={{ fontSize: 50, color: "#1976d2" }} />
            <Typography variant="h5" mt={2}>
              Email
            </Typography>
            <Typography color="text.secondary">
              support@nexsport.com
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={4} sx={{ p: 4, borderRadius: 4 }}>
            <PhoneIcon sx={{ fontSize: 50, color: "#1976d2" }} />
            <Typography variant="h5" mt={2}>
              Phone
            </Typography>
            <Typography color="text.secondary">
              +91 9876543210
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={4} sx={{ p: 4, borderRadius: 4 }}>
            <LocationOnIcon sx={{ fontSize: 50, color: "#1976d2" }} />
            <Typography variant="h5" mt={2}>
              Location
            </Typography>
            <Typography color="text.secondary">
              Pune, Maharashtra, India
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Box mt={8}>
        <Paper elevation={3} sx={{ p: 5, borderRadius: 4 }}>
          <Typography variant="h4" gutterBottom>
            About NexSport
          </Typography>

          <Typography variant="body1" color="text.secondary">
            NexSport is a modern sports e-commerce platform built
            using React, Spring Boot, MySQL, Redis, and Docker.
            The platform provides premium sports gear and fitness
            products with a seamless shopping experience.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
}