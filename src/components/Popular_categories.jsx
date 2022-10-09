import React, { Component } from "react";
import Slider from "react-slick";
import Popularcategoryitem from "./Popularcategoryitem";
import { Grid,Box,Typography } from "@mui/material";

export default class Rtl extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      rtl: true,
    };
    return (
      
      <div className="popularcategories mt-4">
        <br/><Grid  spacing={4}>
        
        <Typography  variant="h5" sx={{color: "#df2020",fontSize: "2.5rem" ,  justifyContent: "space-between",  }}>
      Popular 
          <Typography variant="span" sx={{color:"black"  }}> 
           Food
           
          </Typography>
        </Typography>
      <Typography sx={{mb:2}}>We serve better & Faster</Typography></Grid>
        <Slider {...settings}>
          
          <div className="pop" >
            {" "}
            <Popularcategoryitem
          name="Chicken Drumstick "
          image="https://img.freepik.com/free-photo/high-angle-fried-chicken-drumsticks-with-ketchup-fries_23-2148682840.jpg?w=1060&t=st=1665248445~exp=1665249045~hmac=ba746047d97fd10779b3588465fafe767966609d07eb6b38b502788258320c28"
          price="Rs 220"
          subtitle="Fried Momo"
        />
      
          </div>
          <div className="pop"  >
            {" "}
        <Popularcategoryitem
          name="Chicken C Momo "
          image="cmomo.png"
          price="Rs 220"
          subtitle="Fried Momo"
        />
      
          </div>
          <div className="pop">
            {" "}
            <Popularcategoryitem
          name="Mushroom pizza "
          image="https://img.freepik.com/free-photo/margherita-pizza-with-cheese-basil-mozzarella_140725-11082.jpg?w=740&t=st=1665247518~exp=1665248118~hmac=dd37690a358a14eb0d28257aac89d0b2e29cdf3baa2e51cd4590e241e8966873"
                    price="Rs 220"
          subtitle="Fried Momo"
        />
      
          </div>
          <div className="pop">
            {" "}
            <Popularcategoryitem
          name="Chicken Burger "
          image="https://img.freepik.com/premium-photo/big-double-cheddar-cheeseburger-with-chicken-cutlet_147620-1306.jpg?w=826"
          price="Rs 220"
          subtitle="Fried Momo"
        />
      
          </div>
          <div className="pop">
            {" "}
            <Popularcategoryitem
          name="Alu parotha "
          image="https://img.freepik.com/free-photo/aloo-paratha-gobi-paratha-also-known-as-potato-cauliflower-stuffed-flatbread-dish-originating-from-indian-subcontinent_466689-76134.jpg?w=1060&t=st=1665246859~exp=1665247459~hmac=36b9770f1b74781c13d763e5ce6c36fe5b6711f6976f4d078a6b69b18990ae08"
          price="Rs 220"
          subtitle="Fried Momo"
        />
      
          </div>
          <div className="pop">
            {" "}
            <Popularcategoryitem
          name="Chicken Grill "
          image="https://img.freepik.com/free-photo/delicious-chicken-table_144627-8758.jpg?w=1060&t=st=1665246996~exp=1665247596~hmac=84a84407deb9a5f0107a91da66126fc93396ca0798258d7f69d02695a7cdab90"
          price="Rs 220"
          subtitle="Fried Momo"
        />
      
          </div>
          
        </Slider>
      </div>
    );
  }
}
