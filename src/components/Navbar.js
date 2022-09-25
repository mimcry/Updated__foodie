import { display } from "@mui/system";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import LoginIcon from "@mui/icons-material/Login";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
function NavScrollExample() {
  return (
    <nav>
      <Navbar className="foodie " bg="light" expand="lg ">
        <Container fluid className="shadow p-2     ">
          <img
            className="logo"
            src="https://scontent.fktm6-1.fna.fbcdn.net/v/t1.15752-9/306322859_1152926112244740_5963128937608353779_n.png?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_ohc=qmi-xv_RpuEAX8sakt9&_nc_ht=scontent.fktm6-1.fna&oh=03_AVK-BYXmFVUgFxRDtbO7hXwmBuvGiiuGhT4NRE4DRNVB5w&oe=634939EC"
            alt=""
          />
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px", display: "flex" }}
              navbarScroll
            >
              {" "}
              <div className="navbar_text">
                {" "}
                <Nav>
                  {" "}
                  <nav className="nbar mx-3">Home</nav>{" "}
                  <nav className="nbar mx-3">About us</nav>{" "}
                  <nav className="nbar mx-3">Category</nav>{" "}
                  <nav className="nbar mx-3">9860428022</nav>
                </Nav>
              </div>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button id="log_1" variant="outline-success">
                Search
              </Button>
            </Form>
            <div className="mx-4">
              <AccountCircleIcon />
            </div>
            <div className="login mx-2">
              <LoginIcon />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
}

export default NavScrollExample;
