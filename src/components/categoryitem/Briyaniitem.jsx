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
              name="Briyani"
              image="https://img.freepik.com/premium-photo/dum-handi-muttona-biryania-gosht-pilaf-is-prepared-earthen-clay-pot-called-haandi-1-kilo-size-popular-indian-non-vegetarian-fooda_466689-52330.jpg?w=1060"
              category="Visit the various Briyani"/>
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
          title="Chicken "
          image="https://img.taste.com.au/mdKxKxoR/taste/2016/11/chicken-momos-with-tomato-achar-46671-1.jpeg"
          price="Rs 120"
          subtitle="Steam "
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
