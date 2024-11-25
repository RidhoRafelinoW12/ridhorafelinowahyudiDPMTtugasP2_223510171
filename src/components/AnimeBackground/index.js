// components/AnimeBackground/index.js
import React from 'react';
import { ImageBackground, StyleSheet, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; // Pastikan untuk menginstal paket ini

const { width, height } = Dimensions.get('window');

const AnimeBackground = ({ children }) => {
  return (
    <ImageBackground 
      source={{ uri: 'https://wallpaperaccess.com/full/1104635.jpg' }} 
      style={styles.background}
      resizeMode="cover"
    >
      <LinearGradient colors={['rgba(0,0,0,0.5)', 'rgba(0,0,0,0.5)']} style={styles.gradient}>
        {children}
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    width: width,
    height: height,
    flex: 1,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default AnimeBackground;