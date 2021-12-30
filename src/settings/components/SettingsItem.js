import React from 'react';
import {Image, StyleSheet} from 'react-native';

import {Touchable, Text, View} from '../../common';
import ChevronRight from '../../assets/icons/edit-chevron-right-icon.svg';

const SettingsItem = ({img, title}) => {
  return (
    <Touchable horizontal style={styles.container}>
      <View horizontal>
        <Image style={styles.img} source={img} />
        <Text style={styles.titleTxt}>{title}</Text>
      </View>
      <ChevronRight />
    </Touchable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
    justifyContent: 'space-between',
  },
  img: {
    width: 35,
    height: 35,
  },
  titleTxt: {
    color: '#000',
    fontSize: 19,
    marginLeft: 13,
  },
});

export default SettingsItem;
