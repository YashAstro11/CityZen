// screens/ReportScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";

export default function ReportScreen({ navigation }) {
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Report an Issue</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={24} color="#666" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        {/* Upload Photo */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Upload Photo</Text>
          <TouchableOpacity style={styles.uploadBox}>
            <Ionicons name="camera" size={32} color="#999" />
            <Text style={styles.uploadText}>Tap to take or upload a photo</Text>
          </TouchableOpacity>
        </View>

        {/* Location */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Location</Text>
          <TextInput
            style={styles.input}
            value="Current Location"
            editable={false}
          />
          <Text style={styles.helperText}>Using your current location</Text>
        </View>

        {/* Description */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={[styles.input, { height: 80, textAlignVertical: "top" }]}
            multiline
            placeholder="Describe the issue"
            value={description}
            onChangeText={setDescription}
          />
        </View>

        {/* Category */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Category</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={category}
              onValueChange={(itemValue) => setCategory(itemValue)}
            >
              <Picker.Item label="Select a category" value="" />
              <Picker.Item label="Pothole" value="pothole" />
              <Picker.Item label="Garbage" value="garbage" />
              <Picker.Item label="Streetlight" value="streetlight" />
              <Picker.Item label="Safety Hazard" value="safety" />
              <Picker.Item label="Other" value="other" />
            </Picker>
          </View>
        </View>

        {/* Voice Input Placeholder */}
        <View style={styles.voiceRow}>
          <Ionicons name="mic" size={22} color="#1E88E5" />
          <Text style={{ color: "#666", marginLeft: 10 }}>Voice Input</Text>
        </View>
      </ScrollView>

      {/* Submit Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Submit Report</Text>
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
    marginBottom: 20,
  },
  headerTitle: { fontSize: 20, fontWeight: "700", color: "#1E88E5" },
  formGroup: { marginBottom: 20 },
  label: { fontSize: 14, fontWeight: "500", marginBottom: 8 },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    backgroundColor: "white",
  },
  helperText: { fontSize: 12, color: "#666", marginTop: 5 },
  uploadBox: {
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "#ddd",
    borderRadius: 10,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  uploadText: { marginTop: 10, color: "#999" },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    overflow: "hidden",
  },
  voiceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  button: {
    backgroundColor: "#1E88E5",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    textAlign: "center",
    fontSize: 16,
  },
});
