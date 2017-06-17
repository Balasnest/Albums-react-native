import React from 'react';
import { View, Text, StyleSheet, AppRegistry } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = Styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerName}</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
});

export default Header;
