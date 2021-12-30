import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/core';
import {StyleSheet} from 'react-native';

import View from './View';
import Text from './Text';
import Touchable from './Touchable';
import ChevronLeftIcon from '../assets/icons/edit-chevron-left-icon.svg';
import * as Colors from '../config/colors';

/* =============================================================================
<StackHeader />
============================================================================= */
const StackHeader = ({title}) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const styles = getStyles(insets);

  const _handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Touchable style={styles.backBtn} onPress={_handleBack}>
        <ChevronLeftIcon />
      </Touchable>
      <Text xl style={styles.title}>
        {title}
      </Text>
      <View style={styles.backBtn} />
    </View>
  );
};

const getStyles = insets =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      height: insets.top + 80,
      alignItems: 'center',
      backgroundColor: Colors.primary,
      justifyContent: 'space-between',
    },
    backBtn: {
      zIndex: 2,
      height: '100%',
      paddingBottom: 20,
      paddingHorizontal: 20,
      paddingVertical: insets.top + 35,
    },
    title: {
      paddingTop: insets.top + 15,
    },
  });

export default StackHeader;
