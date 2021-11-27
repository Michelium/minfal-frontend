import React from 'react';
import {StyleSheet, Image} from 'react-native';
import MapView from 'react-native-maps';
import { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

// import {Button, View} from '../../common';
import View from './../../common/View';
import Button from './../../common/Button';
import MarkerIcon from './../../assets/icons/edit-map-marker-icon.svg';
import map_styles from './../../config/map_styles';

const HomeMap = ({selected, setSelected}) => {
  return (
    <View style={styles.mapContainer}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        customMapStyle={map_styles}
        region={{
          latitude: 52.10095646428125,
          longitude: 4.3380762590705,
          latitudeDelta: 1.0922,
          longitudeDelta: 1.0421,
        }}>
        {MAP_MOCK_LOCATIONS.map(location => (
          <Marker
            key={location.id}
            onPress={() => setSelected('info')}
            coordinate={{latitude: location.lat, longitude: location.long}}>
            {/* <MarkerIcon /> */}
          </Marker>
        ))}
      </MapView>
      {selected === 'search' && (
        <Button onPress={() => setSelected('filter')} style={styles.filterBtn}>
          <Image
            style={styles.filterBtnImg}
            source={require('../../assets/images/filter-icon.jpeg')}
          />
        </Button>
      )}
    </View>
  );
};

const MAP_MOCK_LOCATIONS = [
  {
    id: 1,
    long: 67.001137,
    lat: 24.860735,
  },
  {
    id: 2,
    long: 71.001137,
    lat: 24.860735,
  },
  {
    id: 3,
    long: 76.001137,
    lat: 21.860735,
  },
  {
    id: 4,
    long: 74.001137,
    lat: 26.860735,
  },
  {
    id: 5,
    long: 79.001137,
    lat: 36.860735,
  },
  {
    id: 6,
    long: 80.001137,
    lat: 40.860735,
  },
];

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
    overflow: 'hidden',
  },
  map: {
    flex: 1,
  },
  filterBtn: {
    width: 75,
    height: 75,
    right: 0,
    bottom: '16%',
    marginRight: 20,
    borderRadius: 75 / 2,
    position: 'absolute',
    backgroundColor: '#fff',
  },
  filterBtnImg: {
    width: 60,
    height: 37,
  },
});

export default HomeMap;
