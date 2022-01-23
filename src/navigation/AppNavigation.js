import React, {createRef} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeDrawer from './HomeDrawer/index';
import FilterScreen from '../filter/screens/FilterScreen';
import SettingsScreen from '../settings/screens/SettingsScreen';
import NewsScreen from '../news/screens/NewsScreen';
import WelcomeScreen from '../welcome/screens/WelcomeScreen';
import ListScreen from '../home/screens/ListScreen';

const Stack = createNativeStackNavigator();

export const drawerRef = createRef();

/* =============================================================================
<AppNavigation />
============================================================================= */
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="HomeDrawer" component={HomeDrawer} />
        <Stack.Screen name="Filter" component={FilterScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="News" component={NewsScreen} />
        <Stack.Screen name="List" component={ListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

/* Export
============================================================================= */
export default AppNavigation;
