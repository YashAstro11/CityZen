// screens/MyReportsScreen.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function MyReportsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Reports</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Ionicons name="close" size={24} color="#666" />
        </TouchableOpacity>
      </View>

      {/* Reports List */}
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <View style={styles.reportItem}>
          <View style={styles.reportIcon}>
            <Ionicons name="construct" size={22} color="#999" />
          </View>
          <View style={styles.reportContent}>
            <Text style={styles.reportTitle}>Pothole on Oak Avenue</Text>
            <Text style={styles.reportDesc}>Submitted: Today, 10:23 AM</Text>
            <Text style={[styles.status, styles.statusPending]}>Pending</Text>
          </View>
        </View>

        <View style={styles.reportItem}>
          <View style={styles.reportIcon}>
            <Ionicons name="bulb" size={22} color="#999" />
          </View>
          <View style={styles.reportContent}>
            <Text style={styles.reportTitle}>Streetlight Outage</Text>
            <Text style={styles.reportDesc}>Submitted: Yesterday, 8:45 PM</Text>
            <Text style={[styles.status, styles.statusProgress]}>In Progress</Text>
          </View>
        </View>

        <View style={styles.reportItem}>
          <View style={styles.reportIcon}>
            <Ionicons name="trash" size={22} color="#999" />
          </View>
          <View style={styles.reportContent}>
            <Text style={styles.reportTitle}>Garbage Pileup</Text>
            <Text style={styles.reportDesc}>Submitted: Sept 12, 2023</Text>
            <Text style={[styles.status, styles.statusResolved]}>Resolved</Text>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Tabs */}
      {/* <View style={styles.navTabs}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("Home")}
        >
          <Ionicons name="home" size={22} color="#666" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.navItem, styles.navActive]}>
          <Ionicons name="list" size={22} color="#1E88E5" />
          <Text style={[styles.navText, { color: "#1E88E5" }]}>My Reports</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="map" size={22} color="#666" />
          <Text style={styles.navText}>Map</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("Profile")}
        >
          <Ionicons name="person" size={22} color="#666" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View> */}
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
  statusResolved: { backgroundColor: "#e8f5e9", color: "#43A047" },
  navTabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    borderTopWidth: 1,
    borderColor: "#eee",
    paddingVertical: 12,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: { alignItems: "center" },
  navActive: {},
  navText: { fontSize: 12, color: "#666", marginTop: 4 },
});
