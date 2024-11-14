"use client";

import React from "react";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";

const ProductCard = ({ product }) => {
  const router = useRouter();

  const handleViewDetails = () => {
    router.push(`/${product.uid}`);
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        borderRadius: 3,
        paddingX: 2,
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      {product.images.length > 0 && (
        <CardMedia
          component="img"
          height="250"
          image={product.images[0]}
          alt={product.name}
          sx={{
            objectFit: "contain",
            paddingY: 2,
            borderBottom: "1px solid #e0e0e0",
          }}
        />
      )}
      <CardContent sx={{ flexGrow: 1, paddingX: 0, paddingY: 2 }}>
        <Typography
          gutterBottom
          sx={{
            fontWeight: "600",
            fontSize: "1.3rem",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {product.name}
        </Typography>

        <Button
          variant="contained"
          color="primary"
          onClick={handleViewDetails}
          sx={{
            fontWeight: "500",
            textTransform: "capitalize",
            backgroundColor: "#87BB40",
            borderRadius: 2,
            mt: 1,
            "&:hover": {
              transition: "0.3s ease-in-out",
              backgroundColor: "#104578",
            },
          }}
        >
          View Product
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
