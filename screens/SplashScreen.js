import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function SplashScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Logo Container */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/logo.png')} // Replace with your actual logo path
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      
      <Text style={styles.title}>CityZen</Text>
      <Text style={styles.subtitle}>Empowering Citizens, Transforming Cities</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.replace("Onboarding")}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  logoContainer: {
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 20,
  },
  title: { 
    fontSize: 36, 
    color: "#1E88E5", 
    fontWeight: "700", 
    marginBottom: 10,
    letterSpacing: 1,
  },
  subtitle: { 
    fontSize: 16, 
    color: "#666", 
    textAlign: "center", 
    marginBottom: 40,
    paddingHorizontal: 20,
    lineHeight: 22,
  },
  button: { 
    backgroundColor: "#1E88E5", 
    padding: 16, 
    borderRadius: 10, 
    width: "80%",
    shadowColor: "#1E88E5",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  buttonText: { 
    color: "white", 
    textAlign: "center", 
    fontWeight: "600",
    fontSize: 16,
  },
});