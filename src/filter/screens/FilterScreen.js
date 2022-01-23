import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { CommonActions } from '@react-navigation/native';

import { Container, StackHeader, Text, Button, View } from '../../common';
import FilterFoodType from '../components/FilterFoodType';
import FilterDistance from '../components/FilterDistance';
import FilterRatings from '../components/FilterRatings';
import FilterFooter from '../components/FilterFooter';

const FilterScreen = () => {
  const navigation = useNavigation();

  const _handleLinkPress = to => {
    if (to === 'HomeDrawer') {
      navigation.navigate(to);
      drawerRef.current.close();
    } else {
      navigation.navigate(to);
    }
  };

  const [category, setCategory] = useState('alle');
  const [distance, setDistance] = useState([3]);
  const [rating, setRating] = useState('alle');
  const [opened, setOpened] = useState(false);

  return (
    <Container>
      <StackHeader title="In de buurt" />
      <Text xl black style={styles.titleTxt}>
        Filters
      </Text>
      <FilterFoodType category={category} setCategory={setCategory} />
      <FilterDistance distance={distance} setDistance={setDistance} />
      <FilterRatings rating={rating} setRating={setRating} />
      <FilterFooter opened={opened} setOpened={setOpened} />
      <View style={styles.container}>
        <Button
          title="Zoeken"
          onPress={() => {
            navigation.dispatch(
              CommonActions.navigate({
                name: 'List',
                params: {
                  category, distance, rating, opened
                }
              })
            )
          }}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  titleTxt: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
});

export default FilterScreen;