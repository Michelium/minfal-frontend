import React from 'react';
import {StyleSheet} from 'react-native';

import {InfoBox, View} from '../../../common';
import PhoneIcon from '../../../assets/icons/edit-phone-icon.svg';
import GlobeIcon from '../../../assets/icons/edit-globe-icon.svg';
import HeartIcon from '../../../assets/icons/nav-heart-icon.svg';

/* =============================================================================
<LocationDetailsContactInfo />
============================================================================= */
const LocationDetailsContactInfo = () => {
  return (
    <View>
      <View horizontal>
        <InfoBox
          vertical
          style={styles.contactBox}
          message="Bellen"
          icon={<PhoneIcon />}
          textStyles={styles.contactTxt}
        />
        <InfoBox
          vertical
          style={styles.contactBox}
          message="website"
          icon={<GlobeIcon />}
          textStyles={styles.contactTxt}
        />
        <InfoBox
          vertical
          style={styles.contactBox}
          message="Favorlet"
          icon={<HeartIcon />}
          textStyles={styles.contactTxt}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contactBox: {
    borderWidth: 1,
    backgroundColor: '#F6F6F6',
    borderColor: 'rgba(201,201,201, 0.3)',
  },
  contactTxt: {
    fontSize: 10,
    color: '#000',
    marginTop: 2,
  },
});

/* Export
============================================================================= */
export default LocationDetailsContactInfo;
