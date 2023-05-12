import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Notifications from './screens/Notifications';
import Explore from './screens/Explore';
import Profile from './screens/Profile';
import { Feather } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName;


            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Notifications') {
              iconName = 'bell';
            } else if (route.name === 'Explore') {
              iconName = 'search';
            } else if (route.name === 'Profile') {
              iconName = 'user';
            }


            return <Feather name={iconName} size={30} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#2890fa',
          inactiveTintColor: 'gray',
          labelStyle: {
            fontSize: 14,
            fontFamily: 'Helvetica',
            margin: 10
          },
          style: {
            backgroundColor: '#17181c',
          },      
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Notifications" component={Notifications} />
        <Tab.Screen name="Explore" component={Explore} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}





