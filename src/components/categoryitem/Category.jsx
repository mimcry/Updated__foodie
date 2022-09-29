import React from "react";
import {
  Card,
  Box,
  Paper,
  Typography,
  IconButton,
  CardHeader,
  Button,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Category = ({title,price,image}) => {
  return (
    <div className="container">
      <Paper elevation={24} >
      <Card sx={{ maxWidth: 290, maxHeight: 300, mb: 4, mt: 4,border:"5px solid #fde4e4",  }}>
       
       
        
          {" "}
          <CardHeader
            action={
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
            }
            title={title}
            subheader=""
          />
          <Typography sx={{ height: "200px", width: "210px", cursor:"pointer"}}>
            <img
              src={image}
              alt=""
              className="category__img"
            />
          </Typography>
          <Box sx={{ display: "flex" }}>
            <div>
              <Typography
                fontSize="lg"
                fontWeight="lg"
                sx={{
                  color: "red",
                  mt: -6,
                  ml: 4,
                  fontWeight: 550,
                  fontSize: "1.2rem",
                }}
              >
           {price}
              </Typography>
            </div>
            <Button
              variant="solid"
              size="sm"
              sx={{
                ml: "90px",
                mt: -6.5,
                mb: 3,
                fontWeight: 600,
       
                borderRadius: "15px",
                background: "#df2020",
                color: "#fff",
                transition: "0.3s",
                "&:hover" :{
                  background:"#452121",
                }
              }}
            >
              <AddShoppingCartIcon/>
            </Button>
          </Box>
        
      </Card>
      </Paper>
    </div>
  );
};

export default Category;
