import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import FeedsScreen from './FeedsScreen';
import CalendarScreen from './CalendarScreen';
import SearchScreen from './SearchScreen';

const Tab = createBottomTabNavigator();

// 하단 탭 네비게이션 컴포넌트
function MainTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLevel: 'false',
        tabBarActiveTintColor: '#009688',
      }}>
      <Tab.Screen name="Feeds" component={FeedsScreen} />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
    </Tab.Navigator>
  );
}

export default MainTab;
