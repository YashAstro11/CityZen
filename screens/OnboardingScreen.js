// screens/OnboardingScreen.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function OnboardingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Ionicons name="camera" size={80} color="#1E88E5" style={{ marginBottom: 30 }} />
      <Text style={styles.title}>Report Issues Instantly</Text>
      <Text style={styles.description}>
        Take photos of civic issues and report them with just a few taps.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.replace("Login")}
      >
        <Text style={styles.buttonText}>Continue</Text>
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
    backgroundColor: "white",
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#1E88E5",
    padding: 15,
    borderRadius: 10,
    width: "80%",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 16,
  },
});
