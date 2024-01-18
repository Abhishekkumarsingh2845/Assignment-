// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TimeSlotsScreen from './TimeSlotsScreen';
import BookingFormScreen from './BookingFormScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TimeSlots">
        <Stack.Screen name="TimeSlots" component={TimeSlotsScreen} />
        <Stack.Screen name="BookingForm" component={BookingFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
