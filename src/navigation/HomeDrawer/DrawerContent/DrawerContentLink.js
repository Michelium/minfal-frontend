import React from 'react';
import {StyleSheet} from 'react-native';

import {Text, Touchable} from '../../../common';

const DrawerContentLink = ({icon, title, to, onPress}) => {
  const _handlePress = () => {
    onPress(to);
  };

  return (
    <Touchable onPress={_handlePress} horizontal style={styles.container}>
      {icon}
      <Text lg style={styles.titleTxt}>
        {title}
      </Text>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 220,
    paddingVertical: 23,
    marginHorizontal: 20,
    borderBottomWidth: 0.2,
    borderBottomColor: '#ffff',
  },
  titleTxt: {
    marginLeft: 9,
  },
});

export default DrawerContentLink;
