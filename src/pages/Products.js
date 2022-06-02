import React from "react";
import Sidebar from "../components/Sidebar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";
const Products = () => {
  return (
    <Grid
      container
      spacing={1}
      style={{ minHeight: "100vh", backgroundColor: "#F9FAFB" }}
    >
      <Grid
        item
        xs={3}
        style={{
          minHeight: "100vh",
          margin: "0px",
          padding: "0px",
        }}
      >
        <Box
          style={{
            width: "90%",
            height: "100%",
            borderRight: "1px dashed lightGray",
          }}
        >
          <Sidebar />
        </Box>
      </Grid>
      <Grid item xs={9}>
        <Navbar />
        PRODUCTSS
      </Grid>
    </Grid>
  );
};

export default Products;
