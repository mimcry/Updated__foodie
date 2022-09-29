import React from "react";
import Category from "./Category";
import { Grid,Paper } from "@mui/material";
const Burgeritem = () => {
  return ( <div className="container">
    <Grid container spacing={3}>
  <Grid item lg={3} md={4} xs={6}>  <Category 
          title="chicken Burger"
          image="product1.1.jpg"
          price="Rs 250"
        />
      
      </Grid>
      <Grid item lg={3} md={4} xs={6}>
        <Category
          title="chicken Burger"
          image="product1.1.jpg"
          price="Rs 250"
        />
      </Grid>
      <Grid item lg={3} md={4} xs={6}>
        <Category
          title="chicken Burger"
          image="product1.1.jpg"
          price="Rs 250"
        />
      </Grid>
      <Grid item lg={3} md={4} xs={6}>
        <Category
          title="chicken Burger"
          image="product1.1.jpg"
          price="Rs 250"
        />
      </Grid>
      <Grid item lg={3} md={4} xs={6}>
        <Category
          title="chicken Burger"
          image="product1.1.jpg"
          price="Rs 250"
        />
      </Grid>
      <Grid item lg={3} md={4} xs={6}>
        <Category
          title="chicken Burger"
          image="product1.1.jpg"
          price="Rs 250"
        />
      </Grid>
    </Grid></div>
  );
};

export default Burgeritem;
