import React from 'react';
import { Text, View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import Albums from './src/components/Albums';

const App = () => {
  const { textStyle, container } = styles;
  return (
    <View style={{ flex:1 }}>
      <Header headerName="Albums"/>
      <Albums />
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 15
  }
}

AppRegistry.registerComponent('Albums', () => App);
