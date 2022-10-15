
              

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import { Divider, Grid,Fab ,Typography} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Page from "./Page";
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
  borderRadius: "50px",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState([ {
      id: 1,
      title: "Chicken",
      image:
        "https://img.taste.com.au/mdKxKxoR/taste/2016/11/chicken-momos-with-tomato-achar-46671-1.jpeg",
      price: "rs250",
      subtitle: "Steam",
    },
    {
      id: 2,
      title: "Chicken",
      image:
        "https://img.taste.com.au/mdKxKxoR/taste/2016/11/chicken-momos-with-tomato-achar-46671-1.jpeg",
      price: "rs250",
      subtitle: "fried Momo",
    },
    {
      id: 3,
      title: "Chicken",
      image:
        "https://img.taste.com.au/mdKxKxoR/taste/2016/11/chicken-momos-with-tomato-achar-46671-1.jpeg",
      price: "rs250",
      subtitle: "C Momo",
    },
    {
      id: 4,
      title: "veg",
      image:
        "https://img.taste.com.au/mdKxKxoR/taste/2016/11/chicken-momos-with-tomato-achar-46671-1.jpeg",
      price: "rs250",
      subtitle: "fried Momo",
    },
    {
      id: 5,
      title: "Veg",
      image:
        "https://img.taste.com.au/mdKxKxoR/taste/2016/11/chicken-momos-with-tomato-achar-46671-1.jpeg",
      price: "rs250",
      subtitle: "C momo",
    },
    {
      id: 6,
      title: "Veg",
      image:
        "https://img.taste.com.au/mdKxKxoR/taste/2016/11/chicken-momos-with-tomato-achar-46671-1.jpeg",
      price: "rs250",
      subtitle: "Steam",
    },
    {
      id: 7,
      title: "Buff",
      image:
        "https://img.taste.com.au/mdKxKxoR/taste/2016/11/chicken-momos-with-tomato-achar-46671-1.jpeg",
      price: "rs250",
      subtitle: "Fried momo",
    },
    {
      id: 8,
      title: "Buff",
      image:
        "https://img.taste.com.au/mdKxKxoR/taste/2016/11/chicken-momos-with-tomato-achar-46671-1.jpeg",
      price: "rs250",
      subtitle: "Steam ",
    },
    {
      id: 9,
      title: "Buff",
      image:
        "https://img.taste.com.au/mdKxKxoR/taste/2016/11/chicken-momos-with-tomato-achar-46671-1.jpeg",
      price: "rs250",
      subtitle: "C momo",
    },])
  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);
  
 
  const deleteHandeler = (id) => {const test= data?.filter(items=>items.id!==id);
    setData(test)
    alert("Your food is deleted")
   }
const additem = ()=>{
  alert("clicked icon!!")

}
 
  return (
    <div> 
      <Button onClick={handleOpen}>
      <Fooditem 
              name="Pizza"
              image="https://img.freepik.com/free-photo/pizza-pepperoni-table_140725-5396.jpg?w=1060&t=st=1665217236~exp=1665217836~hmac=e0ca15f6f7a0687397a5a36aed5d9e42651078d9e7360264fda8a679b98648d1"
              category="Visit the various types of Pizzas"/>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Page name="Momo" />

          <Divider orientation="vertical"></Divider>

          <Box sx={{ display: "flex" }}>
            <Grid container spacing={0}>
              {data.map((data) => (
                <Grid item lg={2} md={4} xs={6}>
                      
                  <Category
                    title={data.title}
                    image={data.image}
                    price={data.price}
                    subtitle={data.subtitle}
                    deleteHandeler={() => deleteHandeler(data.id)}
                  />
                 
                </Grid>
                
              ))}{" "}
              <Grid item lg={2} md={4} xs={6}>
              <Box
                  sx={{
                    mt: 7,
                    fontWeight: 600,
                    fontSize: "rem",
                    border: "2px solid black",
                    borderRadius: "25px",
                    maxWidth: 200, maxHeight: 300,
                  }}
                >
                  {" "}
                  <Typography sx={{  mt:2, textAlign:"center"}}>Add Food</Typography>{" "}
                  <Typography  sx={{ mt: 4, mb: 4 ,textAlign:"center"}}>
                    <Fab
                     
                    sx={{}}
                      aria-label="add"
                    >
                      <AddIcon  onClick={ additem} sx={{color:"#fd2020"}} 
                      />
                    </Fab>
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
