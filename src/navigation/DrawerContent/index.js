import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { LinearGradient } from 'expo-linear-gradient';

import {View} from '../../common';
import DrawerContentLink from '../DrawerContent/DrawerContentLink';
import AppLogo from '../../assets/icons/app-logo.svg';
import LocationIcon from '../../assets/icons/nav-location-icon.svg';
import HelpIcon from '../../assets/icons/nav-help-icon.svg';
import HeartIcon from '../../assets/icons/nav-heart-icon.svg';
import BuildingIcon from '../../assets/icons/nav-building-icon.svg';
import SettingsIcon from '../../assets/icons/nav-settings-icon.svg';

/* =============================================================================
<DrawerContent />
============================================================================= */
const DrawerContent = ({ drawer }) => {
  const navigation = useNavigation();

  const _handleLinkPress = to => {
    navigation.navigate(to);
    drawer.current.close();
  };

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#6A816A', '#3b573b']}
      style={styles.container}>
      <AppLogo />
      <View style={styles.linksContainer}>
        <DrawerContentLink
          to="Home"
          title="In de buurt"
          icon={<LocationIcon />}
          onPress={_handleLinkPress}
        />
        <DrawerContentLink
          to="Home"
          title="Hoe werkt het?"
          icon={<HelpIcon />}
          onPress={_handleLinkPress}
        />
        <DrawerContentLink
          to="Home"
          title="Favorieten"
          icon={<HeartIcon />}
          onPress={_handleLinkPress}
        />
        <DrawerContentLink
          to="Home"
          title="Nieuwe bedrijven!"
          icon={<BuildingIcon />}
          onPress={_handleLinkPress}
        />
        <DrawerContentLink
          to="Home"
          title="Instellingen"
          icon={<SettingsIcon />}
          onPress={_handleLinkPress}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: '#8FB98F',
  },
  linksContainer: {
    marginTop: 80,
  },
});

/* Export
============================================================================= */
export default DrawerContent;
