import React from 'react';
import {StyleSheet, Text as RNText} from 'react-native';

import * as Colors from '../config/colors';

/* =============================================================================
<Text />
============================================================================= */
const Text = ({
  xxl,
  xl,
  lg,
  md,
  sm,
  xs,
  style,
  align,
  success,
  children,
  ...props
}) => {
  return (
    <RNText
      style={[
        styles.text,
        xxl && styles.xxl,
        xl && styles.xl,
        lg && styles.lg,
        md && styles.md,
        sm && styles.sm,
        xs && styles.xs,
        align === 'center' && styles.center,
        align === 'left' && styles.left,
        align === 'right' && styles.right,
        success && styles.success,
        success && styles.success,
        style,
      ]}
      {...props}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: Colors.white,
    fontFamily: 'Poppins-Regular',
  },
  xxl: {
    fontSize: 30,
    fontFamily: 'Poppins-Medium',
  },
  xl: {
    fontSize: 27,
    fontFamily: 'Poppins-Medium',
  },
  lg: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
  },
  md: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  sm: {
    fontSize: 14,
  },
  xs: {
    fontSize: 10,
  },
  center: {
    textAlign: 'center',
  },
  left: {
    textAlign: 'left',
  },
  right: {
    textAlign: 'right',
  },
  success: {
    color: Colors.success,
  },
});

/* Export
============================================================================= */
export default Text;
