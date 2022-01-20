import React, {useState} from 'react';
import {StyleSheet} from 'react-native';

import {Button, Text, View} from '../../common';

const FilterRatings = ({rating, setRating}) => {
  const [selected, setSelected] = useState('alle');

  const _handleSelected = title => () => {
    setRating(title);
  };
  return (
    <View style={styles.container}>
      <Text lg black>
        Minfal Rating
      </Text>
      <View horizontal>
        <Button
          marginRight={15}
          title="Alle"
          style={styles.ratingBtn}
          bgColor={rating === 'alle' ? undefined : '#fff'}
          onPress={_handleSelected('alle')}
        />
        <Button
          marginRight={15}
          title="Basic"
          style={styles.ratingBtn}
          bgColor={rating === 'basic' ? undefined : '#fff'}
          onPress={_handleSelected('basic')}
        />
        <Button
          title="Plus"
          style={styles.ratingBtn}
          bgColor={rating === 'plus' ? undefined : '#fff'}
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
