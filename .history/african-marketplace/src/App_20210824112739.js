import "./App.css";
import HomePage from "./page/home";
import NavigationBar from "./component/navigation-bar";
import Page404 from "./page/404";
import Footer from "./component/footer";
import AboutPage from "./page/about";
import Inventory from "./page/product";
import ProfilePage from "./page/profile";
import ContactPage from "./page/contact";
import Specific_Product from "./page/specific_product";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App(props) {
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
            </Route>
            <Route path="/product">
              <Inventory />
            </Route>
            <Route path="/profile">
              <ProfilePage />
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
