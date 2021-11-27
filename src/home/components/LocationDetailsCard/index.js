import React, {useMemo, useRef} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {Image, StyleSheet, useWindowDimensions} from 'react-native';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';

import {Button, InfoBox, Text, View} from '../../../common';
import TagIcon from '../../../assets/icons/edit-tag-icon.svg';
import PlaceLogoIcon from '../../../assets/icons/edit-place-logo-icon.svg';
import InformationIcon from '../../../assets/icons/edit-information-icon.svg';
import LocationIcon from '../../../assets/icons/nav-location-icon.svg';
import PhoneIcon from '../../../assets/icons/edit-phone-icon.svg';
import GlobeIcon from '../../../assets/icons/edit-globe-icon.svg';
import HeartIcon from '../../../assets/icons/nav-heart-icon.svg';
import LocationDetailsCarousel from './LocationDetailsCarousel';
import * as Colors from '../../../config/colors';

/* =============================================================================
<LocationDetailsCard />
============================================================================= */
const LocationDetailsCard = ({onClose}) => {
  const bottomSheetRef = useRef(null);
  const {height: SCREEN_HEIGHT} = useWindowDimensions();
  const fullHeight = SCREEN_HEIGHT - 70;
  const snapPoints = useMemo(() => ['60%', fullHeight], [fullHeight]);

  const _handleInformationPress = () => {
    bottomSheetRef.current.snapToIndex(1);
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      enablePanDownToClose
      enabledGestureInteraction={true}
      handleIndicatorStyle={styles.handleIndicator}
      backgroundStyle={styles.containerBg}
      snapPoints={snapPoints}
      onClose={onClose}>
      <BottomSheetScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          <View horizontal style={styles.titleContainer}>
            <View>
              <Text xxl>Pathé</Text>
              <Text sm>Amsterdam Arena</Text>
            </View>
            <PlaceLogoIcon />
          </View>
          <View horizontal>
            <InfoBox
              textStyles={styles.infoBoxText}
              icon={<TagIcon />}
              message="Acties"
            />
            <InfoBox
              textStyles={styles.infoBoxText}
              icon={<InformationIcon />}
              onPress={_handleInformationPress}
              message="Informatie"
              style={styles.infoBox}
            />
          </View>
          <LocationDetailsCarousel />
          <Button title="Bedrijfsinformatie" />
          <View horizontal>
            <InfoBox
              icon={<LocationIcon />}
              message="Johan Cruijff Boulevard600"
            />
            <View flex>
              <Text align="right">Openingstijden 10:00 - 00:00</Text>
              <Text success align="right">
                Open
              </Text>
            </View>
          </View>
          <View horizontal>
            <InfoBox
              vertical
              textStyles={styles.message}
              message="Bellen"
              icon={<PhoneIcon />}
            />
            <InfoBox
              vertical
              textStyles={styles.message}
              message="website"
              icon={<GlobeIcon />}
            />
            <InfoBox
              vertical
              textStyles={styles.message}
              message="Favorlet"
              icon={<HeartIcon />}
            />
          </View>
          <Text>Foto's</Text>
        </View>
        <ScrollView
          horizontal
          style={styles.scrollView}
          showsHorizontalScrollIndicator={false}>
          <View style={styles.imgContainer}>
            <Image
              style={styles.img}
              source={require('../../../assets/images/sample1.jpg')}
            />
          </View>
          <View style={styles.imgContainer}>
            <Image
              style={styles.img}
              source={require('../../../assets/images/sample2.jpg')}
            />
          </View>
          <View style={styles.imgContainer}>
            <Image
              style={styles.img}
              source={require('../../../assets/images/sample2.jpg')}
            />
          </View>
        </ScrollView>
      </BottomSheetScrollView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  containerBg: {
    backgroundColor: Colors.black,
  },
  contentContainer: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  handleIndicator: {
    backgroundColor: 'rgba(99,99,99,1)',
  },
  titleContainer: {
    width: '100%',
    borderRadius: 8,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    backgroundColor: Colors.primary,
  },
  infoBoxText: {
    fontSize: 18,
  },
  infoBox: {
    marginLeft: 20,
  },
  message: {
    fontSize: 10,
    marginTop: 9,
  },
  scrollView: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  imgContainer: {
    width: 218,
    height: 177,
    marginRight: 10,
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
});

/* Export
============================================================================= */
export default LocationDetailsCard;
