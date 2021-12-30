import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {Image, StyleSheet} from 'react-native';

import {View} from '../../../common';

/* =============================================================================
<LocationDetailsBottomScroll />
============================================================================= */
const LocationDetailsBottomScroll = () => {
  return (
    <ScrollView
      horizontal
      style={styles.scrollView}
      showsHorizontalScrollIndicator={false}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={require('../../../assets/images/sample1.jpg')}
        />
      </View>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={require('../../../assets/images/sample2.jpg')}
        />
      </View>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={require('../../../assets/images/sample2.jpg')}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  imgContainer: {
    width: 218,
    height: 177,
    marginRight: 10,
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
});

/* Export
============================================================================= */
export default LocationDetailsBottomScroll;
