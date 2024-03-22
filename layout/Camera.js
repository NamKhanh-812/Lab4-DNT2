import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import {Camera} from 'expo-camera'
const Cameraa = () => {
    const [HasPer, setHasPer] = useState(null) 
    const CameraRef = useRef();

    useEffect(() => {
      (async()=>{
        const {status}= await Camera.requestCameraPermissionsAsync();
        setHasPer(status==='granted')
      })()
    }, [])

    const chup = async()=>{
        if(CameraRef.current){
            const photo = await CameraRef.current.takePictureAsync();
            console.log('Ảnh đã được chụp',photo.uri);
        }
    }

  return (
    <View style={styles.container}>
      {HasPer?(<Camera style={styles.camera} ref={CameraRef} type={Camera.Constants.Type.back}/>):
      (<Text>Không có quyền truy cập</Text>)}
      <TouchableOpacity style={styles.captureButton} onPress={chup}>
        <Text style={styles.captureText}>Chụp</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Cameraa

const styles = StyleSheet.create({
    container:{
        height:"100%",
        justifyContent:'center',
        alignItems:'center'
    },
    camera:{
        width:'100%',
        height:'75%'
    },
    captureButton:{
        backgroundColor:'blue',
        padding:10,
        margin:10
    },
    captureText:{
        color:'white',

    }
})