import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, ImageBackground, TouchableOpacity, TextInput } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground 
        source={{ uri: 'https://cdn.prod.website-files.com/60ccb5b3bd077c65f47edce9/65a03c1d0063353c0b40e7f1_ar23-cover-climate.webp' }} 
        style={styles.backgroundImage}
      >
        <View style={styles.centerContainer}>
          <TextInput style={styles.input} placeholder="Username" placeholderTextColor="black" />
          <TextInput style={styles.input} placeholder="Password" placeholderTextColor="black" secureTextEntry />
        </View>

        <View style={styles.bottomContainer}>
          <Text style={styles.boldText}>Welcome world</Text>
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
    justifyContent: 'space-between',
  },
  centerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '30%',
  },
  input: {
    width: 250,
    height: 40,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    fontSize: 16,
    marginBottom: 15,
  },
  bottomContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  boldText: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'serif',
    marginBottom: 20,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconBackground: {
    backgroundColor: 'orange',
    width: 150,
    height: 60,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App;
