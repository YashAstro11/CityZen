// screens/ProfileScreen.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Ionicons name="close" size={24} color="#666" />
        </TouchableOpacity>
      </View>

      {/* Profile Info */}
      <View style={styles.profileSection}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>Y</Text>
        </View>
        <Text style={styles.name}>Yash</Text>
        <Text style={styles.phone}>+91 98765 43210</Text>
      </View>

      {/* Stats Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>My Stats</Text>
        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={[styles.statValue, { color: "#1E88E5" }]}>12</Text>
            <Text style={styles.statLabel}>Reports</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={[styles.statValue, { color: "#43A047" }]}>8</Text>
            <Text style={styles.statLabel}>Resolved</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={[styles.statValue, { color: "#FB8C00" }]}>4</Text>
            <Text style={styles.statLabel}>In Progress</Text>
          </View>
        </View>
      </View>

      {/* Buttons */}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.outlineButton}>
          <Text style={styles.outlineText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.outlineButton}>
          <Text style={styles.outlineText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.outlineButton}
          onPress={() => navigation.replace("Login")}
        >
          <Text style={styles.outlineText}>Logout</Text>
        </TouchableOpacity>
      </View>
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
  profileSection: { alignItems: "center", marginBottom: 30 },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#1E88E5",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  avatarText: { fontSize: 32, color: "white", fontWeight: "700" },
  name: { fontSize: 22, fontWeight: "700", marginBottom: 5 },
  phone: { fontSize: 14, color: "#666", marginBottom: 20 },
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
  cardTitle: { fontSize: 16, fontWeight: "600", marginBottom: 15 },
  statsRow: { flexDirection: "row", justifyContent: "space-around" },
  statBox: { alignItems: "center" },
  statValue: { fontSize: 22, fontWeight: "700" },
  statLabel: { fontSize: 14, color: "#666" },
  actions: { marginTop: 10 },
  outlineButton: {
    borderWidth: 2,
    borderColor: "#1E88E5",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  outlineText: {
    textAlign: "center",
    color: "#1E88E5",
    fontWeight: "600",
    fontSize: 16,
  },
});
