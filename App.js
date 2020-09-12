import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Main from './components/MainComponent'

import { Provider } from 'react-redux'

import { ConfigureStore } from './Redux/ConfigureStore'

export default function App() {
  return (
    <Provider store={ConfigureStore}>
      <Main />
    </Provider>

  );
}

