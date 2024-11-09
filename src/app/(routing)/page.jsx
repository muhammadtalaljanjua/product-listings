"use client";

import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Typography, CircularProgress, Button } from "@mui/material";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(9);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://pim-server.azurewebsites.net/providers/web", {
          method: "GET",
        });

        const result = await response.json();
        setProducts(result.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 9);
  };

  return (
    <Box p={5}>
      <Container maxWidth="lg">
        <Typography gutterBottom variant="h4" component="div" sx={{ textAlign: "center" }}>
          Products Listing
        </Typography>

        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
            <CircularProgress />
          </Box>
        ) : (
          <>
            <Grid container spacing={4} mt={1}>
              {products.slice(0, visibleCount).map((product) => (
                <Grid item xs={12} sm={6} md={4} key={product.uid}>
                  <ProductCard product={product} />
                </Grid>
              ))}
            </Grid>
            {visibleCount < products.length && (
              <Box display="flex" justifyContent="center" mt={5}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={handleLoadMore}
                  sx={{
                    fontWeight: "bold",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    borderRadius: 2,
                  }}
                >
                  Load More
                </Button>
              </Box>
            )}
          </>
        )}
      </Container>
    </Box>
  );
}
