import React from 'react';
import {Image, StyleSheet} from 'react-native';

import {Text, View} from '../../../common';
import * as Colors from '../../../config/colors';

/* =============================================================================
<LocationDetailsName />
============================================================================= */
const LocationDetailsName = (name) => {
  return (
    <View horizontal style={styles.titleContainer}>
      <View>
        <Text black xl>
          {name.name}
        </Text>
        <Text sm black>
          Amsterdam Arena
        </Text>
      </View>
      <Image source={require('../../../assets/images/edit-place-logo.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    width: '100%',
    borderRadius: 8,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
  },
});

/* Export
============================================================================= */
export default LocationDetailsName;
