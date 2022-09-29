import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SendIcon from "@mui/icons-material/Send";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <div className="container">
      <footer className="footer mt-5">
        <Container>
          <div className="animated">
            <div className="wave" id="wave1"></div>
            <div className="wave" id="wave2"></div>
            <div className="wave" id="wave3"></div>
            <div className="wave" id="wave4"></div>
            <div className="wave" id="wave5"></div>
          </div>
          <Row>
            <Col lg="3" md="4" sm="6">
              <div className=" footer__logo text-start">
                <img
                  src="https://scontent.fktm6-1.fna.fbcdn.net/v/t1.15752-9/306322859_1152926112244740_5963128937608353779_n.png?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_ohc=qmi-xv_RpuEAX8sakt9&_nc_ht=scontent.fktm6-1.fna&oh=03_AVK-BYXmFVUgFxRDtbO7hXwmBuvGiiuGhT4NRE4DRNVB5w&oe=634939EC"
                  alt="logo"
                  className="mb-5"
                />
                <h5>Foodie</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt pariatur accusamus
                </p>
              </div>
            </Col>

            <Col lg="3" md="4" sm="6">
              <h5 className="footer__title">Delivery Time</h5>
              <ListGroup className="deliver__time-list">
                <ListGroupItem className=" delivery__time-item border-0 ps-0">
                  <span>Sunday - Thursday</span>
                  <p>10:00am - 9:00pm</p>
                </ListGroupItem>

                <ListGroupItem className=" delivery__time-item border-0 ps-0">
                  <span>Saturday</span>
                  <p>Off day</p>
                </ListGroupItem>
              </ListGroup>
            </Col>

            <Col lg="3" md="4" sm="12">
              <h5 className="footer__title">Contact</h5>
              <ListGroup className="deliver__time-list">
                <ListGroupItem className=" delivery__time-item border-0 ps-0">
                  <p>Location: Dhulikhel , SarsawotiBazar, Nepal</p>
                </ListGroupItem>
                <ListGroupItem className=" delivery__time-item border-0 ps-0">
                  <span>Phone: 9860428022</span>
                </ListGroupItem>

                <ListGroupItem className=" delivery__time-item border-0 ps-0">
                  <span>Email: salongautam4@gmail.com</span>
                </ListGroupItem>
              </ListGroup>
            </Col>

            <Col lg="3" md="4" sm="12">
              <h5 className="footer__title">Newsletter</h5>
              <p>Subscribe our newsletter</p>
              <div className="newsletter">
                <input type="email" placeholder="Enter your email" />
                <span>
                  <SendIcon />
                </span>
              </div>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col lg="6" md="6">
              <p className="copyright__text">
                Copyright - 2022, website made by Group Foodie. All Rights
                Reserved.
              </p>
            </Col>
            <Col lg="6" md="6">
              <div className="social__links d-flex align-items-center gap-4 justify-content-end">
                <p className="m-0">Follow: </p>
                <span>
                  {" "}
                  <a href="https://www.facebook.com/">
                    <FacebookIcon />
                  </a>{" "}
                </span>

                <span>
                  <a href="https://www.youtube.com/">
                    <YouTubeIcon />
                  </a>
                </span>

                <span>
                  {" "}
                  <a href="https://www.linkedin.com/feed/">
                    <LinkedInIcon />
                  </a>{" "}
                </span>

                <span>
                  {" "}
                  <a href="https://www.instagram.com/">
                    <InstagramIcon />
                  </a>{" "}
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
