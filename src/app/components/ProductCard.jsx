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
          height="200"
          image={product.images[0]}
          alt={product.display_name || product.name}
        />
      )}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {product.display_name || product.name}
        </Typography>

        <Typography gutterBottom variant="body2" color="text.secondary">
          <strong>SKU:</strong> {product.sku}
        </Typography>

        <Typography gutterBottom variant="body2" color="text.secondary">
          <strong>Categories:</strong> {product.categories.join(", ")}
        </Typography>

        <Typography gutterBottom variant="body2" color="text.secondary">
          <strong>Product Images:</strong> {product.images.length}
        </Typography>

        <Typography gutterBottom variant="body2" color="text.secondary">
          <strong>Product Variations:</strong> {product.variations.length}
        </Typography>

        <Typography gutterBottom variant="body2" color="text.secondary">
          <strong>Product Accessories:</strong> {product.accessories.length}
        </Typography>

        <Button
          variant="contained"
          color="primary"
          onClick={handleViewDetails}
          sx={{
            fontWeight: "500",
            textTransform: "capitalize",
            backgroundColor: "#007bff",
            color: "#fff",
            borderRadius: 2,
            mt: 2,
          }}
        >
          View Product
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
