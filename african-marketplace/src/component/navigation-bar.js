import { Navbar, Nav } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/nav.css"

console.log()
export default function NavigationBar(props) {
  return (
    <Navbar>
      <div className="navBar">
        <div className="navMainDiv">
          <div className="navLeftDiv">
            <div className="logoDiv">
              <img src="/images/avo.png"></img>
              <Navbar.Brand href="/" className="logoName">
                AfriCart
              </Navbar.Brand>
            </div>

            <div className="navRight">
              <Nav.Link href="/product" className="navLink">
                Product
              </Nav.Link>
              <Nav.Link href="/inventory" className="navLink">
                Inventory
              </Nav.Link>
            </div>
          </div>

          <div className="navRightDiv">
            <Nav.Link href="/login" className="login">
              Log in
            </Nav.Link>
            <Nav.Link href="/profile" className="navLink profile">
              Sign up
            </Nav.Link>
          </div>
        </div>
      </div>
    </Navbar>
  )
}
