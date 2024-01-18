// TimeSlotsScreen.tsx
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const TimeSlotsScreen = ({ navigation }) => {
  const [timeSlots, setTimeSlots] = useState([
    { id: 1, time: '10:00 AM', date: '2022-01-01', available: true },
    { id: 2, time: '02:30 PM', date: '2022-01-01', available: true },
    // Add more time slots as needed
  ]);

  const handleSlotPress = (id) => {
    // Update availability status of the selected time slot
    const updatedSlots = timeSlots.map((slot) =>
      slot.id === id ? { ...slot, available: !slot.available } : slot
    );

    setTimeSlots(updatedSlots);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Available Time Slots</Text>

      {/* Time Slots List */}
      <FlatList
        data={timeSlots}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.slot, { backgroundColor: item.available ? 'white' : 'lightgray' }]}
            onPress={() => handleSlotPress(item.id)}
          >
            <Text>{item.time}</Text>
            <Text>{item.date}</Text>
            <Text>{item.available ? 'Available' : 'Booked'}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Navigate to BookingFormScreen */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('BookingForm')}
      >
        <Text style={styles.buttonText}>Go to Booking Form</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  slot: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default TimeSlotsScreen;
