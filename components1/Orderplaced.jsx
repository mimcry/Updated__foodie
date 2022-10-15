import React from "react";
import { Grid, Box, Typography } from "@mui/material";
const Orderplaced = () => {
  return (
  
      <Box sx={{ml:"120px",border:"2px solid black",}}>
        {" "}
        <Grid>
          <Grid item>
          <Typography sx={{ ml: "200px",mb:2,mt:2 }}>
              <h4>Order From</h4>
            </Typography>

            <Typography sx={{ ml: "40px" }}>
              <h4>Username:</h4>
            </Typography>
            <Typography sx={{ ml: "40px" }}>
              <h4>Contact:</h4>
            </Typography>
            <Typography sx={{ ml: "40px" }}>
              <h4>Address:</h4>
            </Typography>
            <Typography sx={{ ml: "40px" }}>
              <h4>Payment Method:</h4>
            </Typography>
            <Typography
              sx={{ borderLeft: "6px solid green", height: "250px",mt:"-149px",ml:"500px" }}
            ></Typography>
          </Grid>
        </Grid>
      </Box>
   
  );
};

export default Orderplaced;
