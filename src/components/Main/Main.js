import React from 'react';
import { View } from 'react-native';
import { Redirect, Route, Switch } from 'react-router-native';
import AppBar from '../AppBar';
import RepositoryList from '../RepositoryList';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import RepositoryView from '../RepositoryView';
import ReviewForm from '../ReviewForm';
import MyReviews from '../MyReviews';
import styles from './mainStyles'

function Main() {
  return (
    <View style={styles.container}>
      <AppBar/>
      <Switch>
        <Route path="/" exact>
          <RepositoryList/>
        </Route>
        <Route path="/signIn" exact>
          <SignIn/>
        </Route>
        <Route path="/signUp" exact>
          <SignUp/>
        </Route>
        <Route path="/repo/:id" exact>
          <RepositoryView/>
        </Route>
        <Route path="/review" exact>
          <ReviewForm/>
        </Route>
        <Route path="/myReviews" exact>
          <MyReviews/>
        </Route>
        <Redirect to="/"/>
      </Switch>
    </View>
  )
}

export default Main;
