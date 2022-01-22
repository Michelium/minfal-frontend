import React from 'react';
import {Image, StyleSheet} from 'react-native';

import {Text, View} from '../../../common';
import * as Colors from '../../../config/colors';

/* =============================================================================
<LocationDetailsName />
============================================================================= */
const LocationDetailsName = (props) => {

  const {name, location_name, logo} = props;

  const imageUrl = {uri: 'https://app.minfal.nl/uploads/images/' + logo};

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
      <Image source={imageUrl} style = {{width: 60, height: 60, resizeMode : 'contain', margin: 5, flex: 1, alignItems: 'flex-end' }}/>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    width: '100%',
    borderRadius: 8,
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
  },
});

/* Export
============================================================================= */
export default LocationDetailsName;
