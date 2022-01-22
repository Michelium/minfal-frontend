import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, ActivityIndicator, Text } from 'react-native';
import MapView from 'react-native-maps';
import { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import { Button, View } from '../../common';
import MarkerIcon from './../../assets/icons/edit-map-marker-icon.svg';
import map_styles from './../../config/map_styles';

const HomeMap = ({onMarkerPress, onModalToggle, setCurrentMarker}) => {

  const [markers, setMarkers] = useState([]);

  const getMarkers = async () => {
    try {
      const response = await fetch('https://app.minfal.nl/api/companies', {
        method: 'POST',
      })
      const json = await response.json();

      let tempMarkers = [];
      json.map((marker, index) => {
        if (marker.latitude && marker.longitude) {
          tempMarkers.push({
            id: marker.id,
            title: marker.name,
            description: marker.description,
            lat: parseFloat(marker.latitude),
            long: parseFloat(marker.longitude),
          });
        }
      });
      setMarkers(tempMarkers)
    } catch (error) {
      console.log(error);
    } finally {
      // setLoading(false);
    }
  }

  useEffect(() => {
    getMarkers();
  }, []);

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
        {markers.map((location, index) => (
          <Marker
            key={index}
            onPress={() => {onMarkerPress(); setCurrentMarker(location.id) }}
            coordinate={{
              latitude: location.lat,
              longitude: location.long
            }}
          >
            <MarkerIcon />
          </Marker>
        ))}
      </MapView>
      <Button style={styles.filterBtn} onPress={onModalToggle}>
        <Image
          style={styles.filterBtnImg}
          source={require('../../assets/images/filter-icon.jpeg')}
        />
      </Button>
    </View>
  );
};

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
    bottom: '8%',
    marginRight: 20,
    borderRadius: 75 / 2,
    position: 'absolute',
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(201,201,201, 1)',
  },
  filterBtnImg: {
    width: 60,
    height: 37,
  },
});

export default HomeMap;
