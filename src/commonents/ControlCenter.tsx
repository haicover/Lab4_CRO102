import React from "react";
import { View, StyleSheet, Pressable, Animated } from "react-native";
import TrackPlayer, { usePlaybackState, State } from "react-native-track-player";
import Icon from 'react-native-vector-icons/MaterialIcons'

const ControlCenter = () => {
    const playerState = usePlaybackState();
    const [isPlaying, setIsPlaying] = React.useState(false);

    React.useEffect(() => {
        if (playerState === State.Playing) {
            setIsPlaying(true);
        } else {
            setIsPlaying(false);
        }
    }, [playerState]);

    async function skipToNext() {
        await TrackPlayer.skipToNext();
    }

    const skipToPrevious = async () => {
        await TrackPlayer.skipToPrevious()
    }

    const togglePlayback = async () => {
        if (isPlaying) {
            await TrackPlayer.pause();
        } else {
            await TrackPlayer.play();
        }
        setIsPlaying(!isPlaying);
    }

    return (
        <View style={styles.container}>
            <Pressable onPress={skipToPrevious}>
                <Icon style={styles.icon} name="skip-previous" size={60} />
            </Pressable>
            <Pressable onPress={togglePlayback}>
                <Icon style={styles.icon} name={isPlaying ? "pause" : "play-arrow"} size={60} />
            </Pressable>
            <Pressable onPress={skipToNext}>
                <Icon style={styles.icon} name="skip-next" size={60} />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 56,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    icon: {
        color: '#ffffff'
    }
});

export default ControlCenter;
