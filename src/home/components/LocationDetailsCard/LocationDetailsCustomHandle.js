import React from 'react';
import {StyleSheet} from 'react-native';

import {Button, Text, View} from '../../../common';
import CinemaIcon from '../../../assets/icons/edit-cinema-icon-large.svg';
import * as Colors from '../../../config/colors';

/* =============================================================================
< />
============================================================================= */
const LocationDetailsCustomHandle = (props) => {
  const {type} = props;

  return (
    <View horizontal style={styles.introContainer}>
    <View style={styles.handler} />
    <View horizontal>
      <CinemaIcon />
      <Text lg style={styles.introTxt}>
        Bioscopen
      </Text>
    </View>
    <Button style={styles.introBtn} title="Basic" />
  </View>
  );
};

const styles = StyleSheet.create({
  introContainer: {
    paddingTop: 10,
    position: 'relative',
    marginHorizontal: -20,
    paddingHorizontal: 35,
    borderTopLeftRadius: 38,
    borderTopRightRadius: 38,
    justifyContent: 'space-between',
    backgroundColor: Colors.primary,
  },
  handler: {
    width: 40,
    height: 5,
    bottom: 70,
    right: 200,
    borderRadius: 20,
    position: 'absolute',
    backgroundColor: '#999',
  },
  introTxt: {
    marginLeft: 10,
  },
  introBtn: {
    paddingVertical: 6,
    borderRadius: 8,
    borderColor: '#fff',
    paddingHorizontal: 20,
    borderWidth: 1,
  },
});

/* Export
============================================================================= */
export default LocationDetailsCustomHandle;
