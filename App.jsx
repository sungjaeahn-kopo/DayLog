import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import LogContext from './components/contexts/LogContext';
import RootStack from './components/screens/RootStack';

function App() {
  return (
    <NavigationContainer>
      <LogContext.Provider value="안녕하세요">
        <RootStack />
      </LogContext.Provider>
    </NavigationContainer>
  );
}

export default App;
