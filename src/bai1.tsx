import React, { useState } from "react";
import { Alert, Button, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CameraOptions, ImagePickerResponse, OptionsCommon, launchCamera } from "react-native-image-picker";


const bai1 = () => {
    const [imageUri, setImageUri] = useState(null);

    const openCamera = async () => {
        const options: CameraOptions = {
            mediaType: 'photo',
            maxWidth: 500,
            maxHeight: 500,
            saveToPhotos: true,
        };

        launchCamera(options, (response: ImagePickerResponse) => {
            if (response.didCancel) {
                console.log('Người dùng đã hủy bộ chọn hình ảnh');
            } else if (response.errorCode) {
                console.log('Lỗi ImagePicker: ', response.errorMessage);
                Alert.alert("Lỗi", response.errorMessage);
            } else {
                setImageUri(response.assets[0].uri);
            }
        });
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={openCamera}>
                <View style={styles.imageContainer}>
                    {imageUri ? <Image source={{ uri: imageUri }} style={styles.image} /> : <Text>No Image</Text>}
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={openCamera}>
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Chụp hình</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        marginTop: 50,
        width: 200,
        height: 200,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
    },
    image: {
        width: 200,
        height: 200,
    },
    buttonContainer: {
        width: 250,
        backgroundColor: 'orange',
        padding: 10,
        marginTop: 20,
        alignItems: 'center',
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default bai1;
