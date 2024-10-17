import React, {useState} from "react";
import {Text, View, StyleSheet, Image, Button, TouchableOpacity, Alert, Pressable, Platform} from 'react-native'
import ImageSource from '../assets/images/icon.png'
import * as ImagePicker from 'expo-image-picker'
import * as Sharing from 'expo-sharing'

 const App = () => {

  const [selectedImage, setSelectedImage] = useState(ImageSource)

  let openImagePickerAsync= async () => {
    let permissionsResult = await ImagePicker.requestMediaLibraryPermissionsAsync()

    if (permissionsResult.granted == false){
      alert('Permission to access camera is required');
      return; 
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync()
    if (pickerResult.canceled === true){
      return;
    }    
    setSelectedImage({uri:pickerResult.assets[0].uri})
  }

  const shareImage = ()=>{
    Sharing.shareAsync(selectedImage)
  }

  const getPlatformText = ()=>{
    switch(Platform.OS){
      case "web":
        return "the web";
      case "android":
        return "android";
    }
  }


  return <View style={styles.container}>
    <Image
     source={selectedImage}
     style={styles.image}
    />
      <Text style={styles.title} >Hello WOrld!</Text>
      <Pressable onPress={selectedImage==ImageSource ? openImagePickerAsync:shareImage}><Text>{selectedImage==ImageSource ? "SelectImage":"Share"}</Text></Pressable>
      <Text>Sharer for {getPlatformText()}</Text>
    </View> 

 }

const styles = StyleSheet.create({
  container: {flex:1, justifyContent: "center" ,alignItems: "center"},
  title: {color:"red", fontWeight:"100"},
  image: { width:300 , height:200}
})

 export default App