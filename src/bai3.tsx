import React, { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, StatusBar, View } from 'react-native';
import { setupPlayer, addTrack } from './musicPlayerServices';
import MusicPlayer from './screen/MusicPlayer';

const Bai3 = () => {
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  async function setup() {
    let isSetUp = await setupPlayer();

    if (isSetUp) {
      await addTrack()
    }
    setIsPlayerReady(isSetUp)
  }

  useEffect(() => {
    setup()
  }, [])

  if (!isPlayerReady) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );

  }

  return (
    <View style={{ flex: 1, }}>
      <StatusBar barStyle={"light-content"} />
      <MusicPlayer />
    </View>
  );
};

export default Bai3;
