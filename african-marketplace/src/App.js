import "./App.css"
import HomePage from "./page/home"
import NavigationBar from "./component/navigation-bar"
import Footer from "./component/footer"
import AboutPage from "./page/about"
import Product from "./page/product"
import Inventory from "./page/inventory"
import Signup from "./page/profile"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Login from './page/login'
import FormContact from "./component/FormContact"
import PrivateRoute from './utilities/PrivateRoute'


function App() {

  return (
    <div className="App">
      <header>
        <NavigationBar />
      </header>
      <main>
        <Router>
          <Switch>
            <PrivateRoute path="/inventory" component={Inventory}/>
            <Route path="/Contact" component={FormContact}/>
            <Route path="/About" component={AboutPage}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/product" component={Product}/>
            <Route path="/login" component={Login}/>
            <Route exact path="/" component={HomePage}/>  
          </Switch>
        </Router>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App

/*

the inventory page is composed of the below components:
...form_inventory_add_item.js
...form_inventory_edit_item.js
...form_inventory_inventory_sheet.js

the product page is composed of the below components:
...item_for_sale.js
...listing_items_for_sales.js

*/
