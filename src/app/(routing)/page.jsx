"use client";

import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Typography, CircularProgress, Button } from "@mui/material";
import ProductCard from "../components/ProductCard";
import FullPageBanner from "../components/Banner";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(12);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://pim-server.azurewebsites.net/providers/web", {
          method: "GET",
        });

        const result = await response.json();
        setProducts(result.products);
      } catch (error) {
        console.log("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 12);
  };

  return (
    <>
      <FullPageBanner />

      <Box sx={{ paddingY: { xs: 5, sm: 3, md: 5 } }}>
        <Container maxWidth="lg">
          <Typography
            gutterBottom
            sx={{
              textAlign: "center",
              fontWeight: "700",
              color: "#104578",
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
            }}
          >
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
                  <Grid item xs={12} sm={6} md={3} key={product.uid}>
                    <ProductCard product={product} />
                  </Grid>
                ))}
              </Grid>
              {visibleCount < products.length && (
                <Box display="flex" justifyContent="center" mt={6}>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={handleLoadMore}
                    sx={{
                      fontWeight: "700",
                      backgroundColor: "#104578",
                      borderRadius: 2,
                      "&:hover": {
                        transition: "0.3s ease-in-out",
                        backgroundColor: "#87BB40",
                      },
                    }}
                  >
                    Load More Products
                  </Button>
                </Box>
              )}
            </>
          )}
        </Container>
      </Box>
    </>
  );
}
