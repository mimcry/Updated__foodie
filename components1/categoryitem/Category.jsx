import React from "react";
import {
  Card,
  Box,
  Paper,
  Typography,
  IconButton,
  CardHeader,
  Button,
  Grid
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Category = ({title,price,image,subtitle,deleteHandeler}) => {
  console.log(title)
  function createDiv() {
    console.log("elem")
    // elem.parentNode.removeChild(elem);
  }
  
  function remove(e) {
    e.target.remove();
  }
  return (
    <div className="container" onclick="createDiv(this)">
    
                <Paper elevation={24} sx={{ maxWidth: 200, maxHeight: 300,borderRadius:"30px",transition: "0.4s",
              "&:hover": {
                transform: "translateY(10px)",
              }, }}>
                  <Card
                    sx={{
                      maxWidth: 800,
                      maxHeight: 300,
                      mt: 4,
                      border: "2.9px solid #ed8179",
                      borderRadius:"30px"
                    }}
                  >
                    {" "}
                    <CardHeader
                      action={
                        <IconButton aria-label="add to favorites">
                        <DeleteIcon onClick={deleteHandeler}/>
                      </IconButton>
                      }
                      title={title}
                      subheader={subtitle}
                    />
                    <Typography
                      sx={{ height: "50px", width: "100px", cursor: "pointer",mt:1 }}
                    >
                      <img src={image} alt="" className="category__img" />
                    </Typography>
                    <Box sx={{ display: "flex" }}>
                      <div>
                        <Typography
                          fontSize="lg"
                          fontWeight="lg"
                          sx={{
                            color: "red",
                            mt: 3,
                            ml: 2,
                            fontWeight: 550,
                            fontSize: "1rem",
                            fontFamily:"mono-space"
                          }}
                        >
                          {price}
                        </Typography>
                      </div>
                      <Button
                        variant="solid"
                        size="sm"
                        sx={{
                          ml: "20px",
                          mt: 2,
                          mb: 1,
                          fontWeight: 500,

                          borderRadius: "20px",
                          background: "#df2020",
                          color: "#fff",
                          transition: "0.3s",
                          "&:hover": {
                            background: "#452121",
                          },
                        }}
                      >
                        <AddShoppingCartIcon />
                      </Button>
                    </Box>
                  </Card>
                </Paper>
              
    </div>
  );
};

export default Category;
