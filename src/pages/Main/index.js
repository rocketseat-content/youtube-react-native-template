import React from 'react';
import { ImageBackground, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#fff',
  },
});

const Main = () => (
  <ImageBackground
    style={styles.container}
    resizeMode="cover"
    source={{
      url: 'https://s3-sa-east-1.amazonaws.com/rocketseat-cdn/background.png',
    }}
  >
    <Text style={styles.welcome}>Hello Rocketseat!</Text>
  </ImageBackground>
);

export default Main;
