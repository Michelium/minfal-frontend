import React from 'react';
import {Image, StyleSheet} from 'react-native';

import {Text, View} from '../../../common';
import * as Colors from '../../../config/colors';

/* =============================================================================
<LocationDetailsName />
============================================================================= */
const LocationDetailsName = (props) => {

  const {name, location_name} = props;

  return (
    <View horizontal style={styles.titleContainer}>
      <View>
        <Text black xl>
          {name}
        </Text>
        <Text sm black>
          {location_name}
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
