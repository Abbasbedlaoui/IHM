import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, ImageBackground, TouchableOpacity, TextInput } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Background Image */}
      <ImageBackground 
        source={{ uri: 'https://cdn.prod.website-files.com/60ccb5b3bd077c65f47edce9/65a03c1d0063353c0b40e7f1_ar23-cover-climate.webp' }} 
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        {/* User and Password Input Fields in Center */}
        <View style={styles.centerContainer}>
          <TextInput 
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="gray"
          />
          <TextInput 
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="gray"
            secureTextEntry
          />
        </View>

        {/* Text and Icon at the bottom */}
        <View style={styles.bottomContainer}>
          {/* Bold Text at the Bottom */}
          <Text style={styles.boldText}>Welcome world</Text>
          
          {/* Custom Rectangular Icon with Curved Edges and "Next" Inside */}
          <TouchableOpacity style={styles.iconContainer}>
            <View style={styles.iconBackground}>
              <Text style={styles.iconText}>Next</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'space-between', // Space out elements vertically
  },
  centerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '30%', // Position in the middle of the screen
  },
  input: {
    width: 250,               // Width of the input field
    height: 40,               // Height of the input field
    backgroundColor: 'white', // White background for visibility
    borderColor: 'gray',      // Border color
    borderWidth: 1,           // Border width
    borderRadius: 10,         // Rounded corners for input fields
    paddingLeft: 10,          // Padding inside the input field
    fontSize: 16,             // Font size for the text
    marginBottom: 15,         // Space between input fields
  },
  bottomContainer: {
    alignItems: 'center',  // Center the text and icon horizontally
    marginBottom: 40,      // Add some margin at the bottom
  },
  boldText: {
    fontSize: 28,            // Text size
    color: 'white',          // White text for contrast
    fontWeight: 'bold',      // Bold font
    fontFamily: 'serif',     // Beautiful font (you can replace with any installed font)
    marginBottom: 20,        // Space between the text and the icon
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconBackground: {
    backgroundColor: 'orange',  // Orange background
    width: 150,                 // Icon width (wider for a rectangle)
    height: 60,                 // Icon height (shorter for a rectangle)
    borderRadius: 20,           // Curved edges for rectangle
    justifyContent: 'center',   // Center the text vertically
    alignItems: 'center',       // Center the text horizontally
  },
  iconText: {
    fontSize: 20,               // Text size
    color: 'white',             // White text inside the orange rectangle
    fontWeight: 'bold',         // Bold text
  },
});

export default App;
