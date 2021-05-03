import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import MyDrawer from './routes/MyDrawer';
import store from './store/store';
import { Provider } from 'react-redux';
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer >
        <MyDrawer />
      </NavigationContainer>
    </Provider>
  );
}
