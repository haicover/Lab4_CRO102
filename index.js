/**
 * @format
 */
import TrackPlayer from 'react-native-track-player';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import bai1 from './src/bai1';
import bai2 from './src/bai2';
import bai3 from './src/bai3';
import {playbackService} from './src/musicPlayerServices';
AppRegistry.registerComponent(appName, () => bai3);

TrackPlayer.registerPlaybackService(() => playbackService);
