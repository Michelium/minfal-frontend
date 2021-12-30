import React, {useState} from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

import {Text, View} from '../../common';
import * as Colors from '../../config/colors';

const FilterDistance = () => {
  const [distance, setDistance] = useState([3]);
  const layout = useWindowDimensions();
  return (
    <View style={styles.container}>
      <Text xl black marginBottom={20}>
        Afstand
      </Text>
      <MultiSlider
        min={0}
        max={20}
        enableLabel
        customLabel={CustomLabel}
        values={distance}
        markerOffsetX={4}
        markerOffsetY={2}
        markerStyle={styles.marker}
        containerStyle={styles.sliderContainer}
        sliderLength={layout.width - 50}
        selectedStyle={styles.selectedRange}
        unselectedStyle={styles.unselectedRange}
        onValuesChange={setDistance}
      />
    </View>
  );
};

const CustomLabel = value => {
  const labelStyles = {
    paddingHorizontal: 10,
    paddingVertical: 4,
    bottom: 40,
    borderRadius: 8,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    left:
      value.oneMarkerValue === 19 || value.oneMarkerValue === 20
        ? value.oneMarkerLeftPosition - 59
        : value.oneMarkerLeftPosition - 25,
  };
  return (
    <View style={labelStyles}>
      {value.oneMarkerValue === 19 || value.oneMarkerValue === 20 ? (
        <Text align="center" sm>
          Alle {'\n'} afstanden
        </Text>
      ) : (
        <Text sm>{value.oneMarkerValue} km</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 24,
    paddingHorizontal: 20,
    position: 'relative',
  },
  marker: {
    width: 19,
    height: 19,
    borderWidth: 3,
    borderColor: '#3C513C',
    backgroundColor: Colors.primary,
  },
  sliderContainer: {
    marginTop: 4,
  },
  selectedRange: {
    height: 5,
    borderRadius: 6,
    backgroundColor: Colors.primary,
  },
  unselectedRange: {
    height: 5,
    borderRadius: 6,
    backgroundColor: '#A3AFA3',
  },
});

export default FilterDistance;
