import React from 'react';
import { ScrollView, Text } from 'react-native';
import { Link } from 'react-router-native';
import useAuthorized from '../../hooks/useAuthorized';
import RowView from '../RowView';
import AppBarTab from './AppBarTab';
import styles from './appBarStyles';

function AppBar() {
  const { isAuthorized, signOut } = useAuthorized();

  return (
    <RowView style={styles.container}>
      <ScrollView horizontal>
        <Link to="/" component={AppBarTab} title="Repositories"/>
        <Text style={styles.separator}>/</Text>
        {isAuthorized ? (
          <>
            <Link to="/review" component={AppBarTab} title="Create a review"/>
            <Text style={styles.separator}>/</Text>
            <Link to="/myReviews" component={AppBarTab} title="My reviews"/>
            <Text style={styles.separator}>/</Text>
            <AppBarTab title="Sign Out" onPress={signOut}/>
          </>
        ) : (
          <>
            <Link to="/signIn" component={AppBarTab} title="Sign In"/>
            <Text style={styles.separator}>/</Text>
            <Link to="/signUp" component={AppBarTab} title="Sign Up"/>
          </>
        )}
      </ScrollView>
    </RowView>
  )
}

export default AppBar;
