import React, {useState} from 'react';
import {StyleSheet} from 'react-native';

import {Button, Text, View} from '../../common';

const FilterRatings = () => {
  const [selected, setSelected] = useState('basic');

  const _handleSelected = title => () => {
    setSelected(title);
  };
  return (
    <View style={styles.container}>
      <Text xl black>
        Minfal Rating
      </Text>
      <View horizontal>
        <Button
          marginRight={15}
          title="Basic"
          style={styles.ratingBtn}
          bgColor={selected === 'basic' ? undefined : '#fff'}
          onPress={_handleSelected('basic')}
        />
        <Button
          title="Plus"
          style={styles.ratingBtn}
          bgColor={selected === 'plus' ? undefined : '#fff'}
          onPress={_handleSelected('plus')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  ratingBtn: {
    flex: 1,
    borderRadius: 4,
    paddingVertical: 9,
  },
});

export default FilterRatings;
