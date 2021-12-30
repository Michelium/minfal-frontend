import React from 'react';
import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {Text, View} from '../../../common';
import NewsArticlesItem from './NewsArticlesItem';

const NewsArticles = () => {
  const insets = useSafeAreaInsets();
  const styles = getStyles(insets);
  return (
    <View style={styles.container}>
      <Text xl style={styles.titleTxt}>
        NEWS ARTICLES
      </Text>
      <NewsArticlesItem
        source={require('../../../assets/images/edit-news4.png')}
      />
      <NewsArticlesItem
        source={require('../../../assets/images/edit-news5.png')}
      />
      <NewsArticlesItem
        source={require('../../../assets/images/edit-news3.png')}
      />
      <NewsArticlesItem
        source={require('../../../assets/images/edit-news2.png')}
      />
      <NewsArticlesItem
        source={require('../../../assets/images/edit-news1.png')}
      />
    </View>
  );
};

const getStyles = insets =>
  StyleSheet.create({
    container: {
      paddingBottom: insets.bottom + 20,
    },
    titleTxt: {
      color: '#000',
      marginHorizontal: 20,
      marginBottom: 20,
    },
  });

export default NewsArticles;
