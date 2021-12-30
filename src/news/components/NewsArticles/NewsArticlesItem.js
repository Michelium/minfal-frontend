import React from 'react';
import {Image, StyleSheet} from 'react-native';

import {Text, View} from '../../../common';

const NewsArticlesItem = ({source}) => {
  return (
    <View horizontal style={styles.container}>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={source} />
      </View>
      <View>
        <Text sm style={styles.description}>
          Lorem ipsum dolor sit amet, ctetur{'\n'} saing sdaw rwqd sad
        </Text>
        <Text xs black>
          23-01-2020 | 30 min
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    paddingHorizontal: 20,
    alignItems: 'flex-start',
  },
  imgContainer: {
    width: 109,
    height: 76,
    marginRight: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  description: {
    color: '#000',
    flex: 1,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default NewsArticlesItem;
