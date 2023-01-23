import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {LogContextProvider} from './components/contexts/LogContext';
import RootStack from './components/screens/RootStack';

function App() {
  return (
    <NavigationContainer>
      <LogContextProvider>
        <RootStack />
      </LogContextProvider>
    </NavigationContainer>
  );
}

export default App;
