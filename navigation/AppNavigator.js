import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from 'PlayMateMobile/pages/HomePage.js';
import ProfilePage from '../components/ProfilePage';
import ExplorePage from '../components/ExplorePage';
import NotificationsPage from '../components/NotificationsPage'; 

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator initialRouteName="HomePage">
    <Stack.Screen name="HomePage" component={HomePage} />
    <Stack.Screen name="ProfilePage" component={ProfilePage} />
    {/* Add more screens as needed */}
  </Stack.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Explore" component={ExplorePage} />
      <Tab.Screen name="Notifications" component={NotificationsPage} />
      <Tab.Screen name="Profile" component={ProfilePage} />
      {/* Add more tabs like Messages, Search, etc. */}
    </Tab.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
