import { Box, Typography } from "@mui/material";
import React from "react";

function Serve({name,image}) {


return(
    <Box sx={{
   
        cursor:'pointer',
        px:5,
       display:"flex",
       borderColor: '#df2020' 
      

    }}>
         <img src={image}alt="category__item" className="serve" />
         <Typography sx={{fontSize:'1.3rem',mt:4, mx:2,
         color:"#df2020",fontWeight:540
        }}>{name}</Typography>
        <br />
        <br />
    </Box>
)
  
}

export default Serve;
