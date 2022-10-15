import { ClassNames } from "@emotion/react";
import { Paper, CardActionArea, CardContent, CardMedia, Typography,Card,Box } from "@mui/material";
import React from "react";

function  Fooditem({ name, image, category}) {
  return (
    <Paper elevation={24}
      sx={{
        maxWidth: 210,
        maxHeight:258,
        backgroundColor: '#fde4e4',
        borderRadius:"25px",
        transition: "0.4s",
        "&:hover": {
          transform: "translateY(-30px)",
        },
      }}
    
    >
    
      <CardActionArea className="mb-5">
        <CardMedia
          component="img"
          height="150"
          image={image}
          alt="food item"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{color:"black",fontFamily:"mono-space"}}>
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary" >
       {category}
          </Typography>
        </CardContent>
      </CardActionArea >
    </Paper>
  );
}

export default Fooditem;
