"use client";

import React, { useEffect, useState } from "react";
import {
  Typography,
  Box,
  CircularProgress,
  Button,
  Card,
  CardMedia,
  CardContent,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useParams } from "next/navigation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { productsData } from "@/app/products-data";

export default function ProductDetail() {
  const params = useParams();
  const { uid } = params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariation, setSelectedVariation] = useState({});

  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    if (!uid) return;

    let singleProduct = productsData.find((product) => product.uid === uid);
    setProduct(singleProduct);
    setLoading(false);
  }, [uid]);

  const carouselComponent = (
    <Box sx={{ width: isMobileOrTablet ? "100%" : 400, mb: 2 }}>
      <Slider
        dots={true}
        infinite={product?.images.length > 1}
        speed={500}
        autoplay={product?.images.length > 1}
        autoplaySpeed={2000}
        slidesToShow={1}
        slidesToScroll={1}
      >
        {product?.images.map((image, index) => (
          <Box key={index} sx={{ display: "flex", justifyContent: "center" }}>
            <CardMedia
              component="img"
              image={image}
              alt={`Product image ${index + 1}`}
              sx={{ width: "100%", height: "auto", objectFit: "contain", maxHeight: 300 }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );

  const productDetailsComponent = (
    <CardContent
      sx={{
        padding: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom fontWeight="700">
        {product?.name}
      </Typography>

      <Typography
        variant="body1"
        dangerouslySetInnerHTML={{ __html: product?.product_description_rich }}
      />

      {product?.variations.length > 0 && (
        <Box>
          <Typography variant="h6" gutterBottom>
            Available Variants:
          </Typography>

          <Grid container spacing={1}>
            {product?.variations.map((variation) => (
              <Grid item key={variation.sku}>
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  onClick={() => setSelectedVariation(variation)}
                  sx={{
                    borderRadius: 1,
                    boxShadow: "none",
                    fontWeight: "500",
                    textTransform: "capitalize",
                    border: "1px solid #87BB40",
                    fontSize: "0.8rem",
                    backgroundColor: selectedVariation?.sku === variation.sku ? "#87BB40" : "#fff",
                    color: selectedVariation?.sku === variation.sku ? "#fff" : "#000",
                  }}
                >
                  {variation.display_name}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      <Box mt={2} display="flex" flexDirection={isMobileOrTablet ? "column" : "row"} gap={1}>
        {product?.fitting_video_link && (
          <Button
            variant="contained"
            href={product?.fitting_video_link}
            target="_blank"
            rel="noopener noreferrer"
            size="large"
            sx={{
              flex: 1,
              fontWeight: "500",
              textTransform: "capitalize",
              backgroundColor: "#104578",
              borderRadius: 1,
              fontSize: "1rem",
              mt: 1,
              "&:hover": {
                transition: "0.3s ease-in-out",
                backgroundColor: "#87BB40",
              },
            }}
          >
            Watch Product Review
          </Button>
        )}

        {product?.ifu && (
          <Button
            variant="contained"
            href={product?.ifu}
            target="_blank"
            rel="noopener noreferrer"
            size="large"
            sx={{
              flex: 1,
              fontWeight: "500",
              textTransform: "capitalize",
              backgroundColor: "#104578",
              borderRadius: 1,
              fontSize: "1rem",
              mt: 1,
              "&:hover": {
                transition: "0.3s ease-in-out",
                backgroundColor: "#87BB40",
              },
            }}
          >
            Read Product Manual
          </Button>
        )}
      </Box>
    </CardContent>
  );

  return (
    <Box
      display="flex"
      justifyContent="center"
      sx={{
        margin: { xs: "1rem", sm: "2rem", md: "2rem" },
        flexDirection: isMobileOrTablet ? "column" : "row",
      }}
    >
      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="70vh">
          <CircularProgress />
        </Box>
      ) : !product ? (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="70vh">
          <Typography sx={{ fontWeight: "700", fontSize: "1.5rem", textTransform: "capitalize" }}>
            No product found!
          </Typography>
        </Box>
      ) : (
        <Card
          sx={{
            display: "flex",
            flexDirection: isMobileOrTablet ? "column" : "row",
            alignItems: "center",
            boxShadow: 3,
            borderRadius: 3,
            paddingY: 2,
          }}
        >
          {isMobileOrTablet ? (
            <>
              {carouselComponent}
              {productDetailsComponent}
            </>
          ) : (
            <>
              {carouselComponent}
              {productDetailsComponent}
            </>
          )}
        </Card>
      )}
    </Box>
  );
}
