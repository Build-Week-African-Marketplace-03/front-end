import { Navbar, Nav, Container } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/footer.css"
export default function Footer(props) {
  return (
    <div className="footerMainDiv">
      <div className="footerDiv">
        <Navbar>
          <Container>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact US</Nav.Link>
          </Container>
        </Navbar>
      </div>
      <p>Copyright 2021</p>
    </div>
  )
}
