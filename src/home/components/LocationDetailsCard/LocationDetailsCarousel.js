import React, {useRef, useState} from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

import {Text, View} from '../../../common';
import PopCornIcon from '../../../assets/icons/edit-pop-corn-icon.svg';
import * as Colors from '../../../config/colors';

/* =============================================================================
<LocationDetailsCarousel />
============================================================================= */
const LocationDetailsCarousel = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const {width: windowWidth} = useWindowDimensions();
  const carousel = useRef();
  const _handleSnapToItem = index => {
    setCarouselIndex(index);
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={carousel}
        useScrollView
        layout={'default'}
        data={CAROUSEL_MOCK}
        sliderWidth={windowWidth * 0.8}
        itemWidth={windowWidth * 0.8}
        renderItem={renderItem}
        onSnapToItem={_handleSnapToItem}
      />
      <Pagination
        dotsLength={CAROUSEL_MOCK.length}
        activeDotIndex={carouselIndex}
        dotStyle={styles.paginationDotActive}
        containerStyle={styles.pagination}
        inactiveDotStyle={styles.paginationDotInactive}
        inactiveDotOpacity={1}
        inactiveDotScale={1}
      />
    </View>
  );
};

const renderItem = ({item}) => (
  <View horizontal style={styles.carouselItem}>
    <Text style={styles.carouselItemContent}>{item.message}</Text>
    {item.icon}
  </View>
);

const CAROUSEL_MOCK = [
  {
    id: 1,
    message: 'Neem je Pathé popcornbak mee en ontvang korting op je popcorn!',
    icon: <PopCornIcon />,
  },
  {
    id: 2,
    message: 'Neem je Pathé popcornbak mee en ontvang korting op je popcorn!',
    icon: <PopCornIcon />,
  },
  {
    id: 3,
    message: 'Neem je Pathé popcornbak mee en ontvang korting op je popcorn!',
    icon: <PopCornIcon />,
  },
];

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 40,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.background2,
  },
  pagination: {
    paddingVertical: 15,
  },
  paginationDotActive: {
    width: 12,
    height: 12,
    borderWidth: 1,
    borderRadius: 12 / 2,
    borderColor: Colors.white,
    backgroundColor: Colors.white,
  },
  paginationDotInactive: {
    width: 13,
    height: 13,
    borderWidth: 1,
    borderRadius: 13 / 2,
    borderColor: Colors.background1,
    backgroundColor: Colors.background1,
  },
  carouselItem: {
    justifyContent: 'space-between',
  },
  carouselItemContent: {
    flex: 1,
  },
});

/* Export
============================================================================= */
export default LocationDetailsCarousel;
