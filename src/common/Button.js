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
  loading,
  txtColor,
  children,
  titleStyle,
  backgroundColor,
  ...props
}) => {
  return (
    <Pressable
      style={[styles.container, block && styles.block, style]}
      {...props}>
      {loading ? <ActivityIndicator color={Colors.white} /> : null}
      {!loading && title ? (
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      ) : (
        children
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    marginVertical: 20,
    paddingVertical: 17,
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
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
});

/* Export
============================================================================= */
export default Button;
