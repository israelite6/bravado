/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar, Text} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {IndexStartupContainer} from './src/Containers/index';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.root}>
        <IndexStartupContainer />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#B9B9B9',
    flex: 1,
  },
});

export default App;
