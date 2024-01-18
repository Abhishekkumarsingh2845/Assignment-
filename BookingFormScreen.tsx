// BookingFormScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

const BookingFormScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleFormSubmit = () => {
    // Check if form fields are filled
    if (formData.name && formData.email) {
      Alert.alert('Booking Successful', 'Appointment booked successfully');
    } else {
      Alert.alert('Error', 'Please fill in all fields.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Booking Form</Text>

      {/* Form Inputs */}
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        onChangeText={(text) => setFormData({ ...formData, name: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Your Email"
        onChangeText={(text) => setFormData({ ...formData, email: text })}
      />

      {/* Submit Button */}
      <Button title="Submit" onPress={handleFormSubmit} />

      {/* Navigate back to TimeSlotsScreen */}
      <Button
        title="Go Back to Time Slots"
        onPress={() => navigation.navigate('TimeSlots')}
      />
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default BookingFormScreen;
