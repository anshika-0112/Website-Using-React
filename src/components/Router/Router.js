import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import FilmDetails from "../Details/FilmDetails";
import LoginContainer from "../Login/LoginContainer";
import SearchContainer from "../Search/SearchContainer";
import About from "../About";
import Contact from "../Contact";
import Home from "../Home/Home";
import PersonDetails from "../Details/PersonDetails";
import PlanetDetails from "../Details/PlanetDetails";
import PrivateRoute from "../PrivateRoute";
import ProvideAuth from "../AuthenticationControl/ProvideAuth";
import { useContext } from "react";
import Navbar from "../Navigation/Navbar";
const Router = () => {
  return (
    <ProvideAuth>
    <BrowserRouter>
     <Navbar/>
      <Switch>
        <Route exact path="/" component={LoginContainer} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <PrivateRoute>
        <Route path="/search/:cName" component={SearchContainer} />
        
        <Route path="/home" component={Home}/>
        <Route path="/Films/:filmId" component={FilmDetails} />
        <Route path="/planets/:planetId" component={PlanetDetails}/>
        <Route path="/People/:peopleId" component={PersonDetails}/>
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
    </ProvideAuth>
  );
};
export default Router;
