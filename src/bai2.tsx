import React, { useState } from "react";
import { Alert, Button, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CameraOptions, ImageLibraryOptions, ImagePickerResponse, OptionsCommon, launchCamera, launchImageLibrary } from "react-native-image-picker";


const bai2 = () => {
    const [imageUri, setImageUri] = useState(null);

    const commonOptions: OptionsCommon = {
        mediaType: 'photo',
        maxWidth: 500,
        maxHeight: 500,
    };
    const libraryOptions: ImageLibraryOptions = {
        selectionLimit: 10,
        ...commonOptions,
    }

    const openLibrary = async () => {
        const response: ImagePickerResponse = await launchImageLibrary(libraryOptions);
        if (response.assets && response.assets.length > 0) {
            setImageUri(response.assets[0].uri);
        } else {
            Alert.alert('Lỗi', 'Không có ảnh trong thư viện');
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={openLibrary}>
                <View style={styles.imageContainer}>
                    {imageUri ? <Image source={{ uri: imageUri }} style={styles.image} /> : <Text>No Image</Text>}
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={openLibrary}>
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Select Image from Library</Text>
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

export default bai2;
