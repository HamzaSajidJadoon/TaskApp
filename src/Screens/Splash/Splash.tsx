import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  LogBox,
} from 'react-native';

import styles from './SplashStyles'; // Import the styles from the styles file
LogBox.ignoreAllLogs(); //Ignore all log notifications
const Splash = ({navigation}: any) => {
  setTimeout(() => {
    navigation.reset({index: 0, routes: [{name: 'Home'}]});
  }, 2000);

  const go = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <Image
        source={require('../../Assets/Images/splashPoster.png')}
        style={styles.image}
        resizeMode="center"
      />
    </View>
  );
};

export default Splash;
