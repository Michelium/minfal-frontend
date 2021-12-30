import React from 'react';
import {StyleSheet} from 'react-native';

import {Text, View} from '../../../common';
import LocationIcon from '../../../assets/icons/edit-location-icon.svg';
import * as Colors from '../../../config/colors';

/* =============================================================================
<LocationDetailsLocationInfo />
============================================================================= */
const LocationDetailsLocationInfo = () => {
  return (
    <View horizontal style={styles.container}>
      <View horizontal flex style={styles.locationNameContainer}>
        <View style={styles.iconContainer}>
          <LocationIcon />
        </View>
        <Text style={styles.locationNameTxt}>
          Johan Cruijff Boulevard600, 1101 DS Amsterdam
        </Text>
      </View>
      <View flex>
        <Text sm black align="right">
          Openingstijden {'\n'} 10:00 - 00:00
        </Text>
        <Text sm success align="right">
          Open
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    // alignItems: 'space-between',
    justifyContent: 'center',
    backgroundColor: '#F6F6F6',
    borderColor: 'rgba(201,201,201, 0.3)',
  },
  locationNameContainer: {
    marginBottom: 10,
  },
  locationNameTxt: {
    fontSize: 12,
    color: '#000',
    marginLeft: 5,
  },
  iconContainer: {
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

/* Export
============================================================================= */
export default LocationDetailsLocationInfo;
