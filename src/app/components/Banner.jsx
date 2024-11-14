import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";

const FullPageBanner = () => {
  return (
    <Box
      sx={{
        marginTop: 2,
        height: { xs: "70vh", sm: "50vh", md: "70vh" },
        backgroundImage:
          "url('https://www.zimmerbiomet.com/content/dam/zb-corporate/en/hcp-landing-page/hcp-hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        color: "#fff",
        mx: { xs: "1rem", sm: "1.5rem", md: "2rem" },
        borderRadius: "15px",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          borderRadius: "15px",
        }}
      />

      <Container
        maxWidth="md"
        sx={{
          position: "relative",
          textAlign: "center",
          zIndex: 1,
          p: { xs: 3, sm: 5 },
        }}
      >
        <Typography
          variant="h3"
          component="h3"
          gutterBottom
          sx={{
            fontWeight: "700",
            fontSize: { xs: "1.8rem", sm: "2.2rem", md: "3rem" },
          }}
        >
          Patient Centered, Solution Driven
        </Typography>

        <Typography
          component="p"
          gutterBottom
          sx={{
            fontWeight: "500",
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
            lineHeight: { xs: 1.5, sm: 1.6, md: 1.8 },
          }}
        >
          MedVantage is a leading provider of DVT Prevention and DME products and services for
          Ambulatory Surgery Centers nationwide. We are distinguished by our holistic approach and
          superior customer service. Our focus is clinically driven and designed to provide
          customized solutions for your facility and your patients. Learn how we can work together.
        </Typography>

        <Button
          variant="contained"
          size="large"
          sx={{
            mt: 3,
            fontWeight: "bold",
            backgroundColor: "#87BB40",
            borderRadius: 2,
            fontSize: { xs: "0.875rem", sm: "1rem" },
            px: { xs: 3, sm: 4 },
            "&:hover": {
              transition: "0.3s ease-in-out",
              backgroundColor: "#104578",
            },
          }}
        >
          Explore Products
        </Button>
      </Container>
    </Box>
  );
};

export default FullPageBanner;
