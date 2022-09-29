import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import GppGoodIcon from "@mui/icons-material/GppGood";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { containerClasses } from "@mui/system";
import Ouroffers from "../components/UI/slider/Ouroffers.jsx";
import NearMeIcon from "@mui/icons-material/NearMe";
import Serve from "./Serve.js";
import { Grid, Box, Typography, Paper } from "@mui/material";
import CategoryItem from "./CategoryItem.jsx";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TestmonialSlider from "../components/UI/slider/TestmonialSlider.jsx";
import Popular_categories from "./Popular_categories";
import PhoneIcon from "@mui/icons-material/Phone";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
export default function Home() {
  return (
    <div className="container mt-2">
      <section>
        <Row>
          <Col lg="6" md="6">
            <div className="mt-5  hero__content">
              <h1 className="mb-4 hero__title">
                <span>HUNGRY?</span> You're
                <br /> In Right Place{" "}
              </h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
                maxime quasi aliquam qui et harum eos sequi dignissimos.
                Dolorum, officiis. Fugit est quia atque cumque! Praesentium et
                neque rerum saepe!
              </p>
              <div className="hero__btns">
                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    See all foods <ArrowForwardIosIcon className="p-1 mt-1" />
                  </button>
                </div>
              </div>
              </div>
              <Grid className="mt-4" container spacing={5}>
        <Grid item>
          <Typography sx={{ mb: 1, color: "red", marginLeft: "80px",cursor:"pointer" }}>
            <AccessTimeIcon />
          </Typography>
          <Typography sx={{fontSize:"1.2rem"}}>Delivery with 10am-9pm</Typography>{" "}
          <Typography sx={{ textAlign: "center", color: "#777" }}>
            Opening Time
          </Typography>
        </Grid>
        <Grid item>
          <Typography sx={{ mb: 1, color: "red", marginLeft: "20px",cursor:"pointer" }}>
            <NearMeIcon />
          </Typography>
          <Typography sx={{fontSize:"1.2rem"}}>Dhulikhel</Typography><Typography sx={{ textAlign: "center", color: "#777" }}>
            Location
          </Typography>
        </Grid>
        <Grid item>
          <Typography sx={{ mb: 1, color: "red", marginLeft: "30px",cursor:"pointer" }}>
            <PhoneIcon />
          </Typography>
          <Typography sx={{fontSize:"1.2rem"}}>9860428022</Typography>
          <Typography sx={{ textAlign: "center", color: "#777" }}>
            Foodie Call
          </Typography>
        </Grid>
      </Grid>
            
          </Col>
          <Col lg="6" md="6">
            <div className="hero__img">
              <img
                src="https://img.freepik.com/premium-vector/delivery-man-stand-holding-smart-tablet-parcel-front-motorbike_37895-285.jpg?w=2000"
                alt="hero-img"
                className="w-100"
              />
            </div>
          </Col>
        </Row>
      </section>
      <br />
      <br />
      <Box
        className="mt-4 mb-4"
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <Typography variant="h5" sx={{ mb: 5, textAlign: "center" }}>
          We{" "}
          <Typography variant="span" sx={{ color: "red", fontSize: "2.5rem" }}>
            Serve
          </Typography>
        </Typography>
        <Box
          sx={{
            display: { md: "flex", xs: "none" },
            justifyContent: "space-between",
            borderColor: 'primary.main' 
          }}
        >
          <Paper
            sx={{
              transition: "0.4s",
              "&:hover": {
                transform: "translateY(8px)",
              },
              borderRadius: "50px",
             
            }}
            elevation={24}
          >
            {" "}
            <Serve
              name="Pizza"
              image="https://img.freepik.com/free-vector/colorful-round-tasty-pizza_1284-10219.jpg?w=740&t=st=1664097996~exp=1664098596~hmac=ea59da9b02fc01b0f867be1a4fa2fd23d8df8497c08b1f7a8ff0fd6ea9c29f03"
            />
          </Paper>
          <Paper
            sx={{
              transition: "0.4s",
              "&:hover": {
                transform: "translateY(8px)",
              },
              borderRadius: "50px",
            }}
            elevation={24}
          >
            {" "}
            <Serve
              name="Burger"
              image="https://img.freepik.com/premium-photo/delicious-hamburger-with-tasty-ingredients_184700-4.jpg?w=740"
            />
          </Paper>
          <Paper
            sx={{
              transition: "0.4s",
              "&:hover": {
                transform: "translateY(8px)",
              },
              borderRadius: "50px",
            }}
            elevation={24}
          >
            <Serve
              name="Asian "
              image="https://img.freepik.com/premium-vector/ramen-japanese-food-flat-design-style_180868-655.jpg?w=740"
            />
          </Paper>
          <Paper
            sx={{
              transition: "0.4s",
              "&:hover": {
                transform: "translateY(8px)",
              },
              borderRadius: "50px",
            }}
            elevation={24}
          >
            <Serve
              sx={{ display: "flex" }}
              name="Cold Drinks"
              image="https://img.freepik.com/free-vector/frappe-coffee-cola-with-ice-cubes-plastic-cups_1441-3841.jpg?w=740&t=st=1664099172~exp=1664099772~hmac=be79c287fd15c1e862e164f941df7ef6a5d24593ee2ef0e768cb8224cff57975"
            />
          </Paper>
        </Box>
      </Box>
      <br />
      <div className="offers mt-5">
        <h3>
          {" "}
          Our <span className="offers_color">Offers</span>{" "}
        </h3>
        <p>Get various special offers when ordering from Foodi.</p>

        <Ouroffers />
      </div>
      <div className="mt-5">
        {" "}
        <Typography variant="h5" sx={{ mb: 5 }}>
          Food
          <Typography variant="span" sx={{ color: "red", fontSize: "2.5rem" }}>
            {" "}
            Category
          </Typography>
        </Typography>
        <Grid container spacing={3}>
          <Grid item lg={2} md={4} xs={6}>
            <CategoryItem
              color="success.main"
              name="Burger"
              image="https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGVzc2VydHxlbnwwfHwwfHw%3D&w=1000&q=80"
              category="Visit the various types of food"
            />
          </Grid>
          <Grid item lg={2} md={4} xs={6}>
            <CategoryItem
              color="success.main"
              name="Burger"
              image="khajaset.png"
              category="Visit the various types of food"
            />
          </Grid>
          <Grid item lg={2} md={4} xs={6}>
            <CategoryItem
              color="success.main"
              name="Burger"
              image="chickenchilli.png"
              category="Visit the various types of food"
            />
          </Grid>
          <Grid item lg={2} md={4} xs={6}>
            <CategoryItem
              color="success.main"
              name="Burger"
              image="chickenbiryani.png"
              category="Visit the various types of food"
            />
          </Grid>
          <Grid item lg={2} md={4} xs={6}>
            <CategoryItem
              color="success.main"
              name="Burger"
              image="sekwa.jpg"
              category="Visit the various types of food"
            />
          </Grid>
          <Grid item lg={2} md={4} xs={6}>
            <CategoryItem
              color="success.main"
              name="Burger"
              image="product1.1.jpg"
              category="Visit the various types of food"
            />
          </Grid>
          <Grid item lg={2} md={4} xs={6}>
            <CategoryItem
              color="success.main"
              name="Burger"
              image="product01.jpg"
              category="Visit the various types of food"
            />
          </Grid>
          <Grid item lg={2} md={4} xs={6}>
            <CategoryItem
              color="success.main"
              name="Burger"
              image="khajaset.png"
              category="Visit the various types of food"
            />
          </Grid>
          <Grid item lg={2} md={4} xs={6}>
            <CategoryItem
              color="success.main"
              name="Burger"
              image="khajaset.png"
              category="Visit the various types of food"
            />
          </Grid>
          <Grid item lg={2} md={4} xs={6}>
            <CategoryItem
              color="success.main"
              name="Burger"
              image="khajaset.png"
              category="Visit the various types of food"
            />
          </Grid>
        </Grid>
      </div>
      <div>
        <Popular_categories />
      </div>
      <br /><br />
      <section>
        <Container>
          <Row>
         
          
            <Col lg="6" md="6">
              <div className="why__foodie">
                <h2 className="foodie-title mb-4">
                 We Have The World  <br /><span>Best Chefs</span>
                </h2>
                <p className="foodie__desc">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Doloribus voluptates et iusto suscipit odio facilis minima
                  fugit? Iusto temporibus nisi delectus, autem amet ex tempora,
                  dignissimos ipsa id nam eos!
                </p>
                <ListGroup className="mt-5">
                  <ListGroupItem className="border-0 ps-0 ">
                    <Paper elevation={10} sx={{borderRadius:"25px", maxWidth:"390px",cursor:"pointer",}}>
                    <p className=" choose__us-title d-flex align-items-center gap-2">
                      <span>
                        <img src="https://img.freepik.com/premium-vector/chef-hat-mascot-illustration-holding-golden-badge-cute-style-design-t-shirt-sticker-logo-element_152558-11360.jpg?w=740" alt=""   className="about__logo" />
                      </span>{" "}
                    We have world best Award winning chefs
                    </p>
                    </Paper>
                  </ListGroupItem>
                  <ListGroupItem className="border-0 ps-0 ">
                  <Paper elevation={10} sx={{borderRadius:"25px", maxWidth:"390px",cursor:"pointer"}}>
                    <p className=" choose__us-title d-flex align-items-center gap-2">
                      {" "}
                      <span>
                       <img src="https://img.freepik.com/premium-vector/checkmark-green-approved-star-sticker-white_100456-967.jpg?w=740" alt="" className="about__logo"/>
                      </span>{" "}
                      Provides best quality food to our happy clints
                    </p>
                    </Paper>
                  </ListGroupItem>
                  <ListGroupItem className="border-0 ps-0 ">
                  <Paper elevation={10} sx={{borderRadius:"25px", maxWidth:"390px",cursor:"pointer"}}>
                    <p className="  choose__us-title d-flex align-items-center gap-2">
                      <span>
                     <img src="https://img.freepik.com/free-vector/cut-price-bargain-offering-reduced-cost-discount-low-rate-special-promo-scissors-dividing-banknote-crisis-bankruptcy-cheapness-market-vector-isolated-concept-metaphor-illustration_335657-4314.jpg?w=740&t=st=1664129781~exp=1664130381~hmac=fec28cb7e6f57c636cf6fb690ba99ab7fb1b9549c5b6b475623423ac7f971b9f" alt="" className="about__logo" />
                      </span>
                     We offers the best quality with low prize
                    </p>
                    </Paper>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
            <Col lg="6" md="6" className="">
              <img src="https://img.freepik.com/premium-vector/happy-cute-little-kid-boy-wear-chef-uniform-cooking-birthday-cake_97632-3344.jpg?w=900" className="w-100"alt="" />
            </Col>
          </Row>
        </Container>
      </section>
      <br />
      <br />
      <br />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" className="">
              <img
                src="https://img.freepik.com/free-vector/delivery-service-with-masks-concept_23-2148535315.jpg?w=740&t=st=1664108106~exp=1664108706~hmac=13c7c605ad0342bb092d898ecadabd658b9cb5a50887a567e5f3dfeb53df5e6f"
                alt="why-foodie"
                className="w-100"
              />
            </Col>
            <Col lg="6" md="6">
              <div className="why__foodie">
                <h2 className="foodie-title mb-4">
                  Why choose<span> Foodie?</span>
                </h2>
                <p className="foodie__desc">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Doloribus voluptates et iusto suscipit odio facilis minima
                  fugit? Iusto temporibus nisi delectus, autem amet ex tempora,
                  dignissimos ipsa id nam eos!
                </p>
                <ListGroup className="mt-5">
                  <ListGroupItem className="border-0 ps-0 ">
                    <p className=" choose__us-title d-flex align-items-center gap-2">
                      <span>
                        <img
                          src="https://img.freepik.com/free-vector/product-quality-concept-illustration_114360-7301.jpg?w=740&t=st=1664107163~exp=1664107763~hmac=e75e6bb00ff419c8086317623e926d42f804521fe911578592e3030f1bc76d88"
                          alt="Best Quality"
                          className="about__logo"
                        />
                      </span>{" "}
                      Best Quality{" "}
                    </p>
                    <p className="check_list">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quam, eaque.
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className="border-0 ps-0 ">
                    <p className=" choose__us-title d-flex align-items-center gap-2">
                      {" "}
                      <span>
                        <img
                          src="https://img.freepik.com/free-vector/delivery-service-illustrated_23-2148505081.jpg?w=740&t=st=1664106991~exp=1664107591~hmac=362bd9205152b2a50544197ca487d523f5c7493dc0ccd6bab03e794ea4f8c769"
                          alt="fast"
                          className="about__logo"
                        />
                      </span>{" "}
                      Fastest Delivery
                    </p>
                    <p className="check_list">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Maxime, nulla?
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className="border-0 ps-0 ">
                    <p className="  choose__us-title d-flex align-items-center gap-2">
                      <span>
                        <img
                          src="https://img.freepik.com/free-vector/taking-orders-by-phone-store-contact-center-customers-support-easy-order-fast-delivery-trade-service-call-center-operator-cartoon-character_335657-2564.jpg?w=740&t=st=1664106678~exp=1664107278~hmac=74a797b43a8762f58e0cc01596f7eb0b516153fd7b41756f75d057725ba97c8d"
                          alt="order"
                          className="about__logo"
                        />
                      </span>
                      Easy To Order
                    </p>
                    <p className="check_list mb-5">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Numquam, hic!
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <br /> <br />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial mt-5">
                <h2 className="testimonial__title mb-4">
                  What our <span>customers</span> are saying
                </h2>
                <p className="testimonial_desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque aut, velit ipsam accusamus in odit dolore odio
                  expedita sequi impedit, placeat sint nulla distinctio eos
                  repellat maxime nesciunt quod necessitatibus.
                </p>
                <TestmonialSlider />
              </div>
            </Col>

            <Col lg="6" md="6">
              <img
                src="https://img.freepik.com/free-vector/flat-design-people-talking-illustration_23-2149098254.jpg?w=1060&t=st=1664108946~exp=1664109546~hmac=2a4b8eee345fac697993c30ba3d7b025ed506c082a4ad53e421e9ce409515eb0"
                alt="testimonial-img"
                className="  w-100"
              />
            </Col>
          </Row>
        </Container>
      </section>
  
   
    </div>
  );
}
