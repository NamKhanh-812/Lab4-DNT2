import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";

const ChonAnh = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect:[4,4],
            quality: 1,
        });
        console.log(result);
        if (!result.cancelled) {
            setSelectedImage(result.assets[0].uri);
        }
    };

    const cancel = () => setSelectedImage(null)

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: selectedImage }} style={styles.khungAnh} />
            </View>
            <TouchableOpacity style={styles.button} onPress={pickImage}>
                <Text>Chọn ảnh từ thư viện</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={cancel}>
                <Text>Xoá ảnh đã chọn</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageContainer: {
        height: 300, // Chiều cao cố định của View chứa ảnh
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        marginVertical: 10,
        backgroundColor: 'yellow',
        padding: 15,
        borderRadius: 5
    },
    khungAnh: {
        borderRadius: 5,
        borderWidth: 2,
        resizeMode:"contain",
        height: '100%', // Chiều cao của ảnh sẽ bằng với chiều cao của View chứa nó
        width: '100%',
        borderColor: 'black'
    }
});

export default ChonAnh;