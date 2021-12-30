import React from 'react';
import {Image, ScrollView, StyleSheet} from 'react-native';

import {View, Text} from '../../common';

const NewsSpecial = () => {
  return (
    <View>
      <Text xl style={styles.titleTxt}>
        MINFAL SPECIALS
      </Text>
      <ScrollView
        horizontal
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.img}
            source={require('../../assets/images/edit-news1.png')}
          />
        </View>
        <View style={styles.imgContainer}>
          <Image
            style={styles.img}
            source={require('../../assets/images/edit-news2.png')}
          />
        </View>
        <View style={styles.imgContainer}>
          <Image
            style={styles.img}
            source={require('../../assets/images/edit-news4.png')}
          />
        </View>
        <View style={styles.imgContainer}>
          <Image
            style={styles.img}
            source={require('../../assets/images/edit-news3.png')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  titleTxt: {
    color: '#000',
    marginVertical: 10,
    marginHorizontal: 20,
  },
  scrollView: {
    marginBottom: 20,
  },
  scrollViewContent: {
    paddingHorizontal: 20,
  },
  imgContainer: {
    width: 284,
    height: 209,
    marginRight: 10,
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
});

export default NewsSpecial;
