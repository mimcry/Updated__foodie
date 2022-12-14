import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  Paper,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Card,
  CardHeader,
  IconButton,
  Grid,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Fooditem from "./Fooditem";
import Category from "./Category";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1200,
  height: 700,
  bgcolor: "#fde4e4",
  border: "2px solid #000",
  borderRadius:"50px",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
        <Fooditem 
              name="Burger"
             image="https://img.freepik.com/premium-photo/fresh-tasty-homemade-burger-wooden-table_147620-1307.jpg?w=996"
              category="Visit the various types of Burger"/>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            orientation="vertical"
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
        <img
            className="logo"
            src="https://scontent.fktm6-1.fna.fbcdn.net/v/t1.15752-9/306322859_1152926112244740_5963128937608353779_n.png?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_ohc=qmi-xv_RpuEAX8sakt9&_nc_ht=scontent.fktm6-1.fna&oh=03_AVK-BYXmFVUgFxRDtbO7hXwmBuvGiiuGhT4NRE4DRNVB5w&oe=634939EC"
            alt=""
          />
       <Typography sx={{textAlign:"center ",fontSize:"2.2rem", textShadow:"2px 3px gray",color:"#df2020"}}> Foodie's Momo Item</Typography>
       
          </Typography>

          <Divider orientation="vertical"></Divider>
         <Box sx={{display:"flex"}}><Grid container spacing={0}>
  
         <Grid item lg={2} md={4} xs={6}>  <Category 
          title="Veg"
          image="https://img.freepik.com/free-photo/big-mac-burger-potatoes-sticks-dark-wooden-board_114579-2362.jpg?w=996&t=st=1665225977~exp=1665226577~hmac=abcdd3cd95678e0e61a8919dad679068c39c97d3614870d43097c4f594fdf640"
          price="Rs 120"
          subtitle="With cheese"
        />
      
      </Grid>
      <Grid item lg={2} md={4} xs={6}>  <Category 
          title="Chicken "
          image="https://static.toiimg.com/thumb/53281477.cms?width=1200&height=900"
          price="Rs 170"
          subtitle="Fried Momo"
        />
      
      </Grid>
      
      <Grid item lg={2} md={4} xs={6}>  <Category 
          title="Chicken "
          image="https://food.hoteldiamond.com.np/wp-content/uploads/2021/06/chilly-momo.png"
          price="Rs 220"
          subtitle="C Momo"
        />
      
      </Grid>
      <Grid item lg={2} md={4} xs={6}>  <Category 
          title="Veg "
          image="https://www.bigbasket.com/media/uploads/recipe/w-l/3506_2_1.jpg"
          price="Rs 220"
          subtitle="steam Momo"
        />
      
      </Grid>
      <Grid item lg={2} md={4} xs={6}>  <Category 
          title="Veg "
          image="https://lh3.googleusercontent.com/Tt-ietNWkgTpZu3Lz6Azy9uuIIrXzJFnf2F_CCDCxDIFsYwL7Sb1VQvQgXWdIRKdH4JkfV3qjNZ29UgsLT-PKbrw6hThOOZ1Tfxd5gg"
          price="Rs 220"
          subtitle="Fried Momo"
        />
      
      </Grid>
      <Grid item lg={2} md={4} xs={6}>  <Category 
          title="Veg "
          image="https://food.hoteldiamond.com.np/wp-content/uploads/2021/06/chilly-momo.png"
          price="Rs 220"
          subtitle="C Momo"
        />
      
      </Grid></Grid></Box>
      
         </Box>
      </Modal>
    </div>
  );
}
