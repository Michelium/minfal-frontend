import React from 'react';
import {StyleSheet} from 'react-native';

import Text from './Text';
import View from './View';
import Touchable from './Touchable';
import * as Colors from '../config/colors';

const AlertMessage = ({
  message,
  icon,
  style,
  textStyles,
  vertical,
  onPress,
}) => {
  return (
    <Touchable
      onPress={onPress}
      style={[styles.container, style, vertical ? styles.vertical : null]}>
      <View style={styles.iconContainer}>{icon}</View>
      <Text sm style={[!vertical && styles.message, textStyles]}>
        {message}
      </Text>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 4,
    marginVertical: 15,
    paddingVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: 'rgba(94, 121, 94, 0.2)',
  },
  vertical: {
    flexDirection: 'column',
    marginHorizontal: 10,
  },
  iconContainer: {
    width: 38,
    height: 38,
    borderRadius: 38 / 2,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    marginLeft: 10,
  },
});

export default AlertMessage;
