import React from 'react';
import { Text, View, AppRegistry } from 'react-native';

const App = () => {
  const { textStyle, container } = styles;
  return (
    <View style={container}>
      <Text style={textStyle}>Hi Hello!</Text>
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
    fontSize: 30
  }
}

AppRegistry.registerComponent('Albums', () => App);
