import React from 'react';
import {StyleSheet} from 'react-native';

import Text from './Text';
import View from './View';
import Touchable from './Touchable';
import {drawerRef} from '../navigation/HomeDrawer/index';
import HeartIcon from '../assets/icons/edit-heart-icon.svg';
import MenuIcon from '../assets/icons/edit-menu-icon.svg';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

/* =============================================================================
<MapHeader />
============================================================================= */
const MapHeader = () => {
  const insets = useSafeAreaInsets();
  const styles = getStyles(insets);
  return (
    <View style={styles.container}>
      <Touchable style={styles.btn} onPress={() => drawerRef.current.open()}>
        <MenuIcon fill="red" />
      </Touchable>
      <Text xl>MINFAL</Text>
      <Touchable style={styles.btn}>
        <HeartIcon fill="red" />
      </Touchable>
    </View>
  );
};

const getStyles = insets =>
  StyleSheet.create({
    container: {
      height: insets.top + 70,
      top: 0,
      left: 0,
      right: 0,
      flexDirection: 'row',
      paddingTop: insets.top,
      alignItems: 'center',
      position: 'absolute',
      justifyContent: 'space-between',
      zIndex: 10,
    },
    btn: {
      paddingVertical: 20,
      paddingHorizontal: 20,
    },
  });

export default MapHeader;
