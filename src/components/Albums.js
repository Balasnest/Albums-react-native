import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AlbumDetails from './AlbumDetails'
import axios from 'axios';

class Albums extends Component {
  state = { albums: [] };
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => {this.setState({albums: response.data})});
  }
  renderAlbums() {
    return this.state.albums.map( album => 
      <AlbumDetails key={album.title} album={album}/>
    );
  }

  render() {
    console.log(this.state);
    return (
      <View>{this.renderAlbums()}</View>
    );
  }
}

export default Albums;
