import React from "react";
import {
  Card,
  Box,
  Paper,
  Typography,
  IconButton,
  CardHeader,
  Button,
  Grid,
} from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { fontSize } from "@mui/joy/styles/styleFunctionSx";

const Category = ({ name, price, image, }) => {
  return (
    <div className="container">
      <Paper
        elevation={10}
        sx={{ maxWidth: 300, maxHeight: "350px", borderRadius: "50px", mb:4, border:"0.1px solid gray",cursor:"pointer", transition:"0.4s","&:hover": {
            transform: "scale(0.9)"
          }, display:{xs:""} }}
      >
        <Typography gutterBottom variant="h5" sx={{textAlign:"center",mt:1,color:"#df2020",fontWeight:549,fontSize:"1.5rem",fontFamily:"mono-space", }}> {name}</Typography>
        <Paper
          sx={{
            borderRadius: "250px",
            width: "220px",
            height:"200px",
            marginLeft: "40px",
          
            transition:"0.4s","&:hover": {
                transform: "scale(1.1)"
              },
           
          }}
          elevation={24}
        >
          <img src={image} alt="" className="popularcategoryitem" />
        </Paper>
        <Typography gutterBottom variant="h6" sx={{textAlign:"center", mt:2, color:"#df2020"}}>
          Price: Rs {price}
        </Typography>
        <Button  sx={{
                          ml: "120px",
                         
                          mb: 4,
                          fontWeight: 500,

                          borderRadius: "20px",
                          background: "#df2020",
                          color: "#fff",
                          transition: "0.3s",
                          "&:hover": {
                            background: "#452121",
                          },
                        }}> <AddShoppingCartIcon /></Button>
      </Paper>
    </div>
  );
};

export default Category;
