import React, { useState } from 'react'
import { Dimensions, FlatList, Image, StyleSheet, View } from 'react-native'
import TrackPlayer, { Event, Track, useActiveTrack, useTrackPlayerEvents } from 'react-native-track-player'
import { playListData } from '../constants'
import SongInfo from '../commonents/SongInfo'
import SongSlide from '../commonents/SongSlide'
import ControlCenter from '../commonents/ControlCenter'


const { width } = Dimensions.get('window')

const MusicPlayer = () => {

    const [track, setTrack] = useState<Track | null>()
    useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
        switch (event.type) {
            case Event.PlaybackTrackChanged:
                const playingTrack = await TrackPlayer.getTrack(event.nextTrack)
                setTrack(playingTrack)
                break;
        }
    })
    const renderArtWork = () => {
        return (
            <View style={styles.listArtWrapper}>
                <View style={styles.albumComtainer}>
                    {track?.artwork && (
                        <Image style={styles.albumArtImg} source={{ uri: track?.artwork?.toString() }} />
                    )}
                </View>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                data={playListData}
                renderItem={renderArtWork}
                keyExtractor={song => song.id.toString()} />
            <SongInfo track={track} />
            <SongSlide />
            <ControlCenter />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#001d23',
    },
    listArtWrapper: {
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    albumComtainer: {
        width: 300,
        height: 300,
    },
    albumArtImg: {
        height: '100%',
        borderRadius: 5,
    }
});
export default MusicPlayer
