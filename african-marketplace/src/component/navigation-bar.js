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
        <Nav.Link href="/product">Product</Nav.Link>
        <Nav.Link href="/inventory">Inventory</Nav.Link>
        <Nav.Link href="/profile">Profile</Nav.Link>
      </Container>
    </Navbar>
  )
}
