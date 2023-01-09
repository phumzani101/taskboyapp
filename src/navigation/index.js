import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import AuthNavigation from './AuthNavigation';
import AppNavigation from './AppNavigation';
import {useDispatch, useSelector} from 'react-redux';
import {loadUser} from '../store/slices/authSlice';

const Navigation = () => {
  const [initializing, setInitializing] = useState(true);
  const {user} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  // Handle user state changes
  function onAuthStateChanged(userAuth) {
    dispatch(loadUser(userAuth));
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (initializing) {
    return null;
  }

  if (user) {
    return <AppNavigation />;
  }

  return <AuthNavigation />;
};

export default Navigation;
