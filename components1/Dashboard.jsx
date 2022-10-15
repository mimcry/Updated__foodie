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
import Chaart from "./Chaart";
const Dashboard = () => {
  const owner = [
    {
      id: 1,
      image:
        "https://img.freepik.com/free-vector/confirmed-concept-illustration_114360-416.jpg?w=740&t=st=1665398502~exp=1665399102~hmac=1f53a7c012741885d1584076b7d66f82d94cf7c42f5df8640de5420a4bd93bdf",
      name: "Total Order",
      Order:"50"
    },
    {
      id: 2,
      image:
      "https://img.freepik.com/premium-vector/online-order-food-product-express-delivery-concept_647468-99.jpg?w=740",
      name: "Order on Delivery",
      Order:"50"
    },
    {
      id: 3,
      image:
      "https://img.freepik.com/free-vector/cash-delivery-concept_23-2148786294.jpg?w=740&t=st=1665399400~exp=1665400000~hmac=cf30f59b39303faec54971ea058aa413cdb1228ddf99e9bc2fa4ef6c9f187be3",
      name: "Order Placed",
      Order:"50"
    },
    {
      id: 4,
      image:
      "https://img.freepik.com/free-vector/happy-couple-with-money-big-income-cash-profit-family-earnings-people-with-golden-coins-financial-success-joint-savings-total-budget-currency-vector-isolated-concept-metaphor-illustration_335657-4332.jpg?w=740&t=st=1665399531~exp=1665400131~hmac=1532800f18ff20dbef9d10011a28d3482d11000943725a3c40de57503ebfc23e",
      name: "Total Earning",
      Order:" Rs 500000"
    },
    
  ];
  return (
    <div>
      <Grid>
        <Typography sx={{ textAlign: "center" }}>
          <h3>Welcome Owner</h3>
        </Typography>
        <Box sx={{ border: "20px solid black", borderRadius: "25px", mb: 7 }}>
          <Typography sx={{ textAlign: "center", mt: 2, mb: 2 }}>
            <h4>The Status Of Today</h4>
          </Typography>
          <Grid container spacing={3} sx={{ display: "flex" }}>
            
              
            
            {owner.map((owner)=>(<Grid item lg={3} md={6} xs={12}><Typography sx={{ ml: 4 }}>
                <img
                  src={owner.image}
                  alt="total order"
                  className="dashboard"
                />
                <Typography
                  sx={{ textAlign: "center", ml: -4, fontWeight: 600, mb: 4 }}
                >
                  {owner.name} <Typography> {owner.Order}</Typography>
                </Typography>
              </Typography> </Grid>))}
              
           
          </Grid>
        </Box>
      </Grid>
      <Chaart />
    </div>
  );
};

export default Dashboard;
