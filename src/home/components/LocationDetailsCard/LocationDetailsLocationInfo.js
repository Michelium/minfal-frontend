import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../../../common';
import LocationIcon from '../../../assets/icons/edit-location-icon.svg';
import * as Colors from '../../../config/colors';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

/* =============================================================================
<LocationDetailsLocationInfo />
============================================================================= */
const LocationDetailsLocationInfo = (props) => {

  const { street_name, house_number, postcode, place, periods } = props;

  const [period, setPeriod] = useState({});
  const [loading, setLoading] = useState(true);

  const getPeriods = async () => {
    try {
      const d = new Date();
      const day = d.getDay();

      let period = {};
      if (periods !== undefined) {
        periods.forEach(element => {
          if (element.week_day === day - 1) {
            period = element;
          }
        });
      }

      setPeriod(period);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPeriods();
  }, [periods]);

  function isOpen(startTime, endTime) {
    if (startTime && endTime) {
      let currentDate = new Date()

      let startDate = new Date(currentDate.getTime());
      startDate.setHours(startTime.split(":")[0]);
      startDate.setMinutes(startTime.split(":")[1]);

      let endDate = new Date(currentDate.getTime());
      endDate.setHours(endTime.split(":")[0]);
      endDate.setMinutes(endTime.split(":")[1]);

      return startDate < currentDate && endDate > currentDate
    } else {
      return false;
    }
  }

  if (!loading) {
    return (
      <View horizontal style={styles.container}>
        <View horizontal flex style={styles.locationNameContainer}>
          <View style={styles.iconContainer}>
            <LocationIcon />
          </View>
          <Text style={styles.locationNameTxt}>
            {street_name} {house_number} {'\n'} {postcode} {place}
          </Text>
        </View>
        <View flex>
          <Text sm black align="right">
            Openingstijden {'\n'} {period.open_at} - {period.close_at}
          </Text>
          <Text sm style={{ color: !loading && isOpen(period.open_at, period.close_at) ? 'green' : 'red' }} align="right">
            {!loading && isOpen(period.open_at, period.close_at) ? 'Open' : 'Gesloten'}
          </Text>
        </View>
      </View>
    );
  } else {
    return (
      <Text style={{ color: 'red' }}>Kan niet worden geladen</Text>
    );
  }

};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    // alignItems: 'space-between',
    justifyContent: 'center',
    backgroundColor: '#F6F6F6',
    borderColor: 'rgba(201,201,201, 0.3)',
  },
  locationNameContainer: {
    marginBottom: 10,
  },
  locationNameTxt: {
    fontSize: 12,
    color: '#000',
    marginLeft: 5,
  },
  iconContainer: {
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

/* Export
============================================================================= */
export default LocationDetailsLocationInfo;
