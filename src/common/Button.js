import React from 'react';
import {StyleSheet, Pressable, Text, ActivityIndicator} from 'react-native';

import * as Colors from '../config/colors';

/* =============================================================================
<Button />
============================================================================= */
const Button = ({
  block,
  title,
  style,
  bgColor,
  loading,
  children,
  titleStyle,
  ...props
}) => {
  const backgroundColor = {
    borderWidth: bgColor ? 0.9 : null,
    borderColor: bgColor ? Colors.primary : null,
    backgroundColor: bgColor ? bgColor : Colors.primary,
  };

  return (
    <Pressable
      style={[styles.container, block && styles.block, backgroundColor, style]}
      {...props}>
      {loading ? <ActivityIndicator color={Colors.white} /> : null}
      {!loading && title ? (
        <Text
          style={[styles.title, bgColor ? styles.blackTxt : null, titleStyle]}>
          {title}
        </Text>
      ) : (
        children
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    borderWidth: 1,
    marginVertical: 20,
    paddingVertical: 17,
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'center',
  },
  block: {
    width: '100%',
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    color: Colors.white,
    fontFamily: 'Poppins-Semibold',
  },
  blackTxt: {
    color: Colors.black,
  },
});

/* Export
============================================================================= */
export default Button;
