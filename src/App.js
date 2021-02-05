import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ShopPage from "./page/shop/shop.component";
import Header from "./component/header/header.component";
import "./App.css";
import HomePage from "../src/page/homepage/homepage.component";
import SignInAndSignUp from "../src/page/sign-in-sign-up/signInAndSingUp";
import CheckOut from "./page/checkout/checkout.page";
import { auth, createUserProfileDocument } from "./firebase/firebase.utility";
import { connect } from "react-redux";
import { checkUserSession } from "../src/redux/user/user.actions";
import { currentUserSelect } from "./redux/user/user.selector";
import { crateStructuredSelector, createStructuredSelector } from "reselect";

class App extends React.Component {
  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckOut} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? <Redirect to='/' /> : <SignInAndSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: currentUserSelect
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
