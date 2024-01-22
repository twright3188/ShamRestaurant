import React, { useEffect, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';
import Router from './src/navigation';
import NetworkError from './src/screens/News/NetworkError';

import { useUser, authenticateUser } from './src/services/user';
// import AdminMenu from './src/services/admin-menu';

// load icon fonts on the application start
import './src/components/Icon';

export default function App() {
  const user = useUser(null);
  const [error, setErrorStatus] = useState(false);
   console.disableYellowBox = true
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (state.isConnected && !state.isInternetReachable) {
        // doresearch a bug on loading
        // setErrorStatus(true);
      } else {
        setErrorStatus(false);
      }
    });

    return unsubscribe;

  }, []);


  useEffect(() => {
    if (!user) {
      authenticateUser();
    }
  }, [user]);


  if (error) {
    return <NetworkError />;
  }

  return (
    <Router />
    /* <AdminMenu>
      
    </AdminMenu> */
  );
}
