// components/navBarProfile/index.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RFPercentage } from "react-native-responsive-fontsize"; // Import responsive font size

export default function ProfileNavBar() {

 const handleSearch = () => {
   console.log('Search Clicked');
 };

 const handleMenu = () => {
   console.log('Menu Clicked');
 };

 return (
   <View style={styles.container}>
     <TouchableOpacity onPress={handleSearch} style={styles.iconButton}>
       <Feather name="search" size={24} />
     </TouchableOpacity>
     <Text style={styles.text}>Profile</Text>
     <TouchableOpacity onPress={handleMenu} style={styles.iconButton}>
       <Feather name="menu" size={24} />
     </TouchableOpacity>
   </View>
 );
}

const styles = StyleSheet.create({
 container:{
   flexDirection:'row',
   paddingHorizontal:'10%',
   paddingVertical:'5%',
   borderBottomWidth :1 ,
   borderColor :'lightgray',
   justifyContent:'space-between',
   alignItems:'center'
 },
 text:{
   color :'black' ,
   flex :1 ,
   textAlign :'center' ,
   fontWeight :'bold' ,
   fontSize : RFPercentage(2.5), // Menggunakan responsive font size
 },
 iconButton:{
   paddingHorizontal :10
 }
});