import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TelaA from './screens/TelaA';
import TelaB from './screens/TelaB';
import TelaC from './screens/TelaC';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Info') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Perfil') {
              iconName = focused ? 'ios-person' : 'ios-person-outline';
            } else if (route.name === 'Chat') {
              iconName = focused ? 'ios-chatbubbles' : 'ios-chatbubbles-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#ff33cc',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Info" component={TelaA} />
        <Tab.Screen name="Perfil" component={TelaB} />
        <Tab.Screen name="Chat" component={TelaC} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
