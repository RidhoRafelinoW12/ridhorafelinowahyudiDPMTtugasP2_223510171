// style/buttonStyles.js
import { StyleSheet } from "react-native";

export const buttonStyles = StyleSheet.create({
 grayOutlinedButton: {
     borderColor: "lightgray",
     borderWidth: 1,
     borderRadius: 4,
     paddingVertical: 10,
     paddingHorizontal: 30,
     backgroundColor:'#fff', // Tambahkan latar belakang putih untuk tombol
     elevation:.5 // Untuk efek bayangan pada Android
 },
 grayOutlinedButtonText: {
     color: "black",
     fontWeight: "700",
     textAlign:'center' // Rata tengah teks dalam tombol
 },
});