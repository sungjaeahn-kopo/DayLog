import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {LogContextProvider} from './components/contexts/LogContext';
import {SearchContextProvider} from './components/contexts/SearchContext';
import RootStack from './components/screens/RootStack';

function App() {
  return (
    <NavigationContainer>
      <SearchContextProvider>
        <LogContextProvider>
          <RootStack />
        </LogContextProvider>
      </SearchContextProvider>
    </NavigationContainer>
  );
}

export default App;
