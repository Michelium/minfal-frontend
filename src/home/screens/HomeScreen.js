import React, {useState} from 'react';

import {Button, Container, MapHeader} from '../../common';
import HomeMap from '../components/HomeMap';
import LocationDetailsCard from '../components/LocationDetailsCard/index';
import HomeFilterModal from '../components/HomeFilterModal';
import {Image, StyleSheet} from 'react-native';

/* =============================================================================
<HomeScreen />
============================================================================= */
const HomeScreen = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const _handleShowDetails = () => {
    setShowDetails(!showDetails);
  };

  const _handleModalToggle = () => {
    console.log(modalOpen);
    setModalOpen(!modalOpen);
  };

  return (
    <Container>
      <MapHeader />
      <HomeMap
        onMarkerPress={_handleShowDetails}
        onModalToggle={_handleModalToggle}
      />
      {showDetails && <LocationDetailsCard onClose={_handleShowDetails} />}
      <HomeFilterModal isOpen={modalOpen} onCLose={_handleModalToggle} />
    </Container>
  );
};

/* Export
============================================================================= */
export default HomeScreen;
