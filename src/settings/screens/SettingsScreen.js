import React from 'react';
import {StyleSheet} from 'react-native';

import {Container, Content, StackHeader} from '../../common';
import SettingsItem from '../components/SettingsItem';

const SettingsScreen = () => {
  return (
    <Container>
      <StackHeader title="Instellingen" />
      <Content containerStyle={styles.contentContainer}>
        <SettingsItem
          title="Plaats"
          img={require('../../assets/images/edit-settings-icon1.png')}
        />
        <SettingsItem
          title="Notificaties"
          img={require('../../assets/images/edit-settings-icon2.png')}
        />
        <SettingsItem
          title="Taal"
          img={require('../../assets/images/edit-settings-icon3.png')}
        />
        <SettingsItem
          title="Feedback"
          img={require('../../assets/images/edit-settings-icon4.png')}
        />
        <SettingsItem
          title="Inloggen voor ondernemers"
          img={require('../../assets/images/edit-settings-icon5.png')}
        />
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    padding: 20,
  },
});

export default SettingsScreen;
