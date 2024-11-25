// pages/profile/index.js
import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, RefreshControl, ImageBackground } from "react-native";
import ProfileNavBar from "../../components/navBarProfile";
import ProfileHeader from "../../components/headerProfile";

const ProfileScreen = () => {
 const [refreshing, setRefreshing] = useState(false);

 const onRefresh = () => {
   setRefreshing(true);
   setTimeout(() => {
     setRefreshing(false);
   },2000);
 };

 return (
   <ImageBackground 
     source={{ uri: 'https://wallpaperaccess.com/full/1104635.jpg'}} // Ganti dengan URL gambar yang diinginkan
     style={styles.background}
     resizeMode="cover"
   >
     <View style={styles.container}>
       <ProfileNavBar />
       <ScrollView
         refreshControl={
           <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
         }
       >
         <ProfileHeader />
         {/* Konten profil tambahan dapat ditambahkan di sini */}
       </ScrollView>
     </View>
   </ImageBackground>
 );
};

const styles = StyleSheet.create({
 container:{
   flex :1 ,
   backgroundColor :'transparent', // Gunakan transparent untuk membiarkan gambar latar belakang terlihat sepenuhnya
 },
 background:{
   flex :1 ,
 },
});

export default ProfileScreen;