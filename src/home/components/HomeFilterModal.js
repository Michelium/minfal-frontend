import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import Modal from 'react-native-modal';

import {Button, Card, Text, View} from '../../common';
import HomeFilterItem from './HomeFilterItem';
import CinemaIcon from '../../assets/icons/filter-cinema-icon.svg';
import MeatIcon from '../../assets/icons/filter-meat-icon.svg';
import ChessIcon from '../../assets/icons/filter-chess-icon.svg';
import StrawberryIcon from '../../assets/icons/filter-strawberry-icon.svg';
import FishIcon from '../../assets/icons/filter-fish-icon.svg';
import TeaIcon from '../../assets/icons/filter-tea-icon.svg';
import * as Colors from '../../config/colors';

const HomeFilterModal = ({setSelected}) => {
  const [filter, setFilter] = useState('Bioscopen');

  const _handleClose = () => {
    setSelected('search');
  };

  return (
    <Modal
      isVisible={true}
      onBackButtonPress={_handleClose}
      onBackdropPress={_handleClose}>
      <Card style={styles.card}>
        <Text xl style={styles.headingTxt}>
          FILTERS
        </Text>
        <HomeFilterItem
          icon={<CinemaIcon />}
          title="Bioscopen"
          filter={filter}
          onPress={setFilter}
        />
        <HomeFilterItem
          icon={<MeatIcon />}
          title="Slagers"
          filter={filter}
          onPress={setFilter}
        />
        <HomeFilterItem
          icon={<ChessIcon />}
          title="Kaasboeren"
          filter={filter}
          onPress={setFilter}
        />
        <HomeFilterItem
          icon={<StrawberryIcon />}
          title="Groente-Fruitboeren"
          filter={filter}
          onPress={setFilter}
        />
        <HomeFilterItem
          icon={<FishIcon />}
          title="Visboer"
          filter={filter}
          onPress={setFilter}
        />
        <HomeFilterItem
          icon={<TeaIcon />}
          title="Koffietent"
          filter={filter}
          onPress={setFilter}
        />
        <View center>
          <Button
            title="Select"
            style={styles.selectBtn}
            onPress={_handleClose}
          />
        </View>
      </Card>
    </Modal>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headingTxt: {
    marginBottom: 20,
    textAlign: 'center',
    color: Colors.primary,
  },
  selectBtn: {
    borderRadius: 6,
    paddingVertical: 13,
    paddingHorizontal: 56,
  },
});

export default HomeFilterModal;
