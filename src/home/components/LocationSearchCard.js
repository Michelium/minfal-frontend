import React, {useMemo, useRef} from 'react';
import {StyleSheet} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

import {Text, TextInput, View} from '../../common';
import SearchIcon from './../../assets/icons/edit-search-icon.svg';
import * as Colors from '../../config/colors';

const LocationSearchCard = () => {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['13%', '50%'], []);

  const _handleInputPress = () => {
    bottomSheetRef.current.snapToIndex(1);
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      style={styles.container}
      handleIndicatorStyle={styles.handleIndicator}
      backgroundStyle={styles.containerBg}
      snapPoints={snapPoints}>
      <TextInput
        onPress={_handleInputPress}
        containerStyle={styles.input}
        placeholder="Zoek in kaart"
        left={<SearchIcon />}
      />
      <View style={styles.txtContainer}>
        <Text align="center" lg style={styles.text}>
          Geen resultaten
        </Text>
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  containerBg: {
    backgroundColor: Colors.background2,
  },
  container: {
    paddingTop: 15,
    paddingHorizontal: 20,
  },
  handleIndicator: {
    backgroundColor: 'rgba(99,99,99,1)',
  },
  input: {
    padding: 8,
    fontSize: 15,
    borderRadius: 8,
    backgroundColor: 'rgba(99,99,99,0.5)',
  },
  txtContainer: {
    flex: 1,
    marginBottom: 40,
    justifyContent: 'flex-end',
  },
  text: {
    color: Colors.placeholder,
  },
});

export default LocationSearchCard;
