import React from 'react';
import {StyleSheet} from 'react-native';

import {Container, StackHeader, Text} from '../../common';
import FilterFoodType from '../components/FilterFoodType';
import FilterDistance from '../components/FilterDistance';
import FilterRatings from '../components/FilterRatings';
import FilterFooter from '../components/FilterFooter';

const FilterScreen = () => {
  return (
    <Container>
      <StackHeader title="In de buurt" />
      <Text xl black style={styles.titleTxt}>
        Filters
      </Text>
      <FilterFoodType />
      <FilterDistance />
      <FilterRatings />
      <FilterFooter />
    </Container>
  );
};

const styles = StyleSheet.create({
  titleTxt: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
});

export default FilterScreen;
