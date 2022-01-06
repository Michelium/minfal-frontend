import React, {useMemo, useRef, useState, useEffect} from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';

import {View} from '../../../common';
import LocationDetailsCarousel from './LocationDetailsCarousel';
import LocationDetailsBottomScroll from './LocationDetailsBottomScroll';
import LocationDetailsContactInfo from './LocationDetailsContactInfo';
import LocationDetailsLocationInfo from './LocationDetailsLocationInfo';
import LocationDetailsName from './LocationDetailsName';
import LocationDetailsCustomHandle from './LocationDetailsCustomHandle';
import * as Colors from '../../../config/colors';

/* =============================================================================
<LocationDetailsCard />
============================================================================= */
const LocationDetailsCard = ({ onClose, id }) => {
  const bottomSheetRef = useRef(null);
  const { height: SCREEN_HEIGHT } = useWindowDimensions();
  const fullHeight = SCREEN_HEIGHT - 120;
  const snapPoints = useMemo(() => ['60%', fullHeight], [fullHeight]);

  const _handleInformationPress = () => {
    bottomSheetRef.current.snapToIndex(1);
  };

  const [location, setLocation] = useState({});

  const getLocation = async () => {
    try {
      const response = await fetch('https://app.minfal.nl/api/companies/' + id);
      const json = await response.json();
      setLocation(json);
console.log(location)
    } catch (error) {
      console.log(error);
    } finally {
      // setLoading(false);
    }
  }

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <BottomSheet
    ref={bottomSheetRef}
    enablePanDownToClose
    handleComponent={LocationDetailsCustomHandle}
    enabledGestureInteraction={true}
    handleIndicatorStyle={styles.handleIndicator}
    backgroundStyle={styles.containerBg}
    snapPoints={snapPoints}
    onClose={onClose}
    {...location}>
    <BottomSheetScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.contentContainer}>
        <LocationDetailsName {...location}/>
        <LocationDetailsCarousel />
        <LocationDetailsLocationInfo {...location} />
        <LocationDetailsContactInfo />
      </View>
      <LocationDetailsBottomScroll />
    </BottomSheetScrollView>
  </BottomSheet>
  );
};

const styles = StyleSheet.create({
  containerBg: {
    backgroundColor: Colors.white,
  },
  contentContainer: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  handleIndicator: {
    backgroundColor: '#999',
  },
});

/* Export
============================================================================= */
export default LocationDetailsCard;
