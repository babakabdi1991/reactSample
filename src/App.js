import React from 'react';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Checkout from './pages/checkout/checkout.component'
import Header from './components/header/header.component';
import SingInAndSingUp from './pages/sign-in-and-signup-page/sign-in-page.component';

import { setCurrentUser } from './redux/user/user-action'

import {auth , createUserProfileDocument} from './firebase/firebase.util';

import { connect } from 'react-redux';

import {Route , Switch , Redirect} from 'react-router-dom';
import './App.css';



class App extends React.Component {


  unSubscribedFromAuth = null;

  componentDidMount(){
  this.unSubscribedFromAuth =  auth.onAuthStateChanged(async userAuth=>{

      if(userAuth){

        const userRef = await createUserProfileDocument(userAuth); 

        userRef.onSnapshot(snapShot =>{
          this.props.setCurrentUser({
              id: snapShot.id ,
              ...snapShot.data()
          })
        })
        
      }else{
        this.props.setCurrentUser(userAuth)
      }

      });
  }

  componentDidUnmounted(){
    this.unSubscribedFromAuth();
  }

  render(){
    
    return (
      <div className="App">

        <Header  />
        <Switch>
          <Route exact  path="/">
            <HomePage />
          </Route>
          <Route  path="/checkout">
            <Checkout />
          </Route>
          <Route  path="/sign">
            <SingInAndSingUp />
          </Route>
          <Route  path="/shop">
            <ShopPage />
          </Route>
        </Switch>
      </div>
    )
  }

}

const mapStateToProps = (state) =>{
  return(
    { currentUser: state.user.currentUser }
  )
}

const mapDispatchToProps = (dispatch) =>{
    return(
       { setCurrentUser: (user)=>dispatch(setCurrentUser(user)) } 
    )
}

export default connect(mapStateToProps , mapDispatchToProps)(App);
