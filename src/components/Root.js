import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import AppNavigator from '../navigations/AppNavigator';
import AuthNavigator from '../navigations/AuthNavigator';
import {LoginContext} from '../context/LoginProvider';

const Root = () => {
  const [user, setUser] = useState(null);
  console.log(user, 'here');

  return (
    <LoginContext.Provider value={{user, setUser}}>
      <NavigationContainer>
        {!user ? <AuthNavigator /> : <AppNavigator />}
      </NavigationContainer>
    </LoginContext.Provider>
  );
};

export default Root;
