import React, { useMemo, useRef, useState, useEffect } from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';

import { View, Text } from '../../../common';
import LocationDetailsCarousel from './LocationDetailsCarousel';
import LocationDetailsBottomScroll from './LocationDetailsBottomScroll';
import LocationDetailsContactInfo from './LocationDetailsContactInfo';
import LocationDetailsLocationInfo from './LocationDetailsLocationInfo';
import LocationDetailsName from './LocationDetailsName';
import locationDetailsCustomHandle from './LocationDetailsCustomHandle';
import * as Colors from '../../../config/colors';
import { ScrollView } from 'react-native-gesture-handler';

/* =============================================================================
<LocationDetailsCard />
============================================================================= */
const LocationDetailsCard = ({ onClose, id }) => {
  const bottomSheetRef = useRef(null);
  const { height: SCREEN_HEIGHT } = useWindowDimensions();
  const fullHeight = SCREEN_HEIGHT - 120;
  const snapPoints = useMemo(() => [fullHeight, fullHeight], [fullHeight]);

  const _handleInformationPress = () => {
    bottomSheetRef.current.snapToIndex(1);
  };

  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState({});

  const getLocation = async () => {
    try {
      const response = await fetch('https://app.minfal.nl/api/company', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: id,
        }),
      });
      const json = await response.json();

      setLoading(false);
      setLocation(json);
    } catch (error) {
      console.log(error);
    } finally {
      // setLoading(false);
    }
  }

  useEffect(() => {
    getLocation();
  }, []);

  if (!loading) {
    return (
      <BottomSheet
        ref={bottomSheetRef}
        enablePanDownToClose
        /* Below we call the function that returns a handler function for us*/
        handleComponent={locationDetailsCustomHandle(location)}
        enabledGestureInteraction={true}
        handleIndicatorStyle={styles.handleIndicator}
        backgroundStyle={styles.containerBg}
        snapPoints={snapPoints}
        onClose={onClose}
      >
        <BottomSheetScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.contentContainer}>
            <LocationDetailsName {...location} />
            <LocationDetailsCarousel />
            <LocationDetailsLocationInfo {...location} />
            <LocationDetailsContactInfo />
          </View>
          <LocationDetailsBottomScroll />
        </BottomSheetScrollView>
      </BottomSheet>
    );
  } else {
    return (
      <Text style={{ color: 'red' }}>Kan niet worden geladen</Text>
    );
  }
};

const styles = StyleSheet.create({
  containerBg: {
    backgroundColor: Colors.white,
  },
  contentContainer: {
    flex: 1,
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
