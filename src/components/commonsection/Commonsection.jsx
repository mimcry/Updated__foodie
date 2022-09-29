import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Burgeritem from '../categoryitem/Burgeritem'
import {Card,CardMedia, Grid, Box, Typography, Paper } from "@mui/material";
function Commonsection() {
  return (
    <>
    <Navbar/>
   

<Card  sx={{maxwidth:330}}><CardMedia   component="img"
        alt="green iguana"
        height="400"
        image="https://live.staticflickr.com/65535/48692487246_ef22950c50_b.jpg"/>
        <Typography sx={{
          textAlign:"center",
          color:"white",
          marginTop:"-150px",
          fontSize:"3.5rem",
          textShadow:"3px 3px #df2020"
        }}>Burger</Typography>
       
        </Card>
        <Typography sx={{  textAlign:"center",
          color:"#df2020",
          marginTop:"50px",
          fontSize:"2.5rem",
          textShadow:"2px 3px #666d78", }}> Foodie's Burger Items</Typography>
        <Burgeritem></Burgeritem>
    <Footer/>
    </>
  );
}

export default Commonsection;

