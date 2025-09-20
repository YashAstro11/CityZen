// screens/HomeScreen.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Hello, Yash 👋</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
          <Ionicons name="notifications-outline" size={24} color="#666" />
        </TouchableOpacity>
      </View>

      {/* Welcome Text */}
      <Text style={styles.welcomeText}>What would you like to do today?</Text>

      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        {/* Nearby Reports */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Nearby Reports</Text>
          <Text style={styles.cardDesc}>5 issues reported within 1km of your location</Text>
          <View style={styles.mapContainer}>
            <Ionicons name="location" size={24} color="#1E88E5" />
            <Text style={{ marginLeft: 10, color: "#666" }}>Map View</Text>
          </View>
        </View>

        {/* Recent Reports */}
        <Text style={styles.sectionTitle}>Recent Reports</Text>

        <View style={styles.reportItem}>
          <View style={styles.reportIcon}>
            <Ionicons name="construct" size={20} color="#999" />
          </View>
          <View style={styles.reportContent}>
            <Text style={styles.reportTitle}>Pothole on Main Street</Text>
            <Text style={styles.reportDesc}>500m away • Reported 2 hours ago</Text>
            <Text style={[styles.status, styles.statusPending]}>Pending</Text>
          </View>
        </View>

        <View style={styles.reportItem}>
          <View style={styles.reportIcon}>
            <Ionicons name="trash" size={20} color="#999" />
          </View>
          <View style={styles.reportContent}>
            <Text style={styles.reportTitle}>Garbage Pileup</Text>
            <Text style={styles.reportDesc}>750m away • Reported 1 day ago</Text>
            <Text style={[styles.status, styles.statusProgress]}>In Progress</Text>
          </View>
        </View>
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate("Report")}
      >
        <Ionicons name="add" size={28} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white", padding: 20 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  headerTitle: { fontSize: 20, fontWeight: "700", color: "#1E88E5" },
  welcomeText: { marginBottom: 20, fontSize: 16, color: "#333" },
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    marginBottom: 20,
  },
  cardTitle: { fontWeight: "600", fontSize: 16, marginBottom: 5 },
  cardDesc: { color: "#666", fontSize: 14, marginBottom: 10 },
  mapContainer: {
    height: 120,
    borderRadius: 12,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  sectionTitle: { fontSize: 16, fontWeight: "600", marginBottom: 10 },
  reportItem: { flexDirection: "row", marginBottom: 15 },
  reportIcon: {
    width: 60,
    height: 60,
    backgroundColor: "#eee",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  reportContent: { flex: 1 },
  reportTitle: { fontSize: 16, fontWeight: "600" },
  reportDesc: { color: "#666", marginVertical: 4 },
  status: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 20,
    fontSize: 12,
    fontWeight: "500",
    alignSelf: "flex-start",
  },
  statusPending: { backgroundColor: "#ffebee", color: "#e53935" },
  statusProgress: { backgroundColor: "#fff8e1", color: "#FFB300" },
  fab: {
    position: "absolute",
    bottom: 80,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#1E88E5",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
});
