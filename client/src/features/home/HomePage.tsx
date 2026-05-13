import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <Box
        sx={{
          height: "100vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* DARK OVERLAY */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.3))",
          }}
        />

        {/* HERO CONTENT */}
        <Container
          sx={{
            position: "relative",
            zIndex: 1,
            color: "white",
          }}
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            gutterBottom
            sx={{
              fontSize: {
                xs: "2.5rem",
                md: "4.5rem",
              },
            }}
          >
            Level Up Your Game
          </Typography>

          <Typography
            variant="h5"
            sx={{
              mb: 4,
              maxWidth: "700px",
              lineHeight: 1.8,
              color: "#f1f1f1",
            }}
          >
            Discover premium sports gear, sneakers, fitness
            essentials, and performance accessories built for
            athletes who never settle.
          </Typography>

          <Button
            component={Link}
            to="/store"
            variant="contained"
            size="large"
            sx={{
              px: 5,
              py: 1.5,
              fontSize: "1rem",
              borderRadius: 3,
              fontWeight: "bold",
              textTransform: "none",
              boxShadow: 5,
            }}
          >
            Shop Now
          </Button>
        </Container>
      </Box>

      {/* FEATURED CATEGORIES */}
      <Box
        sx={{
          py: 10,
          backgroundColor: "#f5f7fb",
        }}
      >
        <Container>
          <Typography
            variant="h3"
            fontWeight="bold"
            textAlign="center"
            gutterBottom
            sx={{ color: "#16235c" }}
          >
            Featured Categories
          </Typography>

          <Typography
            variant="h6"
            textAlign="center"
            color="text.secondary"
            mb={6}
          >
            Explore trending sports collections and premium gear.
          </Typography>

          <Grid container spacing={4}>
            {[
              {
                title: "Sneakers",
                image:
                  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop",
              },
              {
                title: "Fitness Gear",
                image:
                  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop",
              },
              {
                title: "Cycling",
                image:
                  "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?q=80&w=1470&auto=format&fit=crop",
              },
              {
                title: "Sportswear",
                image:
                  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1470&auto=format&fit=crop",
              },
            ].map((category) => (
              <Grid item xs={12} sm={6} md={3} key={category.title}>
                <Paper
                  elevation={6}
                  sx={{
                    borderRadius: 5,
                    overflow: "hidden",
                    transition: "0.3s",
                    cursor: "pointer",
                    "&:hover": {
                      transform: "translateY(-10px)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      height: 250,
                      backgroundImage: `url(${category.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />

                  <Box sx={{ p: 3 }}>
                    <Typography
                      variant="h5"
                      fontWeight="bold"
                      textAlign="center"
                    >
                      {category.title}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ABOUT SECTION */}
      <Box
        sx={{
          py: 10,
          background: "#16235c",
          color: "white",
        }}
      >
        <Container>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h3"
                fontWeight="bold"
                gutterBottom
              >
                Why Choose NexSport?
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  lineHeight: 1.8,
                  color: "#d1d1d1",
                }}
              >
                NexSport delivers premium quality sports gear
                designed for athletes, fitness lovers, and modern
                sports enthusiasts. Built with React, Spring Boot,
                MySQL, Redis, and Docker for a seamless
                enterprise-level shopping experience.
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1470&auto=format&fit=crop"
                alt="fitness"
                sx={{
                  width: "100%",
                  borderRadius: 5,
                  boxShadow: 10,
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}