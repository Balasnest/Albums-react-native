import React from 'react';
import { Text } from 'react-native';


const AlbumDetails = ({album}) => {
  const { title, artist } = album;
  return (
    <Text>{title}</Text>
  );
}

export default AlbumDetails;
