import { ClassNames } from "@emotion/react";
import { Paper, CardActionArea, CardContent, CardMedia, Typography,Card,Box } from "@mui/material";
import React from "react";

function CategoryItem({ name, image, category}) {
  return (
    <Paper elevation={20}
      sx={{
        maxWidth: 200,
        backgroundColor: '#fde4e4',
        borderRadius:"25px"
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
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
       {category}
          </Typography>
        </CardContent>
      </CardActionArea >
    </Paper>
  );
}

export default CategoryItem;
