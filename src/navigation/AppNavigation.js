import React, {createRef, useState} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import ScalingDrawer from 'react-native-scaling-drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DrawerContent from './DrawerContent/index';
import HomeScreen from './../home/screens/HomeScreen';

const Stack = createNativeStackNavigator();

const defaultScalingDrawerConfig = {
  scalingFactor: 0.8,
  minimizeFactor: 0.6,
  swipeOffset: 20,
};

export const drawerRef = createRef();

/* =============================================================================
<AppNavigation />
============================================================================= */
const AppNavigation = () => {
  const [open, setOpen] = useState(false);
  
  const normalView = {
    height: '100%',
    borderRadius: 0,
  };
  const roundedView = {
    height: '100%',
    borderRadius: 15,
    overflow: 'hidden',
  };
  return (
    <NavigationContainer>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ScalingDrawer
        ref={drawerRef}
        content={<DrawerContent drawer={drawerRef} />}
        frontStyle={open ? roundedView : normalView}
        {...defaultScalingDrawerConfig}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </ScalingDrawer>
    </NavigationContainer>
  );
};

/* Export
============================================================================= */
export default AppNavigation;
