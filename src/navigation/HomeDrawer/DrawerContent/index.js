import React from 'react';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import { LinearGradient } from 'expo-linear-gradient';

import {View} from '../../../common';
import {drawerRef} from '../index';
import DrawerContentLink from './DrawerContentLink';
import AppLogo from '../../../assets/icons/app-logo.svg';
import LocationIcon from '../../../assets/icons/nav-location-icon.svg';
import HelpIcon from '../../../assets/icons/nav-help-icon.svg';
import HandShakeIcon from '../../../assets/icons/nav-handshake-icon.svg';
import BuildingIcon from '../../../assets/icons/nav-building-icon.svg';
import SettingsIcon from '../../../assets/icons/nav-settings-icon.svg';

/* =============================================================================
<DrawerContent />
============================================================================= */
const DrawerContent = () => {
  const navigation = useNavigation();

  const _handleLinkPress = to => {
    if (to === 'HomeDrawer') {
      navigation.navigate(to);
      drawerRef.current.close();
    } else {
      navigation.navigate(to);
    }
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
          to="Filter"
          title="In de buurt"
          icon={<LocationIcon />}
          onPress={_handleLinkPress}
        />
        <DrawerContentLink
          to="HomeDrawer"
          title="Hoe werkt het?"
          icon={<HelpIcon />}
          onPress={_handleLinkPress}
        />
        <DrawerContentLink
          to="HomeDrawer"
          title="Ontwikkelingen Minfal"
          icon={<BuildingIcon />}
          onPress={_handleLinkPress}
        />
        <DrawerContentLink
          to="News"
          title="Partners"
          icon={<HandShakeIcon />}
          onPress={_handleLinkPress}
        />
        <DrawerContentLink
          to="Settings"
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
