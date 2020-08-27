import React, { useEffect } from "react";
import "./App.css";
import SignIn from "./Components/SignIn";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Attendance from "./Components/Attendance";
import EmployeeDetail from "./Components/EmployeeDetail";
import Announcements from "./Components/Announcements";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import { Provider } from "react-redux";
import store from "./store";
import "materialize-css/dist/css/materialize.min.css";
import CartBtns from "./Components/CartBtns";
// import M from 'materialize-css/dist/js/materialize.min.js';

function App() {
  // useEffect(() => {
  //   //Initializes materialize js
  //   M.AutoInit();
  // })

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" exact component={SignIn} />
          <Route exact path="/dashboard" exact component={Dashboard} />
          <Route exact path="/attendance" exact component={Attendance} />
          <Route exact path="/announcement" exact component={Announcements} />
          <Route exact path="/add_announcement" exact component={Form} />
          <Route exact path="/employee_detail" component={EmployeeDetail} />
        </Switch>
        <CartBtns />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
