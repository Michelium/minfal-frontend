import React from 'react';
import {StyleSheet} from 'react-native';

import {Text, Touchable, View} from '../../common';
import * as Colors from '../../config/colors';

const HomeFilterItem = ({icon, title, filter, onPress}) => {
  return (
    <Touchable
      horizontal
      style={[styles.container, filter === title && styles.activeContainer]}
      onPress={() => onPress(title)}>
      <View horizontal>
        {icon}
        <Text
          lg
          style={[styles.titleTxt, filter === title && styles.titleActive]}>
          {title}
        </Text>
      </View>
      <View style={[styles.radio, filter === title && styles.radioActive]}>
        <View style={filter === title && styles.radioSelected} />
      </View>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderColor: Colors.border,
    justifyContent: 'space-between',
    backgroundColor: '#F6F6F6',
  },
  activeContainer: {
    backgroundColor: Colors.primary,
  },
  titleTxt: {
    marginLeft: 10,
    color: Colors.black,
  },
  titleActive: {
    color: Colors.white,
  },
  radio: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderRadius: 20 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.border,
  },
  radioSelected: {
    width: 10,
    height: 10,
    borderRadius: 10 / 2,
    backgroundColor: Colors.white,
  },
  radioActive: {
    borderColor: Colors.white,
  },
});

export default HomeFilterItem;
