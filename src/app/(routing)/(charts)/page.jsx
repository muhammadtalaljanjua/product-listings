"use client";

import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import LineChart from "@/app/components/LineChart";
import SplineChart from "@/app/components/SplineChart";
import AreaChart from "@/app/components/AreaChart";
import ColumnChart from "@/app/components/ColumnChart";
import BarChart from "@/app/components/BarChart";
import PieChart from "@/app/components/PieChart";
import ScatterChart from "@/app/components/ScatterChart";

const ChartsPage = () => {
  return (
    <Box p={5}>
      <Container>
        <Grid container spacing={8}>
          <Grid item xs={12} sm={12} md={6}>
            <Typography gutterBottom variant="h5" sx={{ fontWeight: "600", textAlign: "center" }}>
              Line Chart
            </Typography>
            <LineChart />
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <Typography gutterBottom variant="h5" sx={{ fontWeight: "600", textAlign: "center" }}>
              Spline Chart
            </Typography>
            <SplineChart />
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <Typography gutterBottom variant="h5" sx={{ fontWeight: "600", textAlign: "center" }}>
              Area Chart
            </Typography>
            <AreaChart />
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <Typography gutterBottom variant="h5" sx={{ fontWeight: "600", textAlign: "center" }}>
              Column Chart
            </Typography>
            <ColumnChart />
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <Typography gutterBottom variant="h5" sx={{ fontWeight: "600", textAlign: "center" }}>
              Bar Chart
            </Typography>
            <BarChart />
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <Typography gutterBottom variant="h5" sx={{ fontWeight: "600", textAlign: "center" }}>
              Scatter Chart
            </Typography>
            <ScatterChart />
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            <Typography gutterBottom variant="h5" sx={{ fontWeight: "600", textAlign: "center" }}>
              Pie Chart
            </Typography>
            <PieChart />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ChartsPage;
