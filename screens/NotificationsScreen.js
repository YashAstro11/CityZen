// screens/NotificationsScreen.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function NotificationsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifications</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Ionicons name="close" size={24} color="#666" />
        </TouchableOpacity>
      </View>

      {/* Notifications List */}
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <View style={styles.notificationItem}>
          <Text style={styles.title}>Your report has been acknowledged</Text>
          <Text style={styles.desc}>
            Pothole on Oak Avenue has been acknowledged by Public Works Department.
          </Text>
          <Text style={styles.time}>Today, 11:30 AM</Text>
        </View>

        <View style={styles.notificationItem}>
          <Text style={styles.title}>Issue resolved near you</Text>
          <Text style={styles.desc}>
            Garbage pileup on Maple Street has been cleared.
          </Text>
          <Text style={styles.time}>Yesterday, 3:45 PM</Text>
        </View>

        <View style={styles.notificationItem}>
          <Text style={styles.title}>Welcome to CityZen!</Text>
          <Text style={styles.desc}>
            Thank you for joining us in making our city better.
          </Text>
          <Text style={styles.time}>Sept 15, 2023</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white", padding: 20 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: { fontSize: 20, fontWeight: "700", color: "#1E88E5" },
  notificationItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  title: { fontSize: 16, fontWeight: "600", marginBottom: 5 },
  desc: { fontSize: 14, color: "#666", marginBottom: 5 },
  time: { fontSize: 12, color: "#999" },
});
