import "./App.css";
import HomePage from "./page/home";
import NavigationBar from "./component/navigation-bar";
import Page404 from "./page/404";
import Footer from "./component/footer";
import AboutPage from "./page/about";
import ProductPage from "./page/product";
import ProfilePage from "./page/profile";
import ContactPage from "./page/contact";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useState, UseEffect} from 'react'
import { reach } from 'yup'
import FormLogin from "./component/FormLogin";
import FormProfile from "./component/FormProfile";
import schema from './validation/formSchema'

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
const initialFormErrors = {
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

function App() {
  
  const [profileValues, setProfileValues] = useState(initialProfileValues)
  const [loginValues, setLoginValues] = useState(initialLoginValues)
  const [itemValues, setItemValues] = useState(initialItemValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled) 
  
  const validate = (name, value) => {
    reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: ''}))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  const inputChange = (name, value) => {
    //validate(name, value)
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
              <ProductPage />
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
