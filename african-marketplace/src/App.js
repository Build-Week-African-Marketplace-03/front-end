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
import React from 'react'
import FormLogin from "./component/FormLogin";
import FormProfile from "./component/FormProfile";


function App() {
    
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
              <FormLogin />
            </Route>
            <Route path="/product">
              <ProductPage />
            </Route>
            <Route path="/profile">
              <FormProfile />
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
