import "./App.css";
import HomePage from "./page/home";
import NavigationBar from "./component/navigation-bar";
import Page404 from "./page/404";
import Footer from "./component/footer";
import AboutPage from "./page/about";
import Product from "./page/product";
import Inventory from "./page/inventory";
import ProfilePage from "./page/profile";
import ContactPage from "./page/contact";
import Specific_Product from "./page/specific_product";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useState, UseEffect, useEffect} from 'react'
import { reach } from 'yup'
import FormLogin from "./component/FormLogin";
import FormProfile from "./component/FormProfile";
import profileSchema from './validation/profileFormSchema'
import loginSchema from "./validation/loginSchema";

const initialProfileValues = {
  sellerName: '',
  username: '',
  email: '',
  phoneNumber: '',
  address: '',
  password: '',
}
const initialLoginValues={
  username: '',
  password: '',
}
const initialItemValues = {
  productName: '',
  quantity: 0,
  productDescription: '',
  productCategory: '',
  prodSubCategory:'',
}
const initialProfileErrors = {
  sellerName: '',
  username: '',
  email: '',
  phoneNumber: '',
  address: '',
  productName: '',
  quantity: '',
  productDescription: '',
  productCategory: '',
  prodSubCategory:'',
}


const initialDisabled = true

<<<<<<< HEAD
=======
function App() {
  
  const [profileValues, setProfileValues] = useState(initialProfileValues)
  const [loginValues, setLoginValues] = useState(initialLoginValues)
  const [itemValues, setItemValues] = useState(initialItemValues)
  const [formErrors, setFormErrors] = useState(initialProfileErrors)
  const [disabled, setDisabled] = useState(initialDisabled) 
  
  const validate = (name, value) => {
    reach(profileSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: ''}))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  const inputChange = (name, value) => {
    validate(name, value)
    setProfileValues({
      ...profileValues, 
      [name]: value
    })
    setLoginValues({
      ...loginValues,
      [name]: value
    })
    setItemValues({
      ...itemValues,
      [name]: value
    })
  }


  const profileSubmit = () => {
    const newProfile = {
      sellerName: profileValues.sellerName.trim(),
      username: profileValues.username.trim(),
      email: profileValues.email.trim(),
      phoneNumber: profileValues.phoneNumber.trim(),
      address: profileValues.address.trim(),
      password: profileValues.password.trim(),
    }
    console.log(newProfile)
    setProfileValues(initialProfileValues)
  }
  
  const loginSubmit = () => {
    const login = {
      username: loginValues.username,
      password: loginValues.password
    }
    console.log(login)
    setLoginValues(initialLoginValues)
  }

  const itemSubmit = () => {
    const newItemListing = {
      productName: itemValues.productName.trim(),
      quantity: itemValues.quantity.trim(),
      productDescription: itemValues.productDescription,
      productCategory: itemValues.productCategory.trim(),
      prodSubCategory: itemValues.productCategory.trim()
    }
  }

  useEffect(() => {
    profileSchema.isValid(profileValues).then(valid => setDisabled(!valid))
  },[profileValues])
  

>>>>>>> 3db3b81334d306786f964717b6c4f4033077ab2c
  return (
    <div className="App">
      <header>
        <NavigationBar />
      </header>
      <main>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <HomePage />
              <FormLogin 
                values={loginValues}
                change={inputChange}
                submit={loginSubmit}
                disabled={disabled}
                errors={formErrors}
              />
            </Route>
            <Route path="/product">
              <Product />
            </Route>
            <Route path="/inventory">
              <Inventory />
            </Route>
            <Route path="/profile">
              <FormProfile 
                values={profileValues}
                change={inputChange}
                submit={profileSubmit}
                disabled={disabled}
                errors={formErrors}
              />
            </Route>
            <Route path="/About">
              <AboutPage />
            </Route>
            <Route path="/Contact">
              <ContactPage />
            </Route>
            <Route>
              <Page404 />
            </Route>
          </Switch>
        </BrowserRouter>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

/*

the inventory page is composed of the below components:
...form_inventory_add_item.js
...form_inventory_edit_item.js
...form_inventory_inventory_sheet.js

the product page is composed of the below components:
...item_for_sale.js
...listing_items_for_sales.js

*/