// components/headerProfile/index.js
import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { buttonStyles } from "../../style/buttonStyles";
import { launchImageLibrary } from 'react-native-image-picker';
import { RFPercentage } from "react-native-responsive-fontsize"; // Import responsive font size

const ProfileHeader = () => {
  const [profileData, setProfileData] = useState({
    name: 'Ridho Rafelino Wahyudi',
    followers: 250,
    following: 180,
    posts: 8,
    profileImage: 'https://via.placeholder.com/100' // Gambar default
  });

  useEffect(() => {
    fetchProfileData();
  }, []);

  const fetchProfileData = () => {
    setTimeout(() => {
      setProfileData({
        ...profileData,
        name: 'Ridho Rafelino Wahyudi',
        followers: 260,
        following: 190,
        posts: 8
      });
    }, 2000);
  };

  const handleChangeProfileImage = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.assets[0].uri };
        setProfileData({ ...profileData, profileImage: source.uri });
      }
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleChangeProfileImage}>
        <Image 
          source={{ uri: profileData.profileImage }} 
          style={styles.profileImage} 
        />
      </TouchableOpacity>
      <Text style={styles.nameText}>{profileData.name}</Text>
      <View style={styles.counterContainer}>
        <View style={styles.itemContainer}>
          <Text style={styles.numberText}>{profileData.posts}</Text>
          <Text style={styles.labelText}>Posts</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.numberText}>{profileData.followers}</Text>
          <Text style={styles.labelText}>Followers</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.numberText}>{profileData.following}</Text>
          <Text style={styles.labelText}>Following</Text>
        </View>
      </View>
      <TouchableOpacity 
        style={buttonStyles.grayOutlinedButton}
        onPress={() => console.log('Edit Profile Clicked')}
      >
        <Text style={buttonStyles.grayOutlinedButtonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginHorizontal: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#fff',
    shadowColor: '#000', // Menggunakan boxShadow untuk iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Untuk Android
  },
  nameText: {
    fontWeight: 'bold',
    marginTop: 8,
    color: '#333',
    fontSize: RFPercentage(3), // Menggunakan responsive font size
  },
  counterContainer: {
    flexDirection: 'row',
    paddingVertical: 6,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
   },
   itemContainer:{
     alignItems:'center',
     justifyContent:'center',
   },
   numberText:{
     fontWeight:'bold',
     fontSize: RFPercentage(2.5), // Menggunakan responsive font size
   },
   labelText:{
     color:'gray',
     fontSize: RFPercentage(1.5), // Menggunakan responsive font size
     fontWeight:'bold'
   }
});

export default ProfileHeader;