import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyDrawer from './routes/MyDrawer';
import {NavigationContainer} from '@react-navigation/native'
import {Provider} from 'react-redux';
import store from './store/store';

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <MyDrawer/>
    </NavigationContainer>
    </Provider>
  );
}
