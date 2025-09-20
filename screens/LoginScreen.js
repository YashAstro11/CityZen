import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  Animated,
  Easing
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function LoginScreen({ navigation }) {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [phoneFocus, setPhoneFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [scaleValue] = useState(new Animated.Value(1));

  const handleFocus = (setter) => () => {
    setter(true);
    Animated.timing(scaleValue, {
      toValue: 1.02,
      duration: 200,
      easing: Easing.ease,
      useNativeDriver: true
    }).start();
  };

  const handleBlur = (setter) => () => {
    setter(false);
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 200,
      easing: Easing.ease,
      useNativeDriver: true
    }).start();
  };

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {/* Logo Header */}
          <View style={styles.logoContainer}>
            <Image
              source={{ uri: "https://placehold.co/100x100/1E88E5/FFFFFF?text=LT" }}
              style={styles.logo}
            />
            <Text style={styles.header}>Welcome Back</Text>
            <Text style={styles.subheader}>Sign in to continue to your account</Text>
          </View>

          {/* Form Container */}
          <Animated.View style={[styles.formContainer, { transform: [{ scale: scaleValue }] }]}>
            {/* Phone Input */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>
                <Icon name="phone" size={16} color="#1E88E5" /> Phone Number
              </Text>
              <View style={[styles.inputWrapper, phoneFocus && styles.inputFocused]}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your phone number"
                  placeholderTextColor="#aaa"
                  value={phone}
                  onChangeText={setPhone}
                  keyboardType="phone-pad"
                  onFocus={handleFocus(setPhoneFocus)}
                  onBlur={handleBlur(setPhoneFocus)}
                />
                {phone.length > 0 && (
                  <TouchableOpacity onPress={() => setPhone("")} style={styles.clearButton}>
                    <Icon name="close-circle" size={20} color="#ccc" />
                  </TouchableOpacity>
                )}
              </View>
            </View>

            {/* Password Input */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>
                <Icon name="lock" size={16} color="#1E88E5" /> Password
              </Text>
              <View style={[styles.inputWrapper, passwordFocus && styles.inputFocused]}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your password"
                  placeholderTextColor="#aaa"
                  secureTextEntry={secureTextEntry}
                  value={password}
                  onChangeText={setPassword}
                  onFocus={handleFocus(setPasswordFocus)}
                  onBlur={handleBlur(setPasswordFocus)}
                />
                <TouchableOpacity onPress={toggleSecureEntry} style={styles.eyeButton}>
                  <Icon
                    name={secureTextEntry ? "eye-off" : "eye"}
                    size={20}
                    color="#666"
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.forgotPassword}>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>

            {/* Login Button */}
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => navigation.replace("MainTabs")}
            >
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

            {/* Divider */}
            <View style={styles.divider}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>Or</Text>
              <View style={styles.dividerLine} />
            </View>

            {/* OTP Button */}
            <TouchableOpacity style={styles.otpButton}>
              <Icon name="message-text" size={20} color="#1E88E5" />
              <Text style={styles.otpButtonText}>Continue with OTP</Text>
            </TouchableOpacity>
          </Animated.View>

          {/* Sign up link */}
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>
              Don't have an account?{" "}
              <Text
                style={styles.signupLink}
                onPress={() => navigation.replace("Signup")}
              >
                Sign Up
              </Text>
            </Text>
          </View>

          {/* Skip Login */}
          <TouchableOpacity
            style={styles.skipButton}
            onPress={() => navigation.replace("MainTabs")}
          >
            <Text style={styles.skipButtonText}>Skip Login</Text>
          </TouchableOpacity>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    justifyContent: "center",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 20,
    marginBottom: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1E88E5",
    marginBottom: 8,
  },
  subheader: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
  formContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 25,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
    color: "#333",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 55,
  },
  inputFocused: {
    borderColor: "#1E88E5",
    shadowColor: "#1E88E5",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    paddingVertical: 0,
  },
  clearButton: {
    padding: 5,
  },
  eyeButton: {
    padding: 5,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginTop: 10,
  },
  forgotPasswordText: {
    color: "#1E88E5",
    fontSize: 14,
    fontWeight: "500",
  },
  loginButton: {
    backgroundColor: "#1E88E5",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 25,
    shadowColor: "#1E88E5",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  loginButtonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#ddd",
  },
  dividerText: {
    marginHorizontal: 15,
    color: "#666",
    fontWeight: "500",
  },
  otpButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    borderWidth: 2,
    borderColor: "#1E88E5",
    borderRadius: 12,
    gap: 10,
  },
  otpButtonText: {
    color: "#1E88E5",
    fontWeight: "600",
    fontSize: 16,
  },
  signupContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  signupText: {
    color: "#666",
    fontSize: 15,
  },
  signupLink: {
    color: "#1E88E5",
    fontWeight: "600",
  },
  skipButton: {
    alignSelf: "center",
    padding: 16,
  },
  skipButtonText: {
    color: "#666",
    fontWeight: "500",
  },
});