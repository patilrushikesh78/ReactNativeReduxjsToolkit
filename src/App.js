import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-view';
import ThemeProvider from './context/ThemeContext';
import {Navigator} from './navigation/app-routining';
import {Provider} from 'react-redux';
import {store} from './store/store';
const App = () => {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider>
          <SafeAreaProvider>
            <Navigator />
          </SafeAreaProvider>
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default App;
