import React from 'react';
import {StyleSheet} from 'react-native';

import {Button, Text, View} from '../../../common';
import CinemaIcon from '../../../assets/icons/edit-cinema-icon-large.svg';
import * as Colors from '../../../config/colors';

// locationDetailsCustomHandle is a function that takes arguments, and returns in turn a new function that uses these arguments.
// Thus, we return a function that we can use as handler in the component, by calling locationDetailsCustomHandle(arguments) we get this function.
// In the component, this will look like: onChangeHandler={locationDetailsCustomHandle(arguments)}.
const locationDetailsCustomHandle = (location) => {
  console.log("This gets called as soon as the component is loaded, in order to set the handler");
  return () => {
    console.log("this gets callend when the handler get's called");
    console.log(location);
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
  }
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
export default locationDetailsCustomHandle;
