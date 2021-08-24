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
import React, { useState, useEffect} from 'react'
import { reach } from 'yup'
import FormLogin from "./component/FormLogin";
import FormProfile from "./component/FormProfile";
import schema from './validation/profileFormSchema'
import loginSchema from "./validation/loginSchema";

const initialProfileValues = {
  sellerName: '',
  username: '',
  email: '',
  phoneNumber: '',
  address: '',
  password: '',
}

const initialLoginValues = {
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
  sellerName: 'test',
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

const initialLoginErrors = {
  username: '',
  password: ''
}


const initialDisabled = true

function App() {
  
  const [profileValues, setProfileValues] = useState(initialProfileValues)
  const [loginValues, setLoginValues] = useState(initialLoginValues)
  const [itemValues, setItemValues] = useState(initialItemValues)
  const [formErrors, setFormErrors] = useState(initialProfileErrors)
  const [loginErrors, setLoginErrors] = useState(initialLoginErrors)
  const [disabled, setDisabled] = useState(initialDisabled) 
 
  const validate = (name, value) => {
    reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({ ...formErrors, [name]: ''}))
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  // const loginValidate = (name, value) => {
  //   reach(loginSchema, name)
  //   .validate(value)
  //   .then(() => setLoginErrors({ ...loginErrors, [name]:''}) )
  //   .catch(err => setLoginErrors({ ...loginErrors, [name]: err.errors[0]}))
  // }

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


  const submit = () => {
    const newFormSubmission = {
      sellerName: profileValues.sellerName.trim(),
      username: profileValues.username.trim(),
      email: profileValues.email.trim(),
      phoneNumber: profileValues.phoneNumber.trim(),
      address: profileValues.address.trim(),
      password: profileValues.password.trim(),
    
    }
    console.log(newFormSubmission)
    setProfileValues(initialProfileValues)
    setLoginValues(initialLoginValues)
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
    schema.isValid(profileValues).then(valid => setDisabled(!valid))
  },[profileValues])
  
  // useEffect(() => {
  //   loginSchema.isValid(loginValues).then(valid => setDisabled(!valid))
  // },[loginValues])
  
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
                submit={submit}
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
                submit={submit}
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
