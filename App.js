import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import Date from './Components/Date'
import Email from './Components/Email'
import Weather from './Components/Weather';
import Camera from './Components/Camera'
import { width } from '@mui/system';
const image = { uri: "https://i.gifer.com/DND.gif" };
export default function App() {
  return (
    <View style={styles.container}>
   <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.timeview}>
          <Date/>
          <View style={styles.display}>
           <Text style={{justifyContent:'center',color:'white',} }>Hello Welcome To The Display Screen</Text>  
          </View>

      </View>
      <View style={styles.outPutScreen}>
        <Weather/>
      </View>
      <View style={{marginTop:40}}>
        <Email/>
      </View>
    </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  image:{
    height:480,
    width:853
  },
  text:{
    textAlign:'center',
    color:'white'
  },
  display:{
      justifyContent: 'center',
      textAlign:'center',
      alignSelf:'center',
      marginTop:10
  },
  outPutScreen:{
    backgroundColor:'#0F044C',
    width:500,
    height:350,
    opacity:0.6,
    justifyContent: 'center',
    textAlign:'center',
    alignSelf:'center',
    borderRadius:20

  }
});
