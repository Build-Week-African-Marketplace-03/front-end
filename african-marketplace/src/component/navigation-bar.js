import { Navbar, Nav, Container } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/nav.css"

console.log()
export default function NavigationBar(props) {
  return (
    <Navbar>
      <Container>
        <div>
          <img src="/images/avo.png"></img>
          <Navbar.Brand href="/" className="logoName">
            AfriCart
          </Navbar.Brand>
        </div>
        <div className="navLinks">
          <Nav.Link href="/product" className="navLink">
            Product
          </Nav.Link>
          <Nav.Link href="/inventory" className="navLink">
            Inventory
          </Nav.Link>
          <Nav.Link href="/profile" className="navLink profile">
            Sign up
          </Nav.Link>
        </div>
      </Container>
    </Navbar>
  )
}
