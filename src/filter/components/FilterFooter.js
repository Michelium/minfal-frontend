import React, {useState} from 'react';
import {StyleSheet, Switch} from 'react-native';

import {Button, View, Text} from '../../common';
import * as Colors from '../../config/colors';

const FilterFooter = ({opened, setOpened}) => {
  const toggleSwitch = () => setOpened(previousState => !previousState);
  return (
    <View style={styles.container}>
      <View horizontal style={styles.switchContainer}>
        <Text lg black>
          Nu geopend
        </Text>
        <Switch
          value={opened}
          thumbColor={Colors.primary}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          trackColor={{false: Colors.border, true: Colors.primary}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  switchContainer: {
    justifyContent: 'space-between',
  },
});

export default FilterFooter;
