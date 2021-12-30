import React, {useRef} from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel, {Pagination} from 'react-native-snap-carousel';

import {Container, Text, View} from '../../common';
import HomeDrawer from '../../navigation/HomeDrawer/index';
import WelcomeIcon from '../../assets/icons/edit-welcome-logo-icon.svg';
import AppLogo from '../../assets/icons/edit-app-logo.svg';

import * as Colors from '../../config/colors';

const WelcomeScreen = ({navigation}) => {
  const carousel = useRef();
  const {width: windowWidth} = useWindowDimensions();

  return (
    <Carousel
      layout={'default'}
      ref={carousel}
      data={[1, 2]}
      sliderWidth={windowWidth}
      itemWidth={windowWidth}
      renderItem={({item}) => <Item item={item} />}
    />
  );
};

const Item = ({item}) => {
  const insets = useSafeAreaInsets();
  const styles = getStyles(insets);

  if (item === 1) {
    return (
      <Container style={styles.container}>
        <View>
          <WelcomeIcon />
          <View>
            <Text style={styles.welcomeTxt}>WELCOME</Text>
            <Text style={styles.descriptionTxt}>To the Minfal App</Text>
          </View>
        </View>
        <View center>
          <Pagination
            dotsLength={2}
            activeDotIndex={0}
            dotStyle={styles.paginationDotActive}
            inactiveDotStyle={styles.paginationDotInactive}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />
          <AppLogo />
        </View>
      </Container>
    );
  }
  return <HomeDrawer />;
};

const getStyles = insets =>
  StyleSheet.create({
    container: {
      paddingTop: insets.top + 100,
      paddingBottom: insets.bottom + 30,
      justifyContent: 'space-between',
    },
    welcomeTxt: {
      fontSize: 40,
      marginTop: 35,
      color: '#000',
      textAlign: 'center',
    },
    descriptionTxt: {
      color: '#000',
      marginTop: -10,
      textAlign: 'center',
    },
    paginationDotActive: {
      width: 12,
      height: 12,
      borderRadius: 12 / 2,
      backgroundColor: Colors.primary,
    },
    paginationDotInactive: {
      width: 20,
      height: 20,
      borderWidth: 2,
      borderRadius: 20 / 2,
      borderColor: Colors.primary,
      backgroundColor: Colors.white,
    },
  });

export default WelcomeScreen;
