import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import AuthNavigation from './AuthNavigation';
import AppNavigation from './AppNavigation';

const Navigation = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(userAuth) {
    setUser(userAuth);
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
