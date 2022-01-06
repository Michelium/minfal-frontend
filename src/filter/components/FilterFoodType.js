import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import {Text, View} from '../../common';
import CinemaIcon from '../../assets/icons/filter-cinema-icon.svg';
import MeatIcon from '../../assets/icons/filter-meat-icon.svg';
import ChessIcon from '../../assets/icons/filter-chess-icon.svg';
import StrawberryIcon from '../../assets/icons/filter-strawberry-icon.svg';
import FishIcon from '../../assets/icons/filter-fish-icon.svg';
import TeaIcon from '../../assets/icons/filter-tea-icon.svg';

import * as Colors from '../../config/colors';

const FilterFoodType = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [items, setItems] = useState([
    {
      label: 'Bioscopen',
      value: 'bioscopen',
      icon: () => <CinemaIcon />,
      containerStyle: styles.itemContainerStyles,
    },
    {
      label: 'Slagers',
      value: 'slagers',
      icon: () => <MeatIcon />,
      containerStyle: styles.itemContainerStyles,
    },
    {
      label: 'Kaasboeren',
      value: 'kaasboeren',
      icon: () => <ChessIcon />,
      containerStyle: styles.itemContainerStyles,
    },
    {
      label: 'Groente-Fruitboeren',
      value: 'groente',
      icon: () => <StrawberryIcon />,
      containerStyle: styles.itemContainerStyles,
    },
    {
      label: 'Visboer',
      value: 'visboer',
      icon: () => <FishIcon />,
      containerStyle: styles.itemContainerStyles,
    },
    {
      label: 'Koffietent',
      value: 'koffietent',
      icon: () => <TeaIcon />,
      containerStyle: styles.itemContainerStyles,
    },
  ]);
  return (
    <View style={styles.container}>
      <Text xl black>
        Food Type
      </Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        style={styles.dropdownContainer}
        arrowIconStyle={styles.dropdownArrow}
        placeholder="Select Food Type"
        dropDownDirection='BOTTOM'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: 20,
    position: 'relative',
    zIndex: 1000,
  },
  dropdownContainer: {
    borderWidth: 1.4,
    backgroundColor: '#fff',
    borderColor: Colors.primary,
    elevation: 1000,
  },
  dropdownArrow: {
    width: 30,
    height: 30,
  },
});

export default FilterFoodType;
